import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
