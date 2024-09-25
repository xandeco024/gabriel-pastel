//import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import PastelOnYourWay from './components/Pastel on your way/PastelOnYourWay'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <PastelOnYourWay/>
        <Footer/>
      </div>
    </>
  )
}

export default App
