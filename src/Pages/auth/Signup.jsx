import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
    <Formik>
      <Form className=" flex flex-col items-center justify-center bg-black  rounded mb-4">
        <div className=" items-center ">
          <div className="mb-4">
            <Field
              type="firstName"
              placeholder="Firstname"
              className="shadow appearance-none border placeholder-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-4">
            <Field
              type="text"
              placeholder="Lastname"
              className="shadow appearance-none border rounded placeholder-black py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              name="lastName"
            />
            <ErrorMessage name="lastName" />
          </div>
          <div className="mb-4">
            <Field
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded placeholder-black py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mb-4">
            <Field
              type="text"
              placeholder="Phone Number"
              className="shadow appearance-none border placeholder-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              name="phoneNumber"
            />
            <ErrorMessage name="phoneNumber" />
          </div>
          <div className="mb-4">
            <Field
              placeholder="Password"
              type="password"
              className="shadow appearance-none border placeholder-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="mb-4">
            <Field
              type="confirmPassword"
              placeholder="Confirm Password"
              className="shadow appearance-none border placeholder-black rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
