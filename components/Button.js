import { useContext } from "react"
import { ThemeContext } from "../src/Context"

export default function Button() {
  const data = useContext(ThemeContext)
  console.log(data)

  return (
    <button type="text">
      {/* {isDarkMode ? (
        <span role="img" onClick={setDarkMode(false)} aria-label="moon">
          🌜
        </span>
      ) : (
        <span role="img" onClick={setDarkMode(true)} aria-label="sun">
          ☀️
        </span>
      )} */}
    </button>
  )
}
