import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useState, useEffect } from "react";

const EcommerceAppContext = createContext();
export function AppContext({ children }) {
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const updateLocal = async () => {
      const local = await AsyncStorage.getItem("loggedIn");
      if (local != null) {
        console.log("Not null logg");
        if (local == "true") {
          console.log("True loggedin user");
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          console.log("False not logged in");
        }
      }
    };

    updateLocal();
  }, []);

  return (
    <EcommerceAppContext.Provider value={{ loggedIn, setIsLoggedIn }}>
      {children}
    </EcommerceAppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(EcommerceAppContext);
}
