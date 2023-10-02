/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

const PrivateRoute = ({ children }) => {
  const { user, loading, progress, setProgress } = useContext(authContext);

  if (loading)
    return (
      <LoadingBar
        color="red"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    );

  if (!user) {
    toast.error("You must login first");
    setProgress(100);
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
