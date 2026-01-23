# 🇱🇺 Lëtzebuergesch Vocab - Luxembourgish Flashcard App

A beautiful, interactive web application for learning Luxembourgish vocabulary through flashcards. Built with React, Vite, and Tailwind CSS.

## Features

### 📚 Comprehensive Vocabulary Database
- **225+ Luxembourgish words** across multiple categories
- Rich metadata including:
  - Word types (nouns, verbs, adjectives, adverbs, etc.)
  - Gender information for nouns (Männlech/Wiiblech/Sächlech)
  - Verb conjugations (present tense + past participle)
  - Plural forms for nouns
  - Example sentences with translations

### 🎯 Powerful Filtering System
- **Word Type**: Filter by noun, verb, adjective, adverb, preposition, pronoun, conjunction, interjection, article, numeral
- **Gender**: Filter nouns by masculine, feminine, or neuter
- **Category**: Filter by topic (greetings, family, food, time, emergencies, clothing, etc.)
- **Front Language**: Choose whether Luxembourgish or English appears first
- **Show only difficult**: Focus on words you've marked as challenging
- **Show only unlearned**: Hide words you've already mastered
- **Shuffle**: Randomize card order for varied practice

### 🎴 Interactive Flashcards
- Beautiful 3D flip animation
- Detailed information on Luxembourgish side:
  - Gender badges with color coding
  - Verb conjugation tables
  - Plural forms
  - Example sentences
- Copy button to quickly copy words for dictionary lookup
- Mark words as "difficult" or "learned" for progress tracking

### ⌨️ Keyboard Shortcuts
- `Space` / `Enter` - Flip card
- `←` / `→` or `P` / `N` - Navigate previous/next
- `D` - Toggle difficult
- `L` - Toggle learned
- `R` - Reset/reshuffle

### 📊 Progress Tracking
- Persistent storage using localStorage
- Progress bar showing learning percentage
- Statistics dashboard (total, learned, difficult counts)
- Visual feedback for marked words

## Categories

- **Greetings** - Common phrases and greetings
- **Pronouns** - Personal and question pronouns
- **Verbs** - Essential verbs with full conjugations
- **Family** - Family members and relationships
- **Places** - Locations, buildings, and geography
- **Food** - Food items and beverages
- **Time** - Days, months, hours, and time expressions
- **Body** - Body parts
- **Adjectives** - Descriptive words
- **Numbers** - Numerals and counting
- **Adverbs** - Adverbial expressions
- **Prepositions** - Spatial and temporal prepositions
- **Conjunctions** - Connecting words
- **Questions** - Question words
- **Articles** - Definite and indefinite articles
- **Common** - Frequently used words
- **Objects** - Everyday objects
- **Nature** - Natural phenomena
- **Emergencies** - Emergency vocabulary, accidents, and help
- **Clothing** - Clothing items and accessories

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LostBee/luxembourgish-vocab.git
cd luxembourgish-vocab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## Project Structure

```
luxembourgish-vocab/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── FilterPanel.jsx    # Filter controls
│   │   ├── Flashcard.jsx      # Flashcard component
│   │   ├── Navigation.jsx     # Card navigation
│   │   └── StatsBar.jsx       # Progress statistics
│   ├── data/
│   │   └── words.js           # Vocabulary database
│   ├── hooks/
│   │   └── useLocalStorage.js # localStorage hook
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Contributing

Contributions are welcome! Feel free to:
- Add more vocabulary words
- Improve translations or examples
- Enhance UI/UX
- Fix bugs
- Add new features

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Vocabulary compiled from various Luxembourgish learning resources
- Special thanks to the Luxembourgish language learning community

---

**Happy Learning! Vill Gléck beim Léieren! 🍀**

