"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}

export function useTheme() {
  const { theme: nextTheme, setTheme } = useNextTheme();

  const theme = (nextTheme ?? "dark") as "light" | "dark";
  const isDark = theme === "dark";

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const setThemeWrapper = React.useCallback(
    (newTheme: "light" | "dark") => {
      setTheme(newTheme);
    },
    [setTheme],
  );

  return {
    theme,
    isDark,
    setTheme: setThemeWrapper,
    toggleTheme,
  };
}
