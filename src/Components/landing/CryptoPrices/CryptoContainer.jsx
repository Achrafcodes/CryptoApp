import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
function CryptoContainer() {
  let [data, setdata] = useState([]);
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  useEffect(() => {
    fetch("../../../../data.json")
      .then((response) => response.json())
      .then((jsonData) => setdata(jsonData))
      .catch((error) => {
        console.error("failed", error);
      });
  }, []);
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
          <li>price change pourcentage</li>
        </ul>
      </section>{" "}
      <section className="currencies--article">
        {data.map((json, i) => (
          <section
            key={i}
            className={`curr--section ${darkmode ? "dark-mode" : "ligth-mode"}`}
          >
            <div className={`cur--name `}>
              <h1>{data.indexOf(json) + 1}</h1>
              <h1 className="name">
                <img className="h-6 w-6" src={json.image} alt="" />{" "}
                <span>{json.name}</span>
              </h1>
            </div>
            <ul className="crypto-list">
              <li>{json.current_price} $</li>
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
                <span className="w-24 "> {json.price_change_24h}</span>
              </li>
              <li>{json.low_24h} $</li>
              <li>{json.high_24h} $</li>
              <li>{json.market_cap} $</li>
              <li
                className={
                  json.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
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
