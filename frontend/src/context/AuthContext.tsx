import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  email: string;
  role: string;
  sub: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (accessToken: string, idToken: string, role: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        // We might store role in local storage or get it from token if custom claims exist.
        setUser({
          email: decoded.email || '',
          sub: decoded.sub || '',
          role: localStorage.getItem('role') || 'visitor',
        });
      } catch (error) {
        console.error('Invalid token');
        logout();
      }
    }
  }, [token]);

  const login = (accessToken: string, idToken: string, role: string) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('role', role);
    setToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idToken');
    localStorage.removeItem('role');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
