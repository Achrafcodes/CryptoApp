import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiSolidUpArrow } from "react-icons/bi";
import { useSelector } from "react-redux";

function Marketcap({ data }) {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  // State to store the sorted marketcap data
  const [marketcap, setMarketcap] = useState([]);
  const [currSlide, setslide] = useState(0);
  // useEffect hook is used to sort the data and update the state when 'data' prop changes
  useEffect(() => {
    // Sorting the data based on market_cap_change_24h in descending order
    const sortedData = [...data].sort(
      (a, b) => b.market_cap_change_24h - a.market_cap_change_24h
    );
    const timer = setInterval(() => {
      // Increment the activeSlide index
      setslide((prevSlide) => (prevSlide + 1) % 12);
    }, 3600);
    setMarketcap(sortedData);
    return () => clearInterval(timer);

    // Updating the marketcap state with the sorted data
  }, [data]); // The useEffect hook will be triggered whenever 'data' prop changes
  let HandleNextSlide = (e) => {
    e.preventDefault();
    setslide((prev) => {
      if (prev < 11) {
        return (prev + 1) % 12;
      } else {
        return 0;
      }
    });
  };
  // prevSlide) => (prevSlide + 1) % 8
  let HandlePrevSlide = (e) => {
    e.preventDefault();
    setslide((prev) => {
      if (prev > 0) {
        return (prev - 1) % 12;
      } else {
        return 11;
      }
    });
  };
  const containerStyle = {
    transform: `translateX(-${currSlide * 100}%)`, // Applying translateX with the specified value
    transition: "transform 0.5s ease", // Adding a smooth transition effect
  };
  return (
    <main className="MarketCap-ranking">
      <h1 className="cont-tittle">Top Movers</h1>
      <article className="Marketcap-carr">
        {/* Rendering the top 12 marketcap items */}
        <div
          className={`flex h-full   items-center   lg:gap-12   overflow-hidden w-[90%]  `}
        >
          {" "}
          {marketcap.slice(0, 12).map((cap, i) => (
            <section
              className={`Marketcap-slide ${
                darkmode
                  ? "ligth-shadow  bg-[#04052e]"
                  : "ligth-shadow bg-[#f1f1f1]"
              } `}
              key={i}
              style={containerStyle}
            >
              <figure>
                <img src={cap.image} alt="" />
                <h1>
                  {cap.name} (<span>{cap.symbol.toUpperCase()}</span>)
                </h1>
              </figure>
              <h3>
                <BiSolidUpArrow /> {cap.market_cap_change_24h}
              </h3>

              <h3>{cap.current_price} $</h3>
            </section>
          ))}
        </div>

        <div className="car-buts">
          {/* Button to navigate to the right */}
          <button
            onClick={HandlePrevSlide}
            className={` p-2  flex items-center text-center justify-center duration-150 hover:bg-gray-400/50 ${
              darkmode ? "text-[#f1f1f1] " : "text-[#04052e]"
            }`}
          >
            {" "}
            <BsChevronLeft />
          </button>{" "}
          {/* Button to navigate to the left */}
          <button
            onClick={HandleNextSlide}
            className={` p-2  flex items-center text-center justify-center duration-150 hover:bg-gray-400/50 ${
              darkmode ? "text-[#f1f1f1] " : "text-[#04052e]"
            }`}
          >
            {" "}
            <BsChevronRight />{" "}
          </button>{" "}
        </div>
      </article>{" "}
    </main>
  );
}

export default Marketcap;
