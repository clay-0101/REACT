import {Routes, Route} from 'react-router-dom'
import Profile from './PAGES/profile'
import Messege from './PAGES/messege'
import Home from './PAGES/home'
import Navbar from './COMPONENTS/navbar'

const App = () => {
  return (
<div className='h-screen w-full bg-black relative'>
  <Navbar/>
      <div className=' flex justify-center items-center pt-[10vh]'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/messege' element={<Messege/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </div>
</div>
  )
}

export default App