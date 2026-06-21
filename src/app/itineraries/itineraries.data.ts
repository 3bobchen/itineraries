import { Itinerary } from './itinerary.model';
import { STOP_COORDS } from './stop-coordinates';

export const ITINERARIES: Itinerary[] = [
  {
    slug: 'hong-kong-in-four-days',
    title: 'Hong Kong & Macau in four days',
    city: 'Hong Kong',
    country: 'Hong Kong SAR',
    tagline:
      'Four days from Kennedy Town to Macau and back — morning swims, Disneyland fireworks, zip lining in Cotai and the Peak after dark.',
    intro:
      'I stayed in Kennedy Town, the island\'s quiet western end, and got around on an Octopus card: the MTR, buses, one international ferry to Macau, and the Star Ferry more times than expected.',
    hero: {
      srcBase: 'hk-hero-star-ferry',
      width: 1024,
      height: 768,
      alt: 'Victoria Harbour at golden hour from the water, with the Hong Kong Island skyline silhouetted and a Star Ferry crossing on the right',
      caption: 'Mid-harbour on the Star Ferry, day one at golden hour.',
    },
    stats: {
      days: 4,
      pace: 'full',
      with: 'friends',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Harbour, Central, and the Peak',
        summary:
          'An early swim at Kennedy Town\'s waterfront shed, then east to IFC and the Mid-Levels Escalators in Central, back west for dim sum at Sheung Hei, the Star Ferry across the harbour, dinner in Wan Chai, and the Peak from Lugard Road after dark.',
        walkingKm: 9,
        mapGrouping: [['08:00', '10:30', '12:30', '14:30', '17:00', '19:00', '21:30']],
        image: {
          srcBase: 'hk-day1-peak',
          width: 1024,
          height: 768,
          alt: 'Night panorama of Victoria Harbour from Lugard Road on the Peak, with Central\'s towers lit below and Kowloon across the water',
          caption: 'The Lugard Road lookout after dark — Central below, Kowloon across the harbour.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '08:00',
              title: 'The swimming shed',
              body: 'Kennedy Town\'s floating timber pier has been the neighbourhood\'s morning ritual for decades, extending out over the harbour low to the water. I was there in the early morning, the serious swimmers already wrapping up, the skyline behind.',
              durationMin: 60,
              image: {
                srcBase: 'hk-stop-swim-shed',
                width: 768,
                height: 1024,
                alt: 'The Kennedy Town swimming pier extending over the harbour, a metal ladder into the water in the foreground, green hills and a passing ferry beyond',
                caption: 'The Kennedy Town swimming pier, early morning.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Island Line',
              from: 'Kennedy Town',
              to: 'Central',
              durationMin: 8,
              note: 'trains every 2–3 minutes',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'IFC and the Mid-Levels Escalators',
              body: 'One IFC stands at the northern edge of Central, facing the harbour. The Central-Mid-Levels Escalator runs from Queen\'s Road through SoHo — I walked it uphill through the late morning.',
              durationMin: 90,
              image: {
                srcBase: 'hk-stop-ifc-harbour',
                width: 768,
                height: 1024,
                alt: 'Victoria Harbour seen through the glass wall of Two IFC, the Central ferry piers directly below and Kowloon\'s towers across the water under heavy cloud',
                caption: 'The harbour from inside One IFC, storm clouds building over Kowloon.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Island Line',
              from: 'Central',
              to: 'Kennedy Town',
              durationMin: 8,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:30',
              title: 'Dim sum at Sheung Hei',
              body: 'Sheung Hei is a small dim sum place in Kennedy Town — har gow, cheung fun, milk tea to close.',
              durationMin: 60,
              image: {
                srcBase: 'hk-stop-sheung-hei',
                width: 768,
                height: 1024,
                alt: 'A golden fried taro dumpling (wu gok) on a small white plate at a dim sum table, with a pair of chopsticks alongside',
                caption: 'Wu gok at Sheung Hei.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'Sheung Hei',
              to: 'Kennedy Town praya',
              durationMin: 5,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:30',
              title: 'The playground courts and the Be Happy sign',
              body: 'The basketball courts above the praya, and on the surrounding walls the "HONG KONG · BE HAPPY" mural — unofficial, unfaded.',
              durationMin: 30,
              image: {
                srcBase: 'hk-stop-kt-street',
                width: 960,
                height: 1280,
                alt: 'A narrow Kennedy Town street between tower blocks, green minibuses queued below and the harbour visible at the end of the road',
                caption: 'Green minibuses where the street runs out into the harbour.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Island Line',
              from: 'Kennedy Town',
              to: 'Central',
              durationMin: 8,
              note: 'then a 10-minute walk to the Star Ferry piers',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '17:00',
              title: 'Star Ferry across the harbour',
              body: 'Ten minutes from Central Pier 7 to Tsim Sha Tsui — the Island skyline behind, Kowloon ahead. I sat on the upper deck.',
              durationMin: 15,
              image: {
                srcBase: 'hk-stop-star-ferry',
                width: 768,
                height: 1024,
                alt: 'A ferry catamaran moored at the Central piers, with Kowloon\'s towers visible across the harbour under a grey afternoon sky',
                caption: 'Central Pier 7 — the harbour crossing at five.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Tsuen Wan Line',
              from: 'Tsim Sha Tsui',
              to: 'Wan Chai',
              durationMin: 12,
              note: 'change at Admiralty',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '19:00',
              title: 'Dinner at Lou Shang',
              body: 'A Wan Chai restaurant that someone pointed me to — street-facing, good portions.',
              durationMin: 90,
              image: {
                srcBase: 'hk-stop-wan-chai',
                width: 768,
                height: 1024,
                alt: 'A narrow Wan Chai back street at dusk, lit by neon signs including a Caribbean Sea Sauna sign, with parked motorcycles along the pavement',
                caption: 'A back street off Wan Chai, dusk.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'bus',
              route: '15',
              from: 'Central Exchange Square',
              to: 'The Peak',
              durationMin: 35,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:30',
              title: 'The Peak from Lugard Road',
              body: 'Bus 15 climbs through the Mid-Levels. From Lugard Road I could see Central\'s towers below, Kowloon\'s glow across the water, and the whole harbour lit between them.',
              durationMin: 40,
              tip: 'Clouds move fast on the Peak — it was socked in when I arrived and clear twenty minutes later.',
              image: {
                srcBase: 'hk-stop-peak-night',
                width: 768,
                height: 1024,
                alt: 'Central\'s skyscrapers seen from Victoria Peak at night, the Bank of China tower lit in white, with Kowloon glowing across the harbour below',
                caption: 'Central from Lugard Road — Bank of China tower, Kowloon beyond.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Disneyland',
        summary:
          'Two rival bakeries on Lyndhurst Terrace for a late start, then the MTR all the way out to Lantau for a full day at Disneyland through the fireworks, and a late dinner at Paradise Dynasty in Mong Kok.',
        walkingKm: 10,
        mapGrouping: [['09:00', '10:30'], ['12:00'], ['21:00']],
        image: {
          srcBase: 'hk-day2-disney',
          width: 1280,
          height: 1706,
          alt: 'Hong Kong Disneyland\'s castle lit red and blue during the night show, with searchlights overhead and a drone formation of Mickey Mouse in the sky',
          caption: 'The "Momentous" night show at Hong Kong Disneyland.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '09:00',
              title: 'Breakfast at South Lane',
              body: 'South Lane is a short strip of cafés in Sai Wan, a few minutes from where I was staying.',
              durationMin: 40,
              image: {
                srcBase: 'hk-stop-south-lane',
                width: 768,
                height: 1024,
                alt: 'Dense residential tower blocks in Sai Wan seen from a narrow street below, no-entry road signs in the foreground',
                caption: 'Looking up from South Lane, Sai Wan.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'bus',
              from: 'Sai Wan',
              to: 'Lyndhurst Terrace',
              durationMin: 15,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Bakehouse and Vission',
              body: 'Two bakeries facing each other across Lyndhurst Terrace, just below the Mid-Levels Escalator. Bakehouse does the laminated pastry; Vission does the buns. I went to both.',
              durationMin: 30,
              image: {
                srcBase: 'hk-stop-shelley-st',
                width: 768,
                height: 1024,
                alt: 'A corner building in Central covered in a detailed mural, with a bilingual Shelley Street / 士利街 sign mounted above',
                caption: 'The mural corner at Shelley Street, just below Lyndhurst Terrace.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Tung Chung Line',
              from: 'Hong Kong Station',
              to: 'Disneyland Resort',
              durationMin: 35,
              note: 'change at Sunny Bay to the Disneyland Resort Line — the one with Mickey-shaped windows',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Hong Kong Disneyland',
              body: 'A full day from gates open to the fireworks and projections show at the end. I started with World of Frozen at the back of the park, then worked back through the other lands toward the castle. Mystic Manor was the most surprising ride.',
              durationMin: 510,
              bookAhead: true,
              image: {
                srcBase: 'hk-stop-disney-rc',
                width: 960,
                height: 1280,
                alt: 'The bright orange vertical track of the RC Racer coaster rising over Toy Story Land at Hong Kong Disneyland',
                caption: 'RC Racer mid-swing — Toy Story Land between the headline rides.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Tung Chung Line',
              from: 'Disneyland Resort',
              to: 'Mong Kok',
              durationMin: 45,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:00',
              title: 'Dinner at Paradise Dynasty, Mong Kok',
              body: 'Paradise Dynasty in Mong Kok after the theme park — xiaolongbao and noodles, late table.',
              durationMin: 90,
              image: {
                srcBase: 'hk-stop-mongkok',
                width: 768,
                height: 1024,
                alt: 'Red public-light-bus rank on a Mong Kok street at night, lined with neon signs and tower blocks',
                caption: 'The red-minibus rank under the neon, still loading well past ten.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'Macau',
        summary:
          'A very long day: the TurboJET to Macau, the UNESCO old town and the Grand Lisboa, Shake Shack and zip lining on the Cotai Strip, the Taipa ferry home — then Michelin dinner at K11 MUSEA, Chagee next door, Kai Kai dessert and Temple Street to finish.',
        walkingKm: 13,
        mapGrouping: [['09:00'], ['12:00', '13:30'], ['14:30', '17:00'], ['19:30', '21:00', '21:30']],
        image: {
          srcBase: 'hk-day3-macao',
          width: 1280,
          height: 1706,
          alt: 'The gold lotus-shaped Grand Lisboa tower rising over Lisboa Square in Macao under a clear blue sky',
          caption: 'The Grand Lisboa, looming over the old town\'s edge.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '09:00',
              title: 'Breakfast at 山道冰室',
              body: '山道冰室 is a bing sutt, the old-school Hong Kong café format: milk tea, coffee and toast served since before the city was air-conditioned.',
              durationMin: 40,
              image: {
                srcBase: 'hk-stop-bing-sutt',
                width: 960,
                height: 1280,
                alt: '山道冰室 on a busy corner under the elevated MTR viaduct in Sai Wan, yellow signboards showing the café menu in Chinese and English',
                caption: '山道冰室 under the MTR tracks.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'ferry',
              route: 'TurboJET',
              from: 'HK–Macau Ferry Terminal, Sheung Wan',
              to: 'Macau Outer Harbour',
              durationMin: 60,
              note: 'passport control on both ends — be at the terminal 30 minutes before sailing',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'The old town on foot',
              body: 'From Senado Square\'s wave-patterned cobblestones up through the back lanes to the Ruins of St. Paul\'s. Old Macau is a Portuguese colonial city absorbed into something entirely Cantonese — one block off the main drag and the tour groups thinned out, though the egg-tart and jerky shops didn\'t.',
              durationMin: 90,
              tip: 'I used the side staircase east of the Ruins — the façade framed by old tenements, with fewer people than the front approach.',
              image: {
                srcBase: 'hk-stop-macao-lane',
                width: 960,
                height: 1280,
                alt: 'A pastel Portuguese lane in old Macao with planters and green shutters, the Ruins of St. Paul\'s visible at its end',
                caption: 'One lane off the main drag, Ruins at the end, crowds gone.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'Ruins of St. Paul\'s',
              to: 'Grand Lisboa',
              durationMin: 10,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:30',
              title: 'The Grand Lisboa',
              body: 'The gold lotus tower dominates the peninsula skyline. I walked through the casino floor — cool, loud, operating at a scale the old town\'s lanes don\'t prepare you for.',
              durationMin: 25,
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'bus',
              from: 'Grand Lisboa',
              to: 'Cotai Strip',
              durationMin: 25,
              note: 'or any casino free shuttle — they run constantly',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:30',
              title: 'The Cotai Strip',
              body: 'Las Vegas rebuilt at double scale on reclaimed land — Shake Shack for lunch inside the Venetian, then the Londoner\'s Big Ben façade, the Parisian\'s half-scale Eiffel Tower, and the Venetian\'s indoor canal.',
              durationMin: 150,
              image: {
                srcBase: 'hk-stop-cotai',
                width: 768,
                height: 1024,
                alt: 'The Parisian Macao\'s half-scale Eiffel Tower rising over the landscaped boulevards of the Cotai Strip',
                caption: 'The Parisian\'s half-scale Eiffel over the Strip.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '17:00',
              title: 'Zip lining at ZIPCITY',
              body: 'A zip line circuit in southern Cotai, running between towers above the rooftops. The city spreads out differently from up there.',
              durationMin: 60,
              image: {
                srcBase: 'hk-stop-zipcity',
                width: 768,
                height: 1024,
                alt: 'The interior staging area of ZIPCITY in Cotai, dark walls streaked with coloured LED light strips and a black and white checkered flag ceiling',
                caption: 'Inside ZIPCITY before the first run.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'ferry',
              route: 'Cotai Water Jet',
              from: 'Taipa Ferry Terminal',
              to: 'Sheung Wan',
              durationMin: 60,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '19:30',
              title: 'Dinner at Cannubi, K11 MUSEA',
              body: 'Cannubi is a Michelin-listed Italian restaurant inside K11 MUSEA on the Kowloon waterfront. Good wine list, harbour outside.',
              durationMin: 90,
              image: {
                srcBase: 'hk-stop-k11-harbour',
                width: 768,
                height: 1024,
                alt: 'Victoria Harbour at night from the K11 MUSEA waterfront in Tsim Sha Tsui, the Hong Kong Island skyline lit up with reflections in the water',
                caption: 'The harbour from K11 MUSEA, after dinner.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'K11 MUSEA',
              to: 'K11 Art Mall',
              durationMin: 5,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:00',
              title: 'Chagee at K11 Art Mall',
              body: 'K11 Art Mall is a few minutes along the waterfront from K11 MUSEA. Tea at Chagee after dinner.',
              durationMin: 30,
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'K11 Art Mall',
              to: 'Jordan',
              durationMin: 20,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:30',
              title: 'Kai Kai dessert and Temple Street',
              body: 'Kai Kai is a Jordan institution for tong sui — traditional Chinese sweet soups served in small bowls. Grass jelly, sesame paste, red bean. Then Temple Street for the strip lights, claypot rice and fortune tellers.',
              durationMin: 50,
              image: {
                srcBase: 'hk-stop-kai-kai',
                width: 768,
                height: 1024,
                alt: 'Three bowls of tong sui on a table at Kai Kai in Jordan — tang yuan in ginger broth, red bean soup and black glutinous rice sweet soup',
                caption: 'Tong sui at Kai Kai — tang yuan, red bean, black sesame.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-4',
        number: 4,
        title: 'Causeway Bay',
        summary:
          'A last easy morning heading east — breakfast in Sai Wan, a stop at Heartwarming near Victoria Park\'s eastern edge, a walk through the park to the Causeway Bay crossing, and a final drink at Hysan Place before the Airport Express.',
        walkingKm: 5,
        mapGrouping: [['09:00'], ['10:30', '12:00']],
        image: {
          srcBase: 'hk-day4-cwb',
          width: 1280,
          height: 1706,
          alt: 'A Causeway Bay street crossing with the SOGO department store, a gold mirrored tower and a yellow double-decker bus in the sun',
          caption: 'Outside SOGO — Causeway Bay running at full volume.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '09:00',
              title: 'Breakfast at Tai O Cafe Kitchen',
              body: 'Tai O Cafe Kitchen in Sai Wan — milk tea and toast before the day.',
              durationMin: 40,
              image: {
                srcBase: 'hk-stop-milk-tea',
                width: 768,
                height: 1024,
                alt: 'A cup of Hong Kong-style milk tea in a ceramic Black & White evaporated milk branded cup and saucer on a formica café table',
                caption: 'Milk tea at Tai O Cafe Kitchen.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Island Line',
              from: 'Sai Ying Pun',
              to: 'Tin Hau',
              durationMin: 18,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Heartwarming',
              body: 'A café on the Tin Hau side of Victoria Park, before the walk through to Causeway Bay.',
              durationMin: 30,
              image: {
                srcBase: 'hk-stop-heartwarming',
                width: 768,
                height: 1024,
                alt: 'A black charcoal soft serve ice cream cone held up against the orange shopfront of Heartwarming in Tin Hau',
                caption: 'Black charcoal soft serve from Heartwarming.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'Tin Hau',
              to: 'Causeway Bay',
              durationMin: 15,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Causeway Bay and Hysan Place',
              body: 'Victoria Park\'s western gate opens onto the SOGO crossing — the department stores, the busiest pedestrian stretch on the island. I had a last drink at Hysan Place before leaving for the airport.',
              durationMin: 90,
              image: {
                srcBase: 'hk-stop-sogo',
                width: 960,
                height: 1280,
                alt: 'The Causeway Bay SOGO crossing seen from street level — a wide yellow zebra crossing in front of SOGO and a golden mirrored tower, with a yellow double-decker bus mid-crossing',
                caption: 'The SOGO crossing, Causeway Bay.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Airport Express',
              from: 'Hong Kong Station',
              to: 'Airport',
              durationMin: 24,
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'hong-kong-in-a-day',
    title: 'Hong Kong in a day',
    city: 'Hong Kong',
    country: 'Hong Kong SAR',
    tagline:
      'One layover day — dim sum at Sun Hing in the Western District, the Sai Ying Pun banyans, Lugard Road above the cloud, and the Star Ferry to Kowloon.',
    intro:
      'This wasn\'t a holiday so much as a dare — land in the morning, fly out in the evening, see how much I could fit in between. One carry-on, one Octopus card: the Airport Express in, the Peak Tram up, the Star Ferry across to finish.',
    hero: {
      srcBase: 'hk1d-hero-peak-storm',
      width: 1024,
      height: 768,
      alt: 'Storm clouds massing over the Hong Kong Island skyline and Victoria Harbour, seen from Victoria Peak',
      caption: 'Victoria Peak in the afternoon — the storm held off just long enough.',
    },
    stats: {
      days: 1,
      pace: 'transit',
      with: 'a friend',
    },
    days: [
      {
        slug: 'the-day',
        number: 1,
        title: 'Dim sum, the Peak, and the harbour',
        summary:
          'Yum cha at Sun Hing in Kennedy Town, the stone-wall banyans uphill in Sai Ying Pun, the Peak by tram with storm cloud over Kowloon, and the Star Ferry to Tsim Sha Tsui to finish.',
        walkingKm: 7,
        image: {
          srcBase: 'hk1d-day-harbour',
          width: 1024,
          height: 768,
          alt: 'The Hong Kong Island skyline and the Central harbourfront observation wheel under a grey October sky, seen from the water\'s edge',
          caption: 'The Central waterfront, grey but glorious.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '11:25',
              title: 'Dim sum at Sun Hing',
              body: 'Sun Hing is a no-frills Kennedy Town yum cha place that\'s been running since early morning. Har gow, siu mai, cheung fun and a barbecue-pork bun — exactly the first meal a long flight earns you.',
              image: {
                srcBase: 'hk1d-stop-sunhing',
                width: 768,
                height: 1024,
                alt: 'A table of dim sum at Sun Hing Restaurant — a steamer of har gow and siu mai, white plates of cheung fun and a barbecue-pork bun, green chopsticks alongside',
                caption: 'The table at Sun Hing — har gow, siu mai, cheung fun.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:48',
              title: 'The stone-wall trees',
              body: 'Sai Ying Pun\'s great Chinese banyans grow straight out of the old masonry retaining walls, roots fanning down the stone like poured wax. They\'re a protected, century-old quirk of the way the hillside was terraced — and far more striking in person than the guidebooks let on.',
              image: {
                srcBase: 'hk1d-stop-banyan',
                width: 768,
                height: 1024,
                alt: 'A Chinese banyan growing out of an old stone retaining wall, its aerial roots fanning down across the masonry',
                caption: 'A banyan rooted into the retaining wall, roots like poured wax.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:22',
              title: 'Victoria Peak',
              body: 'The Peak Tram tilts the city sideways in the window on the climb up. From Lugard Road the skyline foreshortens into a single flat wall — IFC standing clear above the harbour, the Star Ferries crossing like toys below, cloud stacking hard over Kowloon. A few minutes along the path and the whole thing rotates.',
              image: {
                srcBase: 'hk1d-stop-peak',
                width: 1024,
                height: 768,
                alt: 'The Hong Kong Island skyline seen from Lugard Road on Victoria Peak, green tree canopy in the foreground, Victoria Harbour and Kowloon beyond under heavy storm cloud',
                caption: 'From Lugard Road — the whole harbour under heavy cloud.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:44',
              title: 'Star Ferry to Kowloon',
              body: 'Central Pier 7, the upper deck, ten minutes to Tsim Sha Tsui. The Island skyline sat behind me the whole way across — IFC, the HSBC building, the mid-levels stacked above them — while Kowloon came forward: the Clock Tower at the pier, the Peninsula just behind it, the ICC off to the west.',
              image: {
                srcBase: 'hk1d-stop-ferry',
                width: 1024,
                height: 768,
                alt: 'The Kowloon skyline seen from the Star Ferry mid-crossing, the ICC tower rising on the left, a cruise ship at the West Kowloon terminal, harbour water grey-green under an afternoon sky',
                caption: 'Mid-crossing on the Star Ferry — Kowloon ahead.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'seoul-in-an-afternoon',
    title: 'Seoul in an afternoon',
    city: 'Seoul',
    country: 'South Korea',
    tagline:
      'One afternoon between flights — Namdaemun Gate on foot from Seoul Station, the long plaza up to Gwanghwamun, street food in Myeongdong, and the hanok lanes of Bukchon before the evening flight home.',
    intro:
      'I flew Shanghai–Seoul–Sydney with enough of a layover to leave the airport. The AREX gets you into Seoul Station in forty minutes; from there I walked north through the old city, took the subway between some stops, and made it back to Incheon in time for the evening gate.',
    hero: {
      srcBase: 'sel-hero-gwanghwamun',
      width: 1024,
      height: 768,
      alt: 'Gwanghwamun gate seen from the front, three arched stone entrances with the characters 光化門 above the central arch, visitors passing through under an overcast October sky',
      caption: 'Gwanghwamun — the main gate of Gyeongbokgung, from the plaza.',
    },
    stats: {
      days: 1,
      pace: 'transit',
      with: 'a friend',
    },
    days: [
      {
        slug: 'the-afternoon',
        number: 1,
        title: 'From Namdaemun to Bukchon',
        summary:
          'South from Seoul Station to Namdaemun Gate, then north up Sejong-daero to Gwanghwamun and the palace gate, down to Myeongdong for street food, and back up to the Bukchon hanok lanes before the flight.',
        walkingKm: 5,
        image: {
          srcBase: 'sel-day-bukchon',
          width: 768,
          height: 1024,
          alt: 'The main Bukchon alley looking downhill, traditional hanok walls with tile rooflines receding on both sides, a lone figure walking ahead, afternoon clouds in the sky',
          caption: 'The main alley in Bukchon Hanok Village, late afternoon.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '14:09',
              title: 'Namdaemun Gate',
              body: 'Sungnyemun — the Great South Gate — has stood here since 1398, burned in 2008, and was rebuilt and reopened in 2013. It sits on its own traffic island in the middle of a busy interchange, unexpectedly stone-calm against the towers directly behind it.',
              image: {
                srcBase: 'sel-stop-namdaemun',
                width: 768,
                height: 1024,
                alt: 'Sungnyemun seen from across the road, its double-tiered roof and stone wall enclosure against a backdrop of modern office towers under grey October cloud',
                caption: 'Namdaemun Gate from the road — rebuilt in 2013 after the 2008 fire.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:18',
              title: 'Gwanghwamun Square',
              body: 'Sejong-daero runs north from downtown to Gwanghwamun, the main gate of Gyeongbokgung. Water jets arc across the square in front of it, King Sejong\'s statue faces south from the middle of the road, and the Bugaksan ridge frames the gate behind. I walked the full length of the plaza and went through Gwanghwamun into the outer courtyard — the haetae guardian lions flanking the gate, the inner gate and throne hall in the distance.',
              image: {
                srcBase: 'sel-stop-sejong',
                width: 768,
                height: 1024,
                alt: 'The bronze statue of King Sejong — 세종대왕 — seated on his plinth in Gwanghwamun Square, under an overcast October sky',
                caption: 'King Sejong in Gwanghwamun Square.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:22',
              title: 'Myeongdong',
              body: 'Every stall in Myeongdong makes you stop. A waffle corn dog first, then bungeobbang from an iron-mold cart — the wrapper listed red bean, cream cheese, nutella, or custard — then hotteok from a side alley, then fresh-squeezed orange juice from a cart. I went into a department store to escape the crowds and ended up on the Tea Museum floor and then the patisserie.',
              image: {
                srcBase: 'sel-stop-bungeobbang',
                width: 768,
                height: 1024,
                alt: 'A hand holding a bungeobbang — a fish-shaped pastry — in its paper wrapper, with a printed checklist of fillings: red bean, cream cheese, nutella, custard',
                caption: 'Bungeobbang from an iron-mold cart, Myeongdong.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:38',
              title: 'Bukchon Hanok Village',
              body: 'Bukchon sits on the hillside between Gyeongbokgung and Changdeokgung — a neighbourhood of tile-roof hanok houses that were occupied into the 20th century and still are. The main alley is busy but the side streets go quiet. I was there at the end of the afternoon, the sky going orange over the rooftops.',
              image: {
                srcBase: 'sel-stop-bukchon',
                width: 768,
                height: 1024,
                alt: 'A Bukchon street sign hanging from a post under a large tree, traditional hanok walls and rooflines on both sides, visitors below a dramatic cloudy sky',
                caption: 'The Bukchon entrance, late afternoon.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'back-in-singapore',
    title: 'Back in Singapore',
    city: 'Singapore',
    country: 'Singapore',
    tagline:
      'Back for another transit day — Changi Beach before sunrise, the Merlion at breakfast hour, Palawan Beach\'s suspension bridge to the end of the continent, and Jewel before the gate.',
    intro:
      'I had the better part of a day between flights at Changi and spent it on a day MRT pass: northeast to the coast for the sunrise, west to Marina Bay for the Merlion, south to Sentosa for the southernmost point, and back east to Jewel before the lounge.',
    hero: {
      srcBase: 'sin-hero-jewel',
      width: 1024,
      height: 768,
      alt: 'The Rain Vortex waterfall falling through the centre of Jewel Changi Airport\'s domed atrium, surrounded by lush trees on multiple levels under the triangulated glass roof',
      caption: 'The Rain Vortex at Jewel Changi — the world\'s tallest indoor waterfall, inside an airport.',
    },
    stats: {
      days: 1,
      pace: 'transit',
      with: 'solo',
    },
    days: [
      {
        slug: 'the-day',
        number: 1,
        title: 'Sunrise, Merlion, and the end of the continent',
        summary:
          'Pre-sunrise at Changi Beach, then the MRT west to the Merlion and Marina Bay waterfront, south to Palawan Beach and across the suspension bridge to the southernmost point of continental Asia — quiet at that hour — then back east to Jewel and the rain vortex before the gate.',
        walkingKm: 5,
        image: {
          srcBase: 'sin-day-changi',
          width: 1024,
          height: 768,
          alt: 'Changi Beach at pre-sunrise, lamps still lit along white colonial balustrades descending to a sandy shore, palm trees against an orange-gold sky, a glasshouse building to the right',
          caption: 'The Changi coast before the sun was up — lamps still on, nobody there.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '06:21',
              title: 'Changi Beach at dawn',
              body: 'I took the MRT to the northeast end of the island before the sun was up — the seafront lamps still lit, the sky going orange above the Strait. Changi Beach is long and quiet: white colonial-era railings along the promenade, palm trees, almost nobody there at that hour.',
              image: {
                srcBase: 'sin-stop-changi',
                width: 768,
                height: 1024,
                alt: 'Pre-sunrise over the Changi Strait, a crescent moon in the orange sky, sailboats moored on still water, silhouetted trees to the right',
                caption: 'The Changi Strait before sunrise — crescent moon, sailboats at anchor.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '08:36',
              title: 'Merlion Park',
              body: 'The Merlion is at the mouth of the Singapore River — the stone lion-fish spout facing the harbour, Marina Bay Sands across the basin behind it. I walked the waterfront promenade in the early morning, the financial district towers on one side and the bay on the other.',
              image: {
                srcBase: 'sin-stop-merlion',
                width: 768,
                height: 1024,
                alt: 'The Merlion spout close up, water arcing into the bay, with Marina Bay Sands\' three towers rising directly behind it under a cloudy morning sky',
                caption: 'The Merlion and Marina Bay Sands, early morning.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '09:53',
              title: 'Palawan Beach, Southernmost Point',
              body: 'A suspension bridge from Palawan Beach leads to a small wooden islet with a marker for the southernmost point of continental Asia — open water on three sides, the strait ahead. The beach behind was mostly empty.',
              image: {
                srcBase: 'sin-stop-palawan',
                width: 1024,
                height: 768,
                alt: 'Palawan Beach seen from the lookout tower on the southernmost islet — a curved white sand beach with clear blue-green water, palm trees and dense jungle, almost empty in the morning',
                caption: 'Palawan Beach from the islet lookout — the sand curving back to Sentosa, mostly empty.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:08',
              title: 'Jewel Changi Airport',
              body: 'Jewel is a glass dome attached to Terminal 1 — the Rain Vortex falls from a circular aperture in the roof through the full height of the atrium, the sound carrying down through the shopping and garden levels below. I walked the levels before going through to departures.',
              image: {
                srcBase: 'sin-stop-jewel',
                width: 768,
                height: 1024,
                alt: 'The Rain Vortex at Jewel Changi falling from the circular aperture in the dome through the full height of the atrium, surrounded by tall trees, with crowds on the walkways below',
                caption: 'The Rain Vortex from mid-level — full height of the atrium, trees on all sides.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'riyadh-in-two-days',
    title: 'Riyadh in two days',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    tagline:
      'Two days in Riyadh — the towers of KAFD and Masmak Fort in the old quarter, At-Turaif and Bujairi Terrace in the midday heat, and the Tuwaiq escarpment an hour west.',
    intro:
      'I got around on the Riyadh Metro for the first day — clean, fast, and rarely crowded — and hired a car on the second for the drive out to Diriyah and the Edge of the World.',
    hero: {
      srcBase: 'ruh-hero-edge',
      width: 1024,
      height: 768,
      alt: 'The Tuwaiq escarpment at the Edge of the World, the rocky plateau surface dropping away to a canyon and flat desert below under a clear late-afternoon sky',
      caption: 'The Edge of the World — the Tuwaiq plateau drops to desert floor, late afternoon.',
    },
    stats: {
      days: 2,
      pace: 'steady',
      with: 'family',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'KAFD, Masmak, and the Museum',
        summary:
          'A morning in the towers and plazas of the King Abdullah Financial District, lunch and aircon at Kingdom Centre, then south to the old quarter — inside Masmak Fort for the tour and the insignia exhibit, and the National Museum of Saudi Arabia to close.',
        walkingKm: 4,
        mapGrouping: [['11:00', '12:00'], ['16:00', '18:00']],
        image: {
          srcBase: 'ruh-kafd-building',
          width: 1024,
          height: 768,
          alt: 'A curving white lattice-facade office tower in the King Abdullah Financial District, Riyadh, with palm trees and a parked car below under a blue midday sky',
          caption: 'A KAFD tower, its lattice facade in the midday heat.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '11:00',
              title: 'King Abdullah Financial District',
              body: 'The King Abdullah Financial District is Riyadh\'s planned financial hub in the north — a cluster of towers set around wide plazas and pedestrian streets still finding their rhythm. The architecture does most of the work: undulating lattice facades, a metro station whose ceiling ribs look like something structural turned decorative. Quiet on a September morning.',
              image: {
                srcBase: 'ruh-kafd-building',
                width: 1024,
                height: 768,
                alt: 'A curving white lattice-facade office tower in the King Abdullah Financial District, Riyadh, with palm trees and a parked car below under a blue midday sky',
                caption: 'A KAFD tower, its lattice facade in the midday heat.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Kingdom Centre',
              body: 'Kingdom Centre is a 302-metre tower with a sky bridge cutting through the top. I went in mainly for the air conditioning — at 40 degrees outside, the mall floor was a reasonable midday reset.',
              image: {
                srcBase: 'ruh-stop-kingdom',
                width: 1024,
                height: 768,
                alt: 'The Kingdom Centre tower in Riyadh seen from street level, the sun directly behind its parabolic arch, a palm frond visible on the right',
                caption: 'Kingdom Centre from street level, the arch cutting the sun.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:00',
              title: 'Masmak Fort',
              body: 'Masmak is a 19th-century mud-brick fort in the old quarter, the site where Abdulaziz ibn Saud took Riyadh from the Rashidis in 1902. I went inside for the tour and stayed for the insignia exhibit — a room of Saudi heraldry and royal emblems that gives a clean narrative of the unification. Compact and well-presented.',
              image: {
                srcBase: 'ruh-stop-masmak',
                width: 1024,
                height: 768,
                alt: 'Masmak Fort\'s two round mud-brick towers and outer walls under a deep blue sky, stone paving in the foreground, late afternoon light',
                caption: 'Masmak Fort — the mud-brick towers in late afternoon light.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '18:00',
              title: 'National Museum of Saudi Arabia',
              body: 'Eight halls spanning prehistoric Arabia through the modern Saudi state. I did a quick pass — the geological sections and the pre-Islamic maps of the peninsula are the most visually striking.',
              image: {
                srcBase: 'ruh-stop-museum',
                width: 1024,
                height: 768,
                alt: 'A large bilingual Arabic and English map panel of the Kingdom of Saudi Arabia at the National Museum in Riyadh, with historical site locations marked across the peninsula',
                caption: 'The peninsula mapped — the National Museum\'s Saudi Arabia panel.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Diriyah and the Edge of the World',
        summary:
          'Hired a car out to Diriyah — At-Turaif and Bujairi Terrace in 40-degree heat — then northwest to walk the Tuwaiq escarpment for over an hour, and back to Riyadh for the lit towers of Al Nakheel at night.',
        walkingKm: 6,
        image: {
          srcBase: 'ruh-day2-edge',
          width: 768,
          height: 1024,
          alt: 'The view from the Tuwaiq escarpment edge, white limestone rocks in the foreground and the desert floor hundreds of metres below, afternoon haze on the horizon',
          caption: 'From the cliff edge — the desert floor far below, afternoon haze.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Ad Diriyah',
              body: 'At-Turaif is the UNESCO-listed mud-brick walled city from which the Diriyah Emirate was governed in the 18th century. Bujairi Terrace is the restored visitor area adjacent, with cafés and palm-shaded plazas facing the ruins. I went through both — the 40-degree heat keeping every stop shorter than planned.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:30',
              title: 'Edge of the World',
              body: 'Jebel Fihrayn is the local name for the Tuwaiq escarpment — a cliff line that drops several hundred metres straight down to flat desert. The road out is an hour of plateau with nothing to signal what\'s coming, then the edge opens up and the scale of it lands all at once. I walked along the clifftops for over an hour.',
              image: {
                srcBase: 'ruh-stop-escarpment',
                width: 768,
                height: 1024,
                alt: 'The rocky surface of the Tuwaiq plateau at the Edge of the World, scattered limestone stones and sparse desert scrub, deep blue sky above',
                caption: 'The plateau surface at the escarpment edge.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '20:00',
              title: 'Al Nakheel',
              body: 'Al Nakheel is a cluster of glass towers in northern Riyadh, lit up at night against the dark. After the desert, the contrast is stark.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'singapore-in-a-day',
    title: 'Singapore in a day',
    city: 'Singapore',
    country: 'Singapore',
    tagline:
      'A transit day with friends — Maxwell hawker centre for breakfast, the OCBC Skyway between the Supertrees, NTU to visit friends on exchange, and the Rain Vortex at Jewel before the gate.',
    intro:
      'I had a day in Singapore between flights with a few friends — breakfast at Maxwell in Tanjong Pagar, the MRT to Gardens by the Bay for the OCBC Skyway walk, a Grab across to NTU to visit friends on exchange, and back east to Jewel and the Rain Vortex before departures.',
    hero: {
      srcBase: 'sg2-hero-skyway',
      width: 1024,
      height: 768,
      alt: "Marina Bay Sands' three towers and the Singapore financial district skyline seen from the OCBC Skyway at Gardens by the Bay, with the lush green canopy of the gardens below and blue sky above",
      caption: 'Looking toward Marina Bay Sands from the OCBC Skyway — the gardens below, the city beyond.',
    },
    stats: {
      days: 1,
      pace: 'transit',
      with: 'friends',
    },
    days: [
      {
        slug: 'the-day',
        number: 1,
        title: 'Maxwell, Supertrees, and Nanyang',
        summary:
          "Breakfast at Maxwell hawker centre in Tanjong Pagar, then the MRT to Gardens by the Bay and the OCBC Skyway between the Supertrees, a Grab across the island to NTU's campus to see friends on exchange, and back east to Jewel before the gate.",
        walkingKm: 4,
        image: {
          srcBase: 'sg2-day-gbtb',
          width: 1024,
          height: 768,
          alt: 'The Singapore Flyer ferris wheel and city skyline seen from the elevated OCBC Skyway at Gardens by the Bay, with a Supertree canopy visible in the lower right corner and blue sky with hazy clouds',
          caption: 'The Singapore Flyer and downtown from the Skyway — the view east along the bay.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '08:39',
              title: 'Maxwell Food Centre',
              body: 'Maxwell is an old colonial market building in Tanjong Pagar that runs as a hawker centre — stalls of Malay, Chinese, and Indian food, tables crammed together under the ceiling fans. I had nasi padang: rice with braised fried chicken, long beans, bean sprouts, and two sambals on the side.',
              image: {
                srcBase: 'sg2-stop-maxwell',
                width: 768,
                height: 1024,
                alt: 'A styrofoam tray of nasi padang on a green hawker table — rice, braised fried chicken with red sambal, stir-fried long beans, bean sprouts, and two small cups of sauce',
                caption: 'Nasi padang at Maxwell — rice, fried chicken, and a few sides for breakfast.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '09:54',
              title: 'Gardens by the Bay, OCBC Skyway',
              body: 'The Supertrees are large steel lattice structures covered in bromeliads and ferns — solar panels on top, planters all down the trunk. The OCBC Skyway bridges two of the taller ones at canopy height, with the gardens below and a clear view to Marina Bay Sands and the financial district on one side and the Flyer and the strait on the other.',
              image: {
                srcBase: 'sg2-stop-supertrees',
                width: 1024,
                height: 768,
                alt: 'Three Supertree structures at Gardens by the Bay seen from directly below, their branching steel canopies spreading against a blue sky, a palm tree visible at the lower left',
                caption: 'The Supertrees from ground level — lattice steel and planted ferns reaching up.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:01',
              title: 'NTU campus',
              body: 'NTU is on the far west of the island. The Hive is one of the more recognisable buildings on campus — stacked oval floors of exposed concrete with plants trailing between the levels, open at the base. I met up with friends who were on exchange there and walked around the grounds for a while.',
              image: {
                srcBase: 'sg2-stop-ntu',
                width: 768,
                height: 1024,
                alt: 'The Hive building at NTU, shot from directly below — five stacked oval concrete floors with trailing green plants between each level, against a dramatic cloudy sky',
                caption: 'The Hive at NTU — stacked concrete ovals with trailing plants between the floors.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:42',
              title: 'Jewel Changi Airport',
              body: 'Jewel connects to Terminal 1 — the Rain Vortex falls from a circular aperture in the dome straight through the full height of the atrium, the glass roof grid surrounding it on all sides. I went up a few levels to stand close to the top before crossing through to departures.',
              image: {
                srcBase: 'sg2-stop-jewel',
                width: 1024,
                height: 768,
                alt: 'The Rain Vortex at Jewel Changi seen from close below the circular roof aperture — water falling in a thick column through a grid of white steel and glass triangles, silhouetted trees below',
                caption: 'The Rain Vortex from just below the aperture — glass dome grid, water column, trees.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'bangkok-in-two-days',
    title: 'Bangkok in two days',
    city: 'Bangkok',
    country: 'Thailand',
    tagline:
      'Two days in Bangkok — the Maeklong railway market and Damnoen Saduak by longtail, a Chao Phraya ferry to ICONSIAM, HardMission after dark, and a bicycle tour through the Thonburi canals to Wat Paknam before the flight.',
    intro:
      'I landed the night before and spent it around Khao San Road in the old town. The two days after ran on Grab and started early — southwest out of the city for the railway and floating markets the first morning, a hardstyle festival across town that night, then a bicycle tour through the Thonburi canals on the last day before the evening flight.',
    hero: {
      srcBase: 'bkk-hero-river',
      width: 1024,
      height: 768,
      alt: 'An ornate Thai-roofed wooden ferry crossing the Chao Phraya river in Bangkok, riverside towers behind under a dramatic cloud-streaked sky',
      caption: 'A teak ferry on the Chao Phraya, late afternoon.',
    },
    stats: {
      days: 2,
      pace: 'steady',
      with: 'friends',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Floating markets, the river, and HardMission',
        summary:
          'An early start southwest of the city for the Maeklong railway market and the Damnoen Saduak floating market, back into Bangkok for a Chao Phraya ferry down to ICONSIAM, and east to BITEC for HardMission after dark.',
        walkingKm: 5,
        mapGrouping: [['08:30', '11:00'], ['16:00'], ['19:00']],
        image: {
          srcBase: 'bkk-day1-maeklong',
          width: 1279,
          height: 1706,
          alt: 'The Maeklong Railway Market, stalls and awnings lining a working railway track that runs straight through the middle, baskets of produce stacked at the rail edge under a blue sky',
          caption: 'The Maeklong Railway Market, stalls set right against the rails.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '08:30',
              title: 'Maeklong Railway Market',
              body: 'The market at Maeklong lays its stalls, awnings and baskets of produce directly over a working railway track. When the train comes through, the vendors fold the awnings back and pull the goods in, the carriages pass within a hand\'s width of the stalls, and it all slides out again behind. I was there for it.',
              image: {
                srcBase: 'bkk-stop-maeklong',
                width: 768,
                height: 1024,
                alt: 'The covered platform at Maeklong station, corrugated-iron awnings over two railway tracks, market stalls along the left and travellers seated on a bench to the right',
                caption: 'Maeklong station, the market crowding the platform.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:00',
              title: 'Damnoen Saduak floating market',
              body: 'From Maeklong it\'s a short way on to Damnoen Saduak, the floating market out on the canals. I went through it by longtail — vendors paddling flat wooden boats between the stilt houses, cooking and selling fruit, noodles and drinks off the water, the canal jammed tight enough in places to stop the traffic.',
              image: {
                srcBase: 'bkk-stop-damnoen',
                width: 768,
                height: 1024,
                alt: 'The view from a longtail boat at Damnoen Saduak floating market, rainbow beach umbrellas overhead and wooden vendor boats crowding the narrow canal ahead',
                caption: 'From the longtail at Damnoen Saduak.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:00',
              title: 'A ferry to ICONSIAM',
              body: 'Back in the city I took a Chao Phraya express ferry downriver to ICONSIAM, the riverside mall on the Thonburi bank. The river is the best way to read Bangkok — teak ferries, hotel shuttle boats and barges all working the same brown water, towers stacked along both banks.',
              image: {
                srcBase: 'bkk-stop-river',
                width: 1024,
                height: 768,
                alt: 'A wide view down the Chao Phraya river in Bangkok, residential towers on the left bank and the downtown skyline in the distance under tall white clouds',
                caption: 'The Chao Phraya opening toward downtown.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '19:00',
              title: 'HardMission',
              body: 'The night was HardMission The Prophecy at BITEC in Bang Na — a hardstyle festival, Darren Styles on the bill. After a day of markets and the river it was a hard turn: lasers, a full floor, and a long way back across the city after.',
              image: {
                srcBase: 'bkk-stop-hardmission',
                width: 1024,
                height: 576,
                alt: 'A symmetric fan of white and blue laser beams radiating from the stage over a darkened festival crowd at HardMission inside BITEC',
                caption: 'Lasers over the floor at HardMission, BITEC.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Old Bangkok by bike',
        summary:
          'A morning bicycle tour out of the old town and across the river into Thonburi — the gilded halls of Wat Paknam, the canal lanes and a boat crossing, and a lunch stop before the ride back and the airport.',
        walkingKm: 3,
        mapGrouping: [['07:30'], ['10:30', '12:00']],
        image: {
          srcBase: 'bkk-day2-buddha',
          width: 1279,
          height: 1706,
          alt: 'The giant golden Buddha at Wat Paknam seen from below, the seated figure rising against a blue sky scattered with cloud',
          caption: 'The great golden Buddha at Wat Paknam, from the base.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '07:30',
              title: 'The old town by bike',
              body: 'The tour set off from the old town early, while it was still cool and the lanes around the Grand Palace and Wat Pho were quiet. Underneath runs Sanam Chai, the metro station built like a Rattanakosin throne hall — a red and gold coffered ceiling, gilded lotus columns, a chequerboard floor.',
              image: {
                srcBase: 'bkk-stop-sanamchai',
                width: 768,
                height: 1024,
                alt: 'The concourse of Sanam Chai MRT station in Bangkok\'s old town, a red coffered ceiling patterned in gold, white columns with gilt lotus capitals, hanging lanterns and a chequerboard floor',
                caption: 'Sanam Chai station, built like a throne hall.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Wat Paknam',
              body: 'Wat Paknam, in Phasi Charoen, is dominated by an enormous golden Buddha you can see from streets away. Below it the halls are dense with gilt carving and painted ceilings — glass cases of relics under circular gold mandalas. The tour pulled in off the canal lanes.',
              image: {
                srcBase: 'bkk-stop-watpaknam',
                width: 768,
                height: 1024,
                alt: 'An ornate hall inside Wat Paknam, a deep-red ceiling painted with circular gold mandalas above a heavily gilded carved column and wooden display cases',
                caption: 'Inside Wat Paknam, the gilded relic hall.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'The Thonburi canals',
              body: 'Most of the morning was on the Thonburi side, in the khlongs — the canal network west of the river where Bangkok still runs on water. Narrow waterways between stilt houses and small canal-side shrines, a boat ride partway through where the lanes gave out, and a lunch stop in the backstreets before the ride back and out to the airport.',
              image: {
                srcBase: 'bkk-stop-canal',
                width: 768,
                height: 1024,
                alt: 'A quiet Thonburi canal seen from a boat, a small red-and-gold shrine and a large tree on the left bank, a green-roofed stilt house on the right, still water reflecting the sky',
                caption: 'A canal-side shrine deep in the Thonburi khlongs.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'phuket-in-four-days',
    title: 'Phuket in four days',
    city: 'Phuket',
    country: 'Thailand',
    tagline:
      'Four days across Phuket — a speedboat circuit of Ko Phi Phi Leh, the Nine Emperor Gods Festival in Old Town, the Big Buddha at dusk, and Bangla Road at night.',
    intro:
      'I stayed the first two nights at Panwaburi on Cape Panwa, on the quieter southeastern headland, then moved across to Patong for the last two. I rented a car for all of it.',
    hero: {
      srcBase: 'phu-hero-pileh',
      width: 1024,
      height: 768,
      alt: 'Pileh Lagoon on Ko Phi Phi Leh seen from the water, enclosed on three sides by vertical limestone karst, turquoise water with longtail boats clustered at the entrance',
      caption: 'Pileh Lagoon — limestone on three sides, longtail boats at the entrance.',
    },
    stats: {
      days: 4,
      pace: 'steady',
      with: 'friends',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Ko Phi Phi and the festival',
        summary:
          'A speedboat tour from the east coast to Ko Phi Phi Leh — through Pileh Lagoon, then a walk-in to Maya Bay and a swim. Dinner at Three Monkeys in Chalong, then the Nine Emperor Gods Festival in the Old Town after dark.',
        walkingKm: 4,
        mapGrouping: [['10:30', '13:30'], ['20:30', '22:00']],
        image: {
          srcBase: 'phu-day1-maya',
          width: 1279,
          height: 1706,
          alt: 'Maya Bay on Ko Phi Phi Leh, turquoise water lapping white sand with limestone karst walls rising on both sides under a blue sky',
          caption: 'Maya Bay — three limestone walls, white sand, the beach from The Beach.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Pileh Lagoon, Ko Phi Phi Leh',
              body: 'The tour leaves from the east coast and takes about an hour to reach Ko Phi Phi Leh. Pileh is first — an almost enclosed bay with vertical limestone karst on three sides, the water an improbable turquoise green. Longtail boats queue at the entrance; ours drifted through slowly.',
              bookAhead: true,
              image: {
                srcBase: 'phu-stop-pileh',
                width: 768,
                height: 1024,
                alt: 'A longtail tour boat moored at the base of a sheer limestone cliff on Ko Phi Phi Leh, turquoise water below and dense tropical vegetation above',
                caption: 'Barokat Tour longtail at the cliff face, Pileh Lagoon.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:30',
              title: 'Maya Bay',
              body: 'Boats can\'t enter Maya Bay directly since the four-year conservation closure ended — the tour ties up on Ko Phi Phi Leh\'s back side and I walked a flat path across the isthmus, about ten minutes. The bay opens at the end of the path: three limestone walls, white sand, turquoise water. I snorkelled in it.',
              image: {
                srcBase: 'phu-stop-maya',
                width: 768,
                height: 1024,
                alt: 'A weathered driftwood Welcome to Maya Bay sign against a limestone cliff face',
                caption: 'The entrance sign at Maya Bay — driftwood at the cliff.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '20:30',
              title: 'Three Monkeys',
              body: 'Three Monkeys is an open-air garden bar and restaurant in Chalong, tables outside under a large tree strung with fairy lights. A good place to land after a day on the water.',
              image: {
                srcBase: 'phu-stop-three-monkeys',
                width: 768,
                height: 1024,
                alt: 'The Three Monkeys neon sign glowing white at night, surrounded by string lights and tropical foliage at the garden restaurant entrance',
                caption: 'Three Monkeys, Chalong — neon sign, fairy lights.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '22:00',
              title: 'Old Town and Jui Tui Shrine',
              body: 'The Nine Emperor Gods Festival runs for nine days in October, centred on the Taoist shrines in Phuket Old Town. I walked around at night — food stalls along the lanes, the Jui Tui Shrine entrance gated in yellow banners and red lanterns, the streets crowded and lit.',
              image: {
                srcBase: 'phu-stop-jui-tui',
                width: 768,
                height: 1024,
                alt: 'The gateway of Jui Tui Shrine at night during the Nine Emperor Gods Festival, decorated with yellow banners and red Chinese lanterns, a stone lantern in the courtyard beyond',
                caption: 'Jui Tui Shrine, Old Town — Nine Emperor Gods Festival, late October.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Temples, the Buddha, and Kata at sunset',
        summary:
          'South from Chalong to Wat Chalong for the temple complex, then to a viewpoint above Nai Harn Beach, up to the Big Buddha around sunset, and down to Kata for drinks as it got dark.',
        walkingKm: 6,
        mapGrouping: [['12:00'], ['14:30', '17:00', '18:30']],
        image: {
          srcBase: 'phu-day2-buddha',
          width: 1279,
          height: 1706,
          alt: 'The Big Buddha of Phuket, a 45-metre white marble seated statue on the Nakkerd Hills, visitors on the steps at its base, sky going orange at sunset',
          caption: 'The Big Buddha at Nakkerd Hills — sunset light on white marble.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Wat Chalong',
              body: 'Wat Chalong is the island\'s main Buddhist temple — a wide compound with the Chedi Phutthakhom as the centrepiece, gilded and multi-tiered, rising above the surrounding buildings. I walked the grounds.',
              image: {
                srcBase: 'phu-stop-chalong',
                width: 768,
                height: 1024,
                alt: 'The Chedi Phutthakhom at Wat Chalong, a multi-tiered gilded Buddhist stupa rising above the temple compound under a bright cloudy sky',
                caption: 'The Chedi Phutthakhom at Wat Chalong.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:30',
              title: 'Nai Harn viewpoint',
              body: 'The road to the south coast crosses a low ridge before dropping to Nai Harn. From the pull-off above there\'s a view down to the bay — the beach curving below, one resort tucked into the treeline, the Andaman beyond.',
              image: {
                srcBase: 'phu-stop-nai-harn',
                width: 768,
                height: 1024,
                alt: 'Nai Harn Beach seen from a hillside road above, a crescent of white sand and turquoise water backed by dense tropical hills, yellow flowering trees in the foreground',
                caption: 'Nai Harn from the road above — the beach curving into the bay.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '17:00',
              title: 'Big Buddha',
              body: 'The Big Buddha is a 45-metre white marble statue on the Nakkerd Hills above Chalong, visible from most of southern Phuket on a clear day. I was there around sunset — the platform crowded, the light going orange on the marble, the island spread out below.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '18:30',
              title: 'Kata Beach',
              body: 'Kata Beach has a stretch of open-air bars at its north end that fill up as the sun drops. I found a spot and watched the Andaman go orange.',
              image: {
                srcBase: 'phu-stop-kata',
                width: 768,
                height: 1024,
                alt: 'An open-air beach bar at Kata Beach at sunset, palm trees lit purple by bar lighting, outdoor seating facing the sea with a golden sky and the Andaman beyond',
                caption: 'Kata Beach at sunset — the bar filling as the light went orange.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'Elephants, Kamala, and Bangla Road',
        summary:
          'North to an elephant sanctuary in the Layan hills to feed the herd, then south along the coast for lunch at a cliffside spot above Kamala, and Bangla Road and Illuzion at night.',
        walkingKm: 5,
        mapGrouping: [['11:00'], ['13:30'], ['22:00']],
        image: {
          srcBase: 'phu-day3-bangla',
          width: 1279,
          height: 1706,
          alt: 'The illuminated Welcome to Patong Beach Phuket Thailand arch over Bangla Road at night, crowds below, neon signs lining the pedestrianised street',
          caption: 'Bangla Road at night — the arch, the neon, the crowd.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '11:00',
              title: 'Elephant sanctuary',
              body: 'The sanctuary is in the hills north of the city — a rescue operation that has visitors feed and walk with the herd. I spent a couple of hours there, cutting watermelon and bananas to feed by hand. The elephants were relaxed about the whole process in a way that made it easy to underestimate how large they are.',
              image: {
                srcBase: 'phu-stop-elephant',
                width: 768,
                height: 1024,
                alt: 'A rescued elephant up close at a sanctuary in northern Phuket, turning toward the camera, dusty ground and trees in the background',
                caption: 'At the elephant sanctuary — feeding by hand.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:30',
              title: 'Cliffside above Kamala',
              body: 'A cliffside restaurant above the rocks between Patong and Kamala — large boulders below, the Andaman out to the west, the Kamala headland visible around the curve.',
              image: {
                srcBase: 'phu-stop-kamala',
                width: 768,
                height: 1024,
                alt: 'Large granite boulders and dense tropical vegetation on a clifftop above Kamala Beach, the Andaman Sea and a headland visible in the distance',
                caption: 'Cliffside above Kamala — boulders, sea, and the headland.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '22:00',
              title: 'Bangla Road',
              body: 'Bangla Road is Patong\'s main nightlife strip — pedestrianised, dense, running inland from the beach. I went to Illuzion, one of the bigger clubs on the road, which runs a production show with full light and video rigs. The street itself is worth walking even before going in anywhere.',
              image: {
                srcBase: 'phu-stop-bangla',
                width: 768,
                height: 1024,
                alt: 'The illuminated Welcome to Patong Beach arch over Bangla Road at night, neon signs lining the street, crowds below',
                caption: 'Bangla Road — the arch and the street ahead.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'dubai-and-abu-dhabi-in-three-days',
    title: 'Dubai and Abu Dhabi in three days',
    city: 'Dubai',
    country: 'United Arab Emirates',
    tagline:
      'Three days across the Emirates — the Sheikh Zayed Grand Mosque and the Louvre on Saadiyat in Abu Dhabi, then the coach to Dubai for the Burj Khalifa, the creek at dusk, and the Palm.',
    intro:
      'I started in Abu Dhabi for a day — the Sheikh Zayed Grand Mosque, the Corniche, and the Louvre out on Saadiyat Island — then took the intercity coach across to Dubai after dark. The two Dubai days ran on taxis and Careem: Downtown and the Burj Khalifa first, then the Palm and the Jumeirah coast before the evening flight.',
    hero: {
      srcBase: 'dxb-hero-skyline',
      width: 1024,
      height: 768,
      alt: 'The Dubai Downtown skyline in silhouette across the water at dusk, the Burj Khalifa\'s needle in the centre, the low sun glittering on the creek in the foreground',
      caption: 'The Downtown skyline across the creek at Ras Al Khor, dusk.',
    },
    stats: {
      days: 3,
      pace: 'steady',
      with: 'family',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Abu Dhabi: the Grand Mosque, the Corniche, and the Louvre',
        summary:
          'A full day in Abu Dhabi before the move to Dubai — the Sheikh Zayed Grand Mosque first thing, the Corniche past Emirates Palace and the Etihad Towers, a lunch break at Marina Mall, and the Louvre out on Saadiyat Island, then the intercity coach to Dubai after dark.',
        walkingKm: 4,
        mapGrouping: [['09:00'], ['13:00', '14:30'], ['16:00']],
        image: {
          srcBase: 'dxb-day1-mosque',
          width: 1706,
          height: 1279,
          alt: 'The Sheikh Zayed Grand Mosque in Abu Dhabi seen from the approach road, white domes and a row of minarets above the gardens under a pale sky',
          caption: 'The Sheikh Zayed Grand Mosque from the approach, mid-morning.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '09:00',
              title: 'Sheikh Zayed Grand Mosque',
              body: 'The Sheikh Zayed Grand Mosque sits south of the city, all white marble and gold — domes, a forest of minarets, and a courtyard you cross barefoot. Inside the colonnades the columns are inlaid with coloured floral mosaic and the floor is polished to a mirror. I went early, before the heat built. Dress is covered head to ankle; entry is free and modest clothing is lent at the door if you need it.',
              image: {
                srcBase: 'dxb-stop-mosque',
                width: 768,
                height: 1024,
                alt: 'A colonnade inside the Sheikh Zayed Grand Mosque, white columns inlaid with coloured floral mosaic and topped with gilded capitals, reflected in the polished marble floor',
                caption: 'The mosque\'s inlaid colonnade.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:00',
              title: 'The Corniche: Emirates Palace and Etihad Towers',
              body: 'Midday on the Corniche, the waterfront strip along the Gulf. Emirates Palace anchors the western end — a vast sand-coloured hotel set back behind tiered fountains and formal gardens — with the curved blue Etihad Towers rising just behind it. The water was flat and the streets near-empty in the heat.',
              image: {
                srcBase: 'dxb-stop-emirates-palace',
                width: 576,
                height: 1024,
                alt: 'Emirates Palace in Abu Dhabi seen across its forecourt, the sand-coloured domed hotel rising behind tiered fountains and palms under a bright sky',
                caption: 'Emirates Palace from the forecourt fountains.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:30',
              title: 'Lunch at Marina Mall',
              body: 'A break out of the sun at Marina Mall, on the breakwater off the Corniche — lunch and air conditioning before the drive out to Saadiyat Island.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:00',
              title: 'Louvre Abu Dhabi',
              body: 'The Louvre Abu Dhabi is out on Saadiyat Island, under Jean Nouvel\'s huge latticed dome that filters the sun into a "rain of light" across the galleries. The collection runs chronologically and across cultures — a Renaissance globe, antiquities and religious objects set side by side rather than by region. I spent the late afternoon there, then caught the coach to Dubai after dark.',
              image: {
                srcBase: 'dxb-stop-louvre',
                width: 768,
                height: 1024,
                alt: 'A Renaissance terrestrial globe of aged parchment mounted in a dark wooden meridian ring inside the Louvre Abu Dhabi, the bright gallery beyond',
                caption: 'A Renaissance globe in the Louvre Abu Dhabi.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Dubai Downtown: the Mall, the Burj, and the creek',
        summary:
          'A Downtown day in Dubai — the Dubai Mall and its aquarium, up the Burj Khalifa to At the Top, the golden Dubai Frame in Zabeel Park, the Downtown skyline from across the creek at Ras Al Khor, and the towers of DIFC at dusk.',
        walkingKm: 6,
        mapGrouping: [['10:30', '13:00'], ['16:00'], ['16:45'], ['18:15']],
        image: {
          srcBase: 'dxb-day2-downtown',
          width: 959,
          height: 1706,
          alt: 'An aerial view straight down from the Burj Khalifa onto the Sheikh Zayed Road interchange, looping flyovers and dense towers fading into haze',
          caption: 'Looking down on the Sheikh Zayed Road interchange from the Burj Khalifa.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Dubai Mall',
              body: 'I started at the Dubai Mall, which is less a mall than a small indoor city — the aquarium with its walk-through tunnel of rays and sharks, the waterfall hung with life-size sculptures of human divers, and the fountains out front on the lake. It is also the base of the Burj Khalifa, so it doubles as the way up.',
              image: {
                srcBase: 'dxb-stop-dubai-mall',
                width: 768,
                height: 1024,
                alt: 'The waterfall inside the Dubai Mall, cascading water hung with life-size silver sculptures of human divers, shoppers on a walkway at its base',
                caption: 'The diver waterfall in the Dubai Mall.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:00',
              title: 'Burj Khalifa, At the Top',
              body: 'Up the Burj Khalifa to the At the Top deck. The lift is fast enough to pop your ears; from the observation floors the whole city flattens out below — the Sheikh Zayed Road interchange, Business Bay and its canal loop, the desert running off into haze. A timed slot booked ahead is worth it: walk-up queues are long and the cheaper early-and-late slots sell out.',
              bookAhead: true,
              image: {
                srcBase: 'dxb-stop-burj-khalifa',
                width: 768,
                height: 1024,
                alt: 'The view from high on the Burj Khalifa over Business Bay, dense towers around a curved stretch of canal, the desert flattening into haze beyond',
                caption: 'Business Bay from the Burj Khalifa.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:00',
              title: 'The Dubai Frame',
              body: 'The Dubai Frame stands in Zabeel Park — a 150-metre golden picture frame you can ride to the top of, old Dubai on one side of it and the new towers on the other. I saw it from the lawn; it is an odd, photogenic thing close up.',
              image: {
                srcBase: 'dxb-stop-frame',
                width: 1024,
                height: 768,
                alt: 'The Dubai Frame, a tall golden rectangular structure rising above the trees of Zabeel Park against a clear blue sky',
                caption: 'The Dubai Frame over Zabeel Park.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:45',
              title: 'Ras Al Khor and the creek',
              body: 'From the far side of the water at Ras Al Khor the whole Downtown skyline lines up across the creek, the Burj Khalifa needle in the middle and the low sun coming off the water. The wetland reserve here is a flamingo sanctuary right on the city\'s edge.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '18:15',
              title: 'DIFC at dusk',
              body: 'The day ended around DIFC, the financial district off Sheikh Zayed Road — the Gate building, the Emirates Towers, and the elevated Metro line running between the towers as the light went.',
              image: {
                srcBase: 'dxb-stop-difc',
                width: 768,
                height: 1024,
                alt: 'Sheikh Zayed Road at dusk near DIFC, the elevated Metro viaduct curving past high-rise towers, a taxi waiting at an empty junction',
                caption: 'Sheikh Zayed Road by DIFC, dusk.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'The Palm and the Jumeirah coast',
        summary:
          'The last day on the coast before the flight — Palm Jumeirah from The View observation deck, an afternoon at Atlantis on the Crescent, and the Burj Al Arab from the Jumeirah beach at sunset.',
        walkingKm: 3,
        mapGrouping: [['12:00', '14:00'], ['16:50']],
        image: {
          srcBase: 'dxb-day3-palm',
          width: 1279,
          height: 1706,
          alt: 'An aerial view of Palm Jumeirah from The View observation deck, the central trunk road and rows of frond villas reaching out to the marina and the Gulf',
          caption: 'Palm Jumeirah from The View, midday.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'The View at The Palm',
              body: 'The View at The Palm is an observation deck near the top of the Palm Tower, and the one place the Palm Jumeirah reads as the palm shape it is named for — the trunk road, the fronds of villas, the marina and the breakwater curling round, the Gulf beyond.',
              image: {
                srcBase: 'dxb-stop-the-view',
                width: 768,
                height: 1024,
                alt: 'Looking down through the glass of The View at The Palm onto the trunk road of Palm Jumeirah, rows of frond villas and a marina spreading out below',
                caption: 'Down onto the Palm from The View.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:00',
              title: 'Atlantis, the Crescent',
              body: 'The afternoon was at Atlantis, out on the outer crescent of the Palm — the older Atlantis The Palm and the newer staggered Atlantis The Royal next to it, beach and pools and a waterpark. I spent it by the water.',
              image: {
                srcBase: 'dxb-stop-atlantis',
                width: 768,
                height: 1024,
                alt: 'The staggered terraced tower of Atlantis The Royal on the Palm\'s crescent, seen between the fronds of tall palm trees',
                caption: 'Atlantis The Royal through the palms.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:50',
              title: 'The Burj Al Arab from Jumeirah',
              body: 'Late in the day along the Jumeirah beach, where the Burj Al Arab sits on its own island like a sail catching the sun. The Madinat Jumeirah resorts and the public Sunset Beach look straight onto it. Then back across the city to the airport for the night flight.',
              image: {
                srcBase: 'dxb-stop-burj-al-arab',
                width: 768,
                height: 1024,
                alt: 'The sail-shaped Burj Al Arab hotel on its island at sunset, the low sun beside it and palms in the foreground of the Jumeirah beachfront',
                caption: 'The Burj Al Arab from Jumeirah at sunset.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'cairo-and-alexandria-in-four-days',
    title: 'Cairo and Alexandria in four days',
    city: 'Cairo',
    country: 'Egypt',
    tagline:
      'Four days around Egypt\'s headline sites — the Giza pyramids and the Sphinx, the new Grand Egyptian Museum, Islamic and Coptic Cairo, and a day up the coast to Alexandria.',
    intro:
      'I was based in Downtown Cairo, near Talaat Harb, and covered a lot of ground in four days — Giza, the Grand Egyptian Museum, the medieval and Coptic quarters, and a full day up to Alexandria. Most of it ran on a hired car and driver, which made the distances between sites and the run to the coast manageable in the September heat.',
    hero: {
      srcBase: 'cai-hero-pyramids',
      width: 1024,
      height: 768,
      alt: 'The three pyramids of Giza lined up across the desert under a dark, heavy sky, with tiny figures walking the sand in the foreground',
      caption: 'The three pyramids from the desert track, a storm building behind them.',
    },
    stats: {
      days: 4,
      pace: 'steady',
      with: 'family',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'The pyramids and the Sphinx at Giza',
        summary:
          'A morning on the Giza plateau — the three pyramids from the desert, a camel ride across the sand, and the Sphinx in its hollow below Khafre\'s pyramid.',
        walkingKm: 3,
        image: {
          srcBase: 'cai-day1-khafre',
          width: 1279,
          height: 1706,
          alt: 'Khafre\'s pyramid at Giza filling the frame against a deep blue sky, a low scatter of rubble and a small group of visitors on a boardwalk at its base',
          caption: 'Khafre\'s pyramid from the plateau.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:00',
              title: 'The Giza pyramids',
              body: 'The plateau opens straight onto the three pyramids — Khufu, Khafre, and the smaller Menkaure — set back across the sand. I rode a camel out to the panorama point on the desert side, where all three line up, then walked in close to the base of Khafre, where the casing stones still cling near the top. The site sits right at the edge of the city; the suburbs of Giza run up almost to the fence.',
              image: {
                srcBase: 'cai-stop-pyramid-blocks',
                width: 768,
                height: 1024,
                alt: 'A close view up the flank of Khafre\'s pyramid, rough core blocks rising to a patch of smooth casing stone near the top, the sun flaring against a clear blue sky',
                caption: 'Up the flank of Khafre — core blocks below, casing stone clinging near the top.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'The Sphinx',
              body: 'The Sphinx sits in a hollow below Khafre\'s pyramid, carved from a single ridge of limestone, its face weathered and noseless and smaller than I expected. From the viewing terrace you get the classic line-up — the Sphinx in front, the pyramid rising directly behind it.',
              image: {
                srcBase: 'cai-stop-sphinx',
                width: 768,
                height: 1024,
                alt: 'The Great Sphinx of Giza in profile on its stone terrace, with Khafre\'s pyramid rising behind it against a clear sky',
                caption: 'The Sphinx with Khafre\'s pyramid behind.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'The Grand Egyptian Museum and Islamic Cairo',
        summary:
          'The new Grand Egyptian Museum out by Giza in the morning, then across the city to the medieval quarter — Khan el-Khalili and the mosques along Al-Muizz Street.',
        walkingKm: 4,
        image: {
          srcBase: 'cai-day2-islamic',
          width: 960,
          height: 1706,
          alt: 'A street in medieval Cairo with a domed mosque and tall minaret rising at the end, shops and pedestrians along the lane under a clear sky',
          caption: 'Looking up Al-Muizz Street to a Fatimid-era mosque.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'The Grand Egyptian Museum',
              body: 'The Grand Egyptian Museum sits near the pyramids, and the scale is the point — a colossal statue of Ramesses II stands in the atrium and a grand staircase lined with kings climbs toward a window framing the pyramids themselves. The galleries run chronologically through the dynasties; I spent the morning among granite statuary, painted pottery, and rows of stone sarcophagi.',
              bookAhead: true,
              image: {
                srcBase: 'cai-stop-gem',
                width: 768,
                height: 1024,
                alt: 'A row of dark stone anthropoid sarcophagi standing upright in a dim gallery of the Grand Egyptian Museum, their carved faces lit from above',
                caption: 'Anthropoid coffins in the Grand Egyptian Museum.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:30',
              title: 'Khan el-Khalili and Al-Muizz Street',
              body: 'Late afternoon in the medieval city. Khan el-Khalili is the old bazaar — lanes of lanterns, brass, spices, and stacked shisha pipes, with a tout at every stall. From there I walked up Al-Muizz Street, the spine of Fatimid Cairo, lined end to end with mosques, madrasas, and sabils, to the northern gate at Bab al-Futuh as the light went gold.',
              image: {
                srcBase: 'cai-stop-khan',
                width: 768,
                height: 1024,
                alt: 'Rows of brass and silver shisha water pipes lined up for sale on the steps of a shop in Khan el-Khalili bazaar',
                caption: 'Shisha pipes stacked outside a stall in Khan el-Khalili.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'A day in Alexandria',
        summary:
          'A day trip to the coast — the Qaitbay fort on the harbour where the Pharos lighthouse once stood, the modern Bibliotheca Alexandrina, and the Roman-era Pompey\'s Pillar and Catacombs of Kom el-Shoqafa.',
        walkingKm: 3,
        mapGrouping: [['10:30', '12:00'], ['15:20', '15:45']],
        image: {
          srcBase: 'cai-day3-alexandria',
          width: 1279,
          height: 1706,
          alt: 'The sandstone Citadel of Qaitbay in Alexandria under a deep blue sky, an Egyptian flag flying from its central tower, a few visitors on the walls',
          caption: 'The Citadel of Qaitbay on the eastern harbour.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'The Citadel of Qaitbay',
              body: 'Qaitbay stands at the tip of the eastern harbour, a squat sandstone fort raised in the 1480s on the rubble of the Pharos lighthouse that once stood here. The Mediterranean wraps around three sides; from the ramparts you look back across the harbour to the city, and the sea comes right up through the embrasures.',
              image: {
                srcBase: 'cai-stop-qaitbay',
                width: 768,
                height: 1024,
                alt: 'The Mediterranean framed through a stone embrasure in the wall of the Qaitbay fort, a harbour breakwater visible across the calm blue water',
                caption: 'The harbour through an embrasure in the fort wall.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'Bibliotheca Alexandrina',
              body: 'The Bibliotheca Alexandrina is the modern revival of the ancient library, a vast tilted disc of a building facing the sea. Inside, the main reading room steps down in terraces under a slanted glass roof — one enormous open hall on the harbour. The complex also keeps museums and a planetarium.',
              image: {
                srcBase: 'cai-stop-biblio',
                width: 768,
                height: 1024,
                alt: 'The terraced main reading room of the Bibliotheca Alexandrina, tiers of desks descending under a slanted roof carried on angled columns',
                caption: 'The terraced reading room of the Bibliotheca Alexandrina.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:20',
              title: 'Pompey\'s Pillar',
              body: 'Pompey\'s Pillar is a single red granite column nearly thirty metres tall, raised around AD 300 on the site of the Serapeum temple — nothing to do with Pompey, despite the name. Two granite sphinxes sit on the rise beside it, and the underground galleries of the old temple run below.',
              image: {
                srcBase: 'cai-stop-pompey',
                width: 768,
                height: 1024,
                alt: 'A granite sphinx in the foreground with the tall single shaft of Pompey\'s Pillar rising behind it against a deep blue sky',
                caption: 'A granite sphinx below Pompey\'s Pillar.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:45',
              title: 'Catacombs of Kom el-Shoqafa',
              body: 'A short way on are the Catacombs of Kom el-Shoqafa, a Roman-era burial complex cut three levels down into the rock and reached by a spiral stair. The carving is a strange blend — Egyptian gods rendered in Roman dress, Anubis in a legionary\'s tunic — and the painted tomb chambers still hold their colour.',
              image: {
                srcBase: 'cai-stop-catacombs',
                width: 768,
                height: 1024,
                alt: 'A painted tomb chamber in the Catacombs of Kom el-Shoqafa, a faded fresco of a reclining mummy flanked by standing figures above a sunken floor',
                caption: 'A painted tomb chamber in the catacombs.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-4',
        number: 4,
        title: 'The Citadel, the Cave Church, and Coptic Cairo',
        summary:
          'The last day across old Cairo — Saladin\'s Citadel and the alabaster Mosque of Muhammad Ali, the rock-cut Cave Church out in Mokattam, and the Coptic quarter of Old Cairo.',
        walkingKm: 3,
        mapGrouping: [['10:40', '14:20'], ['15:45']],
        image: {
          srcBase: 'cai-day4-citadel',
          width: 1279,
          height: 1706,
          alt: 'The Mosque of Muhammad Ali at the Citadel of Cairo, its alabaster domes and two slender pencil minarets rising against a clear blue sky',
          caption: 'The Mosque of Muhammad Ali crowning the Citadel.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:40',
              title: 'The Citadel and Mosque of Muhammad Ali',
              body: 'Saladin\'s Citadel sits on a spur of high ground with the whole city laid out below. The Mosque of Muhammad Ali crowns it — an Ottoman-style mosque in alabaster with a great central dome and two pencil minarets, finished in the 1840s. The dim, lamp-hung prayer hall under the painted dome was the high point; on a clear day you can pick out the pyramids from the walls.',
              image: {
                srcBase: 'cai-stop-citadel',
                width: 768,
                height: 1024,
                alt: 'Looking up inside the Mosque of Muhammad Ali, a great column and arch carrying the painted central dome, chandeliers hung low over the carpeted hall',
                caption: 'Inside the prayer hall of the Mosque of Muhammad Ali.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:20',
              title: 'The Cave Church at Mokattam',
              body: 'Out on the eastern edge, past the Zabbaleen district that collects and sorts much of Cairo\'s waste, the Monastery of St. Simon the Tanner is built straight into the Mokattam cliffs. The main church is an amphitheatre carved into the rock that seats thousands, and the cliff faces around it are cut with huge reliefs of biblical scenes. It is the largest church in the Middle East and almost unknown to most visitors.',
              image: {
                srcBase: 'cai-stop-mokattam',
                width: 768,
                height: 1024,
                alt: 'A towering Mokattam cliff face carved with a large relief of a robed figure, scrubby palms and parked cars at its base',
                caption: 'A biblical relief cut into the Mokattam cliff at the Cave Church.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:45',
              title: 'Coptic Cairo',
              body: 'Old Cairo, the Coptic quarter, is built in and around the Roman fortress of Babylon. I walked between the Hanging Church, suspended over a Roman gate tower, the round Greek Orthodox church of St. George, and the sunken lanes that link the old churches and the synagogue. It is quiet and shaded, a different register from the rest of the city.',
              image: {
                srcBase: 'cai-stop-coptic',
                width: 768,
                height: 1024,
                alt: 'The round Greek Orthodox Church of St. George in Coptic Cairo, its domed drum and bell tower rising above a broad flight of steps with visitors climbing them',
                caption: 'The Greek Orthodox church of St. George in Coptic Cairo.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'kuala-lumpur-in-three-days',
    title: 'Kuala Lumpur in three days',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    tagline:
      'Three days across Kuala Lumpur — the Awana SkyWay and Chin Swee temple at Genting, the Batu Caves and Thean Hou, the Petronas Towers after dark, i-City\'s neon and Musang King durian on Jalan Alor.',
    intro:
      'I stayed near KLCC, in the shadow of the Petronas Towers, and got around entirely by Grab — cheap and everywhere, which makes a spread-out city manageable. Three full days that ran from the hill stations north of the city out to the temples, malls and night markets, and west after dark.',
    hero: {
      srcBase: 'kl-hero-skyline',
      width: 1024,
      height: 576,
      alt: 'The Kuala Lumpur skyline at sunset from a rooftop, the sun low in haze on the left and the Petronas Towers rising on the right above a dense field of high-rises',
      caption: 'The city at sunset, the Petronas Towers on the right.',
    },
    stats: {
      days: 3,
      pace: 'full',
      with: 'friends',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Up to Genting, and i-City after dark',
        summary:
          'A nasi lemak breakfast out in Damansara, north into the hills for the Awana SkyWay cable car and the Chin Swee temple at Genting, hawker noodles back around Bukit Bintang, and i-City\'s neon in Shah Alam after dark.',
        walkingKm: 4,
        mapGrouping: [['09:00'], ['11:30'], ['20:00'], ['22:00']],
        image: {
          srcBase: 'kl-day1-genting',
          width: 768,
          height: 1024,
          alt: 'The nine-tier pagoda of the Chin Swee Caves Temple at Genting Highlands rising over yellow-roofed halls, the forested ridge dropping into heavy cloud behind',
          caption: 'The Chin Swee Caves Temple at Genting, cloud on the ridge.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '09:00',
              title: 'Village Park nasi lemak',
              body: 'Village Park, in Damansara Uptown, is the nasi lemak most people in KL will name first — coconut rice, sambal, cucumber and a piece of fried chicken with a crust that holds up under the sauce. I had it with an iced Milo to start the trip.',
              image: {
                srcBase: 'kl-stop-nasilemak',
                width: 768,
                height: 1024,
                alt: 'A plate of nasi lemak on brown paper — a mound of coconut rice, dark fried chicken, sambal and cucumber slices, an iced chocolate drink behind',
                caption: 'Nasi lemak ayam goreng at Village Park.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:30',
              title: 'Genting Highlands',
              body: 'Genting Highlands sits in the hills an hour north, cool and usually wrapped in cloud. I went up on the Awana SkyWay cable car, which runs over the rainforest into the resort, and stopped at the Chin Swee Caves Temple on the way — a nine-tier pagoda on the ridge with the valley dropping away into the mist below.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '20:00',
              title: 'Hawker noodles in Bukit Bintang',
              body: 'Back in the city I ate around Bukit Bintang — a hawker stall doing prawn and beef noodles, the kind of place with plastic stools, a laminated menu and a long steel counter going hard all night.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '22:00',
              title: 'i-City',
              body: 'i-City, out in Shah Alam west of the city, is a park built almost entirely out of LED light — trees, animals and arches wired in colour, a Ferris wheel turning over the middle. It is deliberately garish and good fun after dark.',
              image: {
                srcBase: 'kl-stop-icity',
                width: 768,
                height: 1024,
                alt: 'A Ferris wheel outlined in blue and purple neon at i-City, a glowing "SkyCity" sign and a red heart-shaped frame in the foreground against a black night sky',
                caption: 'The SkyCity wheel at i-City, Shah Alam.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Batu Caves, the old town, and the towers',
        summary:
          'The Batu Caves and their rainbow staircase in the morning, Chinatown and lunch in the old town, the Thean Hou temple on its hill in the afternoon, and the Petronas Towers lit up at night.',
        walkingKm: 6,
        mapGrouping: [['10:30'], ['13:00', '16:00'], ['19:30']],
        image: {
          srcBase: 'kl-day2-batu',
          width: 768,
          height: 1024,
          alt: 'A long-tailed macaque perched on a gilded finial at the Batu Caves, the rainbow-painted staircase rising out of focus behind it',
          caption: 'A macaque on the rainbow staircase at the Batu Caves.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:30',
              title: 'Batu Caves',
              body: 'The Batu Caves are a set of limestone caverns north of the city, a Hindu shrine reached by a tall rainbow-painted staircase under a giant gold statue of Murugan. Long-tailed macaques work the steps for food. At the top the rock opens into a high chamber with temples set into it.',
              image: {
                srcBase: 'kl-stop-batu',
                width: 768,
                height: 1024,
                alt: 'The brightly painted gopuram of the temple at the Batu Caves, dense with figures of Hindu deities in pink, blue, green and gold, a monkey climbing the carved tower',
                caption: 'The painted tower at the Batu Caves.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:00',
              title: 'Chinatown and Petaling Street',
              body: 'Down in the old town I walked Petaling Street and the lanes around it — red lanterns strung overhead, restored shophouses, a market under the awnings. Lunch was in one of those shophouses: mushroom pasta and truffle fries, the kind of thing Chinatown KL now does alongside the stalls.',
              image: {
                srcBase: 'kl-stop-chinatown',
                width: 768,
                height: 1024,
                alt: 'A narrow Chinatown lane in Kuala Lumpur strung with rows of red Chinese lanterns overhead, old shophouses on either side and modern towers rising at the end of the street',
                caption: 'Red lanterns over a lane off Petaling Street.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:00',
              title: 'Thean Hou Temple',
              body: 'Thean Hou is a six-tier Chinese temple on a hill in Robson Heights, dedicated to the sea goddess Mazu. Inside it is dense with red pillars, gold carving and a painted ceiling; outside, a terrace looks back over the city.',
              image: {
                srcBase: 'kl-stop-theanhou',
                width: 768,
                height: 1024,
                alt: 'The ornate main hall of the Thean Hou Temple, a brightly painted coffered ceiling above red and gold pillars and a seated golden deity at the altar',
                caption: 'Inside the main hall at Thean Hou.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '19:30',
              title: 'The Petronas Towers',
              body: 'I ended the night with the Petronas Towers — eighty-eight floors of stainless steel and glass, lit white after dark and joined by the skybridge halfway up. I saw them from a rooftop pool near where I was staying, the whole pair reflected in the water.',
              image: {
                srcBase: 'kl-stop-petronas',
                width: 768,
                height: 1024,
                alt: 'The Petronas Towers lit white at night, the twin spires and skybridge mirrored in a dark rooftop pool with purple loungers along its edge',
                caption: 'The towers from a rooftop pool, near midnight.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'Coffee, Bukit Bintang, and a hillside skyride',
        summary:
          'A slow start over coffee, an afternoon around Bukit Bintang\'s malls and crossings, a hillside skyride and luge at dusk, and durian on Jalan Alor.',
        walkingKm: 5,
        mapGrouping: [['12:30'], ['15:00'], ['18:00'], ['21:30']],
        image: {
          srcBase: 'kl-day3-skyride',
          width: 665,
          height: 1182,
          alt: 'The view from a chairlift skyride at dusk, the cable running out over forested hills with a winding luge track and access road visible on the slope below',
          caption: 'The skyride out over the hills at dusk.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '12:30',
              title: 'Coffee to start',
              body: 'I started the last day slowly, at a café with soft-serve and a counter of round, glowing pods for the coffee. A quiet hour before the city woke up properly.',
              image: {
                srcBase: 'kl-stop-coffee',
                width: 480,
                height: 360,
                alt: 'A coffee counter built as illuminated circular pods, warm light glowing around the rims, a barista working at the far one in a glass-walled lobby',
                caption: 'The glowing pods at the coffee counter.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:00',
              title: 'Bukit Bintang',
              body: 'Bukit Bintang is KL\'s shopping core — Pavilion, Fahrenheit 88 and the big crossings between them, screens overhead and the monorail running past. I spent the afternoon working through the malls.',
              image: {
                srcBase: 'kl-stop-bukitbintang',
                width: 576,
                height: 1024,
                alt: 'A busy Bukit Bintang street crossing under a bright sky, the Fahrenheit 88 mall sign on the left, big digital screens on the buildings and crowds waiting at the lights',
                caption: 'The crossing outside Fahrenheit 88, Bukit Bintang.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '18:00',
              title: 'The skyride and luge',
              body: 'Out on the edge of the city there is a hillside park with a chairlift skyride and a luge track that winds back down through the trees. I rode up at dusk as the lights came on along the course, then took the luge down.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:30',
              title: 'Durian on Jalan Alor',
              body: 'I finished on Jalan Alor, the open-air food street off Bukit Bintang, at a durian stall stacked with Musang King — the seller splitting them open on the spot, the custard rich and a little bitter. A strong way to end the trip.',
              image: {
                srcBase: 'kl-stop-durian',
                width: 768,
                height: 1024,
                alt: 'A night durian stall on Jalan Alor, whole spiky durians stacked on a green rack under hanging bulbs, trays of opened yellow flesh on the table in front',
                caption: 'A Musang King stall on Jalan Alor.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'washington-dc-in-a-day',
    title: 'Washington, DC in a day',
    city: 'Washington, DC',
    country: 'United States',
    tagline:
      'A day trip from New York — Capitol Hill and the Library of Congress in the morning, then the length of the National Mall on foot to the Washington Monument, the Tidal Basin memorials, and the Lincoln Memorial at sunset.',
    intro:
      'I came down from New York just for the day — in and out of Reagan National, the whole of it spent on foot and on the Metro along the National Mall. One full day, solo, from Capitol Hill at the east end to the Lincoln Memorial at the west.',
    hero: {
      srcBase: 'dc-hero-monument',
      width: 1024,
      height: 768,
      alt: 'The Washington Monument silhouetted against a clear sunset sky, the sun low on the left, a plane crossing and the ring of flags lit at the base of the obelisk',
      caption: 'The Washington Monument at sunset, a plane crossing the Mall.',
    },
    stats: {
      days: 1,
      pace: 'full',
      with: 'solo',
    },
    days: [
      {
        slug: 'the-day',
        number: 1,
        title: 'The National Mall, end to end',
        summary:
          'In on the morning flight to Reagan National and straight to Capitol Hill for the Capitol and the Library of Congress, then the whole length of the Mall on foot through the afternoon — the Washington Monument, the FDR and MLK memorials around the Tidal Basin, and the Lincoln Memorial as the sun went down.',
        walkingKm: 9,
        mapGrouping: [['10:00', '11:00'], ['15:55'], ['16:40', '17:20']],
        image: {
          srcBase: 'dc-day-mall-capitol',
          width: 1279,
          height: 1706,
          alt: 'The dome of the United States Capitol seen from down the National Mall, the grassy lawn and gravel walks lined with trees turning autumn colours, under a clear blue sky',
          caption: 'The Capitol from down the Mall, autumn on the lawn.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:00',
              title: 'The United States Capitol',
              body: 'The Capitol sits at the east end of the Mall, on the hill the rest of the city is laid out from. I came up from the Capitol South Metro to the East Front — the dome over the colonnade, the Senate wing to the north — and went inside on a tour, which runs on timed passes you reserve ahead. It ends in the National Statuary Hall, the old House chamber, ringed with the statues each state sends.',
              bookAhead: true,
              image: {
                srcBase: 'dc-stop-capitol',
                width: 768,
                height: 1024,
                alt: 'The white dome of the United States Capitol against a deep blue sky, an American flag flying at half-mast in front and a thin sliver of moon above the statue at the top',
                caption: 'The Capitol dome, a sliver of moon above the Statue of Freedom.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:00',
              title: 'The Library of Congress',
              body: 'Across the street is the Library of Congress — the Thomas Jefferson Building, the most ornate interior in the city, and free to walk into. The Great Hall rises in marble and gold leaf under a painted ceiling, and from a gallery above you look down into the Main Reading Room, an octagon of desks under a coffered dome.',
              image: {
                srcBase: 'dc-stop-loc',
                width: 360,
                height: 480,
                alt: 'The coffered dome of the Main Reading Room at the Library of Congress, a circular skylight at its centre, marble columns and red-draped arches below',
                caption: 'Under the dome of the Main Reading Room.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:55',
              title: 'The Washington Monument',
              body: 'The Washington Monument stands in the middle of the Mall, a marble obelisk with a visible colour change partway up where construction stopped for twenty years and the stone came from a different quarry. I reached it as the afternoon light was going gold.',
              image: {
                srcBase: 'dc-stop-monument',
                width: 768,
                height: 1024,
                alt: 'The Washington Monument seen looking straight up from its base against a deep blue sky, the two-tone marble of the obelisk tapering to the point',
                caption: 'The obelisk from the base, the two-tone marble showing.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:40',
              title: 'The Tidal Basin — FDR and MLK Memorials',
              body: 'South of the Monument the Tidal Basin curves past two memorials I walked between — the Franklin Delano Roosevelt Memorial, a long sequence of granite rooms and waterfalls, and the Martin Luther King Jr. Memorial, where his figure stands half-cut from a block of pale stone, the Stone of Hope. The Monument sat reflected across the water.',
              image: {
                srcBase: 'dc-stop-mlk',
                width: 768,
                height: 1024,
                alt: 'The Stone of Hope at the Martin Luther King Jr. Memorial, his figure carved emerging from a block of pale granite with arms folded, against a clear blue sky',
                caption: 'The Stone of Hope at the MLK Memorial.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '17:20',
              title: 'The Lincoln Memorial',
              body: 'The Mall ends at the Lincoln Memorial, up the steps under the colonnade, Lincoln seated inside with the Gettysburg Address and Second Inaugural cut into the side walls. From the top the Reflecting Pool runs straight back to the Monument; I watched the sun drop and a plane bank over the water before taking the Metro out from Foggy Bottom.',
              image: {
                srcBase: 'dc-stop-lincoln',
                width: 768,
                height: 1024,
                alt: 'The seated marble statue of Abraham Lincoln inside the memorial, the inscription "In this temple... the memory of Abraham Lincoln is enshrined forever" carved on the wall above',
                caption: 'Lincoln seated, the inscription cut above.',
              },
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'new-york-city-in-four-days',
    title: 'New York City in four days',
    city: 'New York City',
    country: 'United States',
    tagline:
      'Four days across Manhattan and Brooklyn — Midtown landmarks, the harbour by ferry, the Brooklyn Bridge on foot, and a last day up the East River to Roosevelt Island and Central Park.',
    intro:
      'I spent four days in New York on my own, getting around almost entirely on the subway and on foot. It split into a Midtown day, a downtown-and-harbour day that ran from the World Trade Center out to Brooklyn, a day on the bridges and the West Side, and a last day up the East River to Roosevelt Island and back through Central Park.',
    hero: {
      srcBase: 'nyc-hero-skyline',
      width: 1024,
      height: 768,
      alt: 'Lower Manhattan\'s skyline seen through the steel cables of the Brooklyn Bridge, One World Trade Center and the financial-district towers below a clear blue sky',
      caption: 'Lower Manhattan framed through the Brooklyn Bridge cables.',
    },
    stats: {
      days: 4,
      pace: 'steady',
      with: 'solo',
    },
    days: [
      {
        slug: 'day-1',
        number: 1,
        title: 'Midtown on foot',
        summary:
          'In on the early flight to JFK and straight into Midtown — up through Grand Central, then the Empire State Building, Times Square, and Rockefeller Center on a first afternoon of walking the landmarks.',
        walkingKm: 7,
        mapGrouping: [['10:00', '12:30', '14:10', '15:05']],
        image: {
          srcBase: 'nyc-day1-rockefeller',
          width: 1706,
          height: 1279,
          alt: 'The sunken plaza at Rockefeller Center ringed with flags, the ice rink below being set up for the season and the surrounding buildings catching late afternoon light',
          caption: 'Rockefeller Center, the rink going in for the season.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:00',
              title: 'Grand Central Terminal',
              body: 'I came into the city through Grand Central, up from the platforms into the main concourse — the marble, the brass clock over the information booth, the painted constellations across the ceiling. It works as a station and as a place to stand still in for a while.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:30',
              title: 'The Empire State Building',
              body: 'The Empire State Building rises straight out of the blocks around 34th and Fifth, the Art Deco crown stepping up to the spire. I came at it from the side streets, where the tower fills the gap between buildings.',
              image: {
                srcBase: 'nyc-stop-empire',
                width: 768,
                height: 1024,
                alt: 'The Empire State Building seen from below between two buildings, the stepped Art Deco tower and spire rising into a pale sky, metal stairways framing the view in the foreground',
                caption: 'The Empire State Building from the streets below.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:10',
              title: 'Times Square',
              body: 'Times Square is where Broadway cuts across Seventh Avenue, the buildings wrapped top to bottom in screens. I stood in the middle of it in full daylight, which strips some of the magic and leaves the scale.',
              image: {
                srcBase: 'nyc-stop-times-square',
                width: 768,
                height: 1024,
                alt: 'Times Square in daylight, billboards and digital screens covering the buildings, yellow cabs and crowds crossing Broadway under a clear blue sky',
                caption: 'Times Square in daylight — Broadway at Seventh.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:05',
              title: 'Rockefeller Center',
              body: 'Rockefeller Center sits a few blocks north, the slab of 30 Rock above a sunken plaza ringed with flags. The rink at the bottom was being set up for the season, the gold Prometheus looking over it.',
            },
          },
        ],
      },
      {
        slug: 'day-2',
        number: 2,
        title: 'Downtown, the harbour, and Times Square at night',
        summary:
          'Down the length of Manhattan to the World Trade Center and the Battery, out on the Staten Island Ferry for the harbour and the Statue of Liberty, a hop across to Bed-Stuy, then back up to Central Park and Times Square after dark.',
        walkingKm: 12,
        mapGrouping: [['13:15'], ['14:00', '14:45', '15:15'], ['16:56'], ['18:05', '22:00']],
        image: {
          srcBase: 'nyc-day2-skyline',
          width: 1706,
          height: 1279,
          alt: 'The Lower Manhattan skyline seen from the water, One World Trade Center rising above the financial-district towers, a Seastreak ferry crossing in the foreground under a clear sky',
          caption: 'Lower Manhattan from the harbour, a ferry crossing the foreground.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '13:15',
              title: 'The Flatiron Building',
              body: 'I started downtown at the Flatiron Building, the wedge where Broadway crosses Fifth at 23rd. It is thinner in person than it photographs, a single sharp prow of limestone and terracotta.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:00',
              title: '9/11 Memorial and the World Trade Center',
              body: 'At the World Trade Center the two memorial pools sit in the footprints of the towers, water running down all four sides into a square void at the centre, the names cut into the bronze parapet around them. Beside them the Oculus opens up white and ribbed, more cathedral than mall.',
              image: {
                srcBase: 'nyc-stop-oculus',
                width: 1024,
                height: 768,
                alt: 'The interior of the Oculus at the World Trade Center, white steel ribs arching up to a central skylight, the pale marble floor below with people crossing it',
                caption: 'Inside the Oculus at the World Trade Center.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:45',
              title: 'Bowling Green',
              body: 'Bowling Green is the city\'s oldest park, a small oval at the foot of Broadway with the old Custom House behind it and the Charging Bull at its top end. The bull always has a crowd working its way around it for photos.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:15',
              title: 'The Staten Island Ferry',
              body: 'The Staten Island Ferry runs free from Whitehall, out across the harbour and back. I rode it for the crossing — the Statue of Liberty off to one side, Ellis Island beyond, and the Lower Manhattan skyline pulling away and then coming back.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:56',
              title: 'Bed-Stuy',
              body: 'Over in Bed-Stuy I went to find the Bed-Stuy Aquarium — a pothole that flooded and got adopted as a neighbourhood koi pond, fenced and decorated and looked after by the people on the block. Pumpkins were out on the stoops for the end of October.',
              image: {
                srcBase: 'nyc-stop-bedstuy',
                width: 768,
                height: 1024,
                alt: 'A Brooklyn sidewalk in Bed-Stuy with the hand-painted "Bed-Stuy Aquarium" pothole pond, a blue painted pole, a bench and orange pumpkins set out in front of a brownstone',
                caption: 'The Bed-Stuy Aquarium, pumpkins out for the end of October.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '18:05',
              title: 'Central Park and Columbus Circle',
              body: 'Back in Manhattan I came up at Columbus Circle, where the southwest corner of Central Park meets the towers of Central Park South. The Maine Monument stands at the entrance; behind it the park goes dark green and the buildings catch the last of the light.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '22:00',
              title: 'Times Square at night',
              body: 'I worked back through the theatre district to Times Square after dark, which is when it makes sense — the screens turned up to full, the whole intersection lit like daylight with no sun. I stayed a while in the noise of it.',
              image: {
                srcBase: 'nyc-stop-times-night',
                width: 1024,
                height: 768,
                alt: 'Times Square at night, the buildings covered in brilliantly lit billboards and screens, a double-decker bus and cabs on the street below',
                caption: 'Times Square after dark, the screens at full.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-3',
        number: 3,
        title: 'The Brooklyn Bridge, the West Side, and the skyline after dark',
        summary:
          'Across the Brooklyn Bridge on foot to DUMBO, then up to Hudson Yards and down the High Line through Chelsea to Little Island, and the skyline from above — Summit One Vanderbilt at dusk and Bryant Park at night.',
        walkingKm: 13,
        mapGrouping: [['10:00', '12:00'], ['13:30', '14:20', '14:45', '16:45'], ['19:15', '21:15']],
        image: {
          srcBase: 'nyc-day3-highline',
          width: 1706,
          height: 1279,
          alt: 'The High Line elevated park, a large yellow abstract sculpture among planted grasses and wildflowers, brick West Side buildings and a clear blue sky beyond',
          caption: 'The High Line, the planting grown in over the old rail line.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '10:00',
              title: 'The Brooklyn Bridge',
              body: 'I walked the Brooklyn Bridge from the Manhattan side, up on the wooden promenade that runs above the traffic. The Gothic stone arches and the fan of cables frame the skyline the whole way across, and the deck was already busy by mid-morning.',
              image: {
                srcBase: 'nyc-stop-brooklyn-bridge',
                width: 768,
                height: 1024,
                alt: 'The wooden walkway of the Brooklyn Bridge leading to one of its Gothic stone towers, steel cables fanning out on either side, the Lower Manhattan skyline to the left under a clear blue sky',
                caption: 'The Brooklyn Bridge promenade toward the first tower.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:00',
              title: 'DUMBO',
              body: 'Down in DUMBO, under the Manhattan Bridge, the blue steel of the bridge tower rises straight out of the streets. The neighbourhood is old warehouse blocks turned over to shops and waterfront, the bridges overhead the whole reason to be there.',
              image: {
                srcBase: 'nyc-stop-dumbo',
                width: 768,
                height: 1024,
                alt: 'The blue steel tower of the Manhattan Bridge seen from below in DUMBO, the lattice ironwork and arched span standing against a clear blue sky',
                caption: 'The Manhattan Bridge tower from DUMBO.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:30',
              title: 'Hudson Yards and The Vessel',
              body: 'Back over in Manhattan, Hudson Yards is the newest corner of the West Side, towers over a rail yard with the Vessel at the centre — a copper-coloured honeycomb of staircases that goes nowhere in particular. It was closed to climbing, so I looked at it from the base.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:20',
              title: 'The High Line',
              body: 'The High Line runs south from there along an old elevated freight line, planted as a narrow garden above the streets. I walked it down through the West Side, the rails left in place under the grasses and the city moving below.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:45',
              title: 'Chelsea Market',
              body: 'Chelsea Market fills the old Nabisco bakery where the Oreo was invented, a brick passage of food stalls and counters running the length of the block. I went through for lunch and came out the far side near the river.',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:45',
              title: 'Little Island',
              body: 'Little Island is a small park built out over the Hudson on concrete tulips, each pillar flaring up to hold a different height of lawn and planting. I went up the paths to the high point, the river on one side and the West Side on the other.',
              image: {
                srcBase: 'nyc-stop-little-island',
                width: 768,
                height: 1024,
                alt: 'One of the concrete tulip-shaped pillars holding up Little Island over the Hudson, planted with grasses on top, the river and a wooden slat railing beyond',
                caption: 'Little Island on its concrete tulips over the Hudson.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '19:15',
              title: 'Summit One Vanderbilt',
              body: 'Summit One Vanderbilt is the observation deck on the tower beside Grand Central, mirrored rooms and glass floors near the top. I went up at dusk and stayed for the change to night — the Empire State Building lit up to the south, the avenues running out in straight lines of light below.',
              bookAhead: true,
              image: {
                srcBase: 'nyc-stop-summit',
                width: 1024,
                height: 768,
                alt: 'The Manhattan grid at night seen from high above at Summit One Vanderbilt, the Empire State Building lit blue and orange to the right, avenues running in lines of light toward the horizon',
                caption: 'The skyline from Summit One Vanderbilt, the Empire State lit to the south.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '21:15',
              title: 'Bryant Park',
              body: 'I finished at Bryant Park, behind the public library, where the Winter Village was going up — the rink laid down and the glass stalls being built around the lawn. The fountain was still running and the lit towers of Midtown stood over the trees.',
              image: {
                srcBase: 'nyc-stop-bryant-park',
                width: 768,
                height: 1024,
                alt: 'Bryant Park at night, the stone fountain lit in the foreground, the Winter Village rink and glass kiosks behind, and the lit towers of Midtown rising over the bare trees',
                caption: 'Bryant Park at night, the Winter Village going up.',
              },
            },
          },
        ],
      },
      {
        slug: 'day-4',
        number: 4,
        title: 'The East River, Roosevelt Island, and Central Park',
        summary:
          'A last day up the east side — the United Nations, the tram across to Roosevelt Island and the Four Freedoms park at its tip, then back across to Central Park in full autumn and up Museum Mile to the Guggenheim.',
        walkingKm: 9,
        mapGrouping: [['11:25', '12:40'], ['15:25', '16:20']],
        image: {
          srcBase: 'nyc-day4-tram',
          width: 1706,
          height: 1279,
          alt: 'The Midtown skyline seen from the Roosevelt Island Tramway as it climbs over the East River, the cable and tower mechanism in the foreground and the streets far below',
          caption: 'Midtown from the Roosevelt Island Tramway, climbing over the river.',
        },
        entries: [
          {
            kind: 'stop',
            stop: {
              time: '11:25',
              title: 'The United Nations',
              body: 'The United Nations sits on its own strip of land along the East River, the Secretariat a flat green slab of glass above the line of member-state flags. I came down to it past the flags in the morning.',
              image: {
                srcBase: 'nyc-stop-un',
                width: 768,
                height: 1024,
                alt: 'The glass slab of the United Nations Secretariat building rising against a clear blue sky, a row of flagpoles and a clipped hedge in front',
                caption: 'The UN Secretariat above the flags.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '12:40',
              title: 'Roosevelt Island',
              body: 'From 59th Street the Roosevelt Island Tramway runs over the East River on a cable, level with the towers. The island is a thin strip in the middle of the river; I walked down to Four Freedoms Park at its southern tip, an avenue of trees on a granite point with the FDR memorial and the Manhattan skyline straight across the water. Pumpkins were set out on the lawn for the season.',
              image: {
                srcBase: 'nyc-stop-roosevelt-island',
                width: 768,
                height: 1024,
                alt: 'The tree-lined allée of Four Freedoms Park on Roosevelt Island in autumn, the trees turning gold on either side, pumpkins and hay bales set out on the lawn and the river beyond',
                caption: 'The allée at Four Freedoms Park, pumpkins out for the season.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '15:25',
              title: 'Central Park',
              body: 'Back across the river, Central Park was at the peak of its autumn — the Lake and the model-boat pond ringed with gold, Bethesda Fountain running below the terrace with the bronze angel on top. I came in from the east and worked north through the park.',
              image: {
                srcBase: 'nyc-stop-central-park',
                width: 768,
                height: 1024,
                alt: 'Bethesda Fountain in Central Park, the bronze Angel of the Waters on top spraying into the pool, autumn trees and a crowd along the rim behind under a clear blue sky',
                caption: 'Bethesda Fountain, the park at peak autumn.',
              },
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '16:20',
              title: 'The Guggenheim',
              body: 'Up the east edge of the park, Museum Mile runs past the Met and on to the Guggenheim. Frank Lloyd Wright\'s white spiral curves out toward Fifth Avenue from the street; inside, the ramp winds up around the open rotunda under the skylight, the galleries running off it the whole way. I went up the spiral as the light through the dome turned to evening.',
              image: {
                srcBase: 'nyc-stop-guggenheim',
                width: 1024,
                height: 768,
                alt: 'The interior rotunda of the Guggenheim Museum, the white spiral ramp curving up around the open atrium toward the round skylight, artworks hung along the curved walls',
                caption: 'The Guggenheim rotunda, the spiral ramp under the dome.',
              },
            },
          },
        ],
      },
    ],
  }
];

// Attach photo-derived coordinates to stops (one-time, at module load).
for (const itinerary of ITINERARIES) {
  const byDay = STOP_COORDS[itinerary.slug];
  if (!byDay) continue;
  for (const day of itinerary.days) {
    const byTime = byDay[day.slug];
    if (!byTime) continue;
    for (const entry of day.entries) {
      if (entry.kind !== 'stop') continue;
      const coord = byTime[entry.stop.time];
      if (coord) {
        entry.stop.lat = coord[0];
        entry.stop.lon = coord[1];
      }
    }
  }
}
