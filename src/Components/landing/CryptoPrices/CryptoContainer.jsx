import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
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
        <ul className="crypto-list">
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
              <h1>{data.indexOf(json) + 1}</h1>
              <h1 className="name">
                <img className="h-6 w-6" src={json.image} alt="" /> {json.name}
              </h1>
            </div>
            <ul className="crypto-list">
              <li>{json.current_price} $</li>
              <li
                className={
                  json.price_change_24h > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {json.price_change_24h > 0 ? (
                  <BiSolidUpArrow />
                ) : (
                  <BiSolidDownArrow />
                )}{" "}
                {json.price_change_24h}
              </li>
              <li>{json.low_24h} $</li>
              <li>{json.high_24h} $</li>
              <li>{json.market_cap} $</li>
              <li>{json.total_volume} $</li>
              <li
                className={
                  json.price_change_24h > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {json.price_change_percentage_24h > 0 ? (
                  <BiSolidUpArrow />
                ) : (
                  <BiSolidDownArrow />
                )}{" "}
                {json.price_change_percentage_24h}
              </li>
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
