import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Slideshow = ({ interval, children }) => {
  const totalSlides = React.Children.count(children);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const updateSlide = () =>
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    const timer = setInterval(updateSlide, interval);

    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  const containerStyle = {
    transform: `translateX(-${activeSlide * 100}%)`,
    transition: "transform 0.5s",
  };

  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {/* The container that holds the slides */}
      <div style={{ display: "flex", ...containerStyle }}>
        {/* Loop through the children (slides) and wrap each slide with a div */}
        {React.Children.map(children, (child) => (
          <div style={{ flex: "0 0 100%", minWidth: "100%" }}>
            {/* Render the child element (slide) */}
            {child}
          </div>
        ))}
      </div>
      {/* Dots to indicate slide location */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              margin: "0 5px",
              backgroundColor: index === activeSlide ? "#76f9f9" : "#414650",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// PropTypes validation and default props
Slideshow.propTypes = {
  interval: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

Slideshow.defaultProps = {
  interval: 3600,
};

export default Slideshow;
