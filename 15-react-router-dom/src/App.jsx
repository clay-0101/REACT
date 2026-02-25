import {Routes, Route} from 'react-router-dom'
import Profile from './PAGES/profile'
import Messege from './PAGES/messege'
import Home from './PAGES/home'

const App = () => {
  return (
    <div className='h-screen w-full bg-black flex justify-center items-center'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/messege' element={<Messege/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </div>
  )
}

export default App