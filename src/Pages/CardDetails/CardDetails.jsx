import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  let data = useLoaderData();
  let { id } = useParams();

  let filteredData = data.find((ago) => ago.id === parseInt(id));

  return (
    <div className="w-[80%] mx-auto mt-10 mb-11">
      <div className="w-[100%] md:w-[70%] lg:w-[70%] mx-auto">
        <img className="w-full" src={filteredData.image} alt="" />
        <div className=" bg-[#0b0b0b80] relative bottom-[90px]  ">
          <button
            className="btn border-0 text-[#fff]  m-[20px] rounded-lg"
            style={{ background: filteredData.donate_button_color }}
          >
            Donate $290
          </button>
        </div>
      </div>
      <h1 className="w-[70%] mx-auto mt-[-60px] text-[#0B0B0B] text-[25px] md:text-[40px] lg:text-[40px] font-bold ">
        {filteredData.title}
      </h1>

      <p className="w-[70%] mx-auto text-[#0b0b0bb3] font-normal leading-7 mt-5 ">
        {filteredData.description}
      </p>
    </div>
  );
};

export default CardDetails;
