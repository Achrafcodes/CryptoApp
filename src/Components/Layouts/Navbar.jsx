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
import { Link } from "react-router-dom";

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
    <nav
      className={
        darkmode ? "  dark-mode bg-[#04052e]" : "light-mode bg-[#fefefe]"
      }
    >
      {/* Logo */}
      <h1 className="Nav--logo">
        Coin
        <span className={darkmode ? "text-[#28B8B0]" : "text-[#858585]"}>
          Fizz
        </span>
      </h1>

      {/* Navigation links */}
      <div className="nav--links">
        <Link to="/">Home</Link> <Link to="market">Market</Link>
        <a href="/">Choose Us</a>
        <a href="/">Join</a>
      </div>

      {/* Buttons */}
      <div className="nav--buttons">
        {/* Dark mode toggler */}
        <BsFillSunFill
          onClick={HandleDarkmode}
          className={` text-xl cursor-pointer ${
            darkmode ? "text-gray-500" : "text-[#28B8B0]"
          }`}
        />

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
        className={`${
          darkmode ? "bg-[#04052e] text-[#fefefe]" : "bg-[#fefefe] text-black"
        } ${ActiveMenu ? "translate-x-0" : "-translate-x-[200%]"}`}
      >
        {/* Mobile menu logo */}
        <h1 className="Nav--logo">
          Coin<span>Fizz</span>
        </h1>

        {/* Mobile menu links */}
        <div className="Pannel--links">
          <a href="/">Home</a>
          <a href="market">Market</a>
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
