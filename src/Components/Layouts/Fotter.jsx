import { useSelector } from "react-redux";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
function Fotter() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <footer
      className={
        darkmode ? "bg-[#04052e] text-[#FEFFFF]" : "bg-[#f1f1f1] text-[#04052e]"
      }
    >
      <h1 className="text-3xl font-bold">
        Coin<span className="logospan text-[#28B8B0] ">Fizz</span>
      </h1>
      <section className=" flex gap-44 flex-row px-12">
        {" "}
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
          <section className="  ">
            <h1 className="text-xl text-[#28B8B0] font-bold">Contact Us</h1>
            <div className="  text-lg nav--links font-bold flex flex-col ">
              <a className="flex  items-center gap-2" href="">
                Join Us On Discord{" "}
                <BsDiscord className="hidden text-lg  md:block" />
              </a>

              <a className="flex  items-center gap-2" href="">
                Join Us On Instagram{" "}
                <BsInstagram className="hidden  text-lg md:block" />
              </a>
            </div>
          </section>{" "}
        </article>
        <div className="h-full w-1 bg-white/25 "></div>
        <section className=" flex flex-col  gap-3">
          <h1 className="text-xl self-start text-[#28B8B0] font-bold">
            Subscribe
          </h1>
          <p className="font-thin">Stay Up to Date</p>
          <input
            className=" w-[300px] border-gray-400 border-solid border-[1px]  h-[50px] rounded-md px-3"
            type="text"
            placeholder="Your Email Here"
          />
          <button className="w-[300px] flex items-center justify-center gap-3 font-bold h-[50px] rounded-md bg-[#28B8B0]">
            Subscibe <GrLinkNext />
          </button>
        </section>
      </section>
    </footer>
  );
}

export default Fotter;
