import { useSelector } from "react-redux";
import Landing from "./LandingComponent/Landing";
import MarketSec from "./Marketsection/MarketSec";
import "./main.css";
import ChoseUs from "./ChoseUs/ChoseUs";
function Hero() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`hero ${darkmode ? "dark-mode" : "ligth-mode"}`}>
      <Landing /> <MarketSec />
      <ChoseUs />
    </div>
  );
}

export default Hero;
