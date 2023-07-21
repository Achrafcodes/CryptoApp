import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSolidUpArrow } from "react-icons/bi";

function MarketSec() {
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
    <article
      id="currencies"
      className={`  ${darkmode ? "dark-mode" : "ligth-mode"}`}
    >
      <h1 className="font-bold text-center text-6xl w-[60%]">
        Buy Bitcoin and other crypto at true cost
      </h1>
      <p className="text-lg lg:text-xl font-thin w-[50%] text-center ">
        Buy and sell 100+ cryptocurrencies with USD and 20+ other fiat
        currencies using bank transfers or your credit/debit card.
      </p>
      <button
        className={`text-2xl font-bold flex  px-12 rounded-lg h-12 items-center gap-4 ${
          darkmode ? "dark-button" : "ligth-button"
        }`}
      >
        Check crypto Prices{" "}
        <span>
          <AiOutlineLineChart />{" "}
        </span>
      </button>
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
        </ul>
      </section>{" "}
      <section className="currencies--article ">
        {data.slice(0, 4).map((json, i) => (
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
                <BiSolidUpArrow />
                <span className="w-24 "> {json.price_change_24h}</span>
              </li>
              <li>{json.low_24h} $</li>
              <li>{json.high_24h} $</li>
            </ul>
          </section>
        ))}
      </section>
    </article>
  );
}

export default MarketSec;