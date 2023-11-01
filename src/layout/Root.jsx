import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  useEffect(
    function () {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    },
    [theme]
  );

  return (
    <div>
      <Navbar setTheme={setTheme} />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Root;
