import { useEffect, useState } from "react";

function CryptoContainer() {
  let [data, setdata] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((jsonData) => setdata(jsonData))
      .catch((error) => {
        console.error("faild", error);
      });
  }, []);
  console.log(data);
  return <div>CryptoContainer</div>;
}

export default CryptoContainer;
