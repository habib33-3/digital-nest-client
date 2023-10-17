import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Social = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="w-full ">
      <button
        onClick={handleGoogleLogin}
        className="btn w-full btn-success my-2"
      >
        Continue With
        <FcGoogle />
      </button>
    </div>
  );
};

export default Social;
