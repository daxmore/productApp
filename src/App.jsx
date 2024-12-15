import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
