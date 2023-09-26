import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {
  let data = useLoaderData();

  let { donationId } = useParams();

  let handleSaveToLocalStorage = (donate) => {
    const saveToLocalDb = [];

    const myDonates = JSON.parse(localStorage.getItem("donates"));

    if (!myDonates) {
      saveToLocalDb.push(donate);
      localStorage.setItem("donates", JSON.stringify(saveToLocalDb));
      swal("Great job!", "Thanks for your donation", "success");
    } else {
      saveToLocalDb.push(...myDonates, donate);
      localStorage.setItem("donates", JSON.stringify(saveToLocalDb));
      swal("Great job!", "Thanks for your donation", "success");
    }
  };

  let filteredData = data.find((ago) => ago.id === parseInt(donationId));

  return (
    <div className="w-[80%] mx-auto mt-10 mb-11">
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
    </div>
  );
};

export default CardDetails;
