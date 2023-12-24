// import React, from 'react'
import panda from "../assets/panda.svg";

const Profile = () => {
  return (
    <section className="bg-[#f4f7fe]">
      <div className="flex mx-[15px]">
        <div className="px-[15px] w-[30%] ">
          <div className="my-[30px] bg-[#fff] rounded-lg shadow-outline-white shadow-md border">
            <div className="px-[30px] py-[15px]">
              <h4 className="text-[24px]">
                <strong>Avatar</strong>
              </h4>
            </div>
            <div className="p-[30px]"></div>
          </div>
        </div>
        <div className="w-[30%]">
              <div className="px-[15px]">
                <div className="my-[30px] bg-[#fff] rounded-lg shadow-outline-white shadow-md border">
                  <div className="px-[30px] py-[15px]">
                    <h4 className="text-[24px]">
                      <strong>About</strong>
                    </h4>
                  </div>
                  <div className="p-[30px]">
                    <div>
                      <div>
                        <img src={panda} alt="" />
                      </div>
                      <div>
                        <div>Levine Charles</div>
                        <div>
                          <strong>Levinecharles093@gmail.com</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-[30px] rounded-lg bg-[#fff] shadow-outline-white shadow-md border">
                  <div className="px-[30px] py-[15px]">
                    <h4 className="text-[24px]">
                      <strong>Account</strong>
                    </h4>
                  </div>
                  <div className="p-[30px]">
                    <div>
                      <div>
                        <img src={panda} alt="" />
                      </div>
                      <div>
                        <div>Subscription</div>
                        <div>
                          <strong>none</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
          <div></div>
        </div>
        <div className="px-[15px] w-[100%]">
          <div className="my-[30px] bg-[#fff] text-[14px] w-full rounded-lg shadow-outline-white shadow-md border">
            <div className="px-[30px] py-[15px]">
              <h4 className="text-[24px]">
                <strong>Personal details</strong>
              </h4>
            </div>
            <div className="p-[30px]">
              <form className="grid gap-[25px]">
                <div className="flex justify-between w-full">
                  <label htmlFor="">First Name</label>
                  <div className="w-[85%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="firstname" id="firstname" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="">Email</label>
                  <div className="w-[85%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="email" id="email" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="">Phone</label>
                  <div className="w-[85%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="phone" id="phone" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="">Country</label>
                  <div className="w-[85%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="country" id="country" />
                  </div>
                </div>
                <div className="flex justify-between">
                    <label htmlFor="">Address</label>
                    <div className="flex gap-[13.8px]">
                        <input className=" border rounded px-[15px] py-[9px]" type="text" name="city" id="city" placeholder="City"/>
                        <input className=" border rounded px-[15px] py-[9px]" type="text" name="state" id="state" placeholder="State" />
                        <input className=" border rounded px-[15px] py-[9px]" type="text" name="zip" id="zip" placeholder="Zip"/>
                    </div>
                </div>
                <button className="bg-[#3454f5] text-[14px] text-white px-[23px] py-[5px] rounded mt-[20px]" type="submit">
                    Update
                </button>
                
              </form>
            </div>
          </div>
          <div className="my-[30px] text-[14px] bg-[#fff] w-full rounded-lg shadow-outline-white shadow-md border">
            <div className="px-[30px] text-[24px] py-[15px]">
              <h4 className="text-[24px]">
                <strong>Change Password</strong>
              </h4>
            </div>
            <div className="p-[30px] w-[%]">
              <form className="grid gap-[25px]">
                <div className="flex justify-between">
                  <label htmlFor="">Current password</label>
                  <div className="w-[80%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="firstname" id="firstname" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="">New password</label>
                  <div className="w-[80%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="email" id="email" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <label htmlFor="">Confirm password</label>
                  <div className="w-[80%]">
                    <input className="w-full border rounded px-[15px] py-[9px]" type="text" name="phone" id="phone" />
                  </div>
                </div>
                <button className="bg-[#3454f5] text-[14px] text-white px-[23px] py-[5px] rounded mt-[20px]" type="submit">
                    Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
