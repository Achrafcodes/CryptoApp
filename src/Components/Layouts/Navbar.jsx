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
  // Get the Redux dispatch function
  let dispatch = useDispatch();

  // State to keep track of the active menu status
  let [ActiveMenu, SetActive] = useState(false);

  // Function to handle toggling the navigation menu
  let HandletogglingNav = function (e) {
    e.preventDefault();
    SetActive((prev) => !prev);
  };

  // Function to handle toggling dark mode
  let HandleDarkmode = function (e) {
    e.preventDefault();
    dispatch(toggleDarkMode());
  };

  // Retrieve the dark mode state from Redux store
  let darkmode = useSelector((state) => state.darkmode.darkmode);

  return (
    <nav className={darkmode ? "dark-mode" : "light-mode"}>
      {/* Logo */}
      <h1 className="Nav--logo">
        Coin
        <span className={darkmode ? "text-[#7df9ff]" : "text-[#858585]"}>
          Fizz
        </span>
      </h1>

      {/* Navigation links */}
      <div className="nav--links">
        <a href="/">Home</a>
        <a href="/">Market</a>
        <a href="/">Choose Us</a>
        <a href="/">Join</a>
      </div>

      {/* Buttons */}
      <div className="nav--buttons">
        {/* Dark mode toggler */}
        <div className="darkmode--toggler" onClick={HandleDarkmode}>
          <BsFillMoonFill className="text-sm text-white" />
          <BsFillSunFill className="text-sm text-black" />
          <button
            className={darkmode ? "-translate-x-[50%]" : "translate-x-[50%]"}
          ></button>
        </div>

        {/* Social media buttons */}
        <button className="hidden md:block">
          <BsTwitter />
        </button>
        <button className="hidden md:block">
          <BsDiscord />
        </button>

        {/* Menu toggler */}
        <button
          className={`menu--button ${
            ActiveMenu
              ? "text-[#90e0ef]"
              : `${darkmode ? "dark-mode" : "ligth-mode"}`
          }`}
          onClick={HandletogglingNav}
        >
          {ActiveMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="Pannel"
        className={`${darkmode ? "dark-mode-menu" : "ligth-mode-menu"} ${
          ActiveMenu ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        {/* Mobile menu logo */}
        <h1 className="Nav--logo">
          Coin<span>Fizz</span>
        </h1>

        {/* Mobile menu links */}
        <div className="Pannel--links">
          <a href="/">Home</a>
          <a href="/">Market</a>
          <a href="/">Choose Us</a>
          <a href="/">Join</a>
        </div>

        {/* Mobile menu social media buttons */}
        <div className="pannel-buttons">
          <button>
            <BsTwitter />
          </button>
          <button>
            <BsDiscord />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
