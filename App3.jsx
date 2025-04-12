import React from 'react';
import CounterUseState from './components/CounterUseState';
import TimerUseEffect from './components/TimerUseEffect';
import ThemedTextUseContext from './components/ThemedTextUseContext';
import InputFocusUseRef from './components/InputFocusUseRef';
import CounterUseReducer from './components/CounterUseReducer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Hooks Demo</h1>
      <CounterUseState />
      <hr />
      <TimerUseEffect />
      <hr />
      <ThemedTextUseContext />
      <hr />
      <InputFocusUseRef />
      <hr />
      <CounterUseReducer />
    </div>
  );
}

export default App;
