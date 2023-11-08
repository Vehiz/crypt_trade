import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  },
);

const toastOptions = {
  style: {
    position: 'top-right',
    duration: 1000,
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontSize: "14px",
  },
};
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LandingPage /> */}
      <Login />
      {/* <Signup /> */}
      <Toaster toastOptions={toastOptions}/>
    </QueryClientProvider>
  );
}

export default App;
