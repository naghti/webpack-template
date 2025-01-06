import { useState } from "react"
import classes from "./App.module.css"

export const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      Hello World
      {counter}
      <button className={classes.button} onClick={() => setCounter(counter + 1)}>button</button>
    </div>
  )
}

export default App