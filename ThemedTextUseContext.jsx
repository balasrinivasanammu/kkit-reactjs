import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function ThemedTextUseContext() {
  return (
    <div>
      <h2>useContext Example</h2>
      <ThemeContext.Provider value="dark">
        <ThemedText />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemedTextUseContext;

/*
useContext is a powerful hook in React used to share data globally (like theme, auth, user settings) without prop drilling.

When to Use useContext

    Authentication (user data, auth state)

    Theme toggling (dark/light)

    Global settings (language, layout)

    Managing socket or real-time states

    Replacing prop drilling in nested components

    */
