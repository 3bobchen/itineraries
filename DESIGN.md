<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Itineraries
description: Curated travel itineraries with transit-grade logistics, published like a well-edited guide.
---

# Design System: Itineraries

## 1. Overview

**Creative North Star: "The Trusted Timetable"**

This system crosses two references the strategic brief named: Wirecutter's tested-detail editorial trust and Citymapper's transit-grade legibility. The result is a guide that reads like a publication but behaves like an instrument — every timing, cost, and transfer rendered as scannable structured data, every paragraph earning its place. The register is product: design serves the reader's task (deciding on a trip at home, executing today's leg on a phone), and the tool should disappear into it.

The color stance is **Committed**: one deep alpine spruce green carries 30–60% of key surfaces — day markers, section headers, hero blocks, the structural spine of an itinerary — rather than hiding as a 10% accent. Identity comes from that single confident color plus typographic order, never from decoration. The system explicitly rejects what PRODUCT.md rejects: SEO travel-blog listicle sludge, Expedia/Booking.com conversion pressure, and the generic AI/SaaS look (cream backgrounds, gradient text, icon-card grids, eyebrow labels).

**Key Characteristics:**
- Committed single-color identity: spruce as structure, not garnish
- Logistics set in mono, treated as first-class data with its own visual grammar
- Dense where data is dense, calm where prose is prose
- Fast and legible one-handed on a phone on slow data
- Motion as feedback only (150–250ms); nothing performs

## 2. Colors

A Committed strategy built around one deep alpine spruce; everything else stays disciplined neutral so the color reads as identity, not noise.

### Primary
- **Deep Alpine Spruce** (anchor hue ~150° in OKLCH, near oklch(48% 0.13 150)): carries day markers, itinerary spines, primary actions, active states, and key headers. White text on spruce fills, always.

### Neutral
- **Background** ([to be resolved]; pure white or pure near-black per the no-hidden-warmth rule — never a warm-tinted cream): the reading surface.
- **Ink** ([to be resolved]; ≥7:1 contrast vs background): body text.
- **Muted** ([to be resolved]; ≥4.5:1 contrast vs background): secondary text, captions, metadata.

### Named Rules
**The Committed Spruce Rule.** The spruce is structural — it marks days, anchors headers, and signals actions. It covers 30–60% of identity surfaces and 0% of body prose. If a screen has spruce decoration that carries no meaning, remove it.

**The Neutral-Background Rule.** Organic richness lives in the spruce and the voice, never in the background. The surface is pure white (or pure near-black), chroma zero. Cream/sand/beige backgrounds are prohibited.

## 3. Typography

**Body Font:** Humanist sans [font pairing to be chosen at implementation]
**Data/Mono Font:** Monospace for timings, costs, distances, transit codes [to be chosen at implementation]

**Character:** A well-tuned humanist sans does all the editorial work in multiple weights; the mono gives logistics a timetable's honesty. The pairing contrasts on axis (humanist vs. mono-geometric), never two near-identical sans faces.

### Hierarchy
- **Display / Headline / Title / Body / Label**: fixed rem scale, ratio ~1.2 (product register: no fluid clamp headings). Exact sizes [to be resolved during implementation].
- **Body**: max line length 65–75ch for prose; data rows may run denser.
- **Data (mono)**: timings, prices, durations, platform/route codes — tabular numerals, consistent width, scannable in two seconds.

### Named Rules
**The Timetable Rule.** If it's a time, a cost, a distance, or a code, it's set in mono with tabular figures. Logistics are never buried in a sentence when they can be a row.

## 4. Elevation

Flat by default. Depth comes from the second neutral layer (panels, sticky day-navigation) and hairline borders, not shadows. Shadows, if they ever appear, respond to state (an element lifting on drag or a sticky bar separating on scroll) — never decoration. Exact shadow vocabulary [to be resolved during implementation].

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow must be earned by a state change.

## 5. Components

No components exist yet. This section will be populated by a scan-mode re-run of `/impeccable document` once the first surfaces (itinerary page, day timeline, logistics rows, catalog index) are built. Expected signature component: the **logistics row** — time (mono) · step · cost/mode badges — which should be designed first and reused everywhere.

## 6. Do's and Don'ts

### Do:
- **Do** use the spruce structurally (day markers, headers, primary actions) at Committed scale — 30–60% of identity surfaces.
- **Do** set every time, cost, distance, and transit code in the mono with tabular figures.
- **Do** keep body text ≥4.5:1 contrast (ink targets ≥7:1) and pass all AXE checks — WCAG AA is a project mandate.
- **Do** provide `prefers-reduced-motion` alternatives for every transition; keep transitions 150–250ms.
- **Do** design for one-handed phone use on slow data: structural responsiveness, generous touch targets, instant findability of "today's step."

### Don't:
- **Don't** ship "SEO travel-blog spam" patterns (PRODUCT.md): listicle framing, ad clutter, newsletter popups, padded thin content.
- **Don't** ship "booking-site corporate" patterns (PRODUCT.md): urgency banners, countdown timers, promo tiles, conversion-first dark patterns.
- **Don't** ship the "generic AI/SaaS look" (PRODUCT.md): cream backgrounds, gradient text, icon-card grids, tracked-uppercase eyebrow labels on every section.
- **Don't** use side-stripe borders (>1px colored border-left/right) on cards, callouts, or alerts.
- **Don't** use display fonts in UI labels, buttons, or data; the sans + mono pair is the whole vocabulary.
- **Don't** add decorative motion, orchestrated page-load sequences, or scroll choreography — motion conveys state only.
