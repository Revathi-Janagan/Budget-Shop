import React from 'react';
import Navbar from '../Components/Navbar';
import './Home.css';
import FrontSlide from '../Components/FrontSlide/FrontSlide';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='front-slide'>
        <FrontSlide />
      </div>
    </div>
  );
};

export default Home;
