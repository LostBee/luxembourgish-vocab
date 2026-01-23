export function StatsBar({ stats }) {
  const learnedPercent = stats.total > 0 ? Math.round((stats.learned / stats.total) * 100) : 0;

  return (
    <div className="glass rounded-2xl p-4 mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Progress bar */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-400">Learning Progress</span>
            <span className="text-teal-400 font-medium">{learnedPercent}%</span>
          </div>
          <div className="h-2 bg-midnight-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-500"
              style={{ width: `${learnedPercent}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-white">{stats.total}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Total</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-teal-400">{stats.learned}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Learned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-amber-400">{stats.difficult}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">Difficult</div>
          </div>
        </div>
      </div>
    </div>
  );
}


