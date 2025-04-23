import { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={themeStyles}>
      <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
}


export default ThemeToggle;