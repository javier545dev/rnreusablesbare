import React from "react";
import { Appearance, useColorScheme as useRNColorScheme } from "react-native";

type ColorScheme = "light" | "dark";

type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
};

const ColorSchemeContext = React.createContext<
  ColorSchemeContextType | undefined
>(undefined);

export function ColorSchemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const systemScheme = useRNColorScheme();
  const [scheme, setScheme] = React.useState<ColorScheme>(
    systemScheme === "dark" ? "dark" : "light",
  );

  const toggleColorScheme = () => {
    const newScheme = scheme === "light" ? "dark" : "light";
    setScheme(newScheme);
    Appearance.setColorScheme(newScheme);
  };

  const setColorScheme = (newScheme: ColorScheme) => {
    setScheme(newScheme);
    Appearance.setColorScheme(newScheme);
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme: scheme, toggleColorScheme, setColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
}

export const useColorScheme = () => {
  const context = React.useContext(ColorSchemeContext);
  if (!context) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }
  return context;
};
