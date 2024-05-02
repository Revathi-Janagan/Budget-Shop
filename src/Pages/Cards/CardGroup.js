import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import Card from "./Card";
import shuffle from "lodash.shuffle";
import { useLocation } from "react-router-dom";
import "./CardGroup.css";

const CardGroup = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const { searchTerm, errorMessage } = useAuth();
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    loadProducts();
  }, [page, searchTerm, category]); // Load products whenever the page, search term, or category changes

  const loadProducts = () => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products?page=${page}`)
      .then((response) => {
        if (response.data.products.length === 0) {
          setHasMore(false);
          return;
        }
        let filteredProducts = response.data.products;
        if (category) {
          filteredProducts = filteredProducts.filter(
            (product) => product.category === category
          );
        }
        setProducts((prevProducts) =>
          page === 1
            ? shuffle(filteredProducts) // If it's the first page, shuffle the filtered products
            : [...prevProducts, ...filteredProducts]
        );
        setIsLoading(false);
        console.log("Response is:", response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  };

  return (
    <main>
      <div
        className="container-fluid bg-transparent my-4 p-3"
        style={{ position: "relative" }}
      >
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div
          className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-2"
          style={{ marginTop: "0px", marginLeft: "100px" }}
        >
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(0, limit)
            .map((product, index) => (
              <Card key={product.id} product={product} />
            ))}
        </div>

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
