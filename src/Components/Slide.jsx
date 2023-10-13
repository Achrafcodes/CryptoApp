// Slide.js
import { useState, useEffect } from "react";

const Slide = ({ text, isActive }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let typingTimeout;

    if (isActive) {
      setTypedText("");
      let index = 0;

      typingTimeout = setInterval(() => {
        if (index < text.length) {
          setTypedText((prevText) => prevText + text.charAt(index));
          index++;
        } else {
          clearInterval(typingTimeout);
        }
      }, 100); // Adjust typing speed as needed
    }

    return () => clearInterval(typingTimeout);
  }, [text, isActive]);

  return (
    <div className="slide" style={{ display: isActive ? "block" : "none" }}>
      {typedText}
    </div>
  );
};

export default Slide;
