import { useState } from "react"

const App = () => {

// THIS IS THE FIRST EXAMPLE
  const [num, setnum] = useState(0)
  const incrementNum = () => {
    setnum(num + 1)
  }
  const decrementNum = () => {
    setnum(num - 1)
  }
  const power2Num = () => {
    setnum(num * num)
  }

// THIS IS THE SECOND EXAMPLE
  return (
    <div>
      {/* FOR FIRST FUNCTION */}
      <div>
        <h1>{num}</h1>
        <button onClick={incrementNum}>INCREMNET</button>
        <button onClick={decrementNum}>DECREMNET</button>
        <button onClick={power2Num}>power-2</button>
      </div>
      {/* FOR SECOND FUNCTION */}
      
    </div>
  )
}

export default App