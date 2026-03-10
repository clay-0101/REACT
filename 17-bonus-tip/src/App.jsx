import { useEffect, useState } from "react"
import Navbar from "./COMPONENTS/navbar"


const App = () => {
  const [theme, setTheme] = useState('none')
  const [bgClr, setBgClr] = useState('')
  useEffect(()=>{
   if(theme=='none'){
    setBgClr('grey')
   }
   else if(theme=='light'){
    setBgClr('white')
   }
   else if(theme=='dark'){
    setBgClr('black')
   }
  },[theme])
  return (
    <div className="h-screen w-full" style={{backgroundColor: bgClr}}>
      <h1 className="text-6xl font-bold text-amber-200">You're in {theme} theme</h1>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App