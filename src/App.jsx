import { useState, useEffect, useMemo, useCallback } from 'react';
import { words as baseWords } from './data/words';
import { useLocalStorage } from './hooks/useLocalStorage';
import { FilterPanel } from './components/FilterPanel';
import { Flashcard } from './components/Flashcard';
import { Navigation } from './components/Navigation';
import { StatsBar } from './components/StatsBar';

// Helper to set nested property by path string (e.g., 'verbForms.present.ech')
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  const result = { ...obj };
  let current = result;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    current[key] = current[key] ? { ...current[key] } : {};
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
  return result;
}

// Merge base word with edits
function mergeWordWithEdits(word, edits) {
  if (!edits) return word;
  
  let merged = { ...word };
  
  for (const [path, value] of Object.entries(edits)) {
    if (path.includes('.')) {
      merged = setNestedValue(merged, path, value);
    } else {
      merged[path] = value;
    }
  }
  
  return merged;
}

function App() {
  // Persisted state
  const [difficultWords, setDifficultWords] = useLocalStorage('lux-difficult', []);
  const [learnedWords, setLearnedWords] = useLocalStorage('lux-learned', []);
  const [wordEdits, setWordEdits] = useLocalStorage('lux-word-edits', {});
  
  // UI state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(null);
  
  // Filters
  const [filters, setFilters] = useState({
    type: 'all',
    gender: 'all',
    category: 'all',
    frontLanguage: 'luxembourgish',
    showOnlyDifficult: false,
    showOnlyUnlearned: false,
    shuffle: false
  });

  // Merge base words with edits
  const words = useMemo(() => {
    return baseWords.map(word => mergeWordWithEdits(word, wordEdits[word.id]));
  }, [wordEdits]);

  // Handler to update a word field
  const handleUpdateWord = useCallback((wordId, field, value) => {
    setWordEdits(prev => {
      const currentEdits = prev[wordId] || {};
      return {
        ...prev,
        [wordId]: {
          ...currentEdits,
          [field]: value
        }
      };
    });
  }, [setWordEdits]);

  // Filtered words based on current filters
  const filteredWords = useMemo(() => {
    let result = [...words];

    // Filter by type
    if (filters.type !== 'all') {
      result = result.filter(w => w.type === filters.type);
    }

    // Filter by gender (only applies to nouns)
    if (filters.gender !== 'all') {
      result = result.filter(w => w.gender === filters.gender);
    }

    // Filter by category
    if (filters.category !== 'all') {
      result = result.filter(w => w.category === filters.category);
    }

    // Filter by difficult
    if (filters.showOnlyDifficult) {
      result = result.filter(w => difficultWords.includes(w.id));
    }

    // Filter by unlearned
    if (filters.showOnlyUnlearned) {
      result = result.filter(w => !learnedWords.includes(w.id));
    }

    return result;
  }, [filters, words, difficultWords, learnedWords]);

  // Apply shuffle if enabled
  const displayWords = useMemo(() => {
    if (!filters.shuffle || !shuffledIndices) {
      return filteredWords;
    }
    // Use shuffled indices to reorder
    const indices = shuffledIndices.filter(i => i < filteredWords.length);
    return indices.map(i => filteredWords[i]);
  }, [filteredWords, filters.shuffle, shuffledIndices]);

  // Generate shuffled indices when shuffle is toggled or filtered words change
  useEffect(() => {
    if (filters.shuffle) {
      const indices = Array.from({ length: filteredWords.length }, (_, i) => i);
      // Fisher-Yates shuffle
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setShuffledIndices(indices);
    } else {
      setShuffledIndices(null);
    }
  }, [filters.shuffle, filteredWords.length]);

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [filters]);

  // Current word
  const currentWord = displayWords[currentIndex] || null;

  // Stats
  const stats = useMemo(() => ({
    total: words.length,
    filtered: filteredWords.length,
    learned: learnedWords.length,
    difficult: difficultWords.length
  }), [words.length, filteredWords.length, learnedWords.length, difficultWords.length]);

  // Navigation handlers
  const goToNext = useCallback(() => {
    if (currentIndex < displayWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, displayWords.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const resetCards = useCallback(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    // Re-shuffle if shuffle is enabled
    if (filters.shuffle) {
      const indices = Array.from({ length: filteredWords.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setShuffledIndices(indices);
    }
  }, [filters.shuffle, filteredWords.length]);

  // Toggle handlers
  const toggleDifficult = useCallback(() => {
    if (!currentWord) return;
    setDifficultWords(prev => 
      prev.includes(currentWord.id)
        ? prev.filter(id => id !== currentWord.id)
        : [...prev, currentWord.id]
    );
  }, [currentWord, setDifficultWords]);

  const toggleLearned = useCallback(() => {
    if (!currentWord) return;
    setLearnedWords(prev => 
      prev.includes(currentWord.id)
        ? prev.filter(id => id !== currentWord.id)
        : [...prev, currentWord.id]
    );
  }, [currentWord, setLearnedWords]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if typing in input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          setIsFlipped(prev => !prev);
          break;
        case 'ArrowRight':
        case 'n':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'p':
          e.preventDefault();
          goToPrevious();
          break;
        case 'd':
          e.preventDefault();
          toggleDifficult();
          break;
        case 'l':
          e.preventDefault();
          toggleLearned();
          break;
        case 'r':
          e.preventDefault();
          resetCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, toggleDifficult, toggleLearned, resetCards]);

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-midnight-600/20 via-midnight-900 to-midnight-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-teal-400 bg-clip-text text-transparent">
              Lëtzebuergesch
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Learn Luxembourgish with flashcards</p>
        </header>

        {/* Stats Bar */}
        <StatsBar stats={stats} />

        {/* Filter Panel */}
        <FilterPanel 
          filters={filters} 
          setFilters={setFilters} 
          stats={stats}
        />

        {/* Flashcard */}
        <Flashcard
          word={currentWord}
          frontLanguage={filters.frontLanguage}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(prev => !prev)}
          isDifficult={currentWord ? difficultWords.includes(currentWord.id) : false}
          isLearned={currentWord ? learnedWords.includes(currentWord.id) : false}
          onToggleDifficult={toggleDifficult}
          onToggleLearned={toggleLearned}
          onUpdateWord={handleUpdateWord}
        />

        {/* Navigation */}
        <Navigation
          currentIndex={currentIndex}
          totalCards={displayWords.length}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onReset={resetCards}
        />

        {/* Keyboard shortcuts hint */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 text-sm">
            Keyboard: <kbd className="px-2 py-1 bg-midnight-700 rounded text-slate-400 mx-1">Space</kbd> flip
            <kbd className="px-2 py-1 bg-midnight-700 rounded text-slate-400 mx-1">←→</kbd> navigate
            <kbd className="px-2 py-1 bg-midnight-700 rounded text-slate-400 mx-1">D</kbd> difficult
            <kbd className="px-2 py-1 bg-midnight-700 rounded text-slate-400 mx-1">L</kbd> learned
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
