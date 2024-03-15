import MenuListItem from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <>
      <div className={s.container}>
        {props.items.map((difficulty) => (
          <MenuListItem difficulty={difficulty} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
