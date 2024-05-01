import React, { useState } from "react";
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
import CardGroup from "../../Pages/Cards/CardGroup";

const FrontSlide = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { username } = useAuth();

  const handleClick = (category) => {
    // Here you can perform the logic to fetch products based on the selected category
    // For now, let's just navigate to the "/cards" route
    navigate("/cards");
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
        <button className="btn  custom-btn m-0" onClick={() => handleClick("Skin Care")}>
          Skin Care
        </button>
        <button className="btn  custom-btn m-0" onClick={() => handleClick("phones")}>
          Mobile Accessories
        </button>
        <button className="btn  custom-btn m-0" onClick={() => handleClick("Smart Watches")}>
          Smart Watches
        </button>
        <button className="btn  custom-btn m-0" onClick={() => handleClick("Child Care")}>
          Child Care
        </button>
        <button className="btn  custom-btn m-0" onClick={() => handleClick("Art and Craft")}>
          Art and Craft
        </button>
        <button className="btn  custom-btn m-0" onClick={() => handleClick("Makeup")}>
          Makeup
        </button>
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
