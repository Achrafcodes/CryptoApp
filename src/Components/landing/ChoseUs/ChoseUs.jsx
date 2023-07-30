import React from "react";
import data from "./data"; // Make sure you have the correct path for importing the data array
import Slideshow from "../../ReusableCompo/Slideshow";
function ChoseUs() {
  return (
    <div className="ChoseUs h-screen flex py-12 gap-4 px-12 w-screen  flex-col  items-center  overflow-hidden">
      <h1 className="text-6xl font-extrabold">Why Chose Us</h1>
      <div className="flex px-12 flex-row h-auto ">
        <Slideshow interval={6000}>
          {data.map(
            (
              item,
              i // Use a different variable name, e.g., "item"
            ) => (
              <div
                key={i}
                className={`car-slide ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="text-start gap-12 flex flex-col w-[50%]">
                  <h2 className="text-6xl font-bold">{item.title}</h2>
                  <p className="text-2xl font-light w-[80%]">
                    {item.description}
                  </p>
                </div>
                <div className="w-[40%] h-[100%]  flex items-center justify-center">
                  {" "}
                  <img src={item.image} alt="" />
                </div>
              </div>
            )
          )}
        </Slideshow>
      </div>
    </div>
  );
}

export default ChoseUs;
