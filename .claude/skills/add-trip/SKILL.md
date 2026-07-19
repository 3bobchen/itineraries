---
name: add-trip
description: Onboard a new trip into the itineraries data. Takes a short set of starting facts, then autonomously reconstructs the whole itinerary from Apple Photos — clustering stops, drafting prose, selecting images, deriving coordinates — and only comes back to the user once, with the finished draft, for a single day-by-day round of contributions. Finishes by placing the trip's pin on the homepage globe.
user-invocable: true
---

You are onboarding a new travel itinerary into this publication. The guiding principle is **work first, ask once**: gather the minimum starting facts, then construct the entire itinerary autonomously from the photos, and only return to the user a single time — at the end — with a finished draft for them to enrich and correct.

Do **not** interview the user day-by-day. Do **not** confirm each cluster, each image, or each name as you go. Make confident, reasonable choices from the photo evidence and your editorial judgment, flag anything genuinely uncertain inline, and roll it all up into one review at the end.

Keep your tone that of a meticulous editor who has already done a first draft — not a form asking the writer to fill in blanks.

---

## Phase 0 — Ground the model

Before asking the user anything, do all of these:

1. Read `src/app/itineraries/itinerary.model.ts` — internalize every field, type, and constraint. Know what `mapGrouping`, `walkingKm`, `tip`, `bookAhead`, and `daypart` mean.
2. Read `src/app/itineraries/itineraries.data.ts` — study the **"Hong Kong in four days"** entry as the canonical example. Note:
   - Entry rhythm: stops only (omit transport legs entirely)
   - `body` prose: one short paragraph, past tense, first person singular ("I", never "we"), specific and concrete — no superlatives, no atmosphere for its own sake. Written like a knowledgeable friend.
   - `time` fields are 24h clocks keyed to map pins, not displayed as labels
   - `mapGrouping` clusters the day's stops into spatial groups that make sense geographically
   - `bookAhead` is only `true` when advance booking is actually required or strongly advised
3. Read `src/app/itineraries/stop-coordinates.ts` — note the key structure: `itinerary-slug → day-slug → stop-time → [lat, lon]`
4. Read `src/app/itineraries/city-coordinates.ts` — note `CITY_COORDS` (city → centroid, drives the globe pin) and `PLANNED_CITIES` (placeholder "coming soon" pins). You will update both in the final phase.
5. Read `PRODUCT.md` and `DESIGN.md` — absorb the voice ("practical, trustworthy, specific") and the anti-patterns (no superlatives, no SEO sludge, no "best of" framing).

Only after completing these reads, proceed to Phase 1.

---

## Phase 1 — Starting facts (the only questions up front)

Ask for all of this in a **single** message (group naturally, not as a numbered list). This is the only time you interview the user before building. Keep it tight:

- Where was the trip? (city, country)
- What should the itinerary be titled? (Suggest a format like "Tokyo in three days" if they don't have one)
- What were the exact travel dates? (start and end, YYYY-MM-DD — required to query Apple Photos)
- What was the pace: relaxed, steady, or full?
- Who did they travel with? (e.g. "solo", "a friend", "friends", "partner", "family")
- Where did they stay, and how did they get around? (one line each — anchors the `intro`)

From their answers, derive **silently** (state your choices, do not ask for confirmation — the user can correct anything in the final review):
- `slug`: kebab-case from title (e.g. "tokyo-in-three-days")
- `city`, `country`, number of days (from the date range)
- Image prefix: short abbreviation, e.g. "tok" for Tokyo, "bkk" for Bangkok

Tell the user, in one line, the slug and prefix you'll use, then say you're going to build the draft from their photos and will come back with the full thing. Do not wait for a reply — proceed straight to Phase 2.

---

## Phase 2 — Autonomous construction

This is the heart of the skill. With the starting facts in hand, build the **entire** itinerary from the photos without further questions. Do every step below, in order, making decisions yourself.

### 2a — Photos setup and query

```bash
python3 -c "import osxphotos" 2>/dev/null || pip3 install osxphotos
```

Query all geotagged photos across the trip date range (use the day *after* the last travel date as `--to-date`; the upper bound is exclusive):

```bash
osxphotos query --json --from-date YYYY-MM-DD --to-date NEXT-DAY --location 2>/dev/null
```

Each photo object has: `filename`, `date`, `latitude`, `longitude`, `place_names` (reverse-geocoded country → region → city → POI), `path`, `uuid`, `ismissing`.

### 2b — Cluster into stops

Parse the JSON and build the skeleton yourself:

1. Group photos by calendar day using `date`.
2. Within each day, cluster by GPS proximity (~200m radius) in chronological order.
3. For each cluster, record: time range, centroid coordinates, place names, photo count, representative UUIDs.
4. Decide which clusters are **stops** and which are **transit/incidental** (a couple of photos in motion between two real stops). Drop incidental clusters. Don't force every cluster into a stop.
5. Name each stop from `place_names` (use the most specific POI). Where reverse geocoding is empty or vague, give it a best-guess working title and mark it for the review (see Phase 3).

### 2c — Derive coordinates

Build the `STOP_COORDS` structure as you cluster: each stop's `time` → centroid `[lat, lon]`, tagged `// photo-derived`. You are not asking the user for Google Maps links in this flow — photo EXIF is the coordinate source. (If a user volunteers a Maps link during the final review, resolve it with `curl -Ls -o /dev/null -w "%{url_effective}" "URL"` and parse the `@lat,lon`.)

### 2d — Select and export images

Pick images yourself — do not show candidates one by one. For each slot, choose the single most representative frame from the relevant cluster (favor sharp, well-composed, daylight shots; avoid duplicates, screenshots, and people-only close-ups unless that's the moment).

Slots:
- **Hero** (`hero`): the one image that defines the trip — a striking wide view (harbour, skyline, landmark). Landscape, ~1024×768.
- **Day header** (`days[n].image`): one per day, capturing the day's arc. Landscape preferred.
- **Stop image** (`stop.image`): optional, only for stops with a genuinely strong frame. Portrait preferred. Not every stop needs one — omit rather than force.

Naming: `{prefix}-hero-{shortname}`, `{prefix}-day-{shortname}`, `{prefix}-stop-{shortname}`.

Export and resize with `sips`. For iCloud-only photos (`ismissing: True`, `path` is `None`), use the local derivative instead of `--download-missing`/`--use-photos-export` (both crash):

```bash
# Local originals:
sips -s format jpeg "SOURCE_PATH" --out "/Users/bobchen/WebstormProjects/itineraries/public/images/{srcBase}-{width}.jpg"

# iCloud derivatives (find highest-res local thumb, convert, resize):
find "$HOME/Pictures/Photos Library.photoslibrary/resources/derivatives" -name "{UUID}*_1_105_c.jpeg"
sips -s format jpeg "DERIVATIVE_PATH" --out /tmp/converted.jpg
sips -Z LONGEST_DIM /tmp/converted.jpg --out "/Users/bobchen/WebstormProjects/itineraries/public/images/{srcBase}-{width}.jpg"
```

Target longest dimension: Hero `-Z 1024`, Day header `-Z 1706`, Stop portrait `-Z 1024`. Always read back the real output size and use the actual pixels for `width`/`height`, naming the file `{srcBase}-{actualWidth}.jpg`:

```bash
sips -g pixelWidth -g pixelHeight "/path/to/exported.jpg"
```

Draft `alt` (specific: foreground, background, time of day) and a one-sentence `caption` (present tense, grounded) for each exported image yourself.

### 2e — Draft all prose

Write every text field from the photo evidence and the starting facts, in this publication's voice (see Style reference below). Don't leave blanks; a confident draft the user can correct beats a question.

- **`tagline`** — one concrete sentence, names the actual things, no superlatives.
- **`intro`** — 2–3 sentences: where they stayed, how they got around, the tone of the trip. First person.
- **Stop `body`** — one paragraph each (2–4 sentences), past tense, first person, specific. Infer what happened at each stop from the place, the time of day, and the photos. Where you're guessing at an activity, keep it factual and mark the stop for review.
- **Day `summary`** — the arc of the day, key beats in order.
- **Day `title`** — one line (e.g. "Harbour, Central, and the Peak").

### 2f — mapGrouping

For each day with more than ~4 stops, cluster the stop times into geographic groups based on the coordinates you derived (morning area → afternoon area → evening area). Format: `mapGrouping: [['08:00','10:30','12:30'], ['14:30','17:00'], ['19:00','21:30']]`.

### 2g — Assemble the draft

Hold the complete `Itinerary` object and `STOP_COORDS` block in memory, fully populated. Set `walkingKm` as a silent reasonable estimate. Omit `tip` entirely. Omit airport arrival/departure as stops.

Do not write any files yet. Proceed to the single review.

---

## Phase 3 — The single review (one round, day by day)

Now — and only now — return to the user. Present the finished draft and collect all their contributions in **one pass**. This replaces the entire old day-by-day interview.

Structure the review so the user can scan the whole trip and respond per day in a single message:

> "I've reconstructed the trip from your photos. Here's the full draft — read through and tell me, per day, anything that's wrong, missing, or worth adding. I especially flagged the spots marked ⚠️ where I was guessing.
>
> **Day 1 — [title]**
> _[summary]_
> 1. **[Stop title]** ~[time] — [one-line gloss of the body you drafted]
> 2. **[Stop title]** ~[time] — [gloss]  ⚠️ couldn't identify this from geocoding — [coords]; what was it?
> …
>
> **Day 2 — [title]** …"

Then ask, once:

> "For each day, what would you add or change? Anything memorable I missed, names I got wrong, stops to drop or merge, a different hero shot? Give it to me all at once and I'll fold it in."

Rules for this review:
- Present **everything** — taglines, intro, every day's title/summary/stops, and the chosen hero + day images (state the filenames you exported so they can object).
- Flag every uncertain item with ⚠️ and a concrete question, so the user's effort goes where it matters.
- Accept the user's contributions as a batch. If they reply day-by-day across several messages, that's fine — just don't prompt them stop-by-stop.
- After incorporating their input, only re-confirm if a change is large (e.g. they restructured a day). Small corrections you just apply.

---

## Phase 4 — Generate and write

Once the user's contributions are folded in:

### 4a — Final objects

Produce the complete `Itinerary` object literal and the `STOP_COORDS` block, matching the exact shape and field order of the "Hong Kong in four days" entry:
- `slug` is the confirmed slug; stops only (no legs); every stop has `time`, `title`, `body`; omit `durationMin`.
- `image` objects carry `srcBase`, `width`, `height`, `alt`, `caption`.
- Omit `tip`; fold any practical detail into `body`. `bookAhead: true` only where genuinely required.
- `walkingKm` is a silent estimate. No airport stops. No trailing commas on last array elements.
- In `STOP_COORDS`, tag each coordinate `// photo-derived` (or `// map-confirmed` if the user supplied a link). Use `// NEEDS_COORD` for anything still missing and flag it.

### 4b — Write the data files

1. **Append to `itineraries.data.ts`** — add the new `Itinerary` object to the `ITINERARIES` array, after the last entry, before the closing `]`. Edit; don't rewrite the file.
2. **Append to `stop-coordinates.ts`** — add the new coordinates block inside `STOP_COORDS`, after the last entry.

---

## Phase 5 — Place the pin on the globe

This is what makes the trip appear on the homepage. A published itinerary only renders as a globe marker if its `city` has a centroid in `CITY_COORDS` (`itinerary.service.ts` skips cities without one). Do both:

1. **Add the city centroid to `CITY_COORDS`** in `src/app/itineraries/city-coordinates.ts`, keyed by the **exact** `city` string used on the itinerary (must match character-for-character, including spaces and punctuation like "Washington, DC"). Use the city's well-known centroid `[lat, lon]` (you can use the trip's overall photo centroid if you have nothing better). Skip if a row already exists for that city.
2. **Remove the city from `PLANNED_CITIES`** if it's listed there — a real itinerary now covers it, so the placeholder "coming soon" pin should give way to the live one. (The service already de-dupes, but remove the stale entry to keep the file honest.)

After editing, the marker turns from `planned` (hollow) to `available` (crimson) automatically — no other change is needed.

---

## Phase 6 — Verify and report

1. Run a type check and fix any errors before reporting done:
   ```bash
   npx tsc --noEmit
   ```
2. Tell the user:
   - What was written and where (data, coords, city pin)
   - That the trip now has a live pin on the homepage globe
   - Any stops still needing coordinates (`NEEDS_COORD`)
   - Any stops left without an image
   - The URL path the itinerary will appear at (e.g. `/itineraries/hong-kong-in-four-days`)

---

## Style reference: the voice

Every piece of prose you draft must pass this test:

> "Would a knowledgeable friend who had done this trip actually say this?"

**Pass:** "Sheung Hei is a small dim sum place in Kennedy Town — har gow, cheung fun, milk tea to close."
**Fail:** "Sheung Hei is a beloved local gem offering an authentic dim sum experience."

**Pass:** "Clouds move fast on the Peak — it was socked in when I arrived and clear twenty minutes later."
**Fail:** "Pro tip: the weather at the Peak can be unpredictable, so be prepared!"

Avoid in body text: "vibrant", "bustling", "hidden gem", "authentic", "iconic" (unless truly ironic), "don't miss", "must-try", "experience", "amazing". One data point (a dish name, a price, a queue length) is worth three adjectives.

### Prose conventions

- **"I" throughout** — always first person singular, even when the trip was with others. Never "we".
- **No timestamps or durations in prose** — `time` and `durationMin` are internal data fields only, never mentioned in `body`, `summary`, `tagline`, or `intro`.
- **No distances in prose** — don't mention walking distances or km in any prose field.
- **No tips as a separate field** — fold any genuinely useful practical detail into the `body`. Never use the `tip` field.

---

## Error recovery

- If the user can't (or doesn't) supply a time for a stop, use a round estimate and flag it with `// approx` in the coordinates file.
- If no photo exists for a stop, omit the `image` field — don't force it.
- If reverse geocoding gives no place name, keep the working title, show the coordinates in the review with ⚠️, and let the user name it.
- If osxphotos can't access the Photos library (permissions), tell the user to run `! osxphotos query --count` in the prompt themselves to grant Terminal access to Photos, then re-run.
- If photos are in iCloud (`path` is `None`, `ismissing: True`), do not use `--download-missing` or `--use-photos-export` (both crash). Use the local derivative: `find "$HOME/Pictures/Photos Library.photoslibrary/resources/derivatives" -name "{UUID}*_1_105_c.jpeg"` (up to 1024px, publishable). Convert with `sips -s format jpeg SOURCE --out DEST.jpg`.
- If the user's `city` string and the `CITY_COORDS` key don't match exactly, the pin silently won't appear — double-check the key matches the itinerary's `city` field character-for-character.
