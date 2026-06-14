export type TransportMode = 'walk' | 'train' | 'ferry' | 'bus' | 'lightrail' | 'tram';

export interface TransportLeg {
  mode: TransportMode;
  /** Route designation as shown on signage, e.g. 'F1', 'T1', '333'. */
  route?: string;
  from: string;
  to: string;
  durationMin: number;
  note?: string;
}

export interface StopImage {
  /** Base name in /images; the loader appends -{width}.jpg. */
  srcBase: string;
  /** Intrinsic pixel dimensions, must match the file on disk. */
  width: number;
  height: number;
  alt: string;
  caption: string;
  /** Attribution for sourced imagery; omit for the publication's own photography. */
  credit?: { author: string; license: string; sourceUrl: string };
}

export interface ItineraryStop {
  /** 24h clock, e.g. '08:30'. Internal only — not displayed; it keys the photo-
   *  derived coordinates and is the source for the displayed daypart. */
  time: string;
  title: string;
  body: string;
  durationMin?: number;
  tip?: string;
  bookAhead?: boolean;
  image?: StopImage;
  /** Derived from the trip photos; attached by ItineraryService from STOP_COORDS. */
  lat?: number;
  lon?: number;
}

/** A located stop, ready to plot as a numbered pin on the day map. */
export interface MapPin {
  /** 1-based position among the day's located stops. */
  n: number;
  lat: number;
  lon: number;
  title: string;
}

export type Daypart = 'Morning' | 'Lunch' | 'Afternoon' | 'Evening' | 'Night';

/** Map a 24h clock time to a general daypart label (the only time granularity shown). */
export function daypartOf(time: string): Daypart {
  const hour = parseInt(time.slice(0, 2), 10);
  if (hour < 11) return 'Morning';
  if (hour < 14) return 'Lunch';
  if (hour < 17) return 'Afternoon';
  if (hour < 21) return 'Evening';
  return 'Night';
}

export type DayEntry = { kind: 'stop'; stop: ItineraryStop } | { kind: 'leg'; leg: TransportLeg };

export interface ItineraryDay {
  slug: string;
  /** Cardinal day number, 1-based. */
  number: number;
  title: string;
  summary: string;
  walkingKm: number;
  /** Explicit map groupings as arrays of stop times. When present, overrides
   *  the automatic proximity algorithm in DaySection. */
  mapGrouping?: string[][];
  image?: StopImage;
  entries: DayEntry[];
}

export interface Itinerary {
  slug: string;
  title: string;
  city: string;
  country: string;
  /** Used as the meta description. */
  tagline: string;
  intro: string;
  hero: StopImage;
  stats: {
    days: number;
    pace: 'relaxed' | 'steady' | 'full';
    /** Travel companions, e.g. 'friends', 'family', 'solo'. */
    with: string;
  };
  days: ItineraryDay[];
}

/** One clickable place on the globe: a city, its coordinates, and every
 *  itinerary set there. Built by {@link ItineraryService.cityMarkers}. */
export interface CityMarker {
  city: string;
  country: string;
  lat: number;
  lon: number;
  /** 'available' has published itineraries; 'planned' is a placeholder pin. */
  status: 'available' | 'planned';
  itineraries: { slug: string; title: string; days: number; pace: Itinerary['stats']['pace'] }[];
}

const MODE_LABELS: Record<TransportMode, string> = {
  walk: 'Walk',
  train: 'Train',
  ferry: 'Ferry',
  bus: 'Bus',
  lightrail: 'Light rail',
  tram: 'Tram',
};

export function modeLabel(mode: TransportMode): string {
  return MODE_LABELS[mode];
}

export function formatDuration(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} h` : `${h} h ${m.toString().padStart(2, '0')}`;
}
