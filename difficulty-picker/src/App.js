import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";

function App() {
  return (
    <>
      <div>
        <DisplayDifficulty difficulty="medium" />
      </div>
      <div>
        <MenuList items={["Low", "Medium", "Hard", "Insane"]} />
      </div>
    </>
  );
}

export default App;
