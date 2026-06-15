---
name: add-trip
description: Interactive wizard to onboard a new trip into the itineraries data. Queries Apple Photos first to build a skeleton of the trip from GPS clusters, then interviews the user to enrich each stop, selects images, drafts prose, and writes the TypeScript data entries.
user-invocable: true
---

You are onboarding a new travel itinerary into this publication. Work through the phases below in order. Never skip phases. Keep the tone of your questions conversational and specific — you are a meticulous editor helping a writer remember and structure what they actually did, not filling out a form.

---

## Phase 0 — Ground the model

Before asking the user anything, do all of these:

1. Read `src/app/itineraries/itinerary.model.ts` — internalize every field, type, and constraint. Know what `mapGrouping`, `walkingKm`, `tip`, `bookAhead`, and `daypart` mean.
2. Read `src/app/itineraries/itineraries.data.ts` — study the **"Hong Kong in four days"** entry as the canonical example. Note:
   - Entry rhythm: stop → leg → stop → leg → stop, alternating
   - `body` prose: one short paragraph, past tense, first person, specific and concrete — no superlatives, no atmosphere for its own sake. Written like a knowledgeable friend.
   - `time` fields are 24h clocks keyed to map pins, not displayed as labels
   - Legs carry the *practical* transit detail (route name, note with useful extra)
   - `mapGrouping` clusters the day's stops into spatial groups that make sense geographically (e.g. by area of the city visited)
   - `tip` is optional, used sparingly — only when there is a genuinely non-obvious practical insight
   - `bookAhead` is only `true` when advance booking is actually required or strongly advised
3. Read `src/app/itineraries/stop-coordinates.ts` — note the key structure: `itinerary-slug → day-slug → stop-time → [lat, lon]`
4. Read `PRODUCT.md` and `DESIGN.md` — absorb the voice ("practical, trustworthy, specific") and the anti-patterns (no superlatives, no SEO sludge, no "best of" framing)

Only after completing these reads, proceed to Phase 1.

---

## Phase 1 — Trip basics

Ask the following in a single message (group naturally, not as a numbered list):

- Where was the trip? (city, country)
- What should the itinerary be titled? (Suggest a format like "Tokyo in three days" if they don't have one)
- How long was the trip? (number of days)
- What were the exact travel dates? (needed to query Apple Photos — ask for start and end date in YYYY-MM-DD)
- What was the pace: relaxed, steady, or full?
- Who did they travel with? (e.g. "solo", "a friend", "friends", "partner", "family")
- Where did they stay? (neighbourhood/area — this usually anchors the opening of the `intro`)
- How did they get around? (dominant transit mode — feeds the `intro`)

Once you have answers, derive:
- `slug`: kebab-case from title (e.g. "tokyo-in-three-days")
- `city` and `country`
- Image prefix: short abbreviation, e.g. "tok" for Tokyo, "bkk" for Bangkok (confirm with user)

Tell the user the slug and prefix you've chosen and ask them to confirm before continuing.

---

## Phase 2 — Photos reconnaissance

Before asking the user anything about their days, do a full pass of Apple Photos to understand the shape of the trip. This gives you a skeleton to work from rather than starting cold.

### Step 2a — Install osxphotos if needed

```bash
python3 -c "import osxphotos" 2>/dev/null || pip3 install osxphotos
```

### Step 2b — Query all geotagged photos in the trip date range

```bash
osxphotos query --json --from-date YYYY-MM-DD --to-date NEXT-DAY --location 2>/dev/null
```

Note: use the day *after* the last travel date as `--to-date` — the upper bound is exclusive.

This returns a JSON array of photo objects. Each has:
- `filename` — original filename
- `date` — ISO timestamp
- `latitude`, `longitude` — GPS coordinates
- `place_names` — reverse-geocoded place hierarchy (country → region → city → POI name)
- `path` — path to the original file on disk
- `uuid` — unique identifier (needed later for derivative lookup)
- `ismissing` — whether the original is in iCloud rather than local

Parse the output and:
1. Group photos by calendar day using `date`
2. Within each day, cluster by GPS proximity (~200m radius) in chronological order
3. For each cluster, note: approximate time range, centroid coordinates, place names if available, photo count, representative UUIDs

### Step 2c — Present the skeleton to the user

Share what you found, day by day, as a structured read-back — not a form, but a narrative summary:

> "From your photos I can see you were in [City] on [date]. It looks like:
> - Around [time]: [N] photos near [place or coordinates] — [place_names hint if available]
> - Around [time]: [N] photos near [place or coordinates]
> - …
>
> Does that match what you remember? I'll use this as the starting point."

Ask the user to confirm the list is roughly right before moving on. If place_names are empty or ambiguous, note the coordinates and ask the user to identify the location.

---

## Phase 3 — Day-by-day interview

Now work through each day using the photo skeleton as a scaffold. You already know *where* the user was; this phase is about understanding *what happened* at each place.

For each day, open with the photo-derived stop list rather than a blank question:

> "Day [N] — you had [N] stops from your photos. Let me go through them:
>
> **[Place name or coordinates]** around [time] — what were you doing here? Anything memorable?"

Work through each cluster in order. For each:
- Confirm or correct the place name/title
- Ask what they did or saw there — one open question, then follow up only if needed
- Ask if they needed to book in advance, or walk-in was fine
- Ask if there are any photo clusters between stops that they want to add as a stop, or skip as transit

If a cluster has no recognisable place name from reverse geocoding, show the coordinates and ask: "I can see [N] photos around [lat, lon] — do you remember what this was?"

**At the end of each day, ask:**
- "What's a one-line title for this day? (e.g. 'Harbour, Central, and the Peak')"
- Draft a one-paragraph summary of the day's arc from what they've told you, and ask them to react to it.

Do not move on to the next day until the current day's stops are confirmed with titles and at least rough times.

### Coordinate extraction from Google Maps links

When the user provides a Google Maps link, extract coordinates immediately:

```bash
curl -Ls -o /dev/null -w "%{url_effective}" "MAPS_URL_HERE" 2>/dev/null
```

Parse the `@lat,lon` from the resolved URL (e.g. `@22.2809,114.1598` → `[22.2809, 114.1598]`). If it doesn't resolve, ask for the full URL from the address bar.

Accumulate all coordinates into the `STOP_COORDS` structure as you go. Photo-derived cluster centroids fill in any stops without a Maps link.

---

## Phase 4 — Image selection

You already have all photo metadata from Phase 2. For each image slot, pull candidates from the relevant cluster and show them to the user.

Slots needed:
- **Hero** (`hero`): wide landscape, 1024×768 — the single image that defines the trip. Usually a striking view: a harbour, a skyline, a landmark. Ask the user: "What's the most iconic single image from the whole trip?"
- **Day header** (`days[n].image`): one per day. Landscape preferred, 1280×1706 or 1024×768. Should capture the day's arc.
- **Stop image** (`stop.image`): optional per stop. Portrait preferred (768×1024 or 960×1280). The most visually interesting moment at that stop.

For each slot, export the candidates as previews so the user can see them, then ask which one they want. Do this stop by stop — don't dump all candidates at once.

**Naming convention for exported images:**
- Hero: `{prefix}-hero-{shortname}` (e.g. `tok-hero-shinjuku`)
- Day header: `{prefix}-day-{shortname}` (e.g. `tok-day-senso-ji`)
- Stop: `{prefix}-stop-{shortname}` (e.g. `tok-stop-ramen`)

Ask the user to confirm or adjust each name.

### Export and resize

For each selected photo, export to the correct size using `sips`. If the photo is missing locally (`ismissing: True`), use the derivative cache instead of the original — find it at `resources/derivatives/{first-char-of-UUID}/{UUID}*_1_105_c.jpeg` inside the Photos library bundle.

```bash
# For local originals:
sips -s format jpeg "SOURCE_PATH" --out "/Users/bobchen/WebstormProjects/itineraries/public/images/{srcBase}-{width}.jpg"

# For iCloud derivatives (convert then resize if needed):
sips -s format jpeg "DERIVATIVE_PATH" --out /tmp/converted.jpg
sips -Z LONGEST_DIM /tmp/converted.jpg --out "/Users/bobchen/WebstormProjects/itineraries/public/images/{srcBase}-{width}.jpg"
```

Target longest dimension by slot:
- **Hero (landscape):** `-Z 1024` (targets ~1024×768)
- **Day header (portrait):** `-Z 1706` (targets ~1280×1706)
- **Stop portrait:** `-Z 1024` (targets ~768×1024)

After exporting, always check actual output dimensions:
```bash
sips -g pixelWidth -g pixelHeight "/path/to/exported.jpg"
```

Use the actual pixel values for `width` and `height`. Name the file `{srcBase}-{actualWidth}.jpg`.

**For each exported image, draft the `alt` text** (specific: foreground, background, time of day) and a one-sentence `caption` (present tense, grounded in the moment). Share drafts with the user and ask them to react.

---

## Phase 5 — Draft prose

Now draft the text fields that need editorial judgment:

**`tagline`** (one sentence, goes in meta description):
- Concrete, specific, honest. Names the things. No superlatives.
- Model: "Four days from Kennedy Town to Macau and back — morning swims, Disneyland fireworks, zip lining in Cotai and the Peak after dark."
- Draft one, share with user, iterate once.

**`intro`** (2–3 sentences, opening prose):
- Where they stayed, how they got around, overall tone of the trip. First person.
- Model: "I stayed in Kennedy Town, the island's quiet western end, and got around on an Octopus card: the MTR, buses, one international ferry to Macau, and the Star Ferry more times than expected."
- Draft one, share with user, iterate once.

**Stop `body` texts** (one paragraph each):
- For each stop without body text yet, draft based on what the user told you.
- Past tense, first person, specific and concrete. No "vibrant", "bustling", "amazing", "hidden gem". Name the actual thing.
- Keep to 2–4 sentences. If the user gave you rich detail, use it.
- Share each draft and ask for a thumbs up or corrections.

**Day `summary`** (one longer sentence or two, the arc of the day):
- Enumerate the key beats in order. Specific. Should make the reader feel the shape of the day.
- Model: "Two rival bakeries on Lyndhurst Terrace for a late start, then the MTR all the way out to Lantau for a full day at Disneyland through the fireworks, and a late dinner at Paradise Dynasty in Mong Kok."

---

## Phase 6 — mapGrouping

For each day with more than ~4 stops, decide on `mapGrouping`. This controls how the day map clusters pins spatially.

Look at the coordinates you have for each stop and mentally (or literally) group them by geographic proximity and/or the time of day the user was there. The groups should reflect "I was in this area of the city then, then moved to this other area."

Ask: "Looking at Day [X], it seems like you were in [area A] in the morning, then [area B] in the afternoon. Does that make sense as two map clusters, or did you pass through somewhere else in between?"

Format: `mapGrouping: [['08:00', '10:30', '12:30'], ['14:30', '17:00'], ['19:00', '21:30']]`
Each inner array is a group of stop times that appear together on one map cluster.

---

## Phase 7 — Generate TypeScript

Now generate the code. Produce two things:

### 6a — The Itinerary object

Produce a complete `Itinerary` object literal, ready to be appended to the `ITINERARIES` array in `src/app/itineraries/itineraries.data.ts`.

Follow these rules exactly:
- Match the exact shape of the "Hong Kong in four days" entry — every field in the same order
- `slug` must be the confirmed slug from Phase 1
- Entries are **stops only** — omit transport legs entirely
- Every stop has `time`, `title`, and `body`; omit `durationMin`
- `image` objects include `srcBase`, `width`, `height`, `alt`, `caption` — all from Phase 4
- Omit `tip` — weave any practical detail into the `body` text instead
- `bookAhead: true` only where advance booking is genuinely required
- Set `walkingKm` as a silent reasonable estimate — do not ask the user
- Do not include airport arrival or departure as stops
- No trailing commas on last array elements (TypeScript strict mode)

Show the user the generated object, clearly marked as a draft. Ask for a final read-through.

### 6b — The STOP_COORDS entry

Produce the coordinates block to append inside the `STOP_COORDS` object in `src/app/itineraries/stop-coordinates.ts`:

```typescript
'your-trip-slug': {
  'day-1': {
    '08:00': [lat, lon], // Place name — source note (photo-derived | map-confirmed)
    '10:30': [lat, lon], // Place name
  },
  'day-2': { ... },
},
```

For coordinates that came from a Google Maps link, mark them `// map-confirmed`. For coordinates derived from photo EXIF, mark them `// photo-derived`. For any still missing, use a placeholder `// NEEDS_COORD` and flag them explicitly to the user.

---

## Phase 8 — Write the files

Only after the user has approved the drafts in Phase 7, write the changes:

1. **Append to `itineraries.data.ts`**: Add the new `Itinerary` object to the `ITINERARIES` array. Edit the file — do not rewrite the whole thing. Place it after the last existing entry, before the closing `]`.

2. **Append to `stop-coordinates.ts`**: Add the new coordinates block inside `STOP_COORDS`, after the last existing entry.

3. After writing both files, run a TypeScript check:
   ```bash
   npx tsc --noEmit
   ```
   Fix any type errors before reporting done.

4. Tell the user:
   - What was written and where
   - Any stops still needing coordinates (`NEEDS_COORD`)
   - Any image slots that were left empty (stops with no photo)
   - The URL path their itinerary will appear at (e.g. `/hong-kong-in-four-days`)

---

## Style reference: the voice

Every piece of prose you draft must pass this test:

> "Would a knowledgeable friend who had done this trip actually say this?"

**Pass:** "Sheung Hei is a small dim sum place in Kennedy Town — har gow, cheung fun, milk tea to close."
**Fail:** "Sheung Hei is a beloved local gem offering an authentic dim sum experience."

**Pass:** "Clouds move fast on the Peak — it was socked in when I arrived and clear twenty minutes later."
**Fail:** "Pro tip: the weather at the Peak can be unpredictable, so be prepared!"

Things to avoid in body text: "vibrant", "bustling", "hidden gem", "authentic", "iconic" (unless truly ironic), "don't miss", "must-try", "experience", "amazing". One data point (a specific dish name, a price, a time, a queue length) is worth three adjectives.

### Prose conventions

- **"I" throughout** — always first person singular, even when the trip was with others. Never "we".
- **No timestamps or durations in prose** — `time` and `durationMin` are internal data fields only, never mentioned in `body`, `summary`, `tagline`, or `intro`.
- **No distances in prose** — don't mention walking distances or km in any prose field.
- **No tips as a separate field** — if there's a genuinely useful practical detail, fold it into the `body` text naturally. Never use the `tip` field.

---

## Error recovery

- If the user can't remember a time for a stop, use a round estimate and flag it with a `// approx` comment in the coordinates file
- If no photo exists for a stop, omit the `image` field — don't force it
- If a Google Maps link won't resolve, note the coordinates as `NEEDS_COORD` and continue
- If the user wants to skip a stop they mentioned, remove it cleanly — don't leave placeholder entries
- If osxphotos can't access the Photos library (permissions), tell the user to run `! osxphotos query --count` in the prompt themselves to grant Terminal access to Photos, then re-run the query
- If photos are in iCloud (path is `None`, `ismissing: True`), do not use `--download-missing` or `--use-photos-export` — both crash. Instead find the highest-res local derivative: `find "~/Pictures/Photos Library.photoslibrary/resources/derivatives" -name "{UUID}*_1_105_c.jpeg"`. These thumbnails are up to 1024px on the longest dimension and suitable for publishing. Convert with `sips -s format jpeg SOURCE --out DEST.jpg`.
