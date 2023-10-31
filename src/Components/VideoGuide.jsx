// import React from "react";
import video from "../assets/faq-video-bg.jpg";
import { BsCaretRightFill } from "react-icons/bs";
import AccordionItems from "./Accordion/AccordionItems";

const VideoGuide = () => {
  return (
    <section>
      <div className="w-[100%] px-[30px] bg-[#02021E] mx-auto shadow-inner">
        <div className="flex py-[120px] justify-center items-center">
          <div className="pr-[48px] w-[45%] pl-[12px]">
            <div className="bg-custom-background relative">
              <img
                src={video}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
              <div className="flex w-[100px] h-[100px] rounded-[50%] bg-[#02021E] text-[25px] items-center justify-center text-[#F54748] absolute bottom-[40%] left-[45%]">
                <a
                  href="https://www.youtube.com/watch?v=jUXQCnUSfCQ"
                  className=""
                >
                  <BsCaretRightFill />
                </a>
              </div>
            </div>
          </div>

          <div className="w-[45%]">
            <div>
              <div className="text-[60px] text-[#fff] leading-[112%] pr-[48px] pl-[12px] font-bold">
                <h2>If you want to know anything, ask us</h2>
              </div>
            </div>
            <div>
              <AccordionItems />
            </div>
            <div className="text-[#617686] mt-[24px]">
              <h2>
                Have more questions?
                <span className="font-bold text-[18px] ml-[5px] text-[#FFF]">
                  Get in touch
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGuide;
