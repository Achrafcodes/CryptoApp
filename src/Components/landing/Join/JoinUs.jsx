import { BsDiscord, BsInstagram } from "react-icons/bs";
import { useSelector } from "react-redux";
import bgLigth from "../../../assets/StockChart2.svg";
import bgDark from "../../../assets/StockChart.svg";

function JoinUs() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <article className={`join ${darkmode ? "dark-mode" : "ligth-mode"}`}>
      <section
        style={
          darkmode
            ? { backgroundImage: `url(${bgDark})` }
            : { backgroundImage: `url(${bgLigth})` }
        }
        className=" flex items-center flex-col gap-12"
      >
        <h1 className="xl:text-5xl  lg:text-3xl md:text-2xl text-xl text-center font-bold ">
          Join Us
        </h1>
        <p className="text-center lg:h-auto lg:overflow-hidden p-4 h-[200px] overflow-y-scroll lg:text-xl text-lg xl:text-3xl font-medium w-full lg:w-[60%]">
          Join us at Crypto
          <span className="text-[#28B8B0] font-bold logospan">Fizz</span> and be
          part of a dynamic community that shares your enthusiasm for
          cryptocurrencies. Whether you're aiming to build your portfolio,
          explore new investment opportunities, or simply stay updated on the
          latest trends, our platform has something for everyone.
        </p>
        <p className=" text-center  lg:w-[80%] font-thin text-base  md:text-lg lg:text-xl">
          Thank you for choosing Crypto
          <span className="text-[#28B8B0] font-bold logospan ">Fizz</span> as
          your trusted crypto trading partner. Let's embark on this exciting
          journey together and uncork the fizz of crypto potential!
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
              Join Us On Discord <BsDiscord className="hidden md:block" />
            </a>
          </button>
          <button className={` ${darkmode ? "dark-button" : "ligth-button"}`}>
            <a href="">
              Join Us On Instagram <BsInstagram className="hidden md:block" />
            </a>
          </button>
        </div>
      </section>
    </article>
  );
}

export default JoinUs;
