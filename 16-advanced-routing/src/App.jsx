import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './COMPONENTS/navbar'
import Footer from './COMPONENTS/footer'
import Home from './PAGES/home'
import About from './PAGES/about'
import Product from './PAGES/product'
import Men from './PAGES/men'
import Women from './PAGES/women'
import Kids from './PAGES/kids'
import NotFound from './PAGES/error404'

const App = () => {
  return (
    <div className='h-screen w-full bg-black'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>} />
        <Route path='women' element={<Women/>} />
        <Route path='kids' element={<Kids/>} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
 

      <Footer/>
    </div>
  )
}

export default App