import { BsDiscord, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import bgLigth from "../../../assets/StockChart2.svg";
import bgDark from "../../../assets/StockChart.svg";

function JoinUs() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article className={`join ${darkmode ? "dark-mode" : "ligth-mode"}`}>
      <h1 className="text-5xl   text-center font-bold ">Join Us</h1>
      <p className=" text-center  font-thin text-xl">
        Thank you for choosing Crypto
        <span className="text-[#28B8B0] font-bold logospan ">Fizz</span> as your
        trusted crypto trading partner. Let's embark on this exciting journey
        together and uncork the fizz of crypto potential!
      </p>
      <section
        style={
          darkmode
            ? { backgroundImage: `url(${bgDark})` }
            : { backgroundImage: `url(${bgLigth})` }
        }
        className=" flex items-center flex-col gap-12"
      >
        <p className="text-center text-3xl font-medium w-[60%]">
          Join us at Crypto
          <span className="text-[#28B8B0] font-bold logospan">Fizz</span> and be
          part of a dynamic community that shares your enthusiasm for
          cryptocurrencies. Whether you're aiming to build your portfolio,
          explore new investment opportunities, or simply stay updated on the
          latest trends, our platform has something for everyone.
        </p>
        <div className="butts">
          <button
            className={` ${
              darkmode
                ? "ligth-button"
                : "dark-button border-[2px] border-black]"
            }`}
          >
            <a href="">
              Join Us On Discord <BsDiscord />
            </a>
          </button>
          <button className={` ${darkmode ? "dark-button" : "ligth-button"}`}>
            <a href="">
              Join Us On Instagram <BsInstagram />
            </a>
          </button>
        </div>
      </section>
    </article>
  );
}

export default JoinUs;
