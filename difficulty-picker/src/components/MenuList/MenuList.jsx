import s from "./style.module.css";
import React, { useState } from "react";

const MenuList = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  function active() {
    setIsHovered(true);
  }
  function deactive() {
    setIsHovered(false);
  }

  console.log(isHovered);

  const backgroundColor = () => (isHovered ? "lightgray" : "white");

  return (
    <div
      onMouseEnter={active}
      onMouseLeave={deactive}
      style={{ backgroundColor: backgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuList;
