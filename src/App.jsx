import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/auth/Signup";
import Login from "./Pages/auth/Login";
import Dashboard from "./Pages/Account/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Pages/Account/Sidebar/Sidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const toastOptions = {
  style: {
    position: "top-right",
    duration: 1000,
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontSize: "14px",
  },
};
function App() {
  return (
    <main>
      <Routes>
        {/* Public Routes */}
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Private Routes */}

      </Routes>
    </main>
  );
}

export default App;
