import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import FrontSlide from "../Components/FrontSlide/FrontSlide";
import CardGroup from "./Cards/CardGroup";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="front-slide">
          <FrontSlide />
        </div>
      </div>
      <div style={{marginTop:"100px"}}>
        <CardGroup limit={12}/>
      </div>
    </>
  );
};

export default Home;
