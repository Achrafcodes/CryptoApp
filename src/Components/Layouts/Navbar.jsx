import {
  BsTwitter,
  BsDiscord,
  BsFillMoonFill,
  BsFillSunFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkmodeSlice";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import ToglingMenu from "./ToglingMenu";

function Navbar() {
  let dispatch = useDispatch();
  let [ActiveMenu, SetActive] = useState(false);
  let HandletogglingNav = function (e) {
    e.preventDefault();
    SetActive((prev) => !prev);
  };
  let HandleDarkmode = function (e) {
    e.preventDefault();
    dispatch(toggleDarkMode());
  };
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <nav className={darkmode ? "dark-mode" : "light-mode "}>
      <h1 className="Nav--logo">
        Coin<span>Fizz</span>
      </h1>
      <div className="nav--links">
        <a href="/">Home</a>
        <a href="/">Market</a>
        <a href="/">Choose Us</a>
        <a href="/">Join</a>
      </div>
      <div className="nav--buttons">
        <div className="darkmode--toggler " onClick={HandleDarkmode}>
          <BsFillMoonFill className="text-sm  text-white" />
          <BsFillSunFill className="text-sm text-black" />
          <button
            className={darkmode ? "-translate-x-[50%]" : "translate-x-[50%]"}
          ></button>
        </div>{" "}
        <button className="hidden md:block">
          <BsTwitter />{" "}
        </button>
        <button className="hidden md:block">
          <BsDiscord />
        </button>
        <button className="text-xl" onClick={HandletogglingNav}>
          {ActiveMenu ? <AiOutlineMenu /> : <AiOutlineClose />}{" "}
        </button>
      </div>
      <ToglingMenu />
    </nav>
  );
}

export default Navbar;
