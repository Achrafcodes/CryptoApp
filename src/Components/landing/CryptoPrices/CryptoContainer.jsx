import { useEffect, useState } from "react";
function CryptoContainer() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((jsonData) => setdata(jsonData))
      .catch((error) => {
        console.error("failed", error);
      });
  }, []);
  console.log(data);
  return (
    <div className="bg-black text-white overflow-y-scroll ">
      {/* {data.map((d, i) => (

        <img src={d.image} key={i} alt="" />
      ))} */}
    </div>
  );
}

export default CryptoContainer;
