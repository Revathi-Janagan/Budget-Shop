import React from "react";
import Slide from "../../Assets/slide1.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "./FrontSlide.css";

const FrontSlide = () => {
  return (
    <div className="front-slide">
      <div className="background-circle">
        <div className="image-container">
          <img src={Slide} alt="Slide" />
        </div>
      </div>
      <div className="store-info">
        <h1>"Your Pathway to Shopping Bliss!"</h1>
        <p>
          Your ultimate destination for unlocking the joy of shopping. 
          At our digital emporium, we've curated a treasure trove of products to
          cater to your every need and desire. 
        </p>
        <button type="button" class="btn btn-primary custom-btn-buy">Buy Now</button>
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
