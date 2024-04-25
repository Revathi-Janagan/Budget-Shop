import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./CardGroup.css";

const Card = ({ product }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    navigate(`/productshow/${product.id}`); // Navigate to product show page with product ID
  };

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const finalPrice = (product.price * 88.89 - discountedPrice).toFixed(2);

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
             Buy
            </button>
            <button
              type="button"
              className="btn btn-warning m-3"
            
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
