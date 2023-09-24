const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[300px] md:h-[300px] lg:h-[500px] "
        style={{
          backgroundImage: "url(https://i.ibb.co/6YBr5TY/Banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-5xl font-bold opacity-100 text-[40px]">
              I Grow By Helping People In Need
            </h1>
            <div className="searchBar mt-[60px]">
              <div className="join ">
                <input
                  className="input rounded-lg join-item text-[#000]"
                  placeholder="Search Here....."
                />
                <button className="btn join-item rounded-r-lg bg-[#FF444A] hover:bg-[#FF444A] outline-none border-0 text-[#fff]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
