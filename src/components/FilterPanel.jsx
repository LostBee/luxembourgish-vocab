import { categories, wordTypes, genders } from '../data/words';

export function FilterPanel({ filters, setFilters, stats }) {
  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckbox = (key) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="glass rounded-2xl p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-end">
        {/* Word Type Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Word Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="w-full bg-midnight-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
          >
            <option value="all">All Types</option>
            {wordTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Gender Filter (only for nouns) */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Gender
          </label>
          <select
            value={filters.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            className="w-full bg-midnight-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
          >
            <option value="all">All Genders</option>
            {genders.map(g => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full bg-midnight-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Language Side */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Front Side
          </label>
          <select
            value={filters.frontLanguage}
            onChange={(e) => handleChange('frontLanguage', e.target.value)}
            className="w-full bg-midnight-700 border border-slate-600 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
          >
            <option value="luxembourgish">🇱🇺 Lëtzebuergesch</option>
            <option value="english">🇬🇧 English</option>
          </select>
        </div>
      </div>

      {/* Second Row - Checkboxes */}
      <div className="flex flex-wrap gap-6 mt-5 pt-5 border-t border-slate-700/50">
        {/* Show Only Difficult */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.showOnlyDifficult}
            onChange={() => handleCheckbox('showOnlyDifficult')}
            className="w-5 h-5 rounded border-slate-600 bg-midnight-700 text-amber-500 focus:ring-amber-500/50 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
            Show only difficult
            <span className="ml-2 text-sm text-amber-500/80">({stats.difficult})</span>
          </span>
        </label>

        {/* Show Only Unlearned */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.showOnlyUnlearned}
            onChange={() => handleCheckbox('showOnlyUnlearned')}
            className="w-5 h-5 rounded border-slate-600 bg-midnight-700 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
            Show only unlearned
            <span className="ml-2 text-sm text-teal-500/80">({stats.total - stats.learned} remaining)</span>
          </span>
        </label>

        {/* Shuffle */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.shuffle}
            onChange={() => handleCheckbox('shuffle')}
            className="w-5 h-5 rounded border-slate-600 bg-midnight-700 text-purple-500 focus:ring-purple-500/50 focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
            Shuffle cards
          </span>
        </label>
      </div>
    </div>
  );
}

