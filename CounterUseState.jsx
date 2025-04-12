import React, { useState } from 'react';

function CounterUseState() {
  const [count, setCount] = useState(-100);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterUseState;
