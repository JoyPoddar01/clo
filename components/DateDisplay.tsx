import React from 'react';

interface DateDisplayProps {
  time: Date;
}

const DateDisplay: React.FC<DateDisplayProps> = ({ time }) => {
  // Format: "Wednesday, October 25"
  const dateString = time.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const [weekday, ...rest] = dateString.split(',');
  const fullDate = rest.join(',').trim();

  return (
    <div className="flex flex-col items-center mt-4 sm:mt-8 space-y-1 sm:space-y-2">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
        {weekday}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-medium opacity-90">
        {fullDate}
      </p>
    </div>
  );
};

export default DateDisplay;