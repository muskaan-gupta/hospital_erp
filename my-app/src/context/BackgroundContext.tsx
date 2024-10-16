"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface BackgroundContextType {
  currentIndex: number;
  changeBackground: () => void;
  backgrounds: string[];
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of 4 specific Tailwind background color classes
  const backgrounds = ["bg-blue-300", "bg-orange-400", "bg-green-500", "bg-purple-500"];

  const changeBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <BackgroundContext.Provider value={{ currentIndex, changeBackground, backgrounds }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Custom hook for consuming the background context
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};