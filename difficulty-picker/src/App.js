import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";

function App() {
  return (
    <>
      <div>
        <DisplayDifficulty difficulty="medium" />
      </div>
      <div>
        <MenuList items={["Home", "About", "Services", "Contact"]} />
      </div>
    </>
  );
}

export default App;
