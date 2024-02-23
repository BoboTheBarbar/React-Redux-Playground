export function AgeCounter(props) {
  let age = 30;

  function increaseAge() {
    age = age + 1;
  }

  return (
    <div>
      <h1>Age Counter</h1>
      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
