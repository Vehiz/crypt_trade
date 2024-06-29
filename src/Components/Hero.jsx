// import React from "react";
import mobilePhoto from '../assets/mobile-hero1.png'

const Hero = () => {
  return (
     <section className="flex bg-[url('src/assets/jiggy-home-hero-gradient.jpeg')] bg-blue-500 bg-cover bg-center md:py-24 ">
      <div className="w-full flex mx-[7%] justify-between text-white">
        <div className="w-full">
          <h1 className="text-[90px] mt-[50px] mb-[20px] font-bold leading-[110%]">Secure Trading space for digital assets and crypto</h1>
          <p className="text-[20px] mb-[15px]">
            The easiest, safest and fastest web app for cryptocurrency trading,
            exchange and investments globally
          </p>
        </div>
        <div className="w-full flex items-center justify-center py-[25px]">
            <img src={mobilePhoto} alt=""></img>
        </div>
      </div>
    </section>    
  );
};

export default Hero;

