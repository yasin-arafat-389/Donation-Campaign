/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../../Contexts/AuthContext";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CardDetailsLayout = ({ filteredData }) => {
  let { user, setProgress } = useContext(authContext);
  let navigate = useNavigate();

  let handleSaveToLocalStorage = (donate) => {
    if (!user?.displayName) {
      toast.error("You must login first to make donation");
      navigate("/login");
      setProgress(100);
      return;
    }

    const saveToLocalDb = [];

    const myDonates = JSON.parse(localStorage.getItem("donates"));

    if (!myDonates) {
      saveToLocalDb.push(donate);
      localStorage.setItem("donates", JSON.stringify(saveToLocalDb));
      swal("Great job!", "Thanks for your donation", "success");
    } else {
      const isExits = myDonates.find(
        (donateId) => donateId.id === filteredData.id
      );

      if (isExits) {
        swal("OOPPSSS!", "Already donated to this category", "warning");
      } else {
        saveToLocalDb.push(...myDonates, donate);
        localStorage.setItem("donates", JSON.stringify(saveToLocalDb));
        swal("Great job!", "Thanks for your donation", "success");
      }
    }
  };

  return (
    <>
      <div className="w-[100%] md:w-[70%] lg:w-[70%] mx-auto">
        <img className="w-full h-[400px]" src={filteredData.image} alt="" />
        <div className=" bg-[#0b0b0b80] relative bottom-[90px]  ">
          <button
            onClick={() => handleSaveToLocalStorage(filteredData)}
            className="btn border-0 text-[#fff]  m-[20px] rounded-lg"
            style={{ background: filteredData.category_title_color }}
          >
            Donate ${filteredData.donate}
          </button>
        </div>
      </div>
      <h1 className="w-[70%] mx-auto mt-[-60px] text-[#0B0B0B] text-[20px] md:text-[30px] lg:text-[40px] font-bold ">
        {filteredData.title}
      </h1>

      <p className="w-[70%] mx-auto text-[#0b0b0bb3] font-normal leading-7 mt-5 ">
        {filteredData.description}
      </p>
    </>
  );
};

export default CardDetailsLayout;
