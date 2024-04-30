import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message

  const setUsernameValue = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername("");
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some(item => item.id === product.id);

    if (isAlreadyInCart) {
      setErrorMessage("Product is already in the cart.");
      alert("Product is already in the cart.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setCartItems((prevCartItems) => [...prevCartItems, product]);
    console.log("Cart Items are", product);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(item => item.id !== productId)
    );
    setCartCount(prevCount => prevCount - 1); // Decrease cart count by 1
  };

  const setSearchTermValue = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    console.log("Cart Items are in use effect", cartItems);
  }, [cartItems]);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsernameValue,
        logout,
        isLoggedIn,
        addToCart,
        cartCount,
        login,
        searchTerm,
        setSearchTermValue,
        cartItems,
        errorMessage, 
        setErrorMessage, 
        removeFromCart
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
