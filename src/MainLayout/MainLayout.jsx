import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { Toaster } from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";
import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext";

const MainLayout = () => {
  let { progress, setProgress } = useContext(authContext);

  return (
    <div>
      <Header />
      <Outlet />
      <Toaster position="top-center" reverseOrder={false} />
      <LoadingBar
        color="#e76f51"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default MainLayout;
