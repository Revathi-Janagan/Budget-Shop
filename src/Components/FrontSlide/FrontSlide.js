import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Slide from "../../Assets/slide1.png";
import { useAuth } from "../../Context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./FrontSlide.css";


const FrontSlide = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { username } = useAuth();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  };

  const handleClick = (category) => {
    if (category === "All") {
      navigate("/cards");
    } else {
      navigate(`/cards?category=${category}`);
    }
  };

  

  return (
    <div className="front-slide">
      <div className="hamburger-split">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        {categories.map((category, index) => (
          <button key={index} className="btn custom-btn m-0" onClick={() => handleClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="background-circle">
        <div className="image-container">
          <img src={Slide} alt="Slide" />
        </div>
      </div>

      <div className="store-info">
        <h1>"Your Pathway to Shopping Bliss!"</h1>
        {username ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>Welcome, guest! Sign in to access personalized features.</p>
        )}
        <p>
          Your ultimate destination for unlocking the joy of shopping. At our
          digital emporium, we've curated a treasure trove of products to cater
          to your every need and desire.
        </p>
        <button type="button" className="btn btn-primary custom-btn-buy" onClick={() => handleClick("All")}>
          Buy Now
        </button>
      </div>

      <div className="social-links">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        <FontAwesomeIcon icon={faGoogle} className="social-icon" />
      </div>
    </div>
  );
};

export default FrontSlide;
