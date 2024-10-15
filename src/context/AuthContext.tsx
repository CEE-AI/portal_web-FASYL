import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  login: (token: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  userRole: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  const login = (token: string, role: string) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem("token", token); // Store token
    localStorage.setItem("role", role); // Store role
    // localStorage.setItem("role", "admin");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem("token"); // Clear token
    localStorage.removeItem("role"); // Clear role
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
