import { useSelector } from "react-redux";
import Landing from "./LandingComponent/Landing";
import MarketSec from "./Marketsection/MarketSec";
import "./main.css";
function Hero() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`hero ${darkmode ? "dark-mode" : "ligth-mode"}`}>
      <Landing />
      <div id="markett">
        {" "}
        <MarketSec />
      </div>
    </div>
  );
}

export default Hero;
