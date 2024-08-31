import React from 'react';
// import '../index.css'; // Ensure Tailwind CSS is included
import { CarouselHome } from '../Components/CarouselHome'; 
import "../Styles/Home.css"
import HeroSection from '../Components/HeroSection';
import ReverseContent from '../Components/ReverseContent';
import Newsletter from '../Components/NewsLetter';

export const Home = () => {
  return (
    <>
      <div className="tagLine">
        <h1>An investment in knowledge <br />pays the best <span className="shade">interest.</span></h1>
        <div className="input-container">
          <input type="text" placeholder="Enter your E-mail" />
          <button>Submit</button>
          
        </div>
        <p>You Partners in Financial Freedom</p>
      </div>

      <div className="tagLine">
        <h1>We Train <span className="shade">You Gain.</span></h1>
        <p style={{marginTop:"-15px"}}>Change Your Way of Trading</p>
      </div>
      <CarouselHome />
      <br/><br/>
      
      <HeroSection/>
      

      <ReverseContent/>
      <Newsletter/>
    </>


  );
};
