import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export default function App({ children }) {
  
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <ThemeContext.Provider value={{darkMode: darkMode, toggleDarkMode: toggleDarkMode}}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
