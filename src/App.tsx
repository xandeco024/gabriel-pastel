import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import PremadePasteis from './components/Premade Pasteis/PremadePasteis'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        {/* <PremadePasteis/> */}
      </div>
    </>
  )
}

export default App
