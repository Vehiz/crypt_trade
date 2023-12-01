import { Formik } from "formik";
import { Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

const Login = () => {
  const { rememberMe, setRememberMe } = useState(false);

  const handleCheckbox = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <section className="flex flec-col mt-[50px] items-center justify-center">
      <div className="flex bg-gradient-to-br bg-custom-background-2 from-blue-600 via-blue-700 to-blue-900 bg-opacity-80 w-[55%] rounded-md items-center gap-[20px] justify-center ">
        <div className="flex  text-center items-center justify-center">
          <p className="text-[#fff]  mb-4 w-[300px]">
            Hello there <br />
            We are pleased to welcome you onboard. Crypt trade wishes you a
            happy trading experience
          </p>
        </div>
        <Formik className>
          <Form className="w-[48%] bg-[#fff] p-[25px] my-[35px] rounded-md">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-bold mb-4">Login</h1>
            </div>
            <div className="">
              <div className="mb-4">
                <Field
                  type="email"
                  placeholder="Email"
                  className="shadow appearance-none w-full border rounded placeholder- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="mb-4">
                <Field
                  placeholder="Password"
                  type="password"
                  className="shadow appearance-none w-full border placeholder- rounded py-2 px-3 text-gray-700 text-[px] leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="mb-4 flex gap-[8px]">
                <Field
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleCheckbox}
                  id="rememberMe"
                  name="rememberMe"
                />
                <label htmlFor="rememberMe">Remember Me</label>
                <ErrorMessage name="rememberMe" />
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[15px] items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full mt-[10px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Forgot Password?
                </a>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[14px]">
                  Don&rsquo;t have account ?{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Login;
