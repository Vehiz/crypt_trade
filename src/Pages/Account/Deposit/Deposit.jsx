// import React from "react";
import Accordion from "./Accordion";
import Footer from "../Sidebar/Footer"
const Deposit = () => {
  return (
    <section className="bg-[#f4f7fe]">
      <div className="flex">
        <div className="w-[50%] mx-[30px] px-[10px]">
          <div className="flex flex-col gap-[20px] rounded-lg bg-[#fff] p-[30px] my-[30px] shadow-outline-white shadow-md border">
            <div className="px-[30px] text-[20px] font-semibold py-[15px]">
              <h4>Choose method</h4>
            </div>
            <div className="">
              <Accordion />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] p-[30px] my-[30px] rounded-lg shadow-outline-white shadow-md border mr-[30px]">
          <div className="w-full text-[20px] leading-[30px] px-[30px] py-[15px] font-semibold">
            <h4>Submit payment slip</h4>
          </div>
          <div className="text-[14px]">
            <p className="mb-[16px]">
              To deposit, choose the payment method panel and make the payment
              to the displayed address. After payment has been made, come back
              to fill this form.
            </p>
            <form>
              <div className="grid gap-[5px] border-gray-700">
                <label>Select a payment method</label>
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className="h-[35px] px-[10px] text-[grey]"
                >
                  <option value="bitcoin">Bitcoin</option>
                  <option value="ethereum">Ethereum</option>
                  <option value="usdt">USDT</option>
                </select>
              </div>
              <div className="grid gap-[5px]">
                <label htmlFor="amount">Amount (Fiat)</label>
                <input
                  type="text"
                  placeholder="$0.00"
                  name="amount"
                  id="amount"
                  className="px-[12px] border-gray-800 h-[35px]"
                />
              </div>
              <div></div>
              <button className="bg-[#3454f5] text-[14px] text-white px-[23px] py-[5px] rounded mt-[20px]">
                Submit for review
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] mx-[35px] rounded-lg shadow-outline-white shadow-md border">  
        <div className="w-full text-[20px] leading-[30px] px-[30px] py-[15px] font-semibold">
          <h4>Deposit Transactions</h4>
        </div>
        <div>
          <div>
            <div>
              <div className="flex justify-between mx-[30px]">
                <div>
                  <label>
                    Show
                    <select className="mx-[5px]">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="50">100</option>
                    </select>
                    <span>entries</span>
                  </label>
                </div>
                <div>
                  <label>
                    Search:
                    <input type="search" name="" id="" />
                  </label>
                </div>
              </div>
              <div>
                <div className="px-[30px] text-[14px] text-[#9ca3af]">
                  <table className="w-full">
                    <thead>
                      <tr className="text-[#9ca3af] border-b-[1px] border-[#e4e6ef]">
                        <th className="py-[15px] text-[14px] font-normal text-[#9ca3af]">
                          Transaction ID
                        </th>
                        <th className="py-[15px] text-[14px] font-normal text-[#9ca3af]">
                          Amount
                        </th>
                        <th className="py-[15px] text-[14px] font-normal text-[#9ca3af]">
                          Date
                        </th>
                        <th className="py-[15px] text-[14px] font-normal text-[#9ca3af]">
                          Method
                        </th>
                        <th className="py-[15px] text-[14px] font-normal text-[#9ca3af]">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center px-[30px] py-[30px]">no data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Deposit;
