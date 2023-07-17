import React from "react";
import "../main.css";
import HeroImg from "../../../assets/undraw_crypto_portfolio_2jy5.svg";
import { useSelector } from "react-redux";
function Landing() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article className={darkmode ? "dark-mode" : "ligth-mode"}>
      <img src={HeroImg} className="hero-img" alt="" />
      <section>
        <h1>
          Welcome to{" "}
          <span>
            Coin<span>Fizz</span>
          </span>
          : The Future of Digital Currency!
        </h1>
      </section>
    </article>
  );
}

export default Landing;
