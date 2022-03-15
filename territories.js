const territoriesData = [
  {
    name: "Apipé Islands",
    type: "enclave_also_exclave",
    area: "~320",
    exclaveOf: "Argentina",
    enclavedWithin: "Paraguay",
    coordinates: ["-27.517", "-56.850"],
    notes:
      "Four adjacent islands (Isla Apipé Grande, Isla Apipé Chico, Isla Los Patos and Isla San Martín) with territorial water borders in the Río Paraná, 39 km east of Isla Entre Rios. Island areas are about 276, 23.8, 11.8 and 3.7 km2, respectively."
  },
  {
    name: "Isla Entre Ríos",
    type: "enclave_also_exclave",
    area: "~36",
    exclaveOf: "Argentina",
    enclavedWithin: "Paraguay",
    coordinates: ["-27.417", "-57.500"],
    notes:
      "Uninhabited island with territorial water border in the Río Paraná, 39 km west of Isla Apipé."
  },
  {
    name: "Isla Martín García",
    type: "enclave_also_exclave",
    area: "1.84",
    exclaveOf: "Argentina",
    enclavedWithin: "Uruguay",
    coordinates: ["-34.17972", "-58.25000"],
    notes:
      "Territorial water border on the Uruguay side of Río de la Plata. Designated as a nature reserve under the jurisdiction of Argentina in 1973."
  },
  {
    name: "Artsvashen",
    type: "enclave_also_exclave",
    area: "~40",
    exclaveOf: "Armenia",
    enclavedWithin: "Azerbaijan",
    coordinates: ["40.633", "45.500"],
    notes:
      "Controlled by Azerbaijan since the First Nagorno-Karabakh War in 1992."
  },
  {
    name: "Torres Strait Islands",
    type: "enclave_also_exclave",
    area: "~2,200 (including water area)",
    exclaveOf: "Australia",
    enclavedWithin: "Papua New Guinea",
    coordinates: ["-9.42306", "142.53611"],
    notes:
      "The islands of Anchor Cay, Aubusi Island, Black Rocks, Boigu Island (89.6 km2), Bramble Cay (0.036 km2), Dauan Island (4 km2), Deliverance Island, East Cay, Kaumag Island, Kerr Islet, Moimi Island, Saibai Island (107.9 km2), Turnagain Island (12 km2) and Turu Cay, along with their territorial seas, form seven enclaves within the maritime area of Papua New Guinea under a treaty effective in 1985. The territorial sea of each island does not extend beyond three nautical miles. The mainland of Papua New Guinea is only 6 km from Boigu."
  },
  {
    name: "Jungholz",
    type: "enclave_also_exclave",
    area: "7.05",
    exclaveOf: "Austria",
    enclavedWithin: "Germany",
    coordinates: ["47.5717", "10.4550"],
    notes:
      'Connected at a quadripoint at the summit of the mountain Sorgschrofen (1636 m); accessible only through Germany. Vinokurov (2007) states, "For all purposes, a connection in a single point does not mean anything. It is just like being completely separated. One cannot pass through a single point, nor is it possible to transport goods. It is not even possible to lay a telephone line."'
  },
  {
    name: "Yukhari Askipara",
    type: "enclave_also_exclave",
    area: "~28",
    exclaveOf: "Azerbaijan",
    enclavedWithin: "Armenia",
    coordinates: ["41.06611", "45.02333"],
    notes:
      "A destroyed village controlled by Armenia since the First Nagorno-Karabakh War in May 1992; west of the town of Qazax."
  },
  {
    name: "Barkhudarli",
    type: "enclave_also_exclave",
    area: "~10",
    exclaveOf: "Azerbaijan",
    enclavedWithin: "Armenia",
    coordinates: ["40.99333", "45.22528"],
    notes:
      "Controlled by Armenia since the First Nagorno-Karabakh War in May 1992; west-southwest of the town of Qazax."
  },
  {
    name: "Karki / Tigranashen",
    type: "enclave_also_exclave",
    area: "8",
    exclaveOf: "Azerbaijan",
    enclavedWithin: "Armenia",
    coordinates: ["39.7883", "44.950"],
    notes:
      "Controlled by Armenia since the First Nagorno-Karabakh War in May 1992; north of Azerbaijan's exclave of Nakhchivan."
  },
  {
    name: "Yaradullu",
    type: "enclave_also_exclave",
    area: "0.12 and 0.06",
    exclaveOf: "Azerbaijan",
    enclavedWithin: "Armenia",
    coordinates: ["41.014389", "45.436722"],
    notes:
      "Two farmland enclaves just across the border from the village of Yaradullu (55 m at the closest point). They are 750 m and 1500 m southwest of the municipality of Tatlı on the west bank of the Akhum River; approximately 300x400 m and 300x200 m. The surrounding Armenian territory has been occupied by Azerbaijan since the First Nagorno-Karabakh War in May 1992, so that these two small pockets of land are de facto no longer exclaves."
  },
  {
    name: "Dahagram-Angarpota",
    type: "enclave_also_exclave",
    area: "25.95",
    exclaveOf: "Bangladesh",
    enclavedWithin: "India",
    coordinates: ["26.300", "88.950"],
    notes:
      "Dahagram–Angarpota is a composite enclave of two adjoining chhits. It is separated from the contiguous area of Bangladesh at its closest point by 178 metres (584 ft). The enclave has an estimated population of 20,000. After the exchange of enclaves with India under the Land Boundary Agreement on 31 July 2015, Bangladesh retained it as an exclave. The Tin Bigha Corridor, a strip of Indian territory 85 metres (279 ft) wide running from the enclave to the Bangladesh mainland at its nearest approach, was leased to Bangladesh for 999 years for access to the enclave."
  },
  {
    name: "Baarle-Hertog",
    type: "enclave_also_exclave",
    area: "2.3448",
    exclaveOf: "Belgium",
    enclavedWithin: "Netherlands",
    coordinates: ["51.43694", "4.92861"],
    notes:
      "A group of 22 Belgian enclaves in the southern Netherlands. Enclaves H1 and H2 are connected at a single point."
  },
  {
    name: "Međurečje",
    type: "enclave_also_exclave",
    area: "3.9584",
    exclaveOf: "Bosnia and Herzegovina",
    enclavedWithin: "Serbia",
    coordinates: ["43.55833", "19.42500"],
    notes:
      "Home land of Bosnia-Herzegovina is 1,130 meters to the north. Sastavci is the name of the neighboring village in Serbia."
  },
  {
    name: "Quitasueño",
    type: "enclave_also_exclave",
    area: "3,577, including water area[10]",
    exclaveOf: "Colombia",
    enclavedWithin: "Nicaragua",
    coordinates: ["14.40028", "-81.12972"],
    notes:
      "On 19 November 2012, the International Court of Justice upheld Colombia's claim to Quitasueño, plus a 12-NM territorial zone, and re-defined Nicaragua's exclusive economic zone (EEZ), thus surrounding the island bank. It deemed one of the bank's 54 features to be an island at high tide (elevation 70 cm, area 1 m2) and created enclaves as an equitable solution. The area of the bank, excluding the 12-mile zone, is ~290 km2."
  },
  {
    name: "Serrana",
    type: "enclave_also_exclave",
    area: "~2,800, including water area",
    exclaveOf: "Colombia",
    enclavedWithin: "Nicaragua",
    coordinates: ["14.28694", "-80.36333"],
    notes:
      "On 19 November 2012, ICJ upheld Colombia's claim to Serrana, plus a 12-NM territorial zone, and re-defined Nicaragua's EEZ, surrounding the island bank. The land area is ~0.11 km2, and the area of the bank, excluding the 12-mile zone, is ~322 km2. Colombia decried the loss of maritime areas and creation of \"'enclaves' around Quitasueño and Serrana that could restrict\" access."
  },
  {
    name: "Brezovica Žumberačka",
    type: "enclave_also_exclave",
    area: "0.0183+",
    exclaveOf: "Croatia",
    enclavedWithin: "Slovenia",
    coordinates: ["45.68944", "15.30333"],
    notes:
      "The first enclave contains four dwellings surrounded by agricultural land near the Slovenian village of Brezovica pri Metliki. It is about 437 m long and 60 m wide covering 1.83 ha. Confirmed by both Croatian and Slovenian cadaster maps, it lies about 100 meters away from the main border at the closest point.\n\nA second enclave lies within 300 meters of the first. It was created on 29 June 2017 when the Permanent Court of Arbitration decided that a disputed 2.4 ha parcel is part of Slovenia and that the border follows Slovenian cadastral limits, thus completing the encirclement of the second Croatian enclave. Croatia has stated that it will ignore the arbitration decision."
  },
  {
    name: "Ormidhia",
    type: "enclave_also_exclave",
    area: "1.694",
    exclaveOf: "Cyprus",
    enclavedWithin: "Dhekelia",
    coordinates: ["34.99250", "33.78028"],
    notes:
      "Small exclave surrounded by Dhekelia, a British Overseas Territory in southeastern Cyprus. The degree of sovereignty and legitimacy of the Sovereign Base Areas is disputed by the Republic of Cyprus."
  },
  {
    name: "Xylotymbou",
    type: "enclave_also_exclave",
    area: "0.947",
    exclaveOf: "Cyprus",
    enclavedWithin: "Dhekelia",
    coordinates: ["35.01750", "33.74361"],
    notes: "Small exclave surrounded by Dhekelia, a British Overseas Territory."
  },
  {
    name: '"Electricity Authority of Cyprus" Refugee Settlement',
    type: "enclave_also_exclave",
    area: "~0.28",
    exclaveOf: "Cyprus",
    enclavedWithin: "Dhekelia",
    coordinates: ["34.98444", "33.74361"],
    notes:
      "North of Dhekelia Power Station from which it is separated by a British road; the closest point between the two territories is 21 meters."
  },
  {
    name: "Dhekelia Power Station",
    type: "enclave_also_exclave",
    area: "~0.161",
    exclaveOf: "Cyprus",
    enclavedWithin: "Dhekelia",
    coordinates: ["34.98028", "33.74583"],
    notes:
      "Partially borders the coast but enclosed by UK land and waters disputed between Cyprus and the UK; the power station is owned by the Electricity Authority of Cyprus (EAC); no permanent population."
  },
  {
    name: "Münsterbildchen",
    type: "enclave_also_exclave",
    area: "1.826",
    exclaveOf: "Germany",
    enclavedWithin: "Belgium",
    coordinates: ["50.66000", "6.19000"],
    notes:
      "West of Vennbahn trackbed; northernmost German enclave, mainly home to industrial and warehouse structures."
  },
  {
    name: "Roetgener Wald",
    type: "enclave_also_exclave",
    area: "9.98",
    exclaveOf: "Germany",
    enclavedWithin: "Belgium",
    coordinates: ["50.63667", "6.24222"],
    notes:
      "Western part of Lammersdorf , southern part of Roetgen, and intervening forest (Forst Rötgen); west and south of Vennbahn trackbed. From 1922 to 1958, the center portion (between Grenzweg and a boundary with three turning points west of the Schleebach stream) was Belgian territory. Until 1949, the east–west road that connected the two outer (German) portions was also German territory; therefore, the German land formed one oddly-shaped enclave (that also included the road to Konzen). In 1949, it was split into two enclaves when Germany ceded the roads to Belgium; in 1958, Belgium returned the east–west road and also ceded the center section of the current enclave to Germany."
  },
  {
    name: "Rückschlag",
    type: "enclave_also_exclave",
    area: "0.016",
    exclaveOf: "Germany",
    enclavedWithin: "Belgium",
    coordinates: ["50.59778", "6.24806"],
    notes:
      "Part of city of Monschau, west of Vennbahn trackbed; smallest German exclave, consisting of a house and a garden."
  },
  {
    name: "Mützenich",
    type: "enclave_also_exclave",
    area: "12.117",
    exclaveOf: "Germany",
    enclavedWithin: "Belgium",
    coordinates: ["50.56500", "6.21806"],
    notes: "West of Belgium's Vennbahn trackbed."
  },
  {
    name: "Ruitzhof",
    type: "enclave_also_exclave",
    area: "0.937",
    exclaveOf: "Germany",
    enclavedWithin: "Belgium",
    coordinates: ["50.52472", "6.19417"],
    notes:
      "Part of city of Monschau, west of Vennbahn trackbed; southernmost Vennbahn enclave after 1949 (when Belgium annexed the Hemmeres  enclave)."
  },
  {
    name: "Büsingen am Hochrhein",
    type: "enclave_also_exclave",
    area: "7.62",
    exclaveOf: "Germany",
    enclavedWithin: "Switzerland",
    coordinates: ["47.700", "8.700"],
    notes:
      "At its closest, less than 700 metres (2,300 ft) from Germany proper (to the east). Part of Swiss customs"
  },
  {
    name: "Campione d'Italia",
    type: "enclave_also_exclave",
    area: "1.6",
    exclaveOf: "Italy",
    enclavedWithin: "Switzerland",
    coordinates: ["45.96944", "8.97361"],
    notes:
      "Uses the Swiss franc, Former part of Swiss customs (until 2020). Separated by less than 1 km, at the shortest distance, from the rest of Italy by Lake Lugano and mountains, but the terrain requires a 14 km road journey to reach the nearest Italian town, Lanzo d'Intelvi."
  },
  {
    name: "Barak",
    type: "enclave_also_exclave",
    area: "2.07[24]",
    exclaveOf: "Kyrgyzstan",
    enclavedWithin: "Uzbekistan",
    coordinates: ["40.667", "72.767"],
    notes:
      "Kyrgyzstan's 1991 pre-independence border is the de jure international border, but much of it is hotly disputed with its neighbors. In August 1999, the area around Barak was occupied by Uzbekistan, cutting it off from Kyrgyz territory. Uzbek forces dug up and blockaded the road to Ak-Tash while also allegedly seizing large areas of Kyrgyz land that had been loaned in the Soviet era but never returned. They entrenched themselves within much of Kyrgyz border territory and refused to leave. Barak became a de facto enclave only 1.5 km from the shifted main border. Four Uzbek enclaves and Barak are major sticking points in delimitation talks, and disputes have centered on the areas of Barak, Sokh, Gava and Gavasay (stream). (Map) In August 2018 Kyrgyz and Uzbek authorities agreed to a land swap that would eliminate the exclave. The exchange process may take up to two years."
  },
  {
    name: "Likoma Island",
    type: "enclave_also_exclave",
    area: "130.0 (incl a territorial water area)",
    exclaveOf: "Malawi",
    enclavedWithin: "Mozambique",
    coordinates: ["-12.067", "34.733"],
    notes:
      "Lacustrine enclave, including smaller islets, with territorial water border in Lake Malawi (Lake Nyasa); only ~5 kilometers from the Mozambique shore; combined land area of Likoma Is. and the smaller Chizumulu Is. is 18 km2."
  },
  {
    name: "Chizumulu Island",
    type: "enclave_also_exclave",
    area: "101.4 (incl 2-NM territorial water area)",
    exclaveOf: "Malawi",
    enclavedWithin: "Mozambique",
    coordinates: ["-12.01667", "34.62056"],
    notes:
      "Lacustrine enclave with territorial water border in Lake Malawi (Lake Nyasa); Malawian mainland is 46 km away."
  },
  {
    name: "Baarle-Nassau",
    type: "enclave_also_exclave",
    area: "0.150684",
    exclaveOf: "Netherlands",
    enclavedWithin: "Belgium",
    coordinates: ["51.41194", "4.87111"],
    notes:
      "Seven of the eight Dutch enclaves are counter-enclaves inside two Belgian enclaves (H1 and H8); one is in the main body of Belgium (N8)."
  },
  {
    name: "Laguna Los Portillos",
    type: "enclave_also_exclave",
    area: "~0.46",
    exclaveOf: "Nicaragua",
    enclavedWithin: "Costa Rica",
    coordinates: ["10.931972", "-83.670111"],
    notes:
      "On 2 Feb 2018, the ICJ rendered a decision in a border dispute between Nicaragua and Costa Rica regarding Isla Portillos . Nicaragua was left with just the Laguna Los Portillos and its short strip of beach. The court also decided that the sea just outside of the lagoon would be Costa Rican waters. The ICJ concluded that the whole beach is Costa Rican except for the part directly between the lagoon and the Caribbean Sea – now a tiny enclave of Nicaraguan territory separated from the rest of the country."
  },
  {
    name: "Madha",
    type: "enclave_also_exclave",
    area: "~75",
    exclaveOf: "Oman",
    enclavedWithin: "United Arab Emirates",
    coordinates: ["25.29", "56.29"],
    notes:
      "Halfway between the Omani fragment on the Musandam Peninsula and the rest of Oman; surrounds the UAE counter-enclave of Nahwa."
  },
  {
    name: "San'kovo-Medvezh'e",
    type: "enclave_also_exclave",
    area: "4.54",
    exclaveOf: "Russia",
    enclavedWithin: "Belarus",
    coordinates: ["52.48000", "31.56417"],
    notes:
      "Contains two small villages that have been depopulated since the 1986 Chernobyl disaster in Ukraine."
  },
  {
    name: "Llívia",
    type: "enclave_also_exclave",
    area: "12.84",
    exclaveOf: "Spain",
    enclavedWithin: "France",
    coordinates: ["42.467", "1.983"],
    notes:
      "To the east of Andorra, separated from the rest of Spain by a corridor about 2 km wide containing the French communes of Ur and Bourg-Madame."
  },
  {
    name: "Vorukh",
    type: "enclave_also_exclave",
    area: "~96.7",
    exclaveOf: "Tajikistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["39.85111", "70.63333"],
    notes:
      "South of the mountain Ak-Tash; population is 95% Tajik and the rest Kyrgyz."
  },
  {
    name: "Kayragach",
    type: "enclave_also_exclave",
    area: "~0.88",
    exclaveOf: "Tajikistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["40.06806", "69.54472"],
    notes:
      "Near the railway station of Stantsiya Kayragach, next to the Kyrgyz–Tajik border; also referred to as \"Western Qal'acha\" due to proximity to the Tajik town of Qal'acha; apparently there is no named settlement."
  },
  {
    name: "Sarvan",
    type: "enclave_also_exclave",
    area: "8.4",
    exclaveOf: "Tajikistan",
    enclavedWithin: "Uzbekistan",
    coordinates: ["40.96667", "70.61556"],
    notes:
      "Long, narrow territory located in the Fergana and Isfara valleys region where Kyrgyzstan, Tajikistan and Uzbekistan meet."
  },
  {
    name: "Nahwa",
    type: "enclave_also_exclave",
    area: "~5.2",
    exclaveOf: "United Arab Emirates",
    enclavedWithin: "Oman",
    coordinates: ["25.28", "56.28"],
    notes:
      "A counter-enclave surrounded by Madha, reported to consist of around forty houses."
  },
  {
    name: "Filomena Islands",
    type: "enclave_also_exclave",
    area: "~23",
    exclaveOf: "Uruguay",
    enclavedWithin: "Argentina",
    coordinates: ["-32.983", "-58.100"],
    notes:
      "Five adjacent islands (Isla Filomena Grande, Isla Filomena Chica, Isla Palma Chica, Isla Bassi, Isla Tres Cruces) with territorial water borders in the Uruguay River. Uninhabited islands that form part of the Esteros de Farrapos National Park."
  },
  {
    name: "Sokh",
    type: "enclave_also_exclave",
    area: "~234",
    exclaveOf: "Uzbekistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["40.04417", "71.09417"],
    notes:
      "Large enclave with 99% Tajik population, the rest Kyrgyz and almost no ethnic Uzbeks."
  },
  {
    name: "Shakhimardan",
    type: "enclave_also_exclave",
    area: "~38.2",
    exclaveOf: "Uzbekistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["39.98306", "71.80500"],
    notes:
      "Located in a narrow valley in the Alay Mountains where the rivers Ok-su and Kok-su meet to form the Shakhimardan-sai ."
  },
  {
    name: "Chon-Qora",
    type: "enclave_also_exclave",
    area: "~3",
    exclaveOf: "Uzbekistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["40.24361", "71.03722"],
    notes:
      "Tiny enclave lying on the Sokh River, immediately north of Sokh; measures about 3 km long by 1 km wide, with the Uzbek villages of Chon-Qora (or Chongara 40°15′03″N 71°02′15″E﻿ / ﻿40.25083°N 71.03750°E) and Qalacha (40°14′10″N 71°02′12″E﻿ / ﻿40.23611°N 71.03667°E) at either end; the Kyrgyz village of Chong-Kara (or Chon-Kara 40°15′37″N 71°00′41″E﻿ / ﻿40.26028°N 71.01139°E) lies 2 km northwest. "
  },
  {
    name: "Jani-Ayil",
    type: "enclave_also_exclave",
    area: "~0.8",
    exclaveOf: "Uzbekistan",
    enclavedWithin: "Kyrgyzstan",
    coordinates: ["40.20250", "71.66611"],
    notes:
      "Tiny enclave north-northwest of the Shakhimardan enclave; within 1 km of the Uzbek main border; the Kyrgyz towns of Jani-Ayil (40°10′56″N 71°40′49″E﻿ / ﻿40.18222°N 71.68028°E) and Kalmion (40°12′44″N 71°37′58″E﻿ / ﻿40.21222°N 71.63278°E) lie outside opposite edges of this enclave."
  },
  {
    name: "High Seas",
    type: "enclave_also_exclave",
    area: "~180,000",
    exclaveOf: "International waters",
    enclavedWithin: "Japan",
    coordinates: ["26.317", "135.867"],
    notes:
      "Surrounded by Japan's EEZ; it lies between the territorial zones of Honshu, Shikoku, the Bonin Islands, Okino-tori-shima and Okinawa Island"
  },
  {
    name: "High Seas",
    type: "enclave_also_exclave",
    area: "~1,300",
    exclaveOf: "International waters",
    enclavedWithin: "New Zealand",
    coordinates: ["-44.317", "178.200"],
    notes:
      "Surrounded by New Zealand's EEZ; it lies between the territorial zones of the Chatham Islands, North Island and the Bounty Islands"
  },
  {
    name: "High Seas",
    type: "enclave_also_exclave",
    area: "~14,000",
    exclaveOf: "International waters",
    enclavedWithin: "New Zealand",
    coordinates: ["-49.533", "173.100"],
    notes:
      "Surrounded by New Zealand's EEZ; it lies between the territorial zones of Campbell Island, South Island and the Antipodes Islands"
  },
  {
    name: "High Seas",
    type: "enclave_also_exclave",
    area: "~3,700",
    exclaveOf: "International waters",
    enclavedWithin: "French Polynesia",
    coordinates: ["-24.2", "-143.3"],
    notes:
      "Surrounded by France's EEZ; it lies between the territorial zones of the Bass Islands, Raivavae, Nukutepipi, and Tematagi"
  },
  {
    name: "Lesotho",
    type: "sovereign_enclave",
    exclaveOf: "",
    notes: "",
    area: "30,355",
    enclavedWithin: "South Africa",
    coordinates: ["-29.6", "28.3"]
  },
  {
    name: "San Marino",
    type: "sovereign_enclave",
    exclaveOf: "",
    notes: "",
    area: "61.2",
    enclavedWithin: "Italy",
    coordinates: ["43.94167", "12.45833"]
  },
  {
    name: "Vatican City",
    type: "sovereign_enclave",
    exclaveOf: "",
    notes: "",
    area: "0.44",
    enclavedWithin: "Italy",
    coordinates: ["41.9033", "12.4533"]
  },
  {
    name: "Nakhichivan Autonomous Republic",
    type: "exclave_no_enclave",
    area: "5500",
    exclaveOf: "Azerbaijan",
    enclavedWithin: "",
    coordinates: ["39.333", "45.500"],
    notes: "Bounded by Armenia, Iran, and Turkey"
  },
  {
    name: "Gulf of Fonseca",
    type: "exclave_no_enclave",
    area: "~190",
    exclaveOf: "Honduras",
    enclavedWithin: "",
    coordinates: ["13.083", "-87.767"],
    notes:
      'Honduras, El Salvador and Nicaragua border the Gulf of Fonseca, a closed sea under international law. Each enjoys a 3-nautical mile littoral zone of sovereignty along its shores and islands in the gulf. The remaining water area in the gulf comprises a tridominium that is shared in common among all three nations. The littoral zones (territorial waters) abut each other in a way that forms two separate areas of tridominium waters in the gulf. The outer area opens directly to the Pacific Ocean and is separated from the inner area by the territorial waters of Salvadoran and Nicaraguan islets. The inner area is bordered by the waters of all three countries. The larger outer area is bordered only by the waters of El Salvador and Nicaragua and the closing line of the gulf, such that one cannot travel within the gulf from Honduras to the outer area except by passing through El Salvadoran and Nicaraguan waters. Therefore, the outer water area is an exclave of Honduras that is shared territorially with two other countries. All three nations are "entitled outside the closing line to territorial sea, continental shelf and exclusive economic zone. Whether this situation should remain in being or be replaced by a division and delimitation into three separate zones is, as inside the Gulf also, a matter for the three States to decide."'
  },
  {
    name: "Gaza Strip",
    type: "exclave_no_enclave",
    area: "360",
    exclaveOf: "State of Palestine",
    enclavedWithin: "",
    coordinates: ["31.417", "34.333"],
    notes:
      "Bounded by Israel, Egypt and the Mediterranean Sea, where the territorial sea and contiguous zone of Palestine are surrounded by those of Israel (the waters of Palestine and Egypt are separated by an Israeli corridor)."
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~190,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["57.100", "-179.067"],
    notes: "Surrounded by the EEZs of Russia and the United States (Alaska)."
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~310,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["71.633", "3.667"],
    notes:
      "Surrounded by the EEZs of Norway (including Svalbard), Faeroe Islands, Greenland, Jan Mayen (Norway) and Iceland"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~20,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["25.683", "-87.017"],
    notes:
      "Surrounded by the EEZs of Mexico (EEZ defined by Cape Catoche and Scorpion Reef in the Gulf of Mexico), USA (EEZ defined by Loggerhead Key and the Gulf coast) and Cuba (EEZ extends northwest from Cayo Ines de Soto)"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["-12.517", "53.767"],
    notes:
      "Surrounded by the EEZs of Mauritius (Agalega Islands), Tromelin Island (France), Madagascar and Seychelles (Farquhar Atoll)"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["16.067", "116.233"],
    notes:
      "In the South China Sea, the EEZs that are defined by Taiwan (Pratas Reef), the Philippines (Luzon Island and Cabra I.), the Spratly Islands of Dao Dinh Ba and Flat Island, and the Paracel Island of Dao Hoang Sa enclose an exclave. National sovereignty over many of the Spratly and Paracel Islands in the South China Sea is disputed. Hence, depending upon the claims involved, this exclave may be considered as being created by the EEZs of Taiwan and the Philippines, or by the EEZs of Taiwan, the Philippines and Viet Nam, or by the EEZs of Taiwan and mainland China, or by the EEZ of mainland China alone."
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~100,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["-14.117", "-158.583"],
    notes:
      "Surrounded by the EEZs of French Polynesia, Cook Islands and Kiribati"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~77,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["-15.267", "173.000"],
    notes: "Surrounded by the EEZs of Vanuatu, Solomon Islands and Fiji"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~380,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["2.717", "142.883"],
    notes:
      "Surrounded by the EEZs of Palau, Micronesia, Indonesia and Papua-New Guinea"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~1,400,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["15.433", "133.000"],
    notes:
      "Surrounded by the EEZs of Japan (outer islands, including Okino-tori-shima), Palau, the Philippines, Northern Marianas Islands and Micronesia"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "~800,000",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["-5.000", "166.167"],
    notes:
      "Surrounded by the EEZs of Nauru, Tuvalu, Micronesia, Northern Marianas Islands, Papua-New Guinea, Fiji, Kiribati and the Solomon Islands"
  },
  {
    name: "High Seas",
    type: "exclave_no_enclave",
    area: "17,467",
    exclaveOf: "International waters",
    enclavedWithin: "",
    coordinates: ["25.650", "-92.767"],
    notes:
      "Surrounded by the EEZs of Mexico (EEZ defined by Scorpion Reef and Cayo Arenas in the Gulf of Mexico) and the United States (EEZ defined by the Gulf of Mexico coast, including Wolf Island (south of Freeport, Texas, and Raccoon Island, Louisiana)) – This exclave no longer exists per se. In areas with natural resource deposits on the continental shelf, the UNCLOS allows nations to claim territory beyond the EEZ to a maximum of 350 NM. On 9 June 2000, the U.S. and Mexico divided the Western Gap by a line equidistant from both countries' coastlines. The new boundary divided the Western Gap, giving 38% of the area (6562 km2) to the U.S. and 62% to Mexico (10,905 km2)."
  },
  {
    name: "Brunei",
    type: "sovereign_semi_enclave",
    area: "~5765",
    exclaveOf: "",
    enclavedWithin: "Malaysia",
    coordinates: ["4.89", "114.94"],
    notes:
      "A country located on the north coast of the island of Borneo in Southeast Asia. Apart from its South China Sea coast, it is completely surrounded by the Malaysian state of Sarawak. It is separated into two parts by the Sarawak district of Limbang. Brunei is the only sovereign state entirely on Borneo"
  },
  {
    name: "Gambia",
    type: "sovereign_semi_enclave",
    area: "10,689",
    exclaveOf: "",
    enclavedWithin: "Senegal",
    coordinates: ["13.28", "-16.36"],
    notes:
      "A country in West Africa. It is the smallest country within mainland Africa and is surrounded by Senegal, except for its western coast on the Atlantic Ocean."
  },
  {
    name: "Monaco",
    type: "sovereign_semi_enclave",
    area: "2.02",
    exclaveOf: "",
    enclavedWithin: "France",
    coordinates: ["43.73", "7.42"],
    notes:
      "A sovereign city-state and microstate on the French Riviera a few kilometres west of the Italian region of Liguria, in Western Europe, on the Mediterranean Sea. It is bordered by France to the north, east and west."
  },
  {
    name: "Temburong",
    type: "non_sovereign_semi_enclave",
    area: "1306",
    exclaveOf: "Brunei",
    enclavedWithin: "Malaysia",
    coordinates: ["4.62", "115.17"],
    notes:
      "The easternmost district in Brunei. It is an exclave — the land is separated from the rest of the country by Malaysia and Brunei Bay, and accessible from the mainland via the Temburong Bridge."
  },
  {
    name: "Dhekelia",
    type: "non_sovereign_semi_enclave",
    area: "254 (with Akrotiri)",
    exclaveOf: "United Kingdom",
    enclavedWithin: "Cyprus",
    coordinates: ["35.02", "33.78"],
    notes:
      "One of two British Overseas Territories on the island of Cyprus. The areas, which include British military bases and installations, as well as other land, were retained by the British under the 1960 treaty of independence, signed by the United Kingdom, Greece, Turkey and representatives from the Greek and Turkish Cypriot communities, which granted independence to the (then) Crown colony of Cyprus. The territory serves an important role as a station for signals intelligence and provides a vital strategic part of the United Kingdom surveillance gathering network in the Mediterranean and the Middle East."
  },
  {
    name: "Akrotiri",
    type: "non_sovereign_semi_enclave",
    area: "254 (with Dhekelia)",
    exclaveOf: "United Kingdom",
    enclavedWithin: "Cyprus",
    coordinates: ["34.60", "32.95"],
    notes:
      "One of two British Overseas Territories on the island of Cyprus. The areas, which include British military bases and installations, as well as other land, were retained by the British under the 1960 treaty of independence, signed by the United Kingdom, Greece, Turkey and representatives from the Greek and Turkish Cypriot communities, which granted independence to the (then) Crown colony of Cyprus. The territory serves an important role as a station for signals intelligence and provides a vital strategic part of the United Kingdom surveillance gathering network in the Mediterranean and the Middle East."
  },
  {
    name: "Kokkina",
    type: "non_sovereign_semi_enclave",
    area: "3.355",
    exclaveOf: "Northern Cyprus",
    enclavedWithin: "Cyprus",
    coordinates: ["35.18", "32.62"],
    notes:
      "The de facto independent Turkish Republic of Northern Cyprus (TRNC), which is unrecognized internationally, has a semi-enclave in the island's Northwest, Kokkina/Erenköy, which is bounded by the U.N. buffer zone and the Mediterranean Sea."
  },
  {
    name: "Alaska",
    type: "non_sovereign_semi_enclave",
    area: "1,717,856",
    exclaveOf: "United States of America",
    enclavedWithin: "Canada",
    coordinates: ["64", "-150"],
    notes:
      "A state located in the Western United States on the northwest extremity of North America. A semi-exclave of the U.S., it borders the Canadian province of British Columbia and the territory of Yukon to the east and has a maritime border with the Russian Federation's Chukotka Autonomous Okrug to the west, just across the Bering Strait. To the north are the Chukchi and Beaufort seas of the Arctic Ocean, while the Pacific Ocean lies to the south and southwest."
  },
  {
    name: "Gibraltar",
    type: "non_sovereign_semi_enclave",
    area: "6.8",
    exclaveOf: "United Kingdom",
    enclavedWithin: "Spain",
    coordinates: ["36.14", "-5.35"],
    notes:
      "A British Overseas Territory located at the southern tip of the Iberian Peninsula. It's bordered to the north by Spain."
  },
  {
    name: "Kaliningrad Oblast",
    type: "non_sovereign_semi_exclave",
    area: "15,100",
    exclaveOf: "Russia",
    enclavedWithin: "",
    coordinates: ["54.71", "20.5"],
    notes:
      "The westernmost federal subject of Russia. It is a semi-exclave, and is situated on the Baltic coast. The oblast is bordered by Poland to the south, Lithuania to the north and east, and the Baltic Sea to the west. It is impossible to travel overland between the oblast and the main contiguous portion of Russia without passing through at least two other countries."
  },
  {
    name: "Famagusta District",
    type: "non_sovereign_semi_exclave",
    area: "",
    exclaveOf: "Cyprus",
    enclavedWithin: "",
    coordinates: ["35.03", "33.92"],
    notes:
      'A district administration in "exile" exists on the Republic of Cyprus-controlled part of the island. This part of the district has a population of 46,900 inhabitants (2015). Most of the district has been under Turkish control since the 1974 invasion. Since 1998, the northeastern section, including the Karpaz Peninsula, has been administered separately as the İskele District, a division not recognized by the Republic of Cyprus and the UN.'
  },
  {
    name: "French Guiana",
    type: "non_sovereign_semi_exclave",
    area: "83,846",
    exclaveOf: "France",
    enclavedWithin: "",
    coordinates: ["4", "-53"],
    notes:
      "An overseas department/region and single territorial collectivity of France on the northern Atlantic coast of South America in the Guianas. It borders Brazil to the east and south and Suriname to the west. French Guiana is the second-largest region of France (more than one-seventh the size of Metropolitan France) and the largest outermost region within the European Union."
  }
]
