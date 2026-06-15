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
