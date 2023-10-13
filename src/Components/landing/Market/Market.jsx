import { useEffect, useState } from "react";
import CryptoContainer from "../CryptoPrices/CryptoContainer";
import { useSelector } from "react-redux";
import Marketcap from "../CryptoPrices/Marketcap";
import Carouselle from "../CryptoPrices/Carouselle";
function Market() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  let [curSlide, setActiveSlide] = useState(0);
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => response.json())
      .then((jsonData) => setdata(jsonData))
      .catch((error) => {
        console.error("failed", error);
      });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the activeSlide index
      setActiveSlide((prevSlide) => (prevSlide + 1) % 8);
    }, 3600);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);
  const containerStyle = {
    transform: `translateX(-${curSlide * 100}%)`, // Applying translateX with the specified value
    transition: "transform 0.5s ", // Adding a smooth transition effect
  };
  return (
    <div className={`market ${darkmode ? "dark-mode" : "ligth-mode  "}`}>
      <section className="caroussel">
        {data.slice(0, 16).map((json, i) => (
          <section
            className={
              darkmode
                ? "bg-[#04052e] text-[#f1f1f1]"
                : "bg-[#f1f1f1] text-[#04052e]"
            }
            style={containerStyle}
            key={i}
          >
            <img src={json.image} alt="" />
            <div className="coin">
              <h1>{json.name}</h1>
            </div>
          </section>
        ))}
      </section>
      <section
        className="flex gap-20
        h-full lg:flex-row flex-col justify-center overflow-hidden items-center w-full   "
      >
        {" "}
        <Marketcap data={data} /> <Carouselle />
      </section>
      <section className="">
        <CryptoContainer />
      </section>
    </div>
  );
}

export default Market;
