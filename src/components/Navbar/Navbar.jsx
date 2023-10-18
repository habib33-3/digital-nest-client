import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

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
    <nav className="navbar max-w-7xl mx-auto mt-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg py-3 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-gray-700"
          >
            <TfiMenu className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[10] p-2 shadow-md bg-gray-100 rounded-box w-52"
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
        {user ? (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" m-1"
            >
              <img
                src={user.photoURL}
                alt=""
                className="w-14 rounded-full cursor-pointer"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <button className="btn btn-sm btn-primary">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-secondary shadow-md">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
