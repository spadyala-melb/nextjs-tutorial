"use client";

import { createContext, useState } from "react";

const ThemeContext = createContext();

export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    return setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggleMode, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
