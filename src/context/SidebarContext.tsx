import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarProviderProps {
  children: ReactNode; // Define the type for children
}

const SidebarContext = createContext<{
  isOpen: boolean;
  toggleSidebar: () => void;
  themeMode: string;
  setThemeMode: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [themeMode, setThemeMode] = useState('light'); // Manage theme mode state

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, themeMode, setThemeMode }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
