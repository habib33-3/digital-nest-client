import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Root;
