import React from "react";

type Colors = [
  "void",
  "black",
  "ash-black",
  "white",
  "sky",
  "green",
  "blue",
  "dusk",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow"
];
type CursorStates = ["auto", "pointer", "none"];

type ColorsUnion = Colors[number];
type CursorUnion = CursorStates[number];

type ThemeContext = {
  background: ColorsUnion;
  setBackground: React.Dispatch<React.SetStateAction<ColorsUnion>>;
  accent: ColorsUnion;
  setAccent: React.Dispatch<React.SetStateAction<ColorsUnion>>;
  cursor: CursorUnion;
  setCursor: React.Dispatch<React.SetStateAction<CursorUnion>>;
};
const ThemeContext = React.createContext<ThemeContext | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [background, setBackground] = React.useState<ColorsUnion>("black");
  const [accent, setAccent] = React.useState<ColorsUnion>("white");
  const [cursor, setCursor] = React.useState<CursorUnion>("auto");

  React.useEffect(() => {
    document.body.style.setProperty("--background", `var(--${background})`);
    document.body.style.setProperty("--accent", `var(--${accent})`);
    document.body.style.setProperty("--cursor", `${cursor}`);
  });
  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
        accent,
        setAccent,
        cursor,
        setCursor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemecontext must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useThemeContext };
