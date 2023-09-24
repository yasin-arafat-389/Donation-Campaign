import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  let data = useLoaderData();
  let { id } = useParams();

  let filteredData = data.find((ago) => ago.id === parseInt(id));

  return (
    <div className="w-[80%] mx-auto mt-10">
      <img className="w-[70%] mx-auto " src={filteredData.image} alt="" />
    </div>
  );
};

export default CardDetails;
