import React from "react";
import About from "../../../Assets/aboutus.png";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row about-us-container">
        <div className="col-md-6 left-img">
          <img src={About} alt="About Us"></img>
        </div>
        <div className="col-md-6 right-img">
          <img src={About} alt="About Us"></img>
        </div>
        <div className="col-md-12 text-center about-content">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Budget Shoppy</strong> , your one-stop
            destination for all your shopping needs! We are dedicated to
            providing you with the best online shopping experience, offering a
            wide range of products at competitive prices. At{" "}
            <strong>Budget Shoppy</strong>, we believe in making your shopping
            experience seamless, enjoyable, and hassle-free. Whether you're
            looking for trendy fashion apparel, the latest gadgets, home
            essentials, or anything in between, we've got you covered. Our team
            is committed to curating a diverse selection of products from
            trusted brands and suppliers worldwide. We ensure that every product
            meets our high standards of quality and authenticity, giving you
            peace of mind with every purchase.
          </p>
          <p>
            <strong>Why Choose Us?</strong>
          </p>
          <ul>
            <li>Wide Range of Products</li>
            <li>Quality Assurance</li>
            <li>Competitive Prices</li>
            <li>Secure Shopping</li>
            <li>Excellent Customer Service</li>
          </ul>
          <p>
            <strong>Mission Statement:</strong>
          </p>
          <p>
            {" "}
            At<strong>Budget Shoppy</strong>, our mission is to revolutionize
            the online shopping experience by offering a diverse selection of
            high-quality products, exceptional customer service, and unbeatable
            value. We strive to be your preferred choice for all your shopping
            needs, empowering you to shop smarter, faster, and with confidence.
          </p>
          <p>
            <strong>Contact Us:</strong>
          </p>
          <p>
            We value your feedback and are here to assist you in any way we can.
            If you have any questions, suggestions, or concerns, please don't
            hesitate to reach out to us. You can contact our customer support
            team via email, phone, or live chat.
          </p>
          <p>
            Thank you for choosing <strong>Budget Shoppy</strong>! Happy
            shopping!
          </p>
        </div>
      </div>
      {/* <div className="text-center">
        <img src={About} alt="About Us"></img>
      </div> */}
    </div>
  );
};

export default AboutUs;
