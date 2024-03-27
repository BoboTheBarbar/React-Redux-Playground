import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <>
      <div className={s.container}>
        {props.items.map((difficulty) => (
          <MenuListItem difficulty={difficulty} isSelected={props.currentDifficulty === difficulty} onClick={props.onItemClick} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
