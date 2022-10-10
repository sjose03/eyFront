/* eslint-disable camelcase */
import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { useNavigate } from "react-router-dom";

interface UserData {
  userLogin: string;
  userToken: string;
  flagAdmin: boolean;
}

interface AuthContextData {
  signed: boolean;
  user: UserData | null;
  signIn(): void;
  signOut(): void;
  loading: boolean;
  admin: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    function loadStorageData() {
      const storageUser = localStorage.getItem("user");
      const storageToken = localStorage.getItem("token");
      const storageAdmin = localStorage.getItem("admin") !== '"false"';

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
        setIsAdmin(storageAdmin);
      }
    }
    loadStorageData();
  });

  function signIn() {
    setUser({ userLogin: "a", userToken: "a", flagAdmin: true });

    localStorage.setItem("user", JSON.stringify("a"));
    localStorage.setItem("token", JSON.stringify("a"));
    localStorage.setItem("idUser", JSON.stringify("a"));
  }
  function signOut() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
        admin: !!isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
