/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader } from "@material-tailwind/react";

const DonationCard = ({ item }) => {
  return (
    <div>
      <Card className="w-full max-w-[48rem] flex-row ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={item.image}
            alt="card-image"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </CardHeader>
        <CardBody
          className="px-8 py-4 flex flex-col gap-2 rounded-r-xl"
          style={{ backgroundColor: item.category_bg_color }}
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
          <p
            className="text-[20px] font-semibold"
            style={{ color: item.category_title_color }}
          >
            ${item.donate}
          </p>

          <button
            className="btn border-0 text-[#fff] rounded-lg"
            style={{ background: item.category_title_color }}
          >
            View Details
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;
