import { Link } from "react-router-dom";
import DonationData from "../../Hooks/DonationData";
import Card from "../Card/Card";

const Cards = () => {
  let donation = DonationData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-[90%] mx-auto mt-[50px] mb-20 gap-10">
      {donation.map((item, index) => (
        <Link to={`/details/${item.id}`} key={index}>
          <Card item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
