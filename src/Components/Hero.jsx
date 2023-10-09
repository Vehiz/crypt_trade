// import React from "react";
import mobilePhoto from '../assets/mobile-hero1.png'

const Hero = () => {
  return (
    <section className="w-[100%] bg-[#1A1AFF]">
      <div className=" flex mx-[7%] justify-between text-white w-[100%]">
        <div className="w-[50%]">
          <h1 className="text-[90px] mt-[50px] mb-[20px] font-bold leading-[110%]">Secure Trading space for digital assets and crypto</h1>
          <p className="w-[85%] text-[20px]">
            The easiest, safest and fastest web app for cryptocurrency trading,
            exchange and investments globally
          </p>
        </div>
        <div className="w-[45%] mt-[1%] pr-[10%]">
            <img src={mobilePhoto} alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
