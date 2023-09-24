import { useEffect, useState } from "react";

const DonationData = () => {
  let [donation, setDonation] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
  }, []);

  return donation;
};

export default DonationData;
