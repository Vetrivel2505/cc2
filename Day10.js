import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from '@mui/material'
import Navbar from './Day10pages/Navbar'
import Home from './Day10pages/Home'
import Destination from './Day10pages/Destination'
import About from './Day10pages/About'
import Contact from './Day10pages/contact'
import Registration from './Day10pages/registration'
import Submitted from './Day10pages/submitted'


function Day10() {
  return (
    <div>
    <h1>Day 10:</h1>
    <Navbar />
    <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/destination" element={<Destination />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/registration" element={<Registration />} />
        <Route path = "/submitted" element={<Submitted />} />

    </Routes>

    </div>
  )
}

export default Day10