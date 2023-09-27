import { useLoaderData, useParams } from "react-router-dom";

import CardDetailsLayout from "./CardDetailsLayout";

const CardDetails = () => {
  let data = useLoaderData();
  let { donationId } = useParams();

  let filteredData = data.find((ago) => ago.id === parseInt(donationId));

  return (
    <div className="w-[80%] mx-auto mt-10 mb-11">
      <CardDetailsLayout filteredData={filteredData} />
    </div>
  );
};

export default CardDetails;
