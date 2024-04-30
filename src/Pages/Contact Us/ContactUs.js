import React from "react";
import "./Contact.css";
import Contact from "../../Assets/contact2.png";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="custom-card">
              <h2 className="card-header">Address</h2>
              <div className="card-body-contact">
                <p>123 South Main Street</p>
                <p>Chennai</p>
                <p>Tamilnadu</p>
                <p>636001</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="custom-card">
              <h2 className="card-header">Contact Information</h2>
              <div className="card-body-contact">
                <p>Email:budgetshoppy@gmail.com</p>
                <p>Phone: 7894561230</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center contact-img">
            <img src={Contact} alt="Contact us" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
