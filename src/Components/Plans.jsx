// import React from 'react'
// import { GrFormCheckmark } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";

const Plans = () => {
  return (
    <section className="py-[120px] shadow-inner">
      <div className="grid gap-[40px]">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[60%]">
            <h2 className="text-center text-[#000] font-bold text-[60px] mb-[30px] leading-[4rem]">
              The most affordable investment plan for you
            </h2>
            <p className="text-gray-500 text-[1.2rem] text-center">
              Earn with ease using our investment plan
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex gap-[20px] justify-center items-center w-[100%] ">
            <div className="w-[28%]">
              <div className="px-[45px] py-[40px] mt-[30px] rounded-lg shadow-lg">
                <div>
                  <div className="text-[20px] font-bold">
                    <h4>Basic Plan</h4>
                  </div>
                  <div className="flex items-end ">
                    <h2 className="text-[72px] font-bold h-[4.5rem] leading-[115%]">
                      $<span>500</span>
                    </h2>
                    <p className="text-[20px] text-[#617686] leading-[28px] h-[rem]">
                      Min
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] border-t-2 border-gray-600">
                <div className="flex flex-col gap-[20px] mt-[20px]">
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Limited Access Library
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Individual User Capabilities
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      No Updates Facility
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Standard support
                    </div>
                  </div>
                </div>
                <div className="flex justify-center font-bold rounded border-2 transition duration-300 ease-in-out border-[#F54748] px-[45px] py-[15px] hover:bg-[blue] hover:text-[white] hover:border-transparent items-center px-[] mt-[45px]">
                  <button>Choose plan</button>
                </div>
              </div>
            </div>
            <div className="w-[28%]">
              <div className="px-[45px] py-[50px] mt-[30px] shadow-lg bg-black rounded-lg text-[#fff]">
                <div>
                  <div className="text-[20px] font-bold">
                    <h4>Classic Plan</h4>
                  </div>
                  <div className="flex items-end ">
                    <h2 className="text-[72px] font-bold text-[#fff] h-[4.5rem] leading-[115%]">
                      $<span>4,500</span>
                    </h2>
                    <p className="text-[20px] text-[#617686] leading-[28px] h-[rem]">
                      Min
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] border-t-2 border-gray-600">
                <div className="flex flex-col gap-[20px] mt-[20px]">
                    <div className="flex gap-[8px]">
                      <FaCheck/>
                      Limited Access Library
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck/>
                      Individual User Capabilities
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck/>
                      No Updates Facility
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck/>
                      Standard support
                    </div>
                  </div>
                </div>
                <div className="flex bg-[#F54748] justify-center font-bold transition duration-300 ease-in-out rounded border-2 border-[#F54748] px-[45px] py-[15px] hover:bg-[blue] hover:text-[white] hover:border-transparent items-center px-[] mt-[45px]">
                  <button>Choose plan</button>
                </div>
              </div>
            </div>
            <div className="w-[28%]">
              <div className="px-[45px] py-[40px] rounded-lg mt-[30px] shadow-lg">
                <div className="">
                  <div className="text-[20px] font-bold">
                    <h4>Premium Plan</h4>
                  </div>
                  <div className="flex items-end">
                    <h2 className="text-[72px] font-bold h-[4.5rem] leading-[115%]">
                      $<span>12,000</span>
                    </h2>
                    <p className="text-[20px] text-[#617686] leading-[28px] h-[rem]">
                      Min
                    </p>
                  </div>
                </div>
                <div className="mt-[30px] border-t-2 border-gray-600">
                  <div className="flex flex-col gap-[20px] mt-[20px]">
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Limited Access Library
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Individual User Capabilities
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      No Updates Facility
                    </div>
                    <div className="flex gap-[8px]">
                      <FaCheck className="text-blue-700"/>
                      Standard support
                    </div>
                  </div>
                </div>
                <div className="flex justify-center font-bold transition duration-300 ease-in-out rounded border-2 border-red-500 px-[45px] py-[15px] hover:bg-[blue] hover:text-[white] hover:border-transparent items-center px-[] mt-[45px]">
                  <button>Choose plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
