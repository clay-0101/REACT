import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

// FETCH API USING AXIOS
  const getData = async()=>{
   let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
   setUserData(response.data)
   console.log(response.data)
  }

// USE EFFECT
  useEffect(()=>{
    getData()
  },[index])


  let printUserData = <h3 className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>

// MAPPING API DATA ON SCREEN
  if(userData.length > 0){
    printUserData = userData.map((elem)=>{
      return<div className="h-60 w-70 rounded-xl overflow-hidden bg-white text-black text-center">
        <img className="h-[90%] w-full object-cover"src={elem.download_url} alt="" />
        <h3 className="text-xl font-bold">{elem.author}</h3>
      </div>
    })
  }
// MAIN RETURN
  return (
// INDEX
    <div className='h-screen w-full bg-black text-white flex flex-col justify-evenly'>
      <div className="fixed top-5 left-5 bg-red-400 text-white font-extrabold text-3xl">{index}</div>
      <div

// GALLERY PORTION
      className="flex flex-wrap  justify-center gap-5 h-[80%] overflow-auto"
      >{printUserData}</div>

{/* Button Div */}
      <div className="flex justify-center gap-5">
        <button 
        className="bg-amber-300 text-black text-xl px-3 py-2 rounded-lg active:scale-95"
        onClick={()=>{
         if(index>1){
           setUserData([])
           setIndex(index-1)
         }
        }}
        > «Prvs</button>
        <button 
        className="bg-amber-300 text-black text-xl px-3 py-2 rounded-lg active:scale-95"
        onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }}
        >Next»</button>
      </div>
      
    </div>
  )
}

export default App