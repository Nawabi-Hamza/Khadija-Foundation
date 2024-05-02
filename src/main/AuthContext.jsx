// AuthContext.js
import React, { createContext, useContext, useState,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

   // Function to check if token is expired
   const isTokenExpired = (token) => {
    const decodedToken = decodeToken(token);
    if (decodedToken && decodedToken.exp) {
      return decodedToken.exp < Date.now() / 1000; 
    }
    return false;
  };

  // Function to decode JWT token
  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      if (user && user.token && isTokenExpired(user.token)) {
        setUser(null); // Token expired, clear user
        localStorage.removeItem('user');
      } else {
        setUser(user);
      }
    }
  }, []);

 

  const login = (userData) => {
    // Logic for authenticating user
    setUser(userData); 
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const register = (userData) => {
    // Logic for registering user
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Logic for logging out user
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
