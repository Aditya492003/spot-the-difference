import { useEffect, useState } from 'react';

export default function Timer({ isFinished }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [isFinished]);

  return <div className="timer">Time: {time}s</div>;
}
