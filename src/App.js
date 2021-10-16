import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState();

  return (
    <div className="App">
      <h1>Hello {state ?? "World!"}!</h1>
      <h2 onClick={() => setState("Alex")}>
        Click here see some magic happen!
      </h2>
    </div>
  );
}
