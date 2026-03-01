import type { ReactNode } from "react";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  checked: boolean;
  name: string;
  role: "admin" | "user";
};

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const localValues = localStorage.getItem("token");

  const login = (userData: User) => {
    if (userData.checked) {
      localStorage.setItem("token", JSON.stringify(userData));
    }
    setUser(userData);
  };

  useEffect(() => {
    if (localValues) {
      setUser(JSON.parse(localValues));
    }
  }, [localValues]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
