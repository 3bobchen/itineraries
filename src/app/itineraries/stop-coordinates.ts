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
  'bangkok-in-two-days': {
    'day-1': {
      '08:30': [13.40749, 99.99854], // Maeklong Railway Market — photo-derived
      '11:00': [13.52099, 99.95904], // Damnoen Saduak floating market — photo-derived
      '16:00': [13.70497, 100.49154], // ICONSIAM / Chao Phraya — photo-derived
      '19:00': [13.66917, 100.60843], // HardMission, BITEC Bang Na — photo-derived
    },
    'day-2': {
      '07:30': [13.74416, 100.49474], // Old town / Sanam Chai, near Wat Pho — photo-derived
      '10:30': [13.72144, 100.47125], // Wat Paknam, Phasi Charoen — photo-derived
      '12:00': [13.74348, 100.45680], // Thonburi canals, Bang Waek — photo-derived
    },
  },
  'phuket-in-four-days': {
    'day-1': {
      '10:30': [7.6843, 98.7676], // Pileh Lagoon, Ko Phi Phi Leh — photo-derived
      '13:30': [7.6767, 98.7656], // Maya Bay, Ko Phi Phi Leh — photo-derived
      '20:30': [7.8761, 98.3517], // Three Monkeys, Chalong — photo-derived
      '22:00': [7.8848, 98.3879], // Jui Tui Shrine, Old Town — photo-derived
    },
    'day-2': {
      '12:00': [7.8467, 98.3377], // Wat Chalong — photo-derived
      '14:30': [7.7630, 98.3052], // Nai Harn viewpoint — photo-derived
      '17:00': [7.8278, 98.3133], // Big Buddha, Nakkerd Hills — photo-derived
      '18:30': [7.8300, 98.2950], // Kata Beach — photo-derived
    },
    'day-3': {
      '11:00': [7.9786, 98.3082], // Elephant sanctuary, Layan — photo-derived
      '13:30': [7.9199, 98.2803], // Cliffside above Kamala — photo-derived
      '22:00': [7.8940, 98.2953], // Bangla Road, Patong — photo-derived
    },
  },
  'dubai-and-abu-dhabi-in-three-days': {
    'day-1': {
      '09:00': [24.41193, 54.47543], // Sheikh Zayed Grand Mosque — photo-derived
      '13:00': [24.46052, 54.31800], // Emirates Palace / Etihad Towers, Corniche — photo-derived
      '14:30': [24.47578, 54.32195], // Marina Mall — photo-derived
      '16:00': [24.53336, 54.39883], // Louvre Abu Dhabi, Saadiyat Island — photo-derived
    },
    'day-2': {
      '10:30': [25.19671, 55.27884], // Dubai Mall — photo-derived
      '13:00': [25.19712, 55.27425], // Burj Khalifa, At the Top — photo-derived
      '16:00': [25.23577, 55.29875], // Dubai Frame, Zabeel Park — photo-derived
      '16:45': [25.20591, 55.34188], // Ras Al Khor / Creek skyline — photo-derived
      '18:15': [25.21542, 55.27954], // DIFC, Sheikh Zayed Road — photo-derived
    },
    'day-3': {
      '12:00': [25.11393, 55.13978], // The View at The Palm — photo-derived
      '14:00': [25.13759, 55.12753], // Atlantis, the Crescent — photo-derived
      '16:50': [25.14467, 55.19134], // Burj Al Arab / Madinat Jumeirah — photo-derived
    },
  },
  'cairo-and-alexandria-in-four-days': {
    'day-1': {
      '10:00': [29.97132, 31.12171], // Giza pyramids plateau — photo-derived
      '12:00': [29.97551, 31.13767], // The Sphinx, below Khafre — photo-derived
    },
    'day-2': {
      '10:30': [29.99402, 31.11996], // Grand Egyptian Museum — photo-derived
      '16:30': [30.04953, 31.26141], // Khan el-Khalili / Al-Muizz Street — photo-derived
    },
    'day-3': {
      '10:30': [31.21397, 29.88587], // Citadel of Qaitbay — photo-derived
      '12:00': [31.20888, 29.90870], // Bibliotheca Alexandrina — photo-derived
      '15:20': [31.18201, 29.89680], // Pompey's Pillar / Serapeum — photo-derived
      '15:45': [31.17862, 29.89305], // Catacombs of Kom el-Shoqafa — photo-derived
    },
    'day-4': {
      '10:40': [30.02944, 31.26061], // Citadel of Saladin / Mosque of Muhammad Ali — photo-derived
      '14:20': [30.03101, 31.27586], // Cave Church of St. Simon, Mokattam — photo-derived
      '15:45': [30.00572, 31.22980], // Coptic Cairo / Old Cairo — photo-derived
    },
  },
  'kuala-lumpur-in-three-days': {
    'day-1': {
      '09:00': [3.13767, 101.62313], // Village Park Restaurant, Damansara Uptown — photo-derived
      '11:30': [3.41295, 101.78824], // Chin Swee Caves Temple / Awana SkyWay, Genting — photo-derived
      '20:00': [3.14437, 101.71441], // Hawker stall, Bukit Bintang — photo-derived
      '22:00': [3.06448, 101.48396], // i-City, Shah Alam — photo-derived
    },
    'day-2': {
      '10:30': [3.23742, 101.68376], // Batu Caves — photo-derived
      '13:00': [3.14155, 101.69770], // Chinatown / Petaling Street — photo-derived
      '16:00': [3.12189, 101.68770], // Thean Hou Temple — photo-derived
      '19:30': [3.15800, 101.71100], // Petronas Towers / KLCC (rooftop pool) — photo-derived
    },
    'day-3': {
      '12:30': [3.18091, 101.66486], // Coffee stop, northwest KL — photo-derived
      '15:00': [3.14800, 101.71316], // Bukit Bintang / Pavilion — photo-derived
      '18:00': [3.27290, 101.55115], // Hillside skyride & luge park — photo-derived
      '21:30': [3.14657, 101.70951], // Jalan Alor durian stalls — photo-derived
    },
  },
  'washington-dc-in-a-day': {
    'the-day': {
      '10:00': [38.88990, -77.00910], // United States Capitol, East Front — photo-derived
      '11:00': [38.88870, -77.00470], // Library of Congress, Thomas Jefferson Building — photo-derived
      '15:55': [38.88950, -77.03530], // Washington Monument — photo-derived
      '16:40': [38.88480, -77.04400], // Tidal Basin / FDR & MLK Memorials — photo-derived
      '17:20': [38.88930, -77.05020], // Lincoln Memorial — photo-derived
    },
  },
  'new-york-city-in-four-days': {
    'day-1': {
      '10:00': [40.75276, -73.97801], // Grand Central Terminal — photo-derived
      '12:30': [40.74862, -73.98562], // Empire State Building — photo-derived
      '14:10': [40.75868, -73.98517], // Times Square — photo-derived
      '15:05': [40.75893, -73.97934], // Rockefeller Center — photo-derived
    },
    'day-2': {
      '13:15': [40.74127, -73.98934], // Flatiron Building — photo-derived
      '14:00': [40.71054, -74.01184], // 9/11 Memorial & World Trade Center — photo-derived
      '14:45': [40.70427, -74.01378], // Bowling Green / Charging Bull — photo-derived
      '15:15': [40.70110, -74.01290], // Staten Island Ferry, Whitehall Terminal — photo-derived
      '16:56': [40.68307, -73.94410], // Bed-Stuy — photo-derived
      '18:05': [40.76783, -73.98028], // Central Park / Columbus Circle — photo-derived
      '22:00': [40.75745, -73.98588], // Times Square at night — photo-derived
    },
    'day-3': {
      '10:00': [40.70505, -73.99592], // Brooklyn Bridge — photo-derived
      '12:00': [40.70302, -73.98989], // DUMBO — photo-derived
      '13:30': [40.75401, -74.00190], // Hudson Yards / The Vessel — photo-derived
      '14:20': [40.74683, -74.00552], // The High Line — photo-derived
      '14:45': [40.74267, -74.00689], // Chelsea Market — photo-derived
      '16:45': [40.74182, -74.01062], // Little Island — photo-derived
      '19:15': [40.75301, -73.97846], // Summit One Vanderbilt — photo-derived
      '21:15': [40.75377, -73.98373], // Bryant Park — photo-derived
    },
    'day-4': {
      '11:25': [40.75006, -73.96850], // United Nations — photo-derived
      '12:40': [40.75020, -73.96095], // Roosevelt Island / Four Freedoms Park — photo-derived
      '15:25': [40.77446, -73.97000], // Central Park, Bethesda Fountain — photo-derived
      '16:20': [40.78271, -73.95990], // The Guggenheim — photo-derived
    },
  },
};
