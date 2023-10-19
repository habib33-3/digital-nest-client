import { Link, useNavigate } from "react-router-dom";
import Social from "../../components/Social/Social";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { logInUser } = useAuth();

  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Congrats,you are logged in");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="mb-10 bg-gray-100 min-h-screen p-10">
      <h1 className="text-center text-5xl text-purple-700 my-5 font-bold">
        Sign In Now
      </h1>
      <div className="lg:w-2/5 mx-auto ">
        <form
          action=""
          className="  p-8 card bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl mb-0.5 space-y-4"
          onSubmit={handleLoginUser}
        >
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
            Login
          </button>
          <p className="text-xl font-medium text-stone-700">
            Don{"'"}t have an account,please
            <Link
              className="text-blue-600 font-bold  mx-2"
              to="/register"
            >
              register
            </Link>
          </p>
        </form>
        <Social />
      </div>
    </div>
  );
};

export default Login;
