import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiSolidUpArrow } from "react-icons/bi";
import "../main.css";
import { Link } from "react-router-dom";
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
      className={`  lg:w-[80%] w-screen  flex justify-center flex-col overflow-hidden  px-12  gap-4  lg:gap-12 items-center ${
        darkmode ? "dark-mode" : "ligth-mode   "
      }`}
    >
      <div className="flex gap-3   flex-col justify-center items-center w-full">
        {" "}
        <h1 className="font-bold text-center text-xl md:text-2xl  lg:text-6xl  lg:w-[60%]">
          Buy Bitcoin and other crypto at true cost
        </h1>
        <p className="text-lg lg:text-xl font-thin lg:w-[50%] text-center ">
          Buy and sell 100+ cryptocurrencies with USD and 20+ other fiat
          currencies using bank transfers or your credit/debit card.
        </p>
        <button className="bg-[#28B8B0] text-white ">
          <Link
            to={"market"}
            className="lg:text-2xl font-bold flex  px-12 rounded-lg h-12 items-center gap-4 "
          >
            {" "}
            Check crypto Prices{" "}
            <span>
              <AiOutlineLineChart />{" "}
            </span>{" "}
          </Link>
        </button>
      </div>
      <section
        id="currencies"
        className={` px-4 py-1  ${
          darkmode ? "bg-[#1a1a1a] text-[#fffafb]" : "ligth-mode   ligth-shadow"
        }`}
      >
        <section
          className={`curr--section   ${
            darkmode ? "bg-[#1a1a1a]" : "bg-[#f1f1f1]"
          } `}
        >
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
        <section className={`currencies--article`}>
          {data.slice(0, 4).map((json, i) => (
            <section
              key={i}
              className={`curr--section ${
                darkmode ? "bg-[#1a1a1a]" : "bg-[#f1f1f1]"
              } `}
            >
              <div className={`cur--name`}>
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
                    json.price_change_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  <BiSolidUpArrow />
                  <span className=""> {json.price_change_24h}</span>
                </li>
                <li>{json.low_24h} $</li>
                <li>{json.high_24h} $</li>
              </ul>
            </section>
          ))}
        </section>
      </section>
    </article>
  );
}

export default MarketSec;
