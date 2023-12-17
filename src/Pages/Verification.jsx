import React from "react";
import { BiSolidPencil } from "react-icons/bi";

const Verification = () => {
  return (
    <section className="">
      <div className="flex text-[14px] bg-[#f4f7fe]">
        <div className="px-[35px] w-[30%]">
          <div className="bg-[#fff]  my-[30px] w-full rounded-lg shadow-outline-white shadow-md border">
            <div className=" text-[20px] w-full leading-[30px] px-[30px] py-[15px] font-semibold">
              <h4>Verification Status</h4>
            </div>
            <div className="p-[30px] grid gap-[12px]">
              <div className="bg-[red] text-[12px] w-[90px] rounded-3xl p-[8px] text-[#fff]">
                <strong>Not verified</strong>
              </div>
              <p>
                Your account is not verified. To verify your account, please
                fill out the form to request verification.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[15px] w-[70%] bg-[#fff] rounded-lg shadow-outline-white shadow-md border my-[30px] mr-[30px]">
          <div>
            <div className="w-full text-[20px] leading-[30px] px-[30px] py-[15px] font-semibold">
              <h4>Submit Verification</h4>
            </div>
            <div className="p-[30px] ">
                <div>
                    <h6 className="mb-[16px] text-[16px]">The document should clearly show the following</h6>
                    <div className="flex">
                        <div className="px-[15px] w-[100%]">
                            <p className="mt-0 mb-[16px]">
                                <small>
                                    <span>*</span>
                                    Full name
                                </small>
                                <br/>
                                <small>
                                    <span>*</span>
                                    Date of birth
                                </small>
                                <br/>
                                <small>
                                    <span>*</span>
                                    Photo
                                </small>
                                <br/>
                            </p>
                        </div>
                        <div className="px-[15px] w-[100%]">
                            <p>
                                <small>
                                    <span>*</span>
                                    Expiry date 
                                </small>
                                <br/>
                                <small>
                                    <span>*</span>
                                    Document number
                                </small>
                                <br/>
                                <small>
                                    <span>*</span>
                                    Your signature
                                </small>
                                <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="px-[15px] w-[100%]">
                        <div>
                            <h6>Front View</h6>
                            <p className="mb-[3px]">
                                <small>Upload the front view of the document</small>
                            </p>
                            <div></div>
                        </div>
                    </div>
                    <div className="px-[15px] w-[100%]">
                        <div>
                            <h6>Back View</h6>
                            <p className="mb-[3px]">
                                <small>Upload the front view of the document</small>
                            </p>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
