import { useState, useRef, useEffect } from 'react';

// Pencil icon SVG
const PencilIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

// Checkmark icon SVG
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// X icon SVG for cancel
const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function EditableField({ 
  value, 
  onSave, 
  className = '', 
  inputClassName = '',
  placeholder = '',
  multiline = false,
  type = 'text' // 'text', 'select'
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [editValue, setEditValue] = useState(value || '');
  const inputRef = useRef(null);

  useEffect(() => {
    setEditValue(value || '');
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current.select) {
        inputRef.current.select();
      }
    }
  }, [isEditing]);

  const handleSave = (e) => {
    e.stopPropagation();
    if (editValue !== value) {
      onSave(editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setEditValue(value || '');
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave(e);
    } else if (e.key === 'Escape') {
      handleCancel(e);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <span 
        className="inline-flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {multiline ? (
          <textarea
            ref={inputRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`bg-midnight-700/80 border border-slate-500 rounded px-2 py-1 text-white focus:outline-none focus:border-teal-400 ${inputClassName}`}
            placeholder={placeholder}
            rows={2}
          />
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`bg-midnight-700/80 border border-slate-500 rounded px-2 py-1 text-white focus:outline-none focus:border-teal-400 ${inputClassName}`}
            placeholder={placeholder}
          />
        )}
        <button
          onClick={handleSave}
          className="p-1 rounded hover:bg-green-500/20 text-green-400 transition-colors"
          title="Save"
        >
          <CheckIcon />
        </button>
        <button
          onClick={handleCancel}
          className="p-1 rounded hover:bg-red-500/20 text-red-400 transition-colors"
          title="Cancel"
        >
          <XIcon />
        </button>
      </span>
    );
  }

  return (
    <span 
      className={`inline-flex items-center gap-1 group/edit ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{value || <span className="text-slate-500 italic">{placeholder || 'Empty'}</span>}</span>
      <button
        onClick={handleEditClick}
        className={`p-1 rounded hover:bg-slate-500/20 text-slate-400 hover:text-teal-400 transition-all ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        title="Edit"
      >
        <PencilIcon />
      </button>
    </span>
  );
}

// Editable badge component for type and gender
export function EditableBadge({ 
  value, 
  onSave, 
  options, 
  className = '',
  badgeClassName = ''
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    if (isEditing && selectRef.current) {
      selectRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = (newValue) => {
    if (newValue !== value) {
      onSave(newValue);
    }
    setIsEditing(false);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <span 
        className="inline-flex items-center gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        <select
          ref={selectRef}
          value={value || ''}
          onChange={(e) => handleSave(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="bg-midnight-700/80 border border-slate-500 rounded px-2 py-1 text-white text-sm focus:outline-none focus:border-teal-400"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </span>
    );
  }

  const selectedOption = options.find(opt => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : value;

  return (
    <span 
      className={`inline-flex items-center gap-1 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={badgeClassName}>{displayLabel}</span>
      <button
        onClick={handleEditClick}
        className={`p-0.5 rounded hover:bg-slate-500/20 text-white/70 hover:text-teal-400 transition-all ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        title="Edit"
      >
        <PencilIcon />
      </button>
    </span>
  );
}


