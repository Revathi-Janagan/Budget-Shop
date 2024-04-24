import React from "react";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  console.log("Product received:", product);

  if (!product) {
    return <div>Error: Product is undefined</div>;
  }

  console.log("Product after conditional:", product);
  return (
    <div className={`col cols-6 ${styles.productContainer}`}>
      <div className={`card ${styles.productCard} h-100 shadow-sm`}>
        <>
          <img src={product.thumbnail} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{product.brand}</h5>
            <p className="card-text">{product.title}</p>
          </div>
        </>
      </div>
    </div>
  );
};

export default Product;
