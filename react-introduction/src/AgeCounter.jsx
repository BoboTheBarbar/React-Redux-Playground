import React, { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(props) {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <div>
      <AgeDisplay age={age} />
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
