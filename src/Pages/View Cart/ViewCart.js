import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { calculateFinalPrice } from "../../Helpers/Util/Utils";
import { useNavigate } from "react-router-dom";
import "./ViewCart.css"; 

const ViewCart = () => {
  const { cartItems, removeFromCart, setCartItems ,setCartCount } = useAuth();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total +=
        item.quantity *
        calculateFinalPrice(item.price, item.discountPercentage);
    });
    return total;
  };

  const handleBuy = () => {
    setCartCount(0);
    setCartItems([]);
    navigate("/buypage");
  };

  return (
    <div className="container">
      <div className="scrolling-header-container">
        <h4 className="scrolling-header">Products in your Cart</h4>
      </div>
      <div className="row mt-5">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="col-md-12 mb-3 view-cart-item" key={index}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="img-thumbnail thumbnail"
                  />
                </div>
                <div className="col-md-8">
                  <h5 className="title">{item.title}</h5>
                  <p className="description">{item.description}</p>
                  <p>
                    Price :{" "}
                    <strong>
                      {" "}
                      &#8377;
                      {calculateFinalPrice(item.price, item.discountPercentage)}
                    </strong>
                  </p>
                  <div className="row">
                    <div className="col-md-4">
                      <label className="quantity-label">Quantity:</label>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="quantity-input form-control"
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) => {
                          // Update quantity when changed
                          const newQuantity = parseInt(e.target.value, 10);
                          // Update quantity in cartItems
                          const updatedCartItems = [...cartItems];
                          updatedCartItems[index].quantity = newQuantity;
                          setCartItems(updatedCartItems);
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      {/* Subtotal */}
                      <p className="subtotal-label">
                        Subtotal:{" "}
                        <strong>
                          {" "}
                          &#8377;
                          {item.quantity *
                            calculateFinalPrice(
                              item.price,
                              item.discountPercentage
                            )}
                        </strong>
                      </p>
                    </div>
                  </div>

                  <button
                    className="btn btn-danger remove-btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>

      <div className="container-buy ">
        <div className="row mt-3 mb-5 ">
          <div className="col-md-6">
            <label className="total-label">Total:</label>
            <span className="total-amount">&#8377;{calculateTotal()}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-success buy-btn" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
