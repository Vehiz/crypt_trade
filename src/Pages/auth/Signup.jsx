import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const handlePhoneNumber = (e) => {
  const { phoneNumber, setPhoneNumber } = useState("");
  const { valid, setValid } = useState(false);

  setPhoneNumber(e.target.value);
  if (phoneNumber.length === 11) {
    setValid(true);
  } else {
    setValid(false);
  }
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phoneNumber: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 chars minimum.")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Signup = () => {
  return (
    <section className="flex flec-col mt-[40px] items-center justify-center">
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
              <h1 className="text-2xl font-bold mb-4">Register</h1>
            </div>
            <div className="">
              <div className="mb-4">
                <Field
                  type="firstName"
                  placeholder="Firstname"
                  className="shadow w-full appearance-none border placeholder- rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="mb-4">
                <Field
                  type="text"
                  placeholder="Lastname"
                  className="shadow appearance-none w-full border rounded placeholder- py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                />
                <ErrorMessage name="lastName" />
              </div>
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
                  type="text"
                  placeholder="Phone Number"
                  className="shadow appearance-none w-full border placeholder- rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phoneNumber"
                  name="phoneNumber"
                />
                <ErrorMessage name="phoneNumber" />
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
              <div className="mb-4">
                <Field
                  type="confirmPassword"
                  placeholder="Confirm Password"
                  className="shadow appearance-none w-full border placeholder- rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex items-start gap-[10px] text-[14px]">
              <Field
                className="mt-1"
                type="checkbox"
                name="termsAndConditions"
              />
              <label htmlFor="termsAndConditions">
                I confirm that i am 18 years old or older and accept the terms &
                conditions and privacy policy of this platform
              </label>
            </div>
            <div className="flex flex-col gap-[20px] mt-[15px] items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <div className="flex items-center justify-center">
                <p className="text-[14px]">
                  Already have an account?{" "}
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    Signin
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

export default Signup;
