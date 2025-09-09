"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontFamily = "inter" | "system" | "serif" | "mono";

interface FontContextType {
  font: FontFamily;
  setFont: (font: FontFamily) => void;
  mounted: boolean;
}

const FontContext = createContext<FontContextType>({
  font: "inter",
  setFont: () => {},
  mounted: false,
});

const fontClasses = {
  inter: "font-inter",
  system: "font-system",
  serif: "font-serif",
  mono: "font-mono",
};

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFontState] = useState<FontFamily>("inter");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedFont = localStorage.getItem("font") as FontFamily;
    if (savedFont) {
      setFontState(savedFont);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("font", font);
      // Remove all font classes
      Object.values(fontClasses).forEach(className => {
        document.documentElement.classList.remove(className);
      });
      // Add current font class
      document.documentElement.classList.add(fontClasses[font]);
    }
  }, [font, mounted]);

  const setFont = (newFont: FontFamily) => {
    setFontState(newFont);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <FontContext.Provider value={{ font, setFont, mounted }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  return context;
}
