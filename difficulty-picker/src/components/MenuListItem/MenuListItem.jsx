import s from "./style.module.css";
import React, { useState } from "react";

const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  function active() {
    setIsHovered(true);
  }
  function deactive() {
    setIsHovered(false);
  }

  console.log(isHovered);

  const backgroundColor = () => (isHovered ? "lightblue" : "lightgray");

  return (
    <div
      onMouseEnter={active}
      onMouseLeave={deactive}
      style={{ backgroundColor: backgroundColor() }}
      className={s.container}
    >
      Set to : {props.difficulty}
    </div>
  );
};

export default MenuListItem;
