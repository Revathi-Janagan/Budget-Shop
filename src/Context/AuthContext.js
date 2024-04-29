import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [cartCount, setCartCount] = useState(0);

  const setUsernameValue = (name) => {
    setUsername(name);
  };
  
  const logout = () => {   
    setUsername("");  
  };

  const login = () => {    
    setIsLoggedIn(true); 
  };
  const addToCart = () => {
    setCartCount((prevCount) => {
      console.log("Previous Cart Count:", prevCount);
      return prevCount + 1;
    });
  };
  
  return (
    <AuthContext.Provider value={{ username, setUsernameValue, logout , isLoggedIn,addToCart,cartCount , login}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
