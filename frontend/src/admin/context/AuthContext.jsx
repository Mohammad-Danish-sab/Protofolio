import { createContext, useContext, useEffect, useState } from "react";
import { loginAdmin } from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      setUser({ token });
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const data = await loginAdmin({
      email,
      password,
    });

    localStorage.setItem("adminToken", data.access_token);

    setUser({
      token: data.access_token,
    });

    return data;
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
