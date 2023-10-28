// import React from "react";
import video from "../assets/faq-video-bg.jpg";
// import {FaAngleRight} from "react-icons/fa";
import AccordionItems from "./Accordion/AccordionItems";


const VideoGuide = () => {
  return (
    <section>
      <div className="w-[100%] mx-auto">
        <div className="flex py-[120px] justify-center items-center">
          <div className="pr-[48px] w-[45%] pl-[12px]">
            <div className="w-[]">
              <img
                src={video}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>

          <div className="w-[45%]">
            <div>
              <div className="text-[60px] leading-[112%] pr-[48px] pl-[12px] font-bold">
                <h2>If you want to know anything, ask us</h2>
              </div>
            </div>
            <div>
              <AccordionItems/>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGuide;
