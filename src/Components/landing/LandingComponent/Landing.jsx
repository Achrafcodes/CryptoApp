import "../main.css";
import androidphone from "../../../assets/androidphone.jpg";
function Landing() {
  return (
    <article className="lg:h-screen  h-[70vh] md:h-[90vh]  w-screen bg-[#211060] relative">
      <div className="h-full lg:w-96 w-[60%] right-12  absolute z-0 lg:right-[16%] bg-[#28B8B0]"></div>
      <img src={androidphone} className="LANDING-IMG" alt="" />
      <div
        className={`lg:w-[700px] lg:h-[350px] flex justify-between flex-col absolute px-6 py-6 lg:left-[14%]  left-12 bottom-[15%] md:bottom-[25%] w-[70%] md:w-[70%] xl:left-[20%]  lg:bottom-[15%] xl:bottom-[20%] gap-6   bg-[#fffafb] `}
      >
        <h1 className={`intro `}>
          Welcome to <span className="underline text-[#28B8B0]">CoinFizz</span>{" "}
          : the future of digital currency.
        </h1>
        <p className="md:text-2xl  md:block hidden text-sm text-black font-normal">
          {" "}
          the future of digital currency. Embrace blockchain technology for
          secure, efficient, and decentralized transactions.
        </p>
        <button className="h-12 w-48 bg-[#28B8B0] font-bold text-white">
          {" "}
          Learn More
        </button>
      </div>
    </article>
  );
}

export default Landing;
