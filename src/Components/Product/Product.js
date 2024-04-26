import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Fetching product for productId:", productId);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        console.log("Response data:", response.data);
        setProduct(response.data); // Update the product state with fetched data
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);
  // Dependency array to re-fetch product data when productId changes

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="custom-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-start"
                  alt="Product"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.brand}</h5>
                  <p className="card-text">{product.title}</p>
                  <p className="card-text">{product.description}</p>
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
