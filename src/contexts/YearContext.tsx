import { createContext, useContext, useState, type ReactNode } from 'react';

interface YearContextType {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

const YearContext = createContext<YearContextType | undefined>(undefined);

export const YearProvider = ({ children }: { children: ReactNode }) => {
  const [selectedYear, setSelectedYear] = useState('2026');

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </YearContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useYear = () => {
  const context = useContext(YearContext);
  if (context === undefined) {
    throw new Error('useYear must be used within a YearProvider');
  }
  return context;
};
