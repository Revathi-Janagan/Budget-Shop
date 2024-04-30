import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" >
        <div className="row" >
          <div className="col-md-4" style={{marginTop:"50px"}}>
            <h4>Contact Us</h4>
            <p>
              Budget Shoppy<br />
              South Main Cross Street<br />
              Chennai<br />
              636001<br />
              7894561230<br />
              Email: budget@gmail.com
            </p>
          </div>
          <div className="col-md-4 quick-links" style={{marginTop:"50px"}}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 legal" style={{marginTop:"50px"}}>
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/return">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; {new Date().getFullYear()} Budget Shoppy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
