import { useEffect, useState } from "react";
import CryptoContainer from "../CryptoPrices/CryptoContainer";
import { useSelector } from "react-redux";

function Market() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  let [curSlide, setActiveSlide] = useState(0);
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("../../../../data.json")
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      })
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
    transition: "transform 0.5s ease", // Adding a smooth transition effect
  };
  return (
    <div className={`market ${darkmode ? "dark-mode" : "ligth-mode "}`}>
      <section className="caroussel">
        {data.slice(0, 16).map((json, i) => (
          <section
            className={darkmode ? "ligth-button" : "dark-button"}
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
      <section className="">
        <CryptoContainer />
      </section>
    </div>
  );
}

export default Market;
