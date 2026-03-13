"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { defaultLanguage, getDictionary } from "@/content/dictionaries";
import type { Language } from "@/lib/types";

const STORAGE_KEY = "northline-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;

    if (saved === "en" || saved === "pt") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return value;
}

export function useDictionary() {
  const { language } = useLanguage();
  return getDictionary(language);
}
