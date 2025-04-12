import React, { useState, useEffect } from 'react';

function TimerUseEffect() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 10000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Seconds passed: {seconds}</p>
    </div>
  );
}

export default TimerUseEffect;
