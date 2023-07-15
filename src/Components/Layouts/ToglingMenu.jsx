import React from "react";
import { useSelector } from "react-redux";
import { BsTwitter, BsDiscord } from "react-icons/bs";
function ToglingMenu({ ActiveMenu }) {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  console.log(ActiveMenu);
  return (
    <div id="Pannel" className={darkmode ? "light-mode left-0" : "dark-mode "}>
      <h1 className="Nav--logo">
        Coin<span>Fizz</span>
      </h1>
      <div className="flex flex-col gap-4">
        <a href="/">Home</a>
        <a href="/">Market</a>
        <a href="/">Choose Us</a>
        <a href="/">Join</a>
      </div>
      <button className="hidden md:block">
        <BsTwitter />{" "}
      </button>
      <button className="hidden md:block">
        <BsDiscord />
      </button>
    </div>
  );
}

export default ToglingMenu;
