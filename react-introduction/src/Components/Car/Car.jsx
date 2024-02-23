export function Car(props) {
  return (
    <div>
      <h1>Car</h1>
      <p className="box">Color: {props.color}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}
