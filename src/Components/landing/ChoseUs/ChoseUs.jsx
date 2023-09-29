import data from "./data"; // Make sure you have the correct path for importing the data array
import Slideshow from "../../ReusableCompo/Slideshow";
import { useSelector } from "react-redux";

function ChoseUs() {
  let darkmode = useSelector((state) => state.darkmode.darkmode);
  return (
    <div
      className={` ChoseUs     flex py-12 gap-12 px-2 lg:px-12 w-screen  flex-col   lg:items-center  overflow-hidden`}
    >
      <h1 className="lg:text-6xl text-4xl text-center   font-extrabold">
        Why Chose Us
      </h1>
      <div className="lg:block hidden">
        <div className=" box-container gap-12">
          {data.map(
            (
              item,
              i // Use a different variable name, e.g., "item"
            ) => (
              <div
                key={i}
                className={`box  ${
                  darkmode ? " bg-[#04052e]" : "bg-[#f1f1f1]"
                } `}
              >
                <div className="chose-us-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="w-[40%] h-[100%]  flex items-center justify-center">
                  {" "}
                  <img src={item.image} alt="" />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className=" px-2 block  lg:hidden">
        <Slideshow interval={3600}>
          {data.map(
            (
              item,
              i // Use a different variable name, e.g., "item"
            ) => (
              <div
                key={i}
                className={` rounded-xl ${
                  darkmode ? " dark-mode bg-[#04052e] " : "ligth-mode"
                } w-screen   rounded-b-2xl md:py-3  items-center flex flex-row  `}
              >
                <div className="flex flex-col gap-3 px-3">
                  <h2 className="  text-xl md:text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className=" md:text-lg font-light">{item.description}</p>
                </div>{" "}
                <img className=" h-[200px] w-[40%] " src={item.image} alt="" />
              </div>
            )
          )}
        </Slideshow>
      </div>
    </div>
  );
}

export default ChoseUs;
