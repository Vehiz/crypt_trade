import { BsBarChartLineFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
// import {BsLockFill} from 'react-icons/bs'
import { AiOutlineLock } from "react-icons/ai";

const Hero1 = () => {
  return (
    <section className="w-screen py-16 flex justify-center items-center overflow-hidden">
      <div className=" w-full flex flex-col justify-center items-center px-4 md:px-6 lg:px-8">
        <div className="w-[66%] text-center leading-tight mx-6 font-semibold text-[60px] md:text-5xl lg:text-6xl mb-12">
          <h2>The best crypto features you wont find anywhere else</h2>
        </div>
        <div className="grid gap-[2px] md:flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
            <div className="shadow-inner p-8 mt-6 bg-white rounded-lg">
              <div className=" flex bg-[#EF2468] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%]">
                <BsBarChartLineFill />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">
                Secure &amp; Encrypted Investment
              </h3>
              <p className="text-[#617686] leading-7 text-[20px]">
                The most secure and fast investment can be made through
                cyptrocurrency
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 px-4">
            <div className="shadow-inner p-8 mt-6 bg-white rounded-lg">
              <div className=" flex bg-[#32C072] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%]">
                <BsSend />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">
                Secure &amp; Encrypted Investment
              </h3>
              <p className="text-[#617686] leading-7 text-[20px]">
                The most secure and fast investment can be made through
                cyptrocurrency
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 px-4">
            <div className="shadow-inner p-8 mt-6 bg-white rounded-lg">
              <div className=" flex bg-[#FFD44B] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%] ">
                <AiOutlineLock />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">
                Secure &amp; Encrypted Investment
              </h3>
              <p className="text-[#617686] leading-7 text-[20px]">
                The most secure and fast investment can be made through
                cyptrocurrency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;


