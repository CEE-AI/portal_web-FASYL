// src/context/NavbarContext.tsx
import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext(null);

export const NavbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const hideNavbar = () => {
    setIsVisible(false);
  };

  const showNavbar = () => {
    setIsVisible(true);
  };

  return (
    <NavbarContext.Provider value={{ isVisible, hideNavbar, showNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  return useContext(NavbarContext);
};
