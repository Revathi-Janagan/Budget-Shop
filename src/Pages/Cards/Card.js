import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { calculateFinalPrice } from "../../Helpers/Util/Utils";
import "./CardGroup.css";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useAuth();

  const handleClick = () => {
    navigate(`/productshow/${product.id}`);
  };

  const finalPrice = calculateFinalPrice(
    product.price,
    product.discountPercentage
  );
  const handleAddToCart = () => {
    addToCart(product); // Call the addToCart function to increment the cart count
  };
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={product.thumbnail} className="card-img-top" alt="Product" />
        <div className="card-body">
          <div className="clearfix mb-3">
            <span className="float-start badge rounded-pill bg-success">
              {product.brand}
            </span>
            <span className="float-end price-hp">
              &#8377;{(product.price * 88.89).toFixed(2)}
            </span>
            <div>
              <span className="float-end discounted-final-price">
                &#8377;{finalPrice}
                <span className="discount-percentage">
                  {product.discountPercentage}% off
                </span>
              </span>
            </div>
          </div>
          <h5 className="card-title">{product.title}</h5>
          <div className="text-center my-4">
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleClick}
            >
              View
            </button>
            <button
              type="button"
              className="btn btn-warning m-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
