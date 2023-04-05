import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Day9pages/Home'
import Singers from './Day9pages/Singers'
import Albums from './Day9pages/Albums'
import Navbar from './Day9pages/Navbar'

function Day9() {
  return (
    <div>
    <h1>Day 9: </h1>
    <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/singers' element = {<Singers />} />
            <Route path = '/albums' element = {<Albums />} />
        </Routes>
    </div>
  )
}

export default Day9