import data from "./data";
import Slideshow from "../../ReusableCompo/Slideshow";
function ChoseUs() {
  //Todo make a caroussel for every chose us part

  return (
    <div className="ChoseUs h-screen overflow-hidden">
      <div className="flex px-12 flex-row h-auto ">
        <Slideshow interval={3600}>
          {" "}
          {data.map((data, i) => (
            <div
              key={i}
              className={`car-slide ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className=" text-start">
                <h2 className="text-4xl font-bold">{data.title}</h2>
                <p className="text-xl w-[80%]">{data.description}</p>
              </div>{" "}
              <img className="" src={data.image} alt="" />
            </div>
          ))}
        </Slideshow>
      </div>
    </div>
  );
}

export default ChoseUs;
