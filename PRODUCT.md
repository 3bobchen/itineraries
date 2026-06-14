# Product

## Register

product

## Users

General public travelers, in two contexts:

1. **Planning at home** — researching a destination, comparing options, deciding whether an itinerary fits their dates, budget, and pace. Desktop or mobile, unhurried, comparison-minded.
2. **Mid-trip on the go** — pulling up today's leg on a phone, often on patchy mobile data, needing the next step (where, when, how to get there, what it costs) at a glance.

They did not sign up for anything; they arrived from a search engine or a shared link. The first screen has to earn their trust immediately.

## Product Purpose

An editorial publication of curated travel itineraries. A small editorial team writes and maintains every itinerary; the public browses and reads — there are no user accounts, submissions, or booking flows.

The product is the itinerary itself: a structured, day-by-day plan with the logistics (timings, transport, costs, walking distances) treated as first-class data, not buried in prose. SSR (Angular SSR is already wired up) serves the SEO mission: each itinerary is a deep, structured, crawlable document that wins search by being genuinely better than the listicle sludge it competes with.

Success: a reader trusts an itinerary enough to actually follow it, and comes back for the next trip.

## Brand Personality

**Practical, trustworthy, specific.**

The voice of a competent friend who has actually done this trip: confident, concrete, generous with details, free of superlatives. Information density is a feature — costs, timings, and transport are presented up front and legibly, not hidden behind atmosphere. Warmth comes through specificity ("the 8:15 ferry beats the crowds") rather than evocative copywriting.

## Anti-references

- **SEO travel-blog spam.** No "10 BEST things to do" listicle framing, no thin content padded for word count, no ad clutter, no newsletter popups interrupting reading.
- **Booking-site corporate.** No Expedia/Booking.com energy: no urgency banners, countdown timers, promo tiles, or conversion-first dark patterns. Nothing on the page should feel like it's selling.
- **Generic AI/SaaS look.** No cream-default background, gradient text, icon-card grids, or tracked-uppercase eyebrow labels on every section.

## Design Principles

1. **Logistics are content.** Times, costs, transport, and distances are first-class structured data with their own visual treatment — scannable in two seconds, never buried in paragraphs.
2. **Competent friend, not salesman.** Build trust through specificity and restraint. If an element exists to persuade rather than inform, cut it.
3. **Readable on the road.** Every itinerary page must work one-handed on a phone on slow data: fast, legible, with today's step findable instantly.
4. **Earn the search ranking honestly.** SEO through structure — semantic HTML, SSR, real depth per itinerary — never through padding, keyword stuffing, or engagement tricks.
5. **Depth over volume.** A small catalog of meticulously maintained itineraries beats a large one of thin ones. The design should make each itinerary feel authored and kept current.

## Accessibility & Inclusion

- WCAG AA minimum across the board (project mandate: must pass all AXE checks).
- Focus management, color contrast (≥4.5:1 body text), and correct ARIA attributes are non-negotiable.
- Reduced-motion alternatives for all animation (`prefers-reduced-motion`).
- Mobile-first reading context implies generous touch targets and legible type at arm's length, outdoors, in sunlight.
