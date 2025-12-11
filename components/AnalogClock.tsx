import React, { useMemo } from 'react';

interface AnalogClockProps {
  time: Date;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ time }) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  // Calculate angles
  const secondAngle = seconds * 6; // 360 / 60
  const minuteAngle = minutes * 6 + seconds * 0.1; // 360 / 60 + subtle movement
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + subtle movement

  const ticks = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const isHour = i % 5 === 0;
      const angle = i * 6;
      return (
        <line
          key={i}
          x1="50"
          y1={isHour ? "10" : "12"}
          x2="50"
          y2={isHour ? "18" : "15"}
          transform={`rotate(${angle} 50 50)`}
          stroke="white"
          strokeWidth={isHour ? "2" : "1"}
          strokeOpacity={isHour ? "0.9" : "0.4"}
          strokeLinecap="round"
        />
      );
    });
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 filter drop-shadow-2xl">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible"
        aria-label="Analog Clock"
      >
        {/* Clock Face Background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          className="opacity-20"
        />

        {/* Ticks */}
        <g>{ticks}</g>

        {/* Hour Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="25"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 50 50)`}
          className="transition-transform duration-75 ease-linear shadow-lg"
        />

        {/* Minute Hand */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 50 50)`}
          className="transition-transform duration-75 ease-linear opacity-90"
        />

        {/* Second Hand */}
        <line
          x1="50"
          y1="58"
          x2="50"
          y2="10"
          stroke="#FCA5A5" // A soft red/pink for contrast against slate blue
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${secondAngle} 50 50)`}
          className="transition-transform duration-75 ease-linear"
        />

        {/* Center Dot */}
        <circle cx="50" cy="50" r="2" fill="white" />
        <circle cx="50" cy="50" r="1" fill="#7B68EE" />
      </svg>
    </div>
  );
};

export default AnalogClock;