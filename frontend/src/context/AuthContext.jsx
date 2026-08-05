// Provides authenticated user/session state to the component tree.
import { createContext, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "auth";

function readStoredAuth() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { user: null, token: null };
  } catch {
    return { user: null, token: null };
  }
}

export function AuthProvider({ children }) {
  const [{ user, token }, setAuth] = useState(readStoredAuth);

  const login = (nextUser, nextToken) => {
    setAuth({ user: nextUser, token: nextToken });
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: nextUser, token: nextToken }));
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: Boolean(token), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
