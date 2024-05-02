import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const [errorMessage, setErrorMessage] = useState("");

  // Initialize cart count based on the length of cartItems
  const [cartCount, setCartCount] = useState(cartItems.length);

  const setUsernameValue = (name) => {
    setUsername(name);
    localStorage.setItem("username", name);
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.setItem("isLoggedIn", false);
  };

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      setErrorMessage("Product is already in the cart.");
      alert("Product is already in the cart.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    // Update cart items and count
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, quantity: 1 },
    ]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  // Update localStorage when cartCount changes
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartItems.length); // Update cartCount based on the new cartItems
  }, [cartItems]);

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
        setCartCount,
        setCartItems,
        login,
        cartItems,
        errorMessage,
        setErrorMessage,
        removeFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
