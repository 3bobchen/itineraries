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
      '11:25': [22.28297, 114.12824], // Sun Hing Restaurant — map-confirmed
      '11:48': [22.2788, 114.1322],   // Stone-wall trees, Sai Ying Pun — photo-derived
      '13:22': [22.2749, 114.1531],   // Victoria Peak, Lugard Road — photo-derived
      '14:44': [22.2855, 114.1679],   // Star Ferry, Central Pier 7 — photo-derived
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
  'back-in-singapore': {
    'the-day': {
      '06:21': [1.39170, 103.97527], // Changi Beach — photo-derived
      '08:36': [1.28653, 103.85444], // Merlion Park / Marina Bay waterfront — photo-derived
      '09:53': [1.24986, 103.82028], // Palawan Beach, Southernmost Point — photo-derived
      '14:08': [1.36009, 103.99000], // Jewel Changi Airport — photo-derived
    },
  },
  'riyadh-in-two-days': {
    'day-1': {
      '11:00': [24.76680, 46.64223], // King Abdullah Financial District — photo-derived
      '12:00': [24.71343, 46.67455], // Kingdom Centre — photo-derived
      '16:00': [24.62891, 46.71596], // Masmak Fort — photo-derived
      '18:00': [24.64781, 46.71036], // National Museum of Saudi Arabia — photo-derived
    },
    'day-2': {
      '12:00': [24.73701, 46.57460], // Ad Diriyah (At-Turaif) — photo-derived
      '15:30': [24.94861, 45.98841], // Edge of the World — map-confirmed
      '20:00': [24.78000, 46.75000], // Al Nakheel — approx, NEEDS_COORD
    },
  },
  'singapore-in-a-day': {
    'the-day': {
      '08:39': [1.28024, 103.84479], // Maxwell Food Centre — photo-derived
      '09:54': [1.28212, 103.86558], // Gardens by the Bay, OCBC Skyway — photo-derived
      '13:01': [1.34337, 103.68307], // NTU campus, The Hive — photo-derived
      '15:42': [1.36024, 103.98981], // Jewel Changi Airport — photo-derived
    },
  },
};
