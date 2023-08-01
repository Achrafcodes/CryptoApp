import React from "react";
import data from "./data"; // Make sure you have the correct path for importing the data array
import Slideshow from "../../ReusableCompo/Slideshow";
function ChoseUs() {
  return (
    <div className="ChoseUs h-auto    flex py-12 gap-12 px-2 lg:px-12 w-screen  flex-col   lg:items-center  overflow-hidden">
      <h1 className="lg:text-6xl text-4xl text-center text-white  font-extrabold">
        Why Chose Us
      </h1>
      <div className="lg:block hidden">
        <div className=" box-container ">
          {data.map(
            (
              item,
              i // Use a different variable name, e.g., "item"
            ) => (
              <div key={i} className={`box  box-${i}`}>
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
      <div className="  block lg:hidden">
        <Slideshow interval={3600}>
          {data.map(
            (
              item,
              i // Use a different variable name, e.g., "item"
            ) => (
              <div
                key={i}
                className="w-screen  md:py-3 rounded-lg items-center flex flex-row  bg-white "
              >
                <div className="flex flex-col gap-3 px-3">
                  <h2 className="text-black  text-xl md:text-2xl font-bold">
                    {item.title}
                  </h2>
                  <p className="text-black md:text-lg font-light">
                    {item.description}
                  </p>
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
