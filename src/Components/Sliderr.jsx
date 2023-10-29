// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg1 from "../assets/cauroselImg1.jpeg";
import CarouselImg2 from "../assets/cauroselImg2.jpeg";
import CarouselImg3 from "../assets/cauroselImg3.jpeg";
import { AiFillStar } from "react-icons/ai";

const Sliderr = () => {
  const settings = {
    dots: true,
    infinite: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="pb-[80px] shadow-inner px-[100px]">
      <div className="flex justify-center items-center py-[60px]">
        <h2 className="text-center text-[#1E1E1E] mb-[25px] text-[60px] leading-[112%] font-semibold">
          What our clients say
        </h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg1} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div>
        <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg2} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div>
        <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg3} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div>
        <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg1} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div>
        <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg2} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div>
        <div className="w-[%] p-[40px] shadow-inner">
            <div className="flex gap-[20px] mb-[25px]">
              <img src={CarouselImg3} alt="" />
              <div>
                <h2 className="font-bold">~John Doe</h2>
                <p>Financial Analyst</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex text-[#FFD44B] text-[25px] gap-[5px] mt-[25px]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Sliderr;
