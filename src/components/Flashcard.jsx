import { useState, useEffect, useCallback } from 'react';

export function Flashcard({ 
  word, 
  frontLanguage, 
  isFlipped, 
  onFlip, 
  isDifficult, 
  isLearned,
  onToggleDifficult, 
  onToggleLearned 
}) {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(false);
  }, [word?.id]);

  const handleFlip = () => {
    if (!animating) {
      setAnimating(true);
      onFlip();
      setTimeout(() => setAnimating(false), 300);
    }
  };

  if (!word) {
    return (
      <div className="perspective w-full max-w-2xl mx-auto">
        <div className="glass rounded-3xl p-12 text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-xl text-slate-400">No cards match your filters</p>
          <p className="text-slate-500 mt-2">Try adjusting your filter settings</p>
        </div>
      </div>
    );
  }

  const isFrontLux = frontLanguage === 'luxembourgish';
  const frontContent = isFrontLux ? word.luxembourgish : word.english;
  const backContent = isFrontLux ? word.english : word.luxembourgish;

  // Determine which side shows Luxembourgish details
  const showLuxDetails = (isFrontLux && !isFlipped) || (!isFrontLux && isFlipped);

  const getTypeColor = (type) => {
    const colors = {
      noun: 'type-noun',
      verb: 'type-verb',
      adjective: 'type-adjective',
      adverb: 'type-adverb',
      preposition: 'type-preposition',
      pronoun: 'type-pronoun',
      conjunction: 'type-conjunction',
      interjection: 'type-interjection',
      article: 'type-article',
      numeral: 'type-numeral'
    };
    return colors[type] || 'bg-slate-600';
  };

  const getGenderBadge = (gender) => {
    if (!gender) return null;
    const badges = {
      'm': { class: 'gender-m', label: 'Männlech (M)' },
      'f': { class: 'gender-f', label: 'Wiiblech (F)' },
      'n': { class: 'gender-n', label: 'Sächlech (N)' }
    };
    return badges[gender];
  };

  return (
    <div className="perspective w-full max-w-2xl mx-auto">
      {/* Card Container */}
      <div
        onClick={handleFlip}
        className={`relative w-full min-h-[400px] cursor-pointer preserve-3d transition-transform duration-500 ease-out ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden rounded-3xl ${
          isFrontLux ? 'glass glow-amber' : 'glass glow-teal'
        } p-8 flex flex-col`}>
          {/* Top badges */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-2 flex-wrap">
              <span className={`${getTypeColor(word.type)} px-3 py-1 rounded-full text-sm font-medium text-white`}>
                {word.type}
              </span>
              {word.gender && (
                <span className={`${getGenderBadge(word.gender).class} px-3 py-1 rounded-full text-sm font-medium text-white`}>
                  {getGenderBadge(word.gender).label}
                </span>
              )}
            </div>
            <span className="text-slate-500 text-sm">
              {isFrontLux ? '🇱🇺' : '🇬🇧'}
            </span>
          </div>

          {/* Main word */}
          <div className="flex-1 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-white">
              {frontContent}
            </h2>
          </div>

          {/* Flip hint */}
          <div className="text-center text-slate-500 text-sm">
            Click to flip • Space
          </div>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl ${
          !isFrontLux ? 'glass glow-amber' : 'glass glow-teal'
        } p-8 flex flex-col`}>
          {/* Top badges */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-2 flex-wrap">
              <span className={`${getTypeColor(word.type)} px-3 py-1 rounded-full text-sm font-medium text-white`}>
                {word.type}
              </span>
              {word.gender && (
                <span className={`${getGenderBadge(word.gender).class} px-3 py-1 rounded-full text-sm font-medium text-white`}>
                  {getGenderBadge(word.gender).label}
                </span>
              )}
            </div>
            <span className="text-slate-500 text-sm">
              {!isFrontLux ? '🇱🇺' : '🇬🇧'}
            </span>
          </div>

          {/* Main translation */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center text-white mb-6">
              {backContent}
            </h2>

            {/* Additional Luxembourgish info */}
            {showLuxDetails && (
              <div className="w-full space-y-4 mt-4">
                {/* Plural form for nouns */}
                {word.type === 'noun' && word.plural && (
                  <div className="bg-midnight-800/50 rounded-xl p-4">
                    <span className="text-slate-400 text-sm">Plural:</span>
                    <span className="ml-2 text-lg text-slate-200">{word.plural}</span>
                  </div>
                )}

                {/* Verb conjugations */}
                {word.type === 'verb' && word.verbForms && (
                  <div className="bg-midnight-800/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-3">Present Tense:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div><span className="text-slate-500">ech:</span> <span className="text-slate-200">{word.verbForms.present.ech}</span></div>
                      <div><span className="text-slate-500">mir:</span> <span className="text-slate-200">{word.verbForms.present.mir}</span></div>
                      <div><span className="text-slate-500">du:</span> <span className="text-slate-200">{word.verbForms.present.du}</span></div>
                      <div><span className="text-slate-500">dir:</span> <span className="text-slate-200">{word.verbForms.present.dir}</span></div>
                      <div><span className="text-slate-500">hien/si:</span> <span className="text-slate-200">{word.verbForms.present.hien}</span></div>
                      <div><span className="text-slate-500">si:</span> <span className="text-slate-200">{word.verbForms.present.si}</span></div>
                    </div>
                    {word.verbForms.pastParticiple && (
                      <div className="mt-3 pt-3 border-t border-slate-700/50">
                        <span className="text-slate-400 text-sm">Past Participle:</span>
                        <span className="ml-2 text-slate-200">{word.verbForms.pastParticiple}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Example sentence */}
                {word.example && (
                  <div className="bg-midnight-800/50 rounded-xl p-4">
                    <div className="text-slate-400 text-sm mb-2">Example:</div>
                    <div className="text-slate-200 italic">"{word.example.lb}"</div>
                    <div className="text-slate-400 text-sm mt-1">"{word.example.en}"</div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Flip hint */}
          <div className="text-center text-slate-500 text-sm">
            Click to flip • Space
          </div>
        </div>
      </div>

      {/* Copy button */}
      <div className="flex justify-center mt-4">
        <CopyButton word={word} />
      </div>

      {/* Action buttons below card */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={(e) => { e.stopPropagation(); onToggleDifficult(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
            isDifficult 
              ? 'bg-amber-500 text-midnight-900 shadow-lg shadow-amber-500/25' 
              : 'bg-midnight-700 text-slate-300 hover:bg-midnight-600 border border-slate-600'
          }`}
        >
          <span>{isDifficult ? '⭐' : '☆'}</span>
          <span>{isDifficult ? 'Marked Difficult' : 'Mark as Difficult'}</span>
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onToggleLearned(); }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
            isLearned 
              ? 'bg-teal-500 text-midnight-900 shadow-lg shadow-teal-500/25' 
              : 'bg-midnight-700 text-slate-300 hover:bg-midnight-600 border border-slate-600'
          }`}
        >
          <span>{isLearned ? '✓' : '○'}</span>
          <span>{isLearned ? 'Learned' : 'Mark as Learned'}</span>
        </button>
      </div>
    </div>
  );
}

function CopyButton({ word }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (e) => {
    e.stopPropagation();
    if (!word) return;
    
    try {
      await navigator.clipboard.writeText(word.luxembourgish);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, [word]);

  if (!word) return null;

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        copied
          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
          : 'bg-midnight-700/50 text-slate-400 hover:text-slate-200 hover:bg-midnight-600 border border-slate-700'
      }`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

