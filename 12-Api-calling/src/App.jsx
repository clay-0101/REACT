import axios from 'axios'
import {useState} from 'react'

const App = () => {
const [data, setdata] = useState('')
const dogData = async ()=>{
  let response = await axios('https://dog.ceo/api/breeds/image/random')
  setdata(response.data.message)
  console.log(response)

}


  return (
    <div className='h-screen w-full bg-black flex flex-col items-center justify-evenly gap-20 text-white'>
      <img src={data} alt="1" className='h-[50vh] w-[30vw] rounded-2xl'/>
      <button className='p-10 bg-white text-black active:scale-90' onClick={()=>{
        dogData()
      }}>Change</button>
    </div>
  )
}

export default App