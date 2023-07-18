import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function CryptoContainer() {
  let [data, setdata] = useState([]);
  let darkmode = useSelector((state) => state.darkmode.darkmode);
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
    <article id="currencies" className={darkmode ? "dark-mode" : "ligth-mode"}>
      <section className="curr--section">
        <div className="cur--name">
          <h1>#</h1>
          <h1 className="name">Name</h1>
        </div>
        <ul>
          <li>Price</li>
          <li>24h%</li>
          <li>%low 24h</li>
          <li>%higth 24h</li>
          <li>Market cap</li>
          <li>volume 24h</li>
          <li>price change pourcentage</li>
        </ul>
      </section>{" "}
      <section className="currencies--article">
        {data.map((json, i) => (
          <section key={i} className="curr--section ">
            <div
              className={`cur--name ${darkmode ? "  bg-black" : "bg-white"}`}
            >
              <h1>#</h1>
              <h1 className="name">Name</h1>
            </div>
            <ul>
              <li>Price</li>
              <li>24h%</li>
              <li>%low 24h</li>
              <li>%higth 24h</li>
              <li>Market cap</li>
              <li>volume 24h</li>
              <li>price change pourcentage</li>
            </ul>
          </section>
        ))}
      </section>
    </article>
  );
}

export default CryptoContainer;
{
  /*       <li>#</li>
          <li>Name</li>
         
        </ul>
        {/* {data.map((Json, i) => (
          <h1>hello</h1>
        ))} */
}
