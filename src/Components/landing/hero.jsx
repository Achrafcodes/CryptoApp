import { useSelector } from "react-redux";
import Landing from "./LandingComponent/Landing";
import MarketSec from "./Marketsection/MarketSec";

function Hero() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div className={`hero ${darkmode ? "dark-mode" : "ligth-mode"}`}>
      <Landing />
      <MarketSec />
    </div>
  );
}

export default Hero;
