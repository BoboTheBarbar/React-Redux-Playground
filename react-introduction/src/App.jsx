import { AgeCounter } from "./AgeCounter";
import { Car } from "./Components/Car/Car";
import { Greetings } from "./Components/Greetings/Greetings";
import "./global.css";

export function App() {
  return StyleWithCSS();
}

// styling

export function StyleWithCSS() {
  return (
    <div>
      <Car color="red" year={2020} />
      <Greetings name="John" />
    </div>
  );
}

export function StyleWithJSX() {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        backgroundColor: "red",
        border: "3px solid blue",
      }}
    ></div>
  );
}

// useState
export function AppAgeCounter() {
  return <AgeCounter />;
}
