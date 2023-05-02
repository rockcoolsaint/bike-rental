import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BikeList from './components/BikeList'
import data from './data'
import { Route, Routes } from 'react-router-dom'
import SingleBike from './pages/SingleBike'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BikeList />} />
        <Route path="/bikes/:id" element={<SingleBike />} />
      </Routes>
    </>
  )
}

export default App
