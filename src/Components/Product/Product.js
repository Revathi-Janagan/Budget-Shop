import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Product.module.css";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams(); // Get the product ID from route parameters
  const [product, setProduct] = useState(null); // State to store the product data

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
    return <div>Loading...</div>; // Render loading state while fetching product data
  }

  return (
    <div className={`col cols-6 ${styles.productContainer}`}>
      <div className={`card ${styles.productCard} h-100 shadow-sm`}>
        <>
          <img src={product.thumbnail} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{product.brand}</h5>
            <p className="card-text">{product.title}</p>
            <p>{product.description}</p>
            {/* Render other product details */}
          </div>
        </>
      </div>
    </div>
  );
};

export default Product;
