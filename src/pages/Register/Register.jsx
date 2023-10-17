import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useAuth();

  const handleRegisterUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Congrats, You are registered");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="my-10 w-screen">
      <h1 className="text-center text-5xl text-purple-700 my-5 font-bold">
        Sign Up Now
      </h1>
      <form
        action=""
        className=" lg:w-2/5 mx-auto p-8 card bg-slate-100 space-y-4"
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
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-medium text-stone-700 ">Picture</span>
          </label>
          <input
            type="text"
            placeholder="Enter Photo URL"
            name="picture"
            className="input input-bordered w-full "
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
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-medium text-stone-700 ">
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input input-bordered w-full "
          />
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
            className="text-blue-600 font-bold  mx-3"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
