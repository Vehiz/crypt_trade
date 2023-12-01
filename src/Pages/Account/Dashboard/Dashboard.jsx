// import React from 'react'
import MarketView from "../../../Widgets/MarketView";
import WidgetTicker from "../../../Widgets/WidgetTicker";
import Footer from "../Sidebar/Footer";

const Dashboard = () => {
  return (
    <section className="bg-[#f4f7fe]">
      <div className="flex justify-between mx-[30px] ">
        <div className=" w-[33.3%] px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">$0.00</h3>
              <div className="text-gray-700 text-opacity-50">Fiat Deposit</div>
            </div>
          </div>
        </div>
        <div className=" w-[33.3%] px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">$0.00</h3>
              <div className="text-gray-700 text-opacity-50">
                Account Profit
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[33.3%] px-[15px] text-[14px] font-[400]">
          <div className="mt-[25px] bg-[#fff] mb-[30px] rounded-lg shadow-outline-white shadow-md">
            <div className="block p-[30px]">
              <div>
                <span>
                  <canvas
                    width="77"
                    height="43"
                    className="inline-block w-[77px] h-[43px] float-right mr-[10px]"
                  ></canvas>
                </span>
              </div>
              <h3 className="text-[30px] font-semibold">$0.00</h3>
              <div className="text-gray-700 text-opacity-50">
                Total Withdrawn
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <WidgetTicker />
        <MarketView />
      </div>
      <Footer />
    </section>
  );
};

export default Dashboard;
