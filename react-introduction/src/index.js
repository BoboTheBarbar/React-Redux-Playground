import ReactDOM from "react-dom/client";
import { AgeCounter } from "./App";

const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render(<AgeCounter />);
