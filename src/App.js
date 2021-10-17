import { useState } from "react";
import { ThemeContext } from "./Context";
import { Button } from "../components";
import "./styles.css";

export default function App() {
  const [state, setState] = useState();

  const [isDarkMode, setDarkMode] = useState(false);

  const initialData = {
    isDarkMode,
    setDarkMode
  };

  return (
    <ThemeContext.Provider value={{ initialData }}>
      <div className="App">
        <h1>Hello {state ?? "World!"}!</h1>
        <h2 onClick={() => setState("Alex")}>
          Click here see some magic happen!
        </h2>
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}
