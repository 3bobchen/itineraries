// Per-stop coordinates: photo-derived centroids where available, map-confirmed
// for new and updated stops. Keyed: itinerary slug -> day slug -> stop time -> [lat, lon].
// Merged onto stops by the loop in itineraries.data.ts at module load.

export const STOP_COORDS: Record<string, Record<string, Record<string, [number, number]>>> = {
  'hong-kong-in-four-days': {
    'day-1': {
      '08:00': [22.27890, 114.12400], // Kennedy Town swimming shed
      '10:30': [22.28560, 114.15770], // IFC + Mid-Levels Escalators
      '12:30': [22.28309, 114.12923], // Sheung Hei (map-confirmed)
      '14:30': [22.28130, 114.12800], // KT playground + Be Happy sign
      '17:00': [22.28700, 114.15860], // Star Ferry, Central Pier 7
      '19:00': [22.27928, 114.17791], // Lou Shang Street Restaurant (map-confirmed)
      '21:30': [22.27030, 114.14710], // The Peak, Lugard Road
    },
    'day-2': {
      '09:00': [22.28546, 114.13477], // South Lane, Sai Wan (map-confirmed)
      '10:30': [22.28180, 114.15310], // Bakehouse + Vission (map-confirmed)
      '12:00': [22.31307, 114.04255], // Hong Kong Disneyland
      '21:00': [22.31780, 114.16945], // Paradise Dynasty, Mong Kok (map-confirmed)
    },
    'day-3': {
      '09:00': [22.28588, 114.13527], // 山道冰室, Sai Wan (map-confirmed)
      '12:00': [22.19670, 113.54070], // Macau old town / Senado Square
      '13:30': [22.19500, 113.54470], // Grand Lisboa Casino
      '14:30': [22.14900, 113.57100], // Cotai Strip (Venetian / Parisian / Londoner)
      '17:00': [22.14246, 113.57289], // ZIPCITY Macau (map-confirmed)
      '19:30': [22.29492, 114.17553], // Cannubi, K11 MUSEA (map-confirmed)
      '21:00': [22.29790, 114.17300], // Chagee, K11 Art Mall
      '21:30': [22.30663, 114.17085], // Kai Kai Dessert + Temple Street (map-confirmed)
    },
    'day-4': {
      '09:00': [22.28557, 114.13499], // Tai O Cafe Kitchen (map-confirmed)
      '10:30': [22.28322, 114.19161], // Heartwarming (map-confirmed)
      '12:00': [22.28010, 114.18510], // Causeway Bay / Hysan Place
      '14:00': [22.30800, 113.91850], // HKG Terminal 1
    },
  },
  'hong-kong-in-a-day': {
    'the-day': {
      '09:08': [22.3091, 113.94456],
      '11:25': [22.28037, 114.13364],
      '11:48': [22.2796, 114.13869],
      '13:22': [22.27131, 114.15413],
      '13:41': [22.27131, 114.15413],
      '14:44': [22.28546, 114.16768],
      '17:20': [22.31437, 113.93611],
    },
  },
  'seoul-in-an-afternoon': {
    'the-afternoon': {
      '14:09': [37.55894, 126.97410], // Namdaemun Gate — photo-derived
      '14:18': [37.57166, 126.97682], // Gwanghwamun Square — photo-derived
      '15:22': [37.56361, 126.98358], // Myeongdong — photo-derived
      '16:38': [37.58149, 126.98493], // Bukchon Hanok Village — photo-derived
    },
  },
};
