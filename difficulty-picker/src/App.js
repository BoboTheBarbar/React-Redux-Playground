import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";
import { DIFFICULTIES } from "./components/MenuList/constants";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty);
  }

  return (
    <>
      <div>
        <h1>Select your difficulty</h1>
        <div className={s.workspace}>
          <MenuList currentDifficulty={currentDifficulty} items={DIFFICULTIES} onItemClick={onMenuListItemClick} />
          <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
      </div>
    </>
  );
}

export default App;