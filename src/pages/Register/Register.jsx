import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Social from "../../components/Social/Social";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateInfo } = useAuth();

  const handleRegisterUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{6,}$/.test(password)) {
      return toast.error(
        "Invalid password. It should be at least 6 characters long, contain at least one special character, and at least one capital letter."
      );
    }

    createUser(email, password)
      .then(() => {
        updateInfo(name, picture)
          .then(() => {})
          .catch((err) => {
            console.log(err.message);
          });
        toast.success("Congrats, You are registered");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="mb-10 bg-gray-100 min-h-screen p-10">
      <h1 className="text-center text-5xl text-purple-700 my-5 font-bold">
        Sign Up Now
      </h1>
      <div className="lg:w-2/5 mx-auto ">
        <form
          action=""
          className="p-8 card bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl mb-0.5 space-y-4"
          onSubmit={handleRegisterUser}
        >
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-xl font-medium text-stone-700 ">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-xl font-medium text-stone-700 ">
                Picture
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="picture"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="text-xl font-medium text-stone-700 ">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="form-control w-full relative">
            <label className="label">
              <span className="text-xl font-medium text-stone-700 ">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              className="input input-bordered w-full "
              required
            />
            <div
              className="text-lg font-medium absolute right-1 bottom-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            className="btn btn-warning"
            type="submit"
          >
            Register
          </button>
          <p className="text-xl font-medium text-stone-700">
            Already Have an account. Please
            <Link
              className="text-blue-600 font-bold  mx-2"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Register;
