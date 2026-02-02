export function Navigation({ 
  currentIndex, 
  totalCards, 
  onPrevious, 
  onNext, 
  onReset 
}) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all bg-midnight-700 text-slate-300 hover:bg-midnight-600 border border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-midnight-700"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Progress Indicator */}
      <div className="flex items-center gap-3">
        <span className="text-2xl font-display font-bold text-white">
          {totalCards > 0 ? currentIndex + 1 : 0}
        </span>
        <span className="text-slate-500">/</span>
        <span className="text-xl text-slate-400">
          {totalCards}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentIndex >= totalCards - 1}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all bg-midnight-700 text-slate-300 hover:bg-midnight-600 border border-slate-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-midnight-700"
      >
        <span className="hidden sm:inline">Next</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="ml-4 px-4 py-2.5 rounded-xl font-medium transition-all bg-midnight-800 text-slate-400 hover:bg-midnight-700 hover:text-slate-300 border border-slate-700"
        title="Reset to first card"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
  );
}



