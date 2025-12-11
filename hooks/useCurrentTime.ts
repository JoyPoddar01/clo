import { useState, useEffect } from 'react';

export const useCurrentTime = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    // Update immediately to avoid lag
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};