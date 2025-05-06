import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick); // cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <h1 className="text-white text-6xl font-mono">{formatTime(time)}</h1>
    </div>
  );
};

export default DigitalClock;
