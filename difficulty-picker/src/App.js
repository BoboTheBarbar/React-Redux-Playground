import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";

function App() {
  return (
    <>
      <div>
        <h1>Select your difficulty</h1>
        <div className={s.workspace}>
          <MenuList items={["Low", "Medium", "Hard", "Insane"]} />
          <DisplayDifficulty difficulty="medium" />
        </div>
      </div>
    </>
  );
}

export default App;
