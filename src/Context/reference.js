import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(
    parseInt(localStorage.getItem("cartCount")) || 0
  ); // Initialize cart count from localStorage
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  ); 
  const [errorMessage, setErrorMessage] = useState("");
  const [lastAddedProductId, setLastAddedProductId] = useState(null);

  const setUsernameValue = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername("");
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  // const addToCart = (product) => {
  //   const isAlreadyInCart = cartItems.some(item => item.id === product.id);

  //   if (isAlreadyInCart) {
  //     setErrorMessage("Product is already in the cart.");
  //     alert("Product is already in the cart.");
  //     setTimeout(() => {
  //       setErrorMessage("");
  //     }, 3000);
  //     return;
  //   }

  //   setCartItems((prevCartItems) => [...prevCartItems, product]);
  //   console.log("Cart Items are", product);
  //   setCartCount((prevCount) => prevCount + 1);
  // };
  // const addToCart = (product) => {
  //   const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

  //   if (isAlreadyInCart) {
  //     setErrorMessage("Product is already in the cart.");
  //     alert("Product is already in the cart.");
  //     setTimeout(() => {
  //       setErrorMessage("");
  //     }, 3000);
  //     return;
  //   }

  //   // Add the product to the cart
  //   setCartItems((prevCartItems) => [
  //     ...prevCartItems,
  //     { ...product, quantity: 1 },
  //   ]);
  //   setCartCount((prevCount) => prevCount + 1);

  //   // Show success message
  //   setErrorMessage("Product added to cart.");
  //   setTimeout(() => {
  //     setErrorMessage("");
  //   }, 3000);
  // };
  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      setErrorMessage("Product is already in the cart.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, quantity: 1 },
    ]);
    setCartCount((prevCount) => prevCount + 1);
    localStorage.setItem("cartCount", cartCount + 1); // Update cart count in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setErrorMessage("Product added to cart.");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
    setCartCount((prevCount) => prevCount - 1);
    localStorage.setItem("cartCount", cartCount - 1); 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
        setCartItems,
        login,
        searchTerm,
        setSearchTermValue,
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
