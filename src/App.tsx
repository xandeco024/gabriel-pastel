//import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Ticker from './components/Ticker/Ticker'
import PastelOnYourWay from './components/Pastel on your way/PastelOnYourWay'
import ArmazemDoCampo from './components/Armazem do Campo/Armazem do Campo'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <Ticker/>
        <PastelOnYourWay/>
        <ArmazemDoCampo/>
        <Footer/>
      </div>
    </>
  )
}

export default App
