import React from "react";
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Button.css";

const Button = ({ onUp, onDown, onLeft, onRight }) => {
  return (
    <div className="buttons">
      <div className="upwards">
        <button className="up" onClick={onUp}>
          <IoIosArrowUp />
        </button>
      </div>
      <div className="sideways">
        <button className="left" onClick={onLeft}>
          <IoIosArrowBack />
        </button>
        <button className="right" onClick={onRight}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="downwards">
        <button className="down" onClick={onDown}>
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};
export default Button;
