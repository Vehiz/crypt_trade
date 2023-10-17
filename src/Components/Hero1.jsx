import { BsBarChartLineFill } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
// import {BsLockFill} from 'react-icons/bs'
import { AiOutlineLock } from "react-icons/ai";

const Hero1 = () => {
  return (
    <section className="w-screen py-[120px] flex justify-center items-center overflow-hidden">
      <div className=" w-[95%] flex flex-col justify-center items-center px-[1%]">
        <div className="w-[66%] text-center leading-[65px] mx-[70px] font-semibold text-[60px] mb-[50px]">
          <h2 className="">
            The best crypto features you wont find anywhere else
          </h2>
        </div>
        <div className="flex">
        <div className="px-[15px] shadow-lg">
            <div className="p-[40px] mt-[30px]">
              <div className=" flex bg-[#EF2468] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%]">
                <BsBarChartLineFill />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">Secure &amp; Encrypted Investment</h3>
              <p className="text-[#617686] leading-7 text-[20px]">
                The most secure and fast investment can be made through
                cyptrocurrency
              </p>
            </div>
          </div>
          <div className="px-[15px] shadow-lg">
            <div className="p-[40px] mt-[30px] shadow-sm">
              <div className=" flex bg-[#32C072] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%]">
                <BsSend />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">Secure &amp; Encrypted Investment</h3>
              <p className="text-[#617686] leading-7 text-[20px]">
                The most secure and fast investment can be made through
                cyptrocurrency
              </p>
            </div>
          </div>
          <div className="px-[15px] shadow-lg">
            <div className="p-[40px] mt-[30px]">
              <div className=" flex bg-[#FFD44B] w-[70px] h-[70px] text-[white] text-[36px] text-center mb-[20px] justify-center items-center rounded-[50%] ">
                <AiOutlineLock />
              </div>
              <h3 className="text-2xl mb-[15px] font-semibold">Secure &amp; Encrypted Investment</h3>
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
