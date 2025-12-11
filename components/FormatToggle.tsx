import React from 'react';
import { ClockFormat } from '../types';

interface FormatToggleProps {
  format: ClockFormat;
  onToggle: () => void;
}

const FormatToggle: React.FC<FormatToggleProps> = ({ format, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="mt-8 px-6 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 
                 text-white text-sm font-medium transition-all duration-200 backdrop-blur-sm
                 focus:outline-none focus:ring-2 focus:ring-white/40"
      aria-label="Toggle 12/24 Hour Format"
    >
      {format === ClockFormat.H12 ? 'Switch to 24H' : 'Switch to 12H'}
    </button>
  );
};

export default FormatToggle;