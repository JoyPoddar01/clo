import React from 'react';
import { ClockFormat } from '../types';

interface DigitalClockProps {
  time: Date;
  format: ClockFormat;
}

const DigitalClock: React.FC<DigitalClockProps> = ({ time, format }) => {
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let ampm = '';

    if (format === ClockFormat.H12) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
    }

    const pad = (num: number) => num.toString().padStart(2, '0');

    return {
      timeStr: `${pad(hours)}:${pad(minutes)}`,
      secondsStr: `${pad(seconds)}`,
      ampm
    };
  };

  const { timeStr, secondsStr, ampm } = formatTime(time);

  return (
    <div className="flex flex-col items-center text-white drop-shadow-lg">
      <div className="flex items-baseline leading-none">
        <span className="text-6xl sm:text-8xl md:text-9xl font-mono font-medium tracking-tight">
          {timeStr}
        </span>
        <div className="flex flex-col ml-2 sm:ml-4">
            <span className="text-xl sm:text-3xl font-mono opacity-80 mb-1">{secondsStr}</span>
            {format === ClockFormat.H12 && (
              <span className="text-lg sm:text-2xl font-bold uppercase tracking-widest text-slate-200">
                {ampm}
              </span>
            )}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;