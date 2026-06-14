---
name: add-trip
description: Interactive wizard to onboard a new trip into the itineraries data. Interviews the user about their trip day by day, extracts coordinates from Google Maps links, queries Apple Photos for images and surfaces forgotten stops from photo location clusters, then writes the TypeScript data entries.
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

## Phase 2 — Day-by-day interview

Work through each day one at a time. For each day, ask:

**Opening questions (ask all at once):**
- "What's a one-line title for Day [N]? (e.g. 'Harbour, Central, and the Peak')"
- "Walk me through the day from morning to night — what happened, roughly in order?"

Listen carefully to their free-form answer. Then follow up to fill gaps:

**For each stop they mention:**
- What time did they arrive? (24h, e.g. 08:00 — explain this is used only for map pin ordering, not displayed to readers)
- Roughly how long did they spend there? (in minutes)
- Do they have a Google Maps link for this place? (needed for coordinates — ask specifically, one stop at a time)
- Was there anything non-obvious about it — a practical tip, an unexpected detail, a better approach they'd tell a friend?
- Did they need to book in advance, or was walk-in fine?

**For each transport leg they imply between stops:**
- What mode? (walk, train, ferry, bus, lightrail, tram)
- If train/bus/ferry: what's the route name or number shown on signage?
- How long did it take?
- Any practical note a traveller would want to know? (e.g. "change at Admiralty", "trains every 2–3 minutes", "need to book online")

**At the end of each day, ask:**
- "Rough estimate: how many km did you walk that day?"
- "What's a one-paragraph summary of the day — the arc of it?" (You can draft one based on their answers and ask them to react to it)

Do not move on to the next day until you have all stops and legs for the current day, including at least rough times and durations for each stop.

### Coordinate extraction from Google Maps links

When the user provides a Google Maps link, extract coordinates immediately using this method:

```bash
# Follow the redirect to get the full URL, then parse @lat,lon
curl -Ls -o /dev/null -w "%{url_effective}" "MAPS_URL_HERE" 2>/dev/null
```

Parse the `@lat,lon` component from the resolved URL (e.g. `@22.2809,114.1598` → `[22.2809, 114.1598]`).

If the URL doesn't resolve cleanly (some short links don't), ask the user to paste the full URL from the address bar instead.

Accumulate all coordinates into the `STOP_COORDS` structure as you go. If a stop has no Maps link, note it as "map-needed" and proceed — you'll confirm it later or use the photo-derived coordinates from Phase 3.

---

## Phase 3 — Apple Photos: discovery and image selection

This phase queries Apple Photos to:
1. Discover photos taken during the trip dates
2. Surface stops the user forgot to mention (based on photo location clusters)
3. Select images for the hero, day headers, and individual stops

### Step 3a — Install osxphotos if needed

```bash
python3 -c "import osxphotos" 2>/dev/null || pip3 install osxphotos
```

### Step 3b — Query all geotagged photos in the trip date range

```bash
osxphotos query --json --from-date YYYY-MM-DD --to-date YYYY-MM-DD --location 2>/dev/null
```

This returns a JSON array of photo objects. Each has:
- `filename` — original filename
- `date` — ISO timestamp
- `latitude`, `longitude` — GPS coordinates
- `place_names` — reverse-geocoded place hierarchy (country → region → city → POI name)
- `path` — path to the original file on disk

Parse the output and group photos by approximate location (cluster by proximity, ~200m radius) and by day. Use `date` to assign each photo to a calendar day.

### Step 3c — Compare against declared stops

For each photo cluster that is **not** near any stop the user mentioned, surface it:

> "Your photos show [N] photos near [place_name from reverse geocoding] around [time] on Day [X] — you didn't mention that. Was that a stop you want to include, or just a transit moment?"

If the user confirms it's a real stop, go back and add it to the day in Phase 2 order (ask for the missing details: title, body text, duration, any tip).

This is the single most important editorial step — help them remember what they actually did, not just what they remembered to write down.

### Step 3d — Image selection

You need images in these slots:
- **Hero** (`hero`): wide landscape, 1024×768 — the single image that defines the trip. Usually a striking view: a harbour, a skyline, a landmark. Ask the user: "What's the most iconic single image from the whole trip?"
- **Day header** (`days[n].image`): one per day. Landscape preferred, 1280×1706 or 1024×768. Should capture the day's arc.
- **Stop image** (`stop.image`): optional per stop. Portrait preferred (768×1024 or 960×1280). The most visually interesting moment at that stop.

For each slot, show the user the candidates from the relevant cluster (list filenames + timestamps + place names), ask which one they want to use, and note the chosen file path.

**Naming convention for exported images:**
- Hero: `{prefix}-hero-{shortname}` (e.g. `tok-hero-shinjuku`)
- Day header: `{prefix}-day{n}-{shortname}` (e.g. `tok-day1-senso-ji`)
- Stop: `{prefix}-stop-{shortname}` (e.g. `tok-stop-ramen`)

Ask the user to confirm or adjust each name.

### Step 3e — Export and resize images

For each selected photo, export it to the correct size using `sips` (built-in macOS). `sips -Z N` limits the longest dimension to N pixels and preserves aspect ratio — use this for every export:

```bash
# Limit longest dimension to N, preserving aspect ratio
sips -Z LONGEST_DIM "SOURCE_PATH" --out "/Users/bobchen/WebstormProjects/itineraries/public/images/{srcBase}-{width}.jpg"
```

Target longest dimension by slot:
- **Hero (landscape):** `-Z 1024` (targets ~1024×768)
- **Day header (portrait):** `-Z 1706` (targets ~1280×1706)
- **Stop portrait:** `-Z 1024` (targets ~768×1024)
- **Stop wider portrait:** `-Z 1280` (targets ~960×1280)

After exporting, always check the actual output dimensions:
```bash
sips -g pixelWidth -g pixelHeight "/path/to/exported.jpg"
```

Use the actual reported pixel values for `width` and `height` in the `StopImage` object — do not guess from the target.

Name the output file as `{srcBase}-{actualWidth}.jpg`, where `actualWidth` is the `pixelWidth` value reported by sips.

**For each exported image, ask the user:**
- Write the `alt` text together: "Describe this image as if to someone who can't see it — be specific: what's in the foreground, what's in the background, time of day?" Draft one based on the filename/place and ask them to refine it.
- Write the `caption`: one sentence, present tense, grounded in the specific moment. (Model: "Mid-harbour on the Star Ferry, day one at golden hour.")

---

## Phase 4 — Draft prose

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

## Phase 5 — mapGrouping

For each day with more than ~4 stops, decide on `mapGrouping`. This controls how the day map clusters pins spatially.

Look at the coordinates you have for each stop and mentally (or literally) group them by geographic proximity and/or the time of day the user was there. The groups should reflect "we were in this area of the city then, then moved to this other area."

Ask: "Looking at Day [X], it seems like you were in [area A] in the morning, then [area B] in the afternoon. Does that make sense as two map clusters, or did you pass through somewhere else in between?"

Format: `mapGrouping: [['08:00', '10:30', '12:30'], ['14:30', '17:00'], ['19:00', '21:30']]`
Each inner array is a group of stop times that appear together on one map cluster.

---

## Phase 6 — Generate TypeScript

Now generate the code. Produce two things:

### 6a — The Itinerary object

Produce a complete `Itinerary` object literal, ready to be appended to the `ITINERARIES` array in `src/app/itineraries/itineraries.data.ts`.

Follow these rules exactly:
- Match the exact shape of the "Hong Kong in four days" entry — every field in the same order
- `slug` must be the confirmed slug from Phase 1
- Entries alternate stop → leg → stop → leg → stop
- Every stop has `time`, `title`, `body`, and at minimum `durationMin`
- Every leg has `mode`, `from`, `to`, `durationMin`, and `route` where the transit has a named route
- `image` objects include `srcBase`, `width`, `height`, `alt`, `caption` — all from Phase 3
- `tip` and `bookAhead` only where the user confirmed them
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

## Phase 7 — Write the files

Only after the user has approved the drafts in Phase 6, write the changes:

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

---

## Error recovery

- If the user can't remember a time for a stop, use a round estimate and flag it with a `// approx` comment in the coordinates file
- If no photo exists for a stop, omit the `image` field — don't force it
- If a Google Maps link won't resolve, note the coordinates as `NEEDS_COORD` and continue
- If the user wants to skip a stop they mentioned, remove it cleanly — don't leave placeholder entries
- If osxphotos can't access the Photos library (permissions), tell the user to run `! osxphotos query --count` in the prompt themselves to grant Terminal access to Photos, then re-run the query
