import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  let { user, logOut, setProgress } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="nav">
      <div className="navbar bg-base-100 w-[90%] mx-auto">
        <div className="flex-1">
          <img
            className="w-[90%] md:w-[50%] lg:w-[20%] "
            src="https://i.ibb.co/Ng0qShN/Logo.png"
            alt=""
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[10px] md:text-[15px] lg:text-[15px]">
              <NavLink to="/" onClick={() => setProgress(100)}>
                Home
              </NavLink>
            </li>
            <li className="text-[10px] md:text-[15px] lg:text-[15px]">
              <NavLink to="/donation" onClick={() => setProgress(100)}>
                My Donations
              </NavLink>
            </li>
            <li className="text-[10px] md:text-[15px] lg:text-[15px]">
              <NavLink to="/statistics" onClick={() => setProgress(100)}>
                Statistics
              </NavLink>
            </li>
            {user ? (
              <li className="text-[10px] md:text-[15px] lg:text-[15px]">
                <NavLink to="/profile" onClick={() => setProgress(100)}>
                  Profile
                </NavLink>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li className="text-[10px] md:text-[15px] lg:text-[15px]">
                <button onClick={handleLogOut}>Log Out</button>
              </li>
            ) : (
              <li className="text-[10px] md:text-[15px] lg:text-[15px]">
                <NavLink to="/login" onClick={() => setProgress(100)}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
