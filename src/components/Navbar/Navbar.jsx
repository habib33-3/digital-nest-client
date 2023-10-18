import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-blue-600 hover:text-blue-800 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-md"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className="text-blue-600 hover:text-blue-800 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-md"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className="text-blue-600 hover:text-blue-800 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-md"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar max-w-7xl mx-auto mt-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg py-6 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-gray-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost capitalize text-2xl  text-blue-600">
          <img
            src="https://i.ibb.co/94x4wKS/logo.jpg"
            alt=""
            className="w-14 rounded-full"
          />
          <h1>DigitalNest</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-2 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-secondary shadow-md">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
