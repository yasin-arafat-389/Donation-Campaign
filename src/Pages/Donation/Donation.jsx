import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Link } from "react-router-dom";

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
      <div>
        {donates.length === 0 ? (
          <div className="flex flex-col w-full gap-4 md:gap-4 lg:gap-10 mt-10">
            <div>
              <img
                className="mx-auto w-[40%] md:w-[30%] lg:w-[20%]"
                src="https://i.ibb.co/2gpXhjY/Animation-1695795127636.gif"
                alt=""
              />
            </div>
            <div className="flex flex-col w-full items-center gap-7">
              <h1 className="text-[23px] md:text-[30px] lg:text-[30px] text-center italic">
                Looks like you have not made any donations yet
              </h1>
              <Link to="/">
                <button className="btn btn-neutral mx-auto">
                  Start Donating
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 w-[80%] mx-auto mt-10">
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
        )}
      </div>
    </>
  );
};

export default Donation;
