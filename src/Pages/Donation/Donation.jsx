import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);

  let handleShowAll = () => {
    setShow(!show);
    setShowButton(false);
  };

  useEffect(() => {
    const donetItems = JSON.parse(localStorage.getItem("donates"));

    if (donetItems) {
      setDonates(donetItems);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-10 w-[80%] mx-auto mt-10">
        {show
          ? donates.map((donate, index) => (
              <DonationCard key={index} item={donate}></DonationCard>
            ))
          : donates
              .slice(0, 4)
              .map((donate, index) => (
                <DonationCard key={index} item={donate}></DonationCard>
              ))}
      </div>

      <div className="text-center mt-8 ">
        {donates.length > 4 && showButton && (
          <button
            onClick={handleShowAll}
            className="btn btn-neutral bg-[#009444] hover:bg-[#009444] border-0 rounded-lg mb-10"
          >
            {/* {show ? "See Less" : "See All"} */}
            See All
          </button>
        )}
      </div>
    </>
  );
};

export default Donation;
