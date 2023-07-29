import "../main.css";
import androidphone from "../../../assets/androidphone.jpg";
function Landing() {
  return (
    <article className="h-screen w-screen bg-[#211060] relative">
      <div className="h-full w-96 absolute z-0 right-[16%] bg-[#28B8B0]"></div>
      <img
        src={androidphone}
        className=" absolute bottom-[16%] right-[12%] h-[750px] w-[900px]"
        alt=""
      />
      <div
        className={`w-[700px] h-[350px] flex justify-between flex-col absolute px-6 py-6 left-[14%] z-30 bottom-36  bg-[#fffafb] `}
      >
        <h1 className={`intro `}>
          Welcome to <span className="underline text-[#28B8B0]">CoinFizz</span>{" "}
          : the future of digital currency.
        </h1>
        <p className="text-2xl text-black font-normal">
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
