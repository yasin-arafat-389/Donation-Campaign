/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Contexts/AuthContext";

const Card = ({ item }) => {
  let { setProgress } = useContext(authContext);
  return (
    <div className="card shadow-xl ">
      <figure>
        <img className=" w-full h-[200px]" src={item.image} />
      </figure>
      <div
        className=" p-4 pt-6 flex flex-col items-center gap-4 "
        style={{
          backgroundColor: item.category_card_bg_color,
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <div
          className="badge badge-primary border-0 p-3 text-[16px]"
          style={{
            backgroundColor: item.category_bg_color,
            color: item.category_title_color,
          }}
        >
          {item.category}
        </div>

        <h2
          className="text-[20px] font-semibold"
          style={{ color: item.category_title_color }}
        >
          {item.title}
        </h2>
        <Link to={`/details/${item.id}`} onClick={() => setProgress(100)}>
          <button
            className="btn btn-md"
            style={{
              backgroundColor: item.category_title_color,
              color: "#fff",
            }}
          >
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
