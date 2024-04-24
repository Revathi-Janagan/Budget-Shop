import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import shuffle from "lodash.shuffle";
import Product from "../../Components/Product/Product";
import "./CardGroup.css";

const CardGroup = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    loadProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const loadProducts = () => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products?page=${page}`)
      .then((response) => {
        if (response.data.products.length === 0) {
          setHasMore(false);
          return;
        }
        setProducts((prevProducts) =>
          shuffle([...prevProducts, ...response.data.products])
        );
        setIsLoading(false);
        console.log("Response is:", response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSelectProduct = (product) => {
    console.log("Selected product:", product); 
    setSelectedProduct(product);
  };

  return (
    <main>
      <div
        className="container-fluid bg-transparent my-4 p-3"
        style={{ position: "relative" }}
      >
        <div
          className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-2"
          style={{ marginTop: "0px", marginLeft: "100px" }}
        >
          {products.slice(0, limit).map((product, index) => (
            <Card
              key={product.id}
              product={product}
              onSelectProduct={handleSelectProduct}
            />
          ))}
        </div>
        {selectedProduct && <Product product={selectedProduct} />}
        {isLoading && (
          <div ref={loader} className="text-center mt-3">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {!isLoading && !hasMore && (
          <div className="text-center mt-3">
            <p>No more products to load.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CardGroup;
