import { createContext, useContext, useState } from 'react';

interface DarkModeContextProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export const useDarkModeContext = () => useContext(DarkModeContext);
