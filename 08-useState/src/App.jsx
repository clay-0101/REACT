import { useState } from "react"

const App = () => {
  const [num, setnum] = useState(0)
  const incrementNum = ()=>{
    setnum(num+1)
  }
  const decrementNum = ()=>{
    setnum(num-1)
  }
  const power2Num= ()=>{
    setnum(num*num)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incrementNum }>INCREMNET</button>
      <button onClick={decrementNum}>DECREMNET</button>
      <button onClick={power2Num}>power-2</button>
    </div>
  )
}

export default App