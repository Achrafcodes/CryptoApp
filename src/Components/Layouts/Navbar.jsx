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
        <button
          className="text-xl lg:hidden block hover:text-white focus:text-white focus:rotate-180 duration-200 ease-in-out"
          onClick={HandletogglingNav}
        >
          {ActiveMenu ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
        </button>
      </div>{" "}
      <div
        id="Pannel"
        className={`${darkmode ? "ligth-mode-menu" : "dark-mode-menu"} ${
          ActiveMenu ? "translate-x-0 " : "-translate-x-[200%]"
        }`}
      >
        <h1 className="Nav--logo">
          Coin<span>Fizz</span>
        </h1>
        <div className="Pannel--links">
          <a href="/">Home</a>
          <a href="/">Market</a>
          <a href="/">Choose Us</a>
          <a href="/">Join</a>
        </div>
        <div className="pannel-buttons">
          <button>
            <BsTwitter />{" "}
          </button>
          <button>
            <BsDiscord />
          </button>
        </div>
      </div>{" "}
    </nav>
  );
}

export default Navbar;
