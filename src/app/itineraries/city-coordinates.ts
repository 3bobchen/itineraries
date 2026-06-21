// City centroids for placing globe markers, keyed by the `city` field on each
// itinerary (and on PLANNED_CITIES). Add a row here whenever a new city appears.
export const CITY_COORDS: Record<string, [number, number]> = {
  'Hong Kong': [22.3193, 114.1694],
  'Kuala Lumpur': [3.139, 101.6869],
  Seoul: [37.5665, 126.978],
  Dubai: [25.2048, 55.2708],
  Riyadh: [24.7136, 46.6753],
  Cairo: [30.0444, 31.2357],
  Singapore: [1.3521, 103.8198],
  Bangkok: [13.7563, 100.5018],
  Phuket: [7.8804, 98.3923],
  'Washington, DC': [38.9072, -77.0369],
  'New York City': [40.7128, -74.006],
};

/** Cities with itineraries on the way but nothing published yet. They show as
 *  muted "coming soon" markers until a real itinerary lands for them. */
export const PLANNED_CITIES: { city: string; country: string }[] = [
  { city: 'Seoul', country: 'South Korea' },
  { city: 'Riyadh', country: 'Saudi Arabia' },
  { city: 'Singapore', country: 'Singapore' },
];
