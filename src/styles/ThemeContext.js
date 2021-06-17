import React, { useState } from "react";

export const ThemeContext = React.createContext({
  name: "BTC",
  updateTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("BTC");

  return (
    <ThemeContext.Provider
      value={{
        name: theme,
        updateTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
