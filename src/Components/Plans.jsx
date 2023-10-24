// import React from 'react'
import { GrFormCheckmark } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const Plans = () => {
  return (
    <section className="py-[120px] shadow-inner">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[60%]">
          <h2 className="text-center text-[#000] font-bold text-[60px] mb-[30px] leading-[4rem]">
            The most affordable investment plan for you
          </h2>
          <p className="text-gray-500 text-[1.2rem] text-center">
            Earn with ease using our investment plan
          </p>
        </div>
        <div className="w-[100%]">
          <div className="flex  w-[33%]">
            <div className="px-[45px] py-[40px] mt-[30px]">
              <div>
                <div className="text-[20px] font-bold">
                  <h4>Basic Plan</h4>
                </div>
                <div className="flex items-end ">
                  <h2 className="text-[72px] font-bold h-[4.5rem] leading-[115%]">
                    $<span>500</span>
                  </h2>
                  <p className="text-[20px] text-[#617686] leading-[28px] h-[rem]">Min</p>
                </div>
              </div>
              <div className="mt-[30px]">
                <ul>
                  <li>
                    <FaCheck className="w" />
                    Limited Access Library
                  </li>
                  <li>
                    <FaCheck />
                    Individual User Capabilities
                  </li>
                  <li>
                    <FaCheck />
                    No Updates Facility
                  </li>
                  <li>
                    <FaCheck />
                    Standard support
                  </li>
                </ul>
              </div>
              <div className=" px-[] mt-[45px]">
                <button>Choose plan</button>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
