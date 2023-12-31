import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const Navbar = ({ setTheme }) => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={`text-neutral hover:text-error bg-info hover:bg-base-100 px-3 py-2 rounded-md ${({
            isActive,
            isPending,
          }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-4 bg-accent content font-bold"
              : ""}`}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addProduct"
          className={`text-neutral hover:text-error bg-info hover:bg-base-100 px-3 py-2 rounded-md ${({
            isActive,
            isPending,
          }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-4 bg-accent content font-bold"
              : ""}`}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? `/cart/${user?.uid}` : "/login"}
          className={`text-neutral hover:text-error bg-info hover:bg-base-100 px-3 py-2 rounded-md ${({
            isActive,
            isPending,
          }) =>
            isPending
              ? "pending"
              : isActive
              ? "p-4 bg-accent content font-bold"
              : ""}`}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then(toast.success("You are logged out"));
  };

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="navbar max-w-7xl mx-auto mt-2 bg-gradient-to-r from-accent to-accent-focus rounded-xl shadow-lg py-3 px-2">
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
            className="menu-sm dropdown-content mt-3 z-[10] p-2 shadow-md bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost capitalize text-2xl text-content">
          <img
            src="https://i.ibb.co/94x4wKS/logo.jpg"
            alt=""
            className="w-14 rounded-full"
          />
          <h1 className="">DigitalNest</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-2 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="mx-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <div>
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-left">
              <label
                tabIndex={0}
                className=" m-1"
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-14 rounded-full"
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
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-secondary shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  setTheme: PropTypes.func,
};
