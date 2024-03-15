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

  return (
    <div className={s.container} onMouseEnter={active} onMouseLeave={deactive}>
      Set to : {props.difficulty}
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
