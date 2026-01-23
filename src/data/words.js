// Luxembourgish Vocabulary Database
// Gender: 'm' = männlech (masculine), 'f' = wiiblech (feminine), 'n' = sächlech (neuter)
// Types: noun, verb, adjective, adverb, preposition, pronoun, conjunction, interjection, article, numeral

export const words = [
  // === GREETINGS & COMMON PHRASES ===
  {
    id: 1,
    luxembourgish: "Moien",
    english: "Hello / Good morning",
    type: "interjection",
    gender: null,
    category: "greetings",
    example: { lb: "Moien, wéi geet et?", en: "Hello, how are you?" }
  },
  {
    id: 2,
    luxembourgish: "Äddi",
    english: "Goodbye",
    type: "interjection",
    gender: null,
    category: "greetings",
    example: { lb: "Äddi, bis muer!", en: "Goodbye, see you tomorrow!" }
  },
  {
    id: 3,
    luxembourgish: "Wann ech gelift",
    english: "Please",
    type: "interjection",
    gender: null,
    category: "greetings",
    example: { lb: "Eng Taass Kaffi, wann ech gelift.", en: "A cup of coffee, please." }
  },
  {
    id: 4,
    luxembourgish: "Merci",
    english: "Thank you",
    type: "interjection",
    gender: null,
    category: "greetings",
    example: { lb: "Merci villmools!", en: "Thank you very much!" }
  },
  {
    id: 5,
    luxembourgish: "Entschëllegt",
    english: "Excuse me / Sorry",
    type: "interjection",
    gender: null,
    category: "greetings",
    example: { lb: "Entschëllegt, wou ass d'Gare?", en: "Excuse me, where is the station?" }
  },
  
  // === PRONOUNS ===
  {
    id: 6,
    luxembourgish: "ech",
    english: "I",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Ech sinn aus Lëtzebuerg.", en: "I am from Luxembourg." }
  },
  {
    id: 7,
    luxembourgish: "du",
    english: "you (informal)",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Du bass mäi Frënd.", en: "You are my friend." }
  },
  {
    id: 8,
    luxembourgish: "hien",
    english: "he",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Hien ass Dokter.", en: "He is a doctor." }
  },
  {
    id: 9,
    luxembourgish: "si",
    english: "she / they",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Si schafft an der Stad.", en: "She works in the city." }
  },
  {
    id: 10,
    luxembourgish: "mir",
    english: "we",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Mir ginn an d'Kino.", en: "We are going to the cinema." }
  },
  {
    id: 11,
    luxembourgish: "dir",
    english: "you (plural/formal)",
    type: "pronoun",
    gender: null,
    category: "pronouns",
    example: { lb: "Dir sidd wëllkomm.", en: "You are welcome." }
  },

  // === COMMON VERBS ===
  {
    id: 12,
    luxembourgish: "sinn",
    english: "to be",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "sinn", du: "bass", hien: "ass", mir: "sinn", dir: "sidd", si: "sinn" },
      pastParticiple: "gewiescht"
    },
    example: { lb: "Ech sinn midd.", en: "I am tired." }
  },
  {
    id: 13,
    luxembourgish: "hunn",
    english: "to have",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "hunn", du: "hues", hien: "huet", mir: "hunn", dir: "hutt", si: "hunn" },
      pastParticiple: "gehat"
    },
    example: { lb: "Ech hunn en Hond.", en: "I have a dog." }
  },
  {
    id: 14,
    luxembourgish: "goen",
    english: "to go",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "ginn", du: "gees", hien: "geet", mir: "ginn", dir: "gitt", si: "ginn" },
      pastParticiple: "gaangen"
    },
    example: { lb: "Ech ginn an d'Schoul.", en: "I go to school." }
  },
  {
    id: 15,
    luxembourgish: "maachen",
    english: "to make / to do",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "maachen", du: "méchs", hien: "mécht", mir: "maachen", dir: "maacht", si: "maachen" },
      pastParticiple: "gemaach"
    },
    example: { lb: "Wat méchs du?", en: "What are you doing?" }
  },
  {
    id: 16,
    luxembourgish: "kommen",
    english: "to come",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "kommen", du: "kënns", hien: "kënnt", mir: "kommen", dir: "kommt", si: "kommen" },
      pastParticiple: "komm"
    },
    example: { lb: "Kënns du mat?", en: "Are you coming along?" }
  },
  {
    id: 17,
    luxembourgish: "gesinn",
    english: "to see",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "gesinn", du: "gesäis", hien: "gesäit", mir: "gesinn", dir: "gesitt", si: "gesinn" },
      pastParticiple: "gesinn"
    },
    example: { lb: "Ech gesinn dech muer.", en: "I see you tomorrow." }
  },
  {
    id: 18,
    luxembourgish: "wëssen",
    english: "to know (fact)",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "weess", du: "weess", hien: "weess", mir: "wëssen", dir: "wësst", si: "wëssen" },
      pastParticiple: "gewosst"
    },
    example: { lb: "Ech weess et net.", en: "I don't know." }
  },
  {
    id: 19,
    luxembourgish: "kënnen",
    english: "can / to be able to",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "kann", du: "kanns", hien: "kann", mir: "kënnen", dir: "kënnt", si: "kënnen" },
      pastParticiple: "konnt"
    },
    example: { lb: "Ech kann Lëtzebuergesch schwätzen.", en: "I can speak Luxembourgish." }
  },
  {
    id: 20,
    luxembourgish: "wëllen",
    english: "to want",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "wëll", du: "wëlls", hien: "wëll", mir: "wëllen", dir: "wëllt", si: "wëllen" },
      pastParticiple: "gewollt"
    },
    example: { lb: "Ech wëll eng Pizza.", en: "I want a pizza." }
  },
  {
    id: 21,
    luxembourgish: "mussen",
    english: "must / to have to",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "muss", du: "muss", hien: "muss", mir: "mussen", dir: "musst", si: "mussen" },
      pastParticiple: "gemusst"
    },
    example: { lb: "Ech muss schaffen.", en: "I must work." }
  },
  {
    id: 22,
    luxembourgish: "schwätzen",
    english: "to speak / to talk",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "schwätzen", du: "schwätz", hien: "schwätzt", mir: "schwätzen", dir: "schwätzt", si: "schwätzen" },
      pastParticiple: "geschwat"
    },
    example: { lb: "Schwätz lues, wann ech gelift.", en: "Speak slowly, please." }
  },
  {
    id: 23,
    luxembourgish: "iessen",
    english: "to eat",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "iessen", du: "ëss", hien: "ësst", mir: "iessen", dir: "iesst", si: "iessen" },
      pastParticiple: "giess"
    },
    example: { lb: "Mir iessen zesummen.", en: "We eat together." }
  },
  {
    id: 24,
    luxembourgish: "drénken",
    english: "to drink",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "drénken", du: "drénks", hien: "drénkt", mir: "drénken", dir: "drénkt", si: "drénken" },
      pastParticiple: "gedronk"
    },
    example: { lb: "Wat wëlls du drénken?", en: "What do you want to drink?" }
  },
  {
    id: 25,
    luxembourgish: "schaffen",
    english: "to work",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "schaffen", du: "schaffs", hien: "schafft", mir: "schaffen", dir: "schafft", si: "schaffen" },
      pastParticiple: "geschafft"
    },
    example: { lb: "Wou schaffs du?", en: "Where do you work?" }
  },
  {
    id: 26,
    luxembourgish: "wunnen",
    english: "to live (reside)",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "wunnen", du: "wunns", hien: "wunnt", mir: "wunnen", dir: "wunnt", si: "wunnen" },
      pastParticiple: "gewunnt"
    },
    example: { lb: "Ech wunnen zu Lëtzebuerg.", en: "I live in Luxembourg." }
  },
  {
    id: 27,
    luxembourgish: "léieren",
    english: "to learn / to teach",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "léieren", du: "léiers", hien: "léiert", mir: "léieren", dir: "léiert", si: "léieren" },
      pastParticiple: "geléiert"
    },
    example: { lb: "Ech léieren Lëtzebuergesch.", en: "I am learning Luxembourgish." }
  },
  {
    id: 28,
    luxembourgish: "liesen",
    english: "to read",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "liesen", du: "lies", hien: "liest", mir: "liesen", dir: "liest", si: "liesen" },
      pastParticiple: "gelies"
    },
    example: { lb: "Ech liesen e Buch.", en: "I am reading a book." }
  },
  {
    id: 29,
    luxembourgish: "schreiwen",
    english: "to write",
    type: "verb",
    gender: null,
    category: "verbs",
    verbForms: {
      present: { ech: "schreiwen", du: "schreifs", hien: "schreift", mir: "schreiwen", dir: "schreift", si: "schreiwen" },
      pastParticiple: "geschriwwen"
    },
    example: { lb: "Ech schreiwen en E-Mail.", en: "I am writing an email." }
  },

  // === NOUNS - PEOPLE & FAMILY ===
  {
    id: 30,
    luxembourgish: "Mënsch",
    english: "person / human",
    type: "noun",
    gender: "m",
    category: "people",
    plural: "Mënschen",
    example: { lb: "De Mënsch ass gutt.", en: "The person is good." }
  },
  {
    id: 31,
    luxembourgish: "Mann",
    english: "man / husband",
    type: "noun",
    gender: "m",
    category: "family",
    plural: "Männer",
    example: { lb: "De Mann schafft.", en: "The man works." }
  },
  {
    id: 32,
    luxembourgish: "Fra",
    english: "woman / wife",
    type: "noun",
    gender: "f",
    category: "family",
    plural: "Fraen",
    example: { lb: "D'Fra kacht gutt.", en: "The woman cooks well." }
  },
  {
    id: 33,
    luxembourgish: "Kand",
    english: "child",
    type: "noun",
    gender: "n",
    category: "family",
    plural: "Kanner",
    example: { lb: "D'Kand spillt.", en: "The child plays." }
  },
  {
    id: 34,
    luxembourgish: "Papp",
    english: "father / dad",
    type: "noun",
    gender: "m",
    category: "family",
    plural: "Päpp",
    example: { lb: "Mäi Papp ass Dokter.", en: "My father is a doctor." }
  },
  {
    id: 35,
    luxembourgish: "Mamm",
    english: "mother / mom",
    type: "noun",
    gender: "f",
    category: "family",
    plural: "Mammen",
    example: { lb: "Meng Mamm kacht.", en: "My mother cooks." }
  },
  {
    id: 36,
    luxembourgish: "Brudder",
    english: "brother",
    type: "noun",
    gender: "m",
    category: "family",
    plural: "Bridder",
    example: { lb: "Mäi Brudder ass méi jonk.", en: "My brother is younger." }
  },
  {
    id: 37,
    luxembourgish: "Schwëster",
    english: "sister",
    type: "noun",
    gender: "f",
    category: "family",
    plural: "Schwësteren",
    example: { lb: "Meng Schwëster wunnt zu Paräis.", en: "My sister lives in Paris." }
  },
  {
    id: 38,
    luxembourgish: "Frënd",
    english: "friend (male)",
    type: "noun",
    gender: "m",
    category: "people",
    plural: "Frënn",
    example: { lb: "Hien ass mäi beschte Frënd.", en: "He is my best friend." }
  },
  {
    id: 39,
    luxembourgish: "Frëndin",
    english: "friend (female)",
    type: "noun",
    gender: "f",
    category: "people",
    plural: "Frëndinnen",
    example: { lb: "Si ass meng Frëndin.", en: "She is my friend." }
  },

  // === NOUNS - PLACES ===
  {
    id: 40,
    luxembourgish: "Haus",
    english: "house",
    type: "noun",
    gender: "n",
    category: "places",
    plural: "Haiser",
    example: { lb: "D'Haus ass grouss.", en: "The house is big." }
  },
  {
    id: 41,
    luxembourgish: "Stad",
    english: "city / town",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Stied",
    example: { lb: "D'Stad Lëtzebuerg ass schéin.", en: "Luxembourg City is beautiful." }
  },
  {
    id: 42,
    luxembourgish: "Land",
    english: "country / land",
    type: "noun",
    gender: "n",
    category: "places",
    plural: "Länner",
    example: { lb: "Lëtzebuerg ass e klengt Land.", en: "Luxembourg is a small country." }
  },
  {
    id: 43,
    luxembourgish: "Schoul",
    english: "school",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Schoulen",
    example: { lb: "D'Kanner ginn an d'Schoul.", en: "The children go to school." }
  },
  {
    id: 44,
    luxembourgish: "Aarbecht",
    english: "work / job",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Aarbechten",
    example: { lb: "Ech ginn op d'Aarbecht.", en: "I go to work." }
  },
  {
    id: 45,
    luxembourgish: "Buttik",
    english: "shop / store",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Buttiker",
    example: { lb: "D'Buttik ass zou.", en: "The shop is closed." }
  },
  {
    id: 46,
    luxembourgish: "Restaurant",
    english: "restaurant",
    type: "noun",
    gender: "n",
    category: "places",
    plural: "Restauranten",
    example: { lb: "D'Restaurant ass gutt.", en: "The restaurant is good." }
  },
  {
    id: 47,
    luxembourgish: "Gare",
    english: "train station",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Garen",
    example: { lb: "Wou ass d'Gare?", en: "Where is the train station?" }
  },
  {
    id: 48,
    luxembourgish: "Fluchhafen",
    english: "airport",
    type: "noun",
    gender: "m",
    category: "places",
    plural: "Fluchhäfen",
    example: { lb: "De Fluchhafen ass net wäit.", en: "The airport is not far." }
  },
  {
    id: 49,
    luxembourgish: "Strooss",
    english: "street",
    type: "noun",
    gender: "f",
    category: "places",
    plural: "Stroossen",
    example: { lb: "D'Strooss ass laang.", en: "The street is long." }
  },

  // === NOUNS - FOOD & DRINK ===
  {
    id: 50,
    luxembourgish: "Waasser",
    english: "water",
    type: "noun",
    gender: "n",
    category: "food",
    plural: null,
    example: { lb: "Kann ech Waasser kréien?", en: "Can I get water?" }
  },
  {
    id: 51,
    luxembourgish: "Kaffi",
    english: "coffee",
    type: "noun",
    gender: "m",
    category: "food",
    plural: null,
    example: { lb: "Ech drénken all Dag Kaffi.", en: "I drink coffee every day." }
  },
  {
    id: 52,
    luxembourgish: "Téi",
    english: "tea",
    type: "noun",
    gender: "m",
    category: "food",
    plural: null,
    example: { lb: "Wëlls du Téi?", en: "Do you want tea?" }
  },
  {
    id: 53,
    luxembourgish: "Brout",
    english: "bread",
    type: "noun",
    gender: "n",
    category: "food",
    plural: "Brouder",
    example: { lb: "D'Brout ass frësch.", en: "The bread is fresh." }
  },
  {
    id: 54,
    luxembourgish: "Mëllech",
    english: "milk",
    type: "noun",
    gender: "f",
    category: "food",
    plural: null,
    example: { lb: "Ech drénken Mëllech.", en: "I drink milk." }
  },
  {
    id: 55,
    luxembourgish: "Fleesch",
    english: "meat",
    type: "noun",
    gender: "n",
    category: "food",
    plural: null,
    example: { lb: "D'Fleesch ass gutt.", en: "The meat is good." }
  },
  {
    id: 56,
    luxembourgish: "Fësch",
    english: "fish",
    type: "noun",
    gender: "m",
    category: "food",
    plural: "Fësch",
    example: { lb: "Ech iessen gär Fësch.", en: "I like to eat fish." }
  },
  {
    id: 57,
    luxembourgish: "Uebst",
    english: "fruit",
    type: "noun",
    gender: "n",
    category: "food",
    plural: null,
    example: { lb: "Uebst ass gesond.", en: "Fruit is healthy." }
  },
  {
    id: 58,
    luxembourgish: "Geméis",
    english: "vegetables",
    type: "noun",
    gender: "n",
    category: "food",
    plural: null,
    example: { lb: "Ech iessen vill Geméis.", en: "I eat a lot of vegetables." }
  },
  {
    id: 59,
    luxembourgish: "Äppel",
    english: "apple",
    type: "noun",
    gender: "m",
    category: "food",
    plural: "Äppel",
    example: { lb: "Den Äppel ass rout.", en: "The apple is red." }
  },

  // === NOUNS - TIME ===
  {
    id: 60,
    luxembourgish: "Dag",
    english: "day",
    type: "noun",
    gender: "m",
    category: "time",
    plural: "Deeg",
    example: { lb: "Haut ass e schéinen Dag.", en: "Today is a nice day." }
  },
  {
    id: 61,
    luxembourgish: "Nuecht",
    english: "night",
    type: "noun",
    gender: "f",
    category: "time",
    plural: "Nuechten",
    example: { lb: "Gutt Nuecht!", en: "Good night!" }
  },
  {
    id: 62,
    luxembourgish: "Woch",
    english: "week",
    type: "noun",
    gender: "f",
    category: "time",
    plural: "Wochen",
    example: { lb: "Eng Woch huet 7 Deeg.", en: "A week has 7 days." }
  },
  {
    id: 63,
    luxembourgish: "Mount",
    english: "month",
    type: "noun",
    gender: "m",
    category: "time",
    plural: "Méint",
    example: { lb: "Dëse Mount ass kuerz.", en: "This month is short." }
  },
  {
    id: 64,
    luxembourgish: "Joer",
    english: "year",
    type: "noun",
    gender: "n",
    category: "time",
    plural: "Joer",
    example: { lb: "E Joer huet 12 Méint.", en: "A year has 12 months." }
  },
  {
    id: 65,
    luxembourgish: "Stonn",
    english: "hour",
    type: "noun",
    gender: "f",
    category: "time",
    plural: "Stonnen",
    example: { lb: "An enger Stonn.", en: "In one hour." }
  },
  {
    id: 66,
    luxembourgish: "Minutt",
    english: "minute",
    type: "noun",
    gender: "f",
    category: "time",
    plural: "Minutten",
    example: { lb: "Waart eng Minutt.", en: "Wait a minute." }
  },

  // === NOUNS - BODY ===
  {
    id: 67,
    luxembourgish: "Kapp",
    english: "head",
    type: "noun",
    gender: "m",
    category: "body",
    plural: "Käpp",
    example: { lb: "Mäi Kapp deet wéi.", en: "My head hurts." }
  },
  {
    id: 68,
    luxembourgish: "Aen",
    english: "eye",
    type: "noun",
    gender: "n",
    category: "body",
    plural: "Aen",
    example: { lb: "Si huet blo Aen.", en: "She has blue eyes." }
  },
  {
    id: 69,
    luxembourgish: "Ouer",
    english: "ear",
    type: "noun",
    gender: "n",
    category: "body",
    plural: "Oueren",
    example: { lb: "Ech héieren mat den Oueren.", en: "I hear with my ears." }
  },
  {
    id: 70,
    luxembourgish: "Hand",
    english: "hand",
    type: "noun",
    gender: "f",
    category: "body",
    plural: "Hänn",
    example: { lb: "Wäsch deng Hänn!", en: "Wash your hands!" }
  },
  {
    id: 71,
    luxembourgish: "Fouss",
    english: "foot",
    type: "noun",
    gender: "m",
    category: "body",
    plural: "Féiss",
    example: { lb: "Mäi Fouss deet wéi.", en: "My foot hurts." }
  },
  {
    id: 72,
    luxembourgish: "Häerz",
    english: "heart",
    type: "noun",
    gender: "n",
    category: "body",
    plural: "Häerzer",
    example: { lb: "D'Häerz schléit.", en: "The heart beats." }
  },

  // === ADJECTIVES ===
  {
    id: 73,
    luxembourgish: "grouss",
    english: "big / tall",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Haus ass grouss.", en: "The house is big." }
  },
  {
    id: 74,
    luxembourgish: "kleng",
    english: "small / little",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Kand ass kleng.", en: "The child is small." }
  },
  {
    id: 75,
    luxembourgish: "gutt",
    english: "good",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Iessen ass gutt.", en: "The food is good." }
  },
  {
    id: 76,
    luxembourgish: "schlecht",
    english: "bad",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Wieder ass schlecht.", en: "The weather is bad." }
  },
  {
    id: 77,
    luxembourgish: "nei",
    english: "new",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Ech hunn en neit Auto.", en: "I have a new car." }
  },
  {
    id: 78,
    luxembourgish: "al",
    english: "old",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Dat Haus ass al.", en: "That house is old." }
  },
  {
    id: 79,
    luxembourgish: "schéin",
    english: "beautiful / nice",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Stad ass schéin.", en: "The city is beautiful." }
  },
  {
    id: 80,
    luxembourgish: "séier",
    english: "fast / quick",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Den Auto ass séier.", en: "The car is fast." }
  },
  {
    id: 81,
    luxembourgish: "lues",
    english: "slow",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Schwätz méi lues.", en: "Speak more slowly." }
  },
  {
    id: 82,
    luxembourgish: "waarm",
    english: "warm / hot",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Haut ass et waarm.", en: "Today it is warm." }
  },
  {
    id: 83,
    luxembourgish: "kal",
    english: "cold",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Am Wanter ass et kal.", en: "In winter it is cold." }
  },
  {
    id: 84,
    luxembourgish: "richteg",
    english: "right / correct",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Dat ass richteg.", en: "That is correct." }
  },
  {
    id: 85,
    luxembourgish: "falsch",
    english: "wrong / false",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Dat ass falsch.", en: "That is wrong." }
  },
  {
    id: 86,
    luxembourgish: "frou",
    english: "happy / glad",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Ech sinn frou.", en: "I am happy." }
  },
  {
    id: 87,
    luxembourgish: "traureg",
    english: "sad",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Firwat bass du traureg?", en: "Why are you sad?" }
  },
  {
    id: 88,
    luxembourgish: "midd",
    english: "tired",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Ech sinn midd.", en: "I am tired." }
  },
  {
    id: 89,
    luxembourgish: "krank",
    english: "sick / ill",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Hien ass krank.", en: "He is sick." }
  },
  {
    id: 90,
    luxembourgish: "gesond",
    english: "healthy",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Uebst ass gesond.", en: "Fruit is healthy." }
  },
  {
    id: 91,
    luxembourgish: "einfach",
    english: "simple / easy",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "Dat ass einfach.", en: "That is easy." }
  },
  {
    id: 92,
    luxembourgish: "schwéier",
    english: "difficult / heavy",
    type: "adjective",
    gender: null,
    category: "adjectives",
    example: { lb: "D'Sprooch ass schwéier.", en: "The language is difficult." }
  },

  // === NUMBERS ===
  {
    id: 93,
    luxembourgish: "eent",
    english: "one",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Ech hunn eent.", en: "I have one." }
  },
  {
    id: 94,
    luxembourgish: "zwee",
    english: "two",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Zwee Kaffi, wann ech gelift.", en: "Two coffees, please." }
  },
  {
    id: 95,
    luxembourgish: "dräi",
    english: "three",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Ech hunn dräi Kanner.", en: "I have three children." }
  },
  {
    id: 96,
    luxembourgish: "véier",
    english: "four",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "E Joer huet véier Joreszäiten.", en: "A year has four seasons." }
  },
  {
    id: 97,
    luxembourgish: "fënnef",
    english: "five",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Fënnef Minutten nach.", en: "Five more minutes." }
  },
  {
    id: 98,
    luxembourgish: "sechs",
    english: "six",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Sechs Stonnen Schlof.", en: "Six hours of sleep." }
  },
  {
    id: 99,
    luxembourgish: "siwen",
    english: "seven",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Eng Woch huet siwen Deeg.", en: "A week has seven days." }
  },
  {
    id: 100,
    luxembourgish: "aacht",
    english: "eight",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Ech schaffen aacht Stonnen.", en: "I work eight hours." }
  },
  {
    id: 101,
    luxembourgish: "néng",
    english: "nine",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Et ass néng Auer.", en: "It is nine o'clock." }
  },
  {
    id: 102,
    luxembourgish: "zéng",
    english: "ten",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Ech ziele bis zéng.", en: "I count to ten." }
  },
  {
    id: 103,
    luxembourgish: "honnert",
    english: "hundred",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Honnert Euro.", en: "One hundred euros." }
  },
  {
    id: 104,
    luxembourgish: "dausend",
    english: "thousand",
    type: "numeral",
    gender: null,
    category: "numbers",
    example: { lb: "Dausend Merci!", en: "A thousand thanks!" }
  },

  // === ADVERBS ===
  {
    id: 105,
    luxembourgish: "hei",
    english: "here",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Komm hei!", en: "Come here!" }
  },
  {
    id: 106,
    luxembourgish: "do",
    english: "there",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Kuck do!", en: "Look there!" }
  },
  {
    id: 107,
    luxembourgish: "haut",
    english: "today",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Haut ass Méindeg.", en: "Today is Monday." }
  },
  {
    id: 108,
    luxembourgish: "gëschter",
    english: "yesterday",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Gëschter war et schéin.", en: "Yesterday was nice." }
  },
  {
    id: 109,
    luxembourgish: "muer",
    english: "tomorrow",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Bis muer!", en: "See you tomorrow!" }
  },
  {
    id: 110,
    luxembourgish: "elo",
    english: "now",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Komm elo!", en: "Come now!" }
  },
  {
    id: 111,
    luxembourgish: "spéider",
    english: "later",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Bis spéider!", en: "See you later!" }
  },
  {
    id: 112,
    luxembourgish: "ëmmer",
    english: "always",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Ech sinn ëmmer pünktlech.", en: "I am always punctual." }
  },
  {
    id: 113,
    luxembourgish: "ni",
    english: "never",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Ech sinn ni midd.", en: "I am never tired." }
  },
  {
    id: 114,
    luxembourgish: "vill",
    english: "much / a lot",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Merci vill!", en: "Thank you very much!" }
  },
  {
    id: 115,
    luxembourgish: "wéineg",
    english: "little / few",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Ech hu wéineg Zäit.", en: "I have little time." }
  },
  {
    id: 116,
    luxembourgish: "gär",
    english: "gladly / like to",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Ech iessen gär Pizza.", en: "I like to eat pizza." }
  },
  {
    id: 117,
    luxembourgish: "séier",
    english: "quickly",
    type: "adverb",
    gender: null,
    category: "adverbs",
    example: { lb: "Komm séier!", en: "Come quickly!" }
  },

  // === PREPOSITIONS ===
  {
    id: 118,
    luxembourgish: "an",
    english: "in / into",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Ech sinn an der Kichen.", en: "I am in the kitchen." }
  },
  {
    id: 119,
    luxembourgish: "op",
    english: "on / upon",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "D'Buch ass op dem Dësch.", en: "The book is on the table." }
  },
  {
    id: 120,
    luxembourgish: "ënner",
    english: "under",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "D'Kaz ass ënner dem Bett.", en: "The cat is under the bed." }
  },
  {
    id: 121,
    luxembourgish: "mat",
    english: "with",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Ech ginn mat dir.", en: "I go with you." }
  },
  {
    id: 122,
    luxembourgish: "ouni",
    english: "without",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Kaffi ouni Zocker.", en: "Coffee without sugar." }
  },
  {
    id: 123,
    luxembourgish: "fir",
    english: "for",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Dat ass fir dech.", en: "That is for you." }
  },
  {
    id: 124,
    luxembourgish: "vun",
    english: "from / of",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Ech sinn vun Lëtzebuerg.", en: "I am from Luxembourg." }
  },
  {
    id: 125,
    luxembourgish: "bei",
    english: "at / near / by",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Ech sinn bei mengem Frënd.", en: "I am at my friend's place." }
  },
  {
    id: 126,
    luxembourgish: "no",
    english: "after / to",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "No der Aarbecht.", en: "After work." }
  },
  {
    id: 127,
    luxembourgish: "virun",
    english: "before / in front of",
    type: "preposition",
    gender: null,
    category: "prepositions",
    example: { lb: "Virun der Dier.", en: "In front of the door." }
  },

  // === CONJUNCTIONS ===
  {
    id: 128,
    luxembourgish: "an",
    english: "and",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Kaffi an Téi.", en: "Coffee and tea." }
  },
  {
    id: 129,
    luxembourgish: "oder",
    english: "or",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Kaffi oder Téi?", en: "Coffee or tea?" }
  },
  {
    id: 130,
    luxembourgish: "awer",
    english: "but / however",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Ech wëll, awer ech kann net.", en: "I want to, but I can't." }
  },
  {
    id: 131,
    luxembourgish: "well",
    english: "because",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Ech bleiwen doheem, well ech krank sinn.", en: "I stay home because I am sick." }
  },
  {
    id: 132,
    luxembourgish: "wann",
    english: "if / when",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Wann du wëlls.", en: "If you want." }
  },
  {
    id: 133,
    luxembourgish: "dass",
    english: "that",
    type: "conjunction",
    gender: null,
    category: "conjunctions",
    example: { lb: "Ech mengen, dass et richteg ass.", en: "I think that it is correct." }
  },

  // === QUESTION WORDS ===
  {
    id: 134,
    luxembourgish: "wat",
    english: "what",
    type: "pronoun",
    gender: null,
    category: "questions",
    example: { lb: "Wat méchs du?", en: "What are you doing?" }
  },
  {
    id: 135,
    luxembourgish: "wien",
    english: "who",
    type: "pronoun",
    gender: null,
    category: "questions",
    example: { lb: "Wien ass dat?", en: "Who is that?" }
  },
  {
    id: 136,
    luxembourgish: "wou",
    english: "where",
    type: "adverb",
    gender: null,
    category: "questions",
    example: { lb: "Wou wunns du?", en: "Where do you live?" }
  },
  {
    id: 137,
    luxembourgish: "wéini",
    english: "when",
    type: "adverb",
    gender: null,
    category: "questions",
    example: { lb: "Wéini kënns du?", en: "When are you coming?" }
  },
  {
    id: 138,
    luxembourgish: "firwat",
    english: "why",
    type: "adverb",
    gender: null,
    category: "questions",
    example: { lb: "Firwat bass du hei?", en: "Why are you here?" }
  },
  {
    id: 139,
    luxembourgish: "wéi",
    english: "how",
    type: "adverb",
    gender: null,
    category: "questions",
    example: { lb: "Wéi geet et?", en: "How are you?" }
  },
  {
    id: 140,
    luxembourgish: "wéi vill",
    english: "how much / how many",
    type: "adverb",
    gender: null,
    category: "questions",
    example: { lb: "Wéi vill kascht dat?", en: "How much does that cost?" }
  },

  // === ARTICLES & MISC ===
  {
    id: 141,
    luxembourgish: "den/d'",
    english: "the (masc./fem.)",
    type: "article",
    gender: null,
    category: "articles",
    example: { lb: "Den Hond / D'Kaz", en: "The dog / The cat" }
  },
  {
    id: 142,
    luxembourgish: "een/eng",
    english: "a / an",
    type: "article",
    gender: null,
    category: "articles",
    example: { lb: "Een Auto / Eng Fro", en: "A car / A question" }
  },
  {
    id: 143,
    luxembourgish: "jo",
    english: "yes",
    type: "interjection",
    gender: null,
    category: "common",
    example: { lb: "Jo, gär.", en: "Yes, gladly." }
  },
  {
    id: 144,
    luxembourgish: "nee",
    english: "no",
    type: "interjection",
    gender: null,
    category: "common",
    example: { lb: "Nee, merci.", en: "No, thank you." }
  },
  {
    id: 145,
    luxembourgish: "net",
    english: "not",
    type: "adverb",
    gender: null,
    category: "common",
    example: { lb: "Ech verstinn dat net.", en: "I don't understand that." }
  },

  // === MORE COMMON NOUNS ===
  {
    id: 146,
    luxembourgish: "Auto",
    english: "car",
    type: "noun",
    gender: "m",
    category: "objects",
    plural: "Autoen",
    example: { lb: "Mäin Auto ass blo.", en: "My car is blue." }
  },
  {
    id: 147,
    luxembourgish: "Buch",
    english: "book",
    type: "noun",
    gender: "n",
    category: "objects",
    plural: "Bicher",
    example: { lb: "Ech liesen e Buch.", en: "I am reading a book." }
  },
  {
    id: 148,
    luxembourgish: "Dësch",
    english: "table",
    type: "noun",
    gender: "m",
    category: "objects",
    plural: "Dëscher",
    example: { lb: "Den Dësch ass grouss.", en: "The table is big." }
  },
  {
    id: 149,
    luxembourgish: "Stull",
    english: "chair",
    type: "noun",
    gender: "m",
    category: "objects",
    plural: "Still",
    example: { lb: "Sëtz op de Stull.", en: "Sit on the chair." }
  },
  {
    id: 150,
    luxembourgish: "Wieder",
    english: "weather",
    type: "noun",
    gender: "n",
    category: "nature",
    plural: null,
    example: { lb: "D'Wieder ass schéin.", en: "The weather is nice." }
  },
  {
    id: 151,
    luxembourgish: "Sonn",
    english: "sun",
    type: "noun",
    gender: "f",
    category: "nature",
    plural: null,
    example: { lb: "D'Sonn schéngt.", en: "The sun is shining." }
  },
  {
    id: 152,
    luxembourgish: "Reen",
    english: "rain",
    type: "noun",
    gender: "m",
    category: "nature",
    plural: null,
    example: { lb: "Et reent.", en: "It's raining." }
  },

  // === EMERGENCIES AND ACCIDENTS ===
  // Abroch (Break-in/Burglary)
  {
    id: 153,
    luxembourgish: "abriechen",
    english: "to break in",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "briechen an", du: "bréchs an", hien: "brécht an", mir: "briechen an", dir: "briecht an", si: "briechen an" },
      pastParticiple: "agebrach"
    },
    example: { lb: "En Déif huet agebrach.", en: "A thief broke in." }
  },
  {
    id: 154,
    luxembourgish: "Abriecher",
    english: "burglar",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Abriecher",
    example: { lb: "D'Police huet den Abriecher gefaangen.", en: "The police caught the burglar." }
  },
  {
    id: 155,
    luxembourgish: "Abroch",
    english: "break-in / burglary",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Abréch",
    example: { lb: "Et gouf en Abroch an der Strooss.", en: "There was a break-in on the street." }
  },
  {
    id: 156,
    luxembourgish: "Déif",
    english: "thief",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Déiwen",
    example: { lb: "Den Déif ass fortgelaf.", en: "The thief ran away." }
  },
  {
    id: 157,
    luxembourgish: "klauen",
    english: "to steal",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "klauen", du: "klaus", hien: "klaut", mir: "klauen", dir: "klaut", si: "klauen" },
      pastParticiple: "geklaut"
    },
    example: { lb: "Hien huet mäi Portmonni geklaut.", en: "He stole my wallet." }
  },
  {
    id: 158,
    luxembourgish: "Spuer",
    english: "trace / track / clue",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: "Spueren",
    example: { lb: "D'Police huet Spuere fonnt.", en: "The police found traces." }
  },
  {
    id: 159,
    luxembourgish: "Affer",
    english: "victim",
    type: "noun",
    gender: "n",
    category: "emergencies",
    plural: "Affer",
    example: { lb: "D'Affer gouf an d'Spidol bruecht.", en: "The victim was taken to the hospital." }
  },
  {
    id: 160,
    luxembourgish: "Täter",
    english: "perpetrator / offender",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Täter",
    example: { lb: "Den Täter ass nach net identifizéiert.", en: "The perpetrator has not been identified yet." }
  },
  {
    id: 161,
    luxembourgish: "Verbriechen",
    english: "crime",
    type: "noun",
    gender: "n",
    category: "emergencies",
    plural: "Verbriechen",
    example: { lb: "Dat ass e schwéiert Verbriechen.", en: "That is a serious crime." }
  },
  {
    id: 162,
    luxembourgish: "Verbriecher",
    english: "criminal",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Verbriecher",
    example: { lb: "De Verbriecher ass am Prisong.", en: "The criminal is in prison." }
  },

  // Brand (Fire)
  {
    id: 163,
    luxembourgish: "a Flame stoen",
    english: "to be on fire / in flames",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "stinn a Flame", du: "stees a Flame", hien: "steet a Flame", mir: "stinn a Flame", dir: "stitt a Flame", si: "stinn a Flame" },
      pastParticiple: "a Flame gestanen"
    },
    example: { lb: "D'Haus steet a Flame!", en: "The house is on fire!" }
  },
  {
    id: 164,
    luxembourgish: "Brand",
    english: "fire (conflagration)",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Bränn",
    example: { lb: "De Brand ass geläscht.", en: "The fire is extinguished." }
  },
  {
    id: 165,
    luxembourgish: "Brandstëfter",
    english: "arsonist",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Brandstëfter",
    example: { lb: "De Brandstëfter gouf verhaft.", en: "The arsonist was arrested." }
  },
  {
    id: 166,
    luxembourgish: "brennen",
    english: "to burn",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "brennen", du: "brens", hien: "brennt", mir: "brennen", dir: "brennt", si: "brennen" },
      pastParticiple: "gebrannt"
    },
    example: { lb: "D'Haus brennt!", en: "The house is burning!" }
  },
  {
    id: 167,
    luxembourgish: "Feier",
    english: "fire",
    type: "noun",
    gender: "n",
    category: "emergencies",
    plural: "Feieren",
    example: { lb: "Maacht e Feier un!", en: "Start a fire!" }
  },
  {
    id: 168,
    luxembourgish: "Flamen",
    english: "flames",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: "Flamen",
    example: { lb: "D'Flamen sinn héich.", en: "The flames are high." }
  },
  {
    id: 169,
    luxembourgish: "ëm d'Liewe kommen",
    english: "to die / lose one's life",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "kommen ëm d'Liewen", du: "kënns ëm d'Liewen", hien: "kënnt ëm d'Liewen", mir: "kommen ëm d'Liewen", dir: "kommt ëm d'Liewen", si: "kommen ëm d'Liewen" },
      pastParticiple: "ëm d'Liewe komm"
    },
    example: { lb: "Zwou Persounen sinn ëm d'Liewe komm.", en: "Two people lost their lives." }
  },
  {
    id: 170,
    luxembourgish: "ëmkommen",
    english: "to perish / die",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "kommen ëm", du: "kënns ëm", hien: "kënnt ëm", mir: "kommen ëm", dir: "kommt ëm", si: "kommen ëm" },
      pastParticiple: "ëmkomm"
    },
    example: { lb: "Hien ass beim Accident ëmkomm.", en: "He perished in the accident." }
  },
  {
    id: 171,
    luxembourgish: "läschen",
    english: "to extinguish / put out",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "läschen", du: "läschs", hien: "läscht", mir: "läschen", dir: "läscht", si: "läschen" },
      pastParticiple: "geläscht"
    },
    example: { lb: "D'Pompjeeë läschen de Brand.", en: "The firefighters are extinguishing the fire." }
  },
  {
    id: 172,
    luxembourgish: "Pompjeeën",
    english: "firefighters / fire brigade",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Pompjeeën",
    example: { lb: "Rufft d'Pompjeeën!", en: "Call the firefighters!" }
  },

  // Hëllef (Help/Emergency Services)
  {
    id: 173,
    luxembourgish: "Ambulanz",
    english: "ambulance",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: "Ambulanzen",
    example: { lb: "D'Ambulanz ass ënnerwee.", en: "The ambulance is on its way." }
  },
  {
    id: 174,
    luxembourgish: "Rettungshelikopter",
    english: "rescue helicopter",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Rettungshelikopteren",
    example: { lb: "De Rettungshelikopter ass gelant.", en: "The rescue helicopter has landed." }
  },
  {
    id: 175,
    luxembourgish: "SAMU",
    english: "emergency medical service",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: null,
    example: { lb: "De SAMU ass op der Plaz.", en: "The emergency medical service is on site." }
  },
  {
    id: 176,
    luxembourgish: "Hëllef",
    english: "help",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: null,
    example: { lb: "Hëllef! Ech brauch Hëllef!", en: "Help! I need help!" }
  },

  // Accident
  {
    id: 177,
    luxembourgish: "Accident",
    english: "accident",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Accidenter",
    example: { lb: "Et war en Accident op der Autobunn.", en: "There was an accident on the highway." }
  },
  {
    id: 178,
    luxembourgish: "Ongléck",
    english: "accident / misfortune",
    type: "noun",
    gender: "n",
    category: "emergencies",
    plural: "Onglécker",
    example: { lb: "Et ass en Ongléck geschitt.", en: "An accident has happened." }
  },
  {
    id: 179,
    luxembourgish: "ageklemmt",
    english: "trapped / stuck",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "D'Persoun ass ageklemmt.", en: "The person is trapped." }
  },
  {
    id: 180,
    luxembourgish: "un d'Schleidere kommen",
    english: "to skid / start skidding",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "kommen un d'Schleideren", du: "kënns un d'Schleideren", hien: "kënnt un d'Schleideren", mir: "kommen un d'Schleideren", dir: "kommt un d'Schleideren", si: "kommen un d'Schleideren" },
      pastParticiple: "un d'Schleidere komm"
    },
    example: { lb: "Den Auto ass un d'Schleidere komm.", en: "The car started skidding." }
  },
  {
    id: 181,
    luxembourgish: "arennen",
    english: "to run into / collide",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "rennen an", du: "rens an", hien: "rennt an", mir: "rennen an", dir: "rennt an", si: "rennen an" },
      pastParticiple: "agerannt"
    },
    example: { lb: "Hien ass an de Bam agerannt.", en: "He ran into the tree." }
  },
  {
    id: 182,
    luxembourgish: "auswäichen",
    english: "to swerve / avoid / dodge",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "wäichen aus", du: "wäichs aus", hien: "wäicht aus", mir: "wäichen aus", dir: "wäicht aus", si: "wäichen aus" },
      pastParticiple: "ausgewach"
    },
    example: { lb: "Hien ass engem Déier ausgewach.", en: "He swerved to avoid an animal." }
  },
  {
    id: 183,
    luxembourgish: "blesséiert",
    english: "injured",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "Si ass schwéier blesséiert.", en: "She is seriously injured." }
  },
  {
    id: 184,
    luxembourgish: "Broch",
    english: "fracture / break",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Bréch",
    example: { lb: "Hien huet e Broch am Bee.", en: "He has a fracture in his leg." }
  },
  {
    id: 185,
    luxembourgish: "Bunn",
    english: "lane (traffic)",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: "Bunnen",
    example: { lb: "Bleif op denger Bunn!", en: "Stay in your lane!" }
  },
  {
    id: 186,
    luxembourgish: "Doudesaffer",
    english: "fatality / death victim",
    type: "noun",
    gender: "n",
    category: "emergencies",
    plural: "Doudesaffer",
    example: { lb: "Et gouf keen Doudesaffer.", en: "There were no fatalities." }
  },
  {
    id: 187,
    luxembourgish: "erausschleideren",
    english: "to be thrown out (of vehicle)",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "schleideren eraus", du: "schleiders eraus", hien: "schleidert eraus", mir: "schleideren eraus", dir: "schleidert eraus", si: "schleideren eraus" },
      pastParticiple: "erausgeschleidert"
    },
    example: { lb: "De Passagéier gouf erausgeschleidert.", en: "The passenger was thrown out." }
  },
  {
    id: 188,
    luxembourgish: "erausschneiden",
    english: "to cut out (from wreckage)",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "schneiden eraus", du: "schnëtts eraus", hien: "schnëtt eraus", mir: "schneiden eraus", dir: "schnëtt eraus", si: "schneiden eraus" },
      pastParticiple: "erausgeschnidden"
    },
    example: { lb: "D'Pompjeeë hu si erausgeschnidden.", en: "The firefighters cut her out." }
  },
  {
    id: 189,
    luxembourgish: "gespaart",
    english: "blocked / closed (road)",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "D'Strooss ass gespaart.", en: "The road is blocked." }
  },
  {
    id: 190,
    luxembourgish: "knuppen",
    english: "to crash / collide",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "knuppen", du: "knupps", hien: "knuppt", mir: "knuppen", dir: "knuppt", si: "knuppen" },
      pastParticiple: "geknuppt"
    },
    example: { lb: "Zwee Autoe sinn geknuppt.", en: "Two cars crashed." }
  },
  {
    id: 191,
    luxembourgish: "léiebleiwen",
    english: "to be left lying / remain",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "bleiwen leien", du: "bleifs leien", hien: "bleift leien", mir: "bleiwen leien", dir: "bleift leien", si: "bleiwen leien" },
      pastParticiple: "léiebliwwen"
    },
    example: { lb: "Den Auto ass léiebliwwen.", en: "The car was left there." }
  },
  {
    id: 192,
    luxembourgish: "liicht",
    english: "light / minor (injury)",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "Hien huet just liicht Verletzungen.", en: "He only has minor injuries." }
  },
  {
    id: 193,
    luxembourgish: "Prellungen",
    english: "bruises / contusions",
    type: "noun",
    gender: "f",
    category: "emergencies",
    plural: "Prellungen",
    example: { lb: "Si huet Prellunge kritt.", en: "She got bruises." }
  },
  {
    id: 194,
    luxembourgish: "rabbelen",
    english: "to rattle / shake",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "rabbelen", du: "rabbels", hien: "rabbelt", mir: "rabbelen", dir: "rabbelt", si: "rabbelen" },
      pastParticiple: "gerabbelt"
    },
    example: { lb: "Den Auto huet gerabbelt.", en: "The car rattled." }
  },
  {
    id: 195,
    luxembourgish: "schwéier",
    english: "severe / serious (injury)",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "Hien ass schwéier verletzt.", en: "He is seriously injured." }
  },
  {
    id: 196,
    luxembourgish: "uerg",
    english: "bad / severe",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "Den Accident war uerg.", en: "The accident was bad." }
  },
  {
    id: 197,
    luxembourgish: "un d'Rutsche kommen",
    english: "to start sliding",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "kommen un d'Rutschen", du: "kënns un d'Rutschen", hien: "kënnt un d'Rutschen", mir: "kommen un d'Rutschen", dir: "kommt un d'Rutschen", si: "kommen un d'Rutschen" },
      pastParticiple: "un d'Rutsche komm"
    },
    example: { lb: "Den Auto ass un d'Rutsche komm.", en: "The car started sliding." }
  },
  {
    id: 198,
    luxembourgish: "Verkéiersdoudeger",
    english: "traffic fatality",
    type: "noun",
    gender: "m",
    category: "emergencies",
    plural: "Verkéiersdoudeger",
    example: { lb: "D'Zuel vun de Verkéiersdoudeger ass erofgaangen.", en: "The number of traffic fatalities has decreased." }
  },
  {
    id: 199,
    luxembourgish: "verletzt",
    english: "injured",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "Dräi Persounen si verletzt.", en: "Three people are injured." }
  },
  {
    id: 200,
    luxembourgish: "verwonnt",
    english: "wounded",
    type: "adjective",
    gender: null,
    category: "emergencies",
    example: { lb: "De Mann ass verwonnt.", en: "The man is wounded." }
  },
  {
    id: 201,
    luxembourgish: "ze pake kréien",
    english: "to catch / grab hold of",
    type: "verb",
    gender: null,
    category: "emergencies",
    verbForms: {
      present: { ech: "kréien ze paken", du: "kriss ze paken", hien: "kritt ze paken", mir: "kréien ze paken", dir: "kritt ze paken", si: "kréien ze paken" },
      pastParticiple: "ze pake kritt"
    },
    example: { lb: "D'Police huet hien ze pake kritt.", en: "The police caught him." }
  },

  // === CLOTHING ===
  {
    id: 202,
    luxembourgish: "Anorak",
    english: "anorak / parka",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Anoraken",
    example: { lb: "Zitt däin Anorak un, et ass kal.", en: "Put on your anorak, it's cold." }
  },
  {
    id: 203,
    luxembourgish: "Bermudashort",
    english: "bermuda shorts",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Bermudashorten",
    example: { lb: "Am Summer droën ech Bermudashorten.", en: "In summer I wear bermuda shorts." }
  },
  {
    id: 204,
    luxembourgish: "Box",
    english: "pants / trousers",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Boxen",
    example: { lb: "Ech brauch eng nei Box.", en: "I need new pants." }
  },
  {
    id: 205,
    luxembourgish: "Foulard",
    english: "scarf (silk) / neckerchief",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Foularden",
    example: { lb: "Si dréit e schéine Foulard.", en: "She wears a nice scarf." }
  },
  {
    id: 206,
    luxembourgish: "Hiem",
    english: "shirt",
    type: "noun",
    gender: "n",
    category: "clothing",
    plural: "Hiemer",
    example: { lb: "D'Hiem ass wäiss.", en: "The shirt is white." }
  },
  {
    id: 207,
    luxembourgish: "Jackett",
    english: "jacket / blazer",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Jacketten",
    example: { lb: "De Jackett passt gutt.", en: "The jacket fits well." }
  },
  {
    id: 208,
    luxembourgish: "Jeansbox",
    english: "jeans",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Jeansboxen",
    example: { lb: "Meng Jeansbox ass blo.", en: "My jeans are blue." }
  },
  {
    id: 209,
    luxembourgish: "Joggingsbox",
    english: "sweatpants / joggers",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Joggingsboxen",
    example: { lb: "Ech droen eng Joggingsbox doheem.", en: "I wear sweatpants at home." }
  },
  {
    id: 210,
    luxembourgish: "Kleed",
    english: "dress",
    type: "noun",
    gender: "n",
    category: "clothing",
    plural: "Kleeder",
    example: { lb: "D'Kleed ass rout.", en: "The dress is red." }
  },
  {
    id: 211,
    luxembourgish: "Kostüm",
    english: "suit (women's) / costume",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Kostümer",
    example: { lb: "Si dréit e Kostüm op d'Aarbecht.", en: "She wears a suit to work." }
  },
  {
    id: 212,
    luxembourgish: "Krawatt",
    english: "tie / necktie",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Krawatten",
    example: { lb: "Hien dréit eng Krawatt.", en: "He wears a tie." }
  },
  {
    id: 213,
    luxembourgish: "Mantel",
    english: "coat / overcoat",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Mäntelen",
    example: { lb: "De Mantel ass waarm.", en: "The coat is warm." }
  },
  {
    id: 214,
    luxembourgish: "Mutz",
    english: "cap / beanie",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Mutzen",
    example: { lb: "Zitt deng Mutz un!", en: "Put on your cap!" }
  },
  {
    id: 215,
    luxembourgish: "Pullover",
    english: "sweater / pullover",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Pullover",
    example: { lb: "De Pullover ass ze grouss.", en: "The sweater is too big." }
  },
  {
    id: 216,
    luxembourgish: "Rack",
    english: "skirt",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Réck",
    example: { lb: "D'Rack ass kuerz.", en: "The skirt is short." }
  },
  {
    id: 217,
    luxembourgish: "Salopett",
    english: "overalls / dungarees",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Salopetten",
    example: { lb: "De Bauer dréit eng Salopett.", en: "The farmer wears overalls." }
  },
  {
    id: 218,
    luxembourgish: "Schal",
    english: "scarf (wool)",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Schaler",
    example: { lb: "De Schal ass waarm.", en: "The scarf is warm." }
  },
  {
    id: 219,
    luxembourgish: "Stiwwelen",
    english: "boots",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Stiwwelen",
    example: { lb: "Meng Stiwwele si naass.", en: "My boots are wet." }
  },
  {
    id: 220,
    luxembourgish: "Strëmp",
    english: "socks / stockings",
    type: "noun",
    gender: "f",
    category: "clothing",
    plural: "Strëmp",
    example: { lb: "Ech brauch nei Strëmp.", en: "I need new socks." }
  },
  {
    id: 221,
    luxembourgish: "Tailleur",
    english: "women's suit",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Tailleuren",
    example: { lb: "Den Tailleur steet hir gutt.", en: "The suit looks good on her." }
  },
  {
    id: 222,
    luxembourgish: "Tallekeschong",
    english: "high heels",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Tallekeschong",
    example: { lb: "Si dréit Tallekeschong.", en: "She wears high heels." }
  },
  {
    id: 223,
    luxembourgish: "Top",
    english: "top (clothing)",
    type: "noun",
    gender: "n",
    category: "clothing",
    plural: "Toppen",
    example: { lb: "D'Top ass nei.", en: "The top is new." }
  },
  {
    id: 224,
    luxembourgish: "T-Shirt",
    english: "t-shirt",
    type: "noun",
    gender: "n",
    category: "clothing",
    plural: "T-Shirten",
    example: { lb: "D'T-Shirt ass gréng.", en: "The t-shirt is green." }
  },
  {
    id: 225,
    luxembourgish: "Turnschlappen",
    english: "sneakers / trainers",
    type: "noun",
    gender: "m",
    category: "clothing",
    plural: "Turnschlappen",
    example: { lb: "Ech kafen nei Turnschlappen.", en: "I'm buying new sneakers." }
  }
];

// Export unique categories for filtering
export const categories = [...new Set(words.map(w => w.category))].sort();

// Export unique word types for filtering
export const wordTypes = [...new Set(words.map(w => w.type))].sort();

// Export genders (for nouns)
export const genders = [
  { value: 'm', label: 'Männlech (Masculine)', short: 'M' },
  { value: 'f', label: 'Wiiblech (Feminine)', short: 'F' },
  { value: 'n', label: 'Sächlech (Neuter)', short: 'N' }
];

