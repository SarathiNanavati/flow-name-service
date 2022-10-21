import * as fcl from "@onflow/fcl";
import { createContext, useContext, useState, useEffect } from "react";
import { checkIsInitialized } from "../flow/scripts";

export const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [currentUser, setUser] = useState({
    loggedIn: false,
    addr: undefined,
  });

  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => fcl.currentUser.subscribe(setUser), []);

  useEffect(() => {
    console.log("useeffect", currentUser.addr);
    if (currentUser.addr) {
      console.log("useeffect checkInIt", currentUser);

      checkInIt();
    }
  }, [currentUser]);

  const logOut = async () => {
    fcl.unauthenticate();
    setUser({
      loggedIn: false,
      addr: undefined,
    });
  };

  const logIn = () => {
    fcl.logIn();
  };

  const checkInIt = async () => {
    const isInit = await checkIsInitialized(currentUser.addr);
    console.log("checkInIt", isInit);
    setIsInitialized(isInit);
  };

  const value = {
    currentUser,
    isInitialized,
    checkInIt,
    logOut,
    logIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
