import { useSelector } from "react-redux";
import { BsDiscord, BsInstagram } from "react-icons/bs";
function Fotter() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <footer
      className={darkmode ? "bg-[#04052e] text-[#FEFFFF]" : "dark-mode-menu"}
    >
      <h1 className="text-3xl font-bold">
        Coin<span className="logospan text-[#28B8B0] ">Fizz</span>
      </h1>
      <hr />
      <article className="flex ">
        <section>
          {" "}
          <h1 className="text-xl text-[#28B8B0] font-bold ">Links</h1>
          <div className="nav--links  text-lg  font-bold flex flex-col">
            <a href="#home">Home</a>
            <a href="#market">Market</a>
            <a href="#choseus">Choose Us</a>
            <a href="#join">Join</a>
          </div>
        </section>
        <section className="text-lg nav--links font-bold ">
          <h1 className="text-xl text-[#28B8B0] font-bold">Market</h1>
          <a href="#market">Crypto Prices</a>
        </section>
        <section className=" ">
          <h1 className="text-xl text-[#28B8B0] font-bold">Contact Us</h1>
          <div className=" footer-buts ">
            <button
              className={` w-[120px]  ${
                darkmode
                  ? "ligth-button"
                  : "dark-button border-[2px] border-black]"
              }`}
            >
              <a href="">
                Join Us On Discord <BsDiscord className="hidden md:block" />
              </a>
            </button>
            <button
              className={`  w-[300px] ${
                darkmode ? "dark-button" : "ligth-button"
              }`}
            >
              <a href="">
                Join Us On Instagram <BsInstagram className="hidden md:block" />
              </a>
            </button>
          </div>
        </section>{" "}
        <section className="">
          <h1 className="text-xl text-[#28B8B0] font-bold">Subscribe</h1>
          <input
            className=" w-[300px] h-[50px] rounded-md px-3"
            type="text"
            placeholder="Your Email Here"
          />
        </section>
      </article>
    </footer>
  );
}

export default Fotter;
