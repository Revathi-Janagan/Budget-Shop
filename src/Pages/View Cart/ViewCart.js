import React from 'react';
import { useAuth } from "../../Context/AuthContext";
import { calculateFinalPrice } from "../../Helpers/Util/Utils";

const ViewCart = () => {
  const { cartItems, removeFromCart } = useAuth();
  console.log("Cart Items are in view cart", cartItems);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="row">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="col-md-12 mb-3" key={index}>
              <div className="row">
                <div className="col-md-4">
                  <img src={item.thumbnail} alt={item.title} className="img-thumbnail" style={{ width: '250px', height: 'auto', marginBottom: "10px" }} />
                </div>
                <div className="col-md-8">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>                 
                  <p>Final Price:  &#8377;{calculateFinalPrice(item.price, item.discountPercentage)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                </div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
