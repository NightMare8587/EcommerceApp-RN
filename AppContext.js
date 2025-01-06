import { createContext, useContext, useState, useEffect } from "react";

const EcommerceAppContext = createContext();
export function AppContext({ children }) {
  const [loggedIn, setIsLoggedIn] = useState(false);

  const contextObj = {
    loggedIn,
    setIsLoggedIn,
  };

  return (
    <EcommerceAppContext.Provider value={contextObj}>
      {children}
    </EcommerceAppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(EcommerceAppContext);
}
