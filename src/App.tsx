import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

import romiltoBrocolis from './assets/pastel flavours/romiltoBrocolis.webp'
import romiltoCalabresa from './assets/pastel flavours/romiltoCalabresa.webp'
import romiltoJaca from './assets/pastel flavours/romiltoJaca.webp'
import romiltoPalmito from './assets/pastel flavours/romiltoPalmito.webp'
import romiltoPizza from './assets/pastel flavours/romiltoPizza.webp'
import romiltoShimeji from './assets/pastel flavours/romiltoShimeji.webp'
import romiltoSoja from './assets/pastel flavours/romiltoSoja.webp'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Banner/>
        <div className='pastelFlavourContainer'>

          <p>CONHEÇA NOSSOS PASTÉIS MONTADOS</p>

          <div className='pastelFlavours'>
            <div className='pastelFlavour'>
              <img src = {romiltoBrocolis} alt='Pastel de Brócolis'/>
              <p>Pastel de Brócolis</p>
            </div>
            <div className='pastelFlavour'>
              <img src = {romiltoCalabresa} alt='Pastel de Calabresa'/>
              <p>Pastel de Calabresa</p>
            </div>
            <div className='pastelFlavour'>
              <img src = {romiltoJaca} alt='Pastel de Jaca'/>
              <p>Pastel de Jaca</p>
            </div>
            <div className='pastelFlavour'>
              <img src = {romiltoPalmito} alt='Pastel de Palmito'/>
              <p>Pastel de Palmito</p>
            </div>
            {/* <div className='pastelFlavour'>
              <img src = {romiltoPizza} alt='Pastel de Pizza'/>
              <p>Pastel de Pizza</p>
            </div> */}
            <div className='pastelFlavour'>
              <img src = {romiltoShimeji} alt='Pastel de Shimeji'/>
              <p>Pastel de Shimeji</p>
            </div>
            <div className='pastelFlavour'>
              <img src = {romiltoSoja} alt='Pastel de Soja'/>
              <p>Pastel de Soja</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
