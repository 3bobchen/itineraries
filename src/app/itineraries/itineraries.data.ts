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
      'A single layover day between flights — eight hours from the airport gate to the top of the Peak and back, with a friend and one bag each.',
    intro:
      'This wasn\'t a holiday so much as a dare: land in the morning, fly out in the evening, and see how much of Hong Kong Island two people could fit in between. The answer turned out to be a lot — dim sum in the Western District, the stone-wall banyans above Sai Ying Pun, the Peak under a building storm, and the harbour from the Central piers before the run back to the gate. The stops below run in order across the day, the way it actually unfolded.',
    hero: {
      srcBase: 'hk1d-hero-peak-storm',
      width: 1024,
      height: 768,
      alt: 'Storm clouds massing over the Hong Kong Island skyline and Victoria Harbour, seen from Victoria Peak',
      caption: 'Victoria Peak in the afternoon — the storm held off just long enough.',
    },
    stats: {
      days: 1,
      pace: 'full',
      with: 'a friend',
    },
    days: [
      {
        slug: 'the-day',
        number: 1,
        title: 'Gate to Peak and back',
        summary:
          'A layover run across Hong Kong Island: in from the airport by Airport Express, dim sum and wall-trees in the Western District, the Peak by tram, the harbour from Central — and back to the gate with time to spare.',
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
              time: '09:08',
              title: 'Touchdown at HKG',
              body: 'A red-eye in, one cabin bag each, and no plan beyond a list of stops on a phone. Clearing the airport fast is the whole game on a layover — hand luggage only, straight to the train.',
              durationMin: 30,
              image: {
                srcBase: 'hk1d-stop-arrival',
                width: 960,
                height: 1280,
                alt: 'Two Cathay Pacific aircraft parked at Hong Kong International Airport gates, with green hills behind, seen through a terminal window',
                caption: 'Cathay tails on the apron — wheels barely stopped.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Airport Express',
              from: 'Airport',
              to: 'Hong Kong Station',
              durationMin: 24,
              note: 'every 10 minutes; fastest possible way off the island\'s edge',
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'train',
              route: 'Island Line',
              from: 'Central',
              to: 'Sai Ying Pun',
              durationMin: 6,
              note: 'two stops west into the old Western District',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:25',
              title: 'Dim sum in the Western District',
              body: 'First proper stop, and the right one: a no-frills tea house with bamboo steamers stacked three high. Har gow, siu mai, cheung fun and a barbecue-pork bun, ordered by ticking a paper slip — exactly the brunch a long flight earns you.',
              durationMin: 40,
              image: {
                srcBase: 'hk1d-stop-dimsum',
                width: 768,
                height: 1024,
                alt: 'A table of dim sum — har gow and siu mai in bamboo steamers, rice-noodle rolls and a barbecue-pork bun on small plates with green chopsticks',
                caption: 'The first table of the day, steamers three high.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'walk',
              from: 'the tea house',
              to: 'the Western District wall-trees',
              durationMin: 8,
              note: 'uphill through Sai Ying Pun\'s back lanes',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '11:48',
              title: 'The stone-wall trees',
              body: 'Sai Ying Pun\'s great Chinese banyans grow straight out of the old masonry retaining walls, roots fanning down the stone like poured wax. They\'re a protected, century-old quirk of the way the hillside was terraced — and far more striking in person than the guidebooks let on.',
              durationMin: 20,
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
            kind: 'leg',
            leg: {
              mode: 'tram',
              route: 'Peak Tram',
              from: 'Garden Road',
              to: 'The Peak',
              durationMin: 10,
              note: 'the 1888 funicular; the climb tilts the city sideways in the window',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:22',
              title: 'Victoria Peak, under a storm',
              body: 'The classic view, with weather for once: cloud stacking up over Kowloon, the harbour gone pewter, the towers sharp against it. The Sky Terrace charges for the top deck, but the Lugard Road path gives you the same panorama for free if the rain holds.',
              durationMin: 20,
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '13:41',
              title: 'The towers up close',
              body: 'From the Peak the famous skyline foreshortens into a single wall of glass — One IFC standing clear above the harbour, ferries crossing like toys below. A few minutes along the path and the angle keeps changing.',
              durationMin: 20,
              image: {
                srcBase: 'hk1d-stop-ifc',
                width: 768,
                height: 1024,
                alt: 'Two International Finance Centre tower rising above Victoria Harbour and Kowloon, seen from Victoria Peak under heavy cloud',
                caption: 'Two IFC from the Peak, harbour gone pewter behind it.',
              },
            },
          },
          {
            kind: 'leg',
            leg: {
              mode: 'tram',
              route: 'Peak Tram',
              from: 'The Peak',
              to: 'Garden Road',
              durationMin: 10,
              note: 'then a short walk down to the waterfront',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '14:44',
              title: 'The harbour from Central',
              body: 'Last stop before the airport run: the Central waterfront, the observation wheel turning slowly against the grey, the Star Ferries butting in and out. A quiet ten minutes to let the day land before the dash back west.',
              durationMin: 30,
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
              note: 'cutting it fine but fine — back at the gate by half-four',
            },
          },
          {
            kind: 'stop',
            stop: {
              time: '17:20',
              title: 'Wheels up again',
              body: 'Eight hours, one island, no checked bags and no regrets. Back through security and onto the next flight — proof that a layover is only dead time if you let it be.',
              durationMin: 30,
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
