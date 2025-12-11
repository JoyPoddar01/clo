import React, { useState } from 'react';
import { useCurrentTime } from './hooks/useCurrentTime';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import DateDisplay from './components/DateDisplay';
import FormatToggle from './components/FormatToggle';
import { ClockFormat } from './types';

const App: React.FC = () => {
  const time = useCurrentTime();
  const [format, setFormat] = useState<ClockFormat>(ClockFormat.H12);

  const toggleFormat = () => {
    setFormat(prev => prev === ClockFormat.H12 ? ClockFormat.H24 : ClockFormat.H12);
  };

  return (
    // Main container with Medium Slate Blue gradient background
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#7B68EE] via-slateBlue-dark to-slateBlue-vibrant p-6 overflow-hidden relative">
      
      {/* Background ambient glow effects for polish */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-300 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center w-full max-w-4xl space-y-8 sm:space-y-12">
        
        {/* Analog Clock Section */}
        <div className="transition-all duration-500 ease-in-out hover:scale-105">
           <AnalogClock time={time} />
        </div>

        {/* Digital Info Section */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <DigitalClock time={time} format={format} />
          <div className="w-24 h-1 bg-white/20 rounded-full my-6 sm:my-8"></div>
          <DateDisplay time={time} />
        </div>

        {/* Controls */}
        <FormatToggle format={format} onToggle={toggleFormat} />

      </main>

      {/* Footer / Copyright minimalist */}
      <footer className="absolute bottom-4 w-full text-center text-white/30 text-xs font-light tracking-widest uppercase">
        SlateTime &bull; Simple Clock &bull; Created By Joy Poddar
      </footer>
    </div>
  );
};

export default App;