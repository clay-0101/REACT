import { useEffect, useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const aCounting = ()=>{
    console.log("A is Typing...")
  }
  const bCounting = ()=>{
    console.log("B is Typing...")
  }
  //  IF THE NUM CHANGED THEN THIS FUCTION WILL RUN
  useEffect(()=>{
    aCounting()
  },[num]) 
//  IF THE NUM2 CHANGED THEN THIS FUCTION WILL RUN
  useEffect(()=>{
    bCounting()
  },[num2])
  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button onClick={()=>{
        setNum(num+1)
      }}>For Num</button>

      <button onClick={()=>{
        setNum2(num2-1)
      }}>For Num2</button>
    </div>
  )
}

export default App