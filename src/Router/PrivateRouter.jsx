import PropTypes from "prop-types";
import { Facebook } from "react-content-loader";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Facebook />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
