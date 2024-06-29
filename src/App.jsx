import "./index.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HomeLayout,
  Home,
  Signup,
  Login,
  Dashboard,
  Deposit,
  Error,
  About,
  Contact,
  Verification,
  Profile,
  Withdraw,
  Transactions,
} from "./Pages/";
import ForgotPassword from "./Components/forgotPassword";
import PreLoader from "./Components/PreLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./Components/Account";
// import PreLoader from "./Components/PreLoader";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "deposit",
        element: <Deposit />,
      },
      {
        path: "preloader",
        element: <PreLoader />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword/>
      },
      {
        path: "account",
        element: <Account />,
        errorElement: <Error />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "deposit",
            element: <Deposit />,
          },
          {
            path: "verification",
            element: <Verification />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "withdraw",
            element: <Withdraw />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },        
        ],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
