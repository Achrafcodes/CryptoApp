import React from "react";
import "../main.css";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { useSelector } from "react-redux";
function Landing() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article>
      <section>
        <h1>
          Welcome to{" "}
          <span className="text-white">
            Coin<span className="fizz">Fizz</span>
          </span>
          : The Future of Digital Currency!{" "}
        </h1>
        <p>
          Discover CoinFizz: Your gateway to the future of digital currency.
          Buy, sell, and trade cryptocurrencies effortlessly on our secure and
          user-friendly platform. Join us now and embark on a thrilling journey
          into the world of decentralized finance.
        </p>
      </section>
      <div className="buttons">
        <button className={darkmode ? "dark-button" : "ligth-button"}>
          Twitter <BsTwitter />{" "}
        </button>
        <button className={darkmode ? "ligth-button" : "dark-button"}>
          Discord <BsDiscord />{" "}
        </button>
      </div>
    </article>
  );
}

export default Landing;
