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

  const onItemClick = () => {
    props.onClick(props.difficulty);
  }

  return (
    <div
      onClick={onItemClick}
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
