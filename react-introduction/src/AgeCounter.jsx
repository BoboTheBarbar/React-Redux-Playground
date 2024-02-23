import React, { useState } from "react";

export function AgeCounter(props) {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <div>
      <h1>Age Counter</h1>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
