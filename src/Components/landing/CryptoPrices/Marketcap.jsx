import React, { useEffect, useState } from "react";

function Marketcap({ data }) {
  const [marketcap, setMarketcap] = useState();
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => a.market_cap_change_24h - b.market_cap_change_24h
    );
    setMarketcap(sortedData);
  }, []);
  console.log(marketcap);
  return (
    <div className="MarketCap-ranking">
      <h1>Top Movers</h1>
      <button>Sort by Market Cap Change 24h</button>
    </div>
  );
}

export default Marketcap;
