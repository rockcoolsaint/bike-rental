import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BikeList from './components/BikeList'
import data from './data'

function App() {
  const bikesList = data;
  return (
    <>
      <BikeList bikes={bikesList} />
    </>
  )
}

export default App
