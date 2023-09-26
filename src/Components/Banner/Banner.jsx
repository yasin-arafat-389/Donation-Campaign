import { useState } from "react";
import Card from "./../Card/Card";
import DonationData from "../../Hooks/DonationData";
import { Link } from "react-router-dom";

const Banner = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedDonations, setSearchedDonations] = useState([]);
  let donation = DonationData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = inputValue.toLowerCase().trim();
    const filteredDonations = donation.filter((item) =>
      item.category.toLowerCase().includes(searchTerm)
    );

    setSearchedDonations(filteredDonations);
  };

  return (
    <>
      <div>
        <div
          className="hero h-[300px] md:h-[300px] lg:h-[500px]  "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/1dXvTkK/donation-banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1 className="mb-5 text-5xl font-bold opacity-100 text-[30px] md:text-[30px] lg:text-[40px]">
                I Grow By Helping People In Need
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="searchBar mt-[30px] md:mt-[40px] lg:mt-[60px]">
                  <div className="join ">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="input rounded-lg join-item text-[#000]"
                      placeholder="Search Here....."
                    />
                    <button
                      type="submit"
                      className="btn join-item rounded-r-lg bg-[#FF444A] hover:bg-[#FF444A] outline-none border-0 text-[#fff]"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-[90%] mx-auto mt-[50px] mb-20 gap-10">
        {searchedDonations.length > 0
          ? searchedDonations.map((item, index) => (
              <Link to={`/details/${item.id}`} key={index}>
                <Card item={item} />
              </Link>
            ))
          : donation.map((item, index) => (
              <Link to={`/details/${item.id}`} key={index}>
                <Card item={item} />
              </Link>
            ))}
      </div>
    </>
  );
};

export default Banner;
