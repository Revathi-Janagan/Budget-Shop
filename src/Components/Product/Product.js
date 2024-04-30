import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";
import { Carousel } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import SetQuantity from "./SetQuantity";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  const finalPrice = (product.price * 88.89 - discountedPrice).toFixed(2);
  const handleAddToCart = () => {
    addToCart(); // Call the addToCart function to increment the cart count
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="custom-card-product">
            <div className="row g-0">
              <div className="col-md-4 carousel">
                <Carousel>
                  {product.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 product-image"
                        style={{ height: "500px", width: "100%" }}
                        src={image}
                        alt={`Product ${index + 1}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="col-md-8">
                <div className="card-body" style={{ height: "500px" }}>
                  <span className="float-end badge rounded-pill product-thumpnail">
                    {" "}
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      src={product.thumbnail}
                      alt="Thumbnail"
                    />
                  </span>

                  <h3 className="card-title text-center product-brand">
                    {product.brand}
                  </h3>
                  <span className="float-start badge rounded-pill bg-success capitalize">
                    {product.category}
                  </span>
                  <br />
                  <hr />
                  <p className="card-text product-title">{product.title}</p>
                  <p className="card-text product-description">
                    {product.description}
                  </p>
                  <span className="float-end price-hp">
                    &#8377;{(product.price * 88.89).toFixed(2)}
                  </span>
                  <div>
                    <br />
                    <span className="float-end discounted-final-price-product">
                      &#8377;{finalPrice}
                      <span className="discount-percentage">
                        {product.discountPercentage}% off
                      </span>
                    </span>
                  </div>
                  <div>
                    <p className="card-text-rating">
                      <p className="fas fa-star rating">{product.rating}</p>
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="me-3">Quantity:</p>
                    <SetQuantity />
                  </div>

                  <hr />
                  <button className="btn btn-primary custom-button-buy">
                    Buy
                  </button>
                  <button
                    className="btn btn-primary custom-button-addcart"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
