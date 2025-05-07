import './PremadePasteis.css'
import Image from 'next/image'

// import romiltoBrocolis from './assets/pastel flavours/romiltoBrocolis.webp'
// import romiltoCalabresa from './assets/pastel flavours/romiltoCalabresa.webp'
// import romiltoJaca from './assets/pastel flavours/romiltoJaca.webp'
// import romiltoPalmito from './assets/pastel flavours/romiltoPalmito.webp'
// import romiltoPizza from './assets/pastel flavours/romiltoPizza.webp'
// import romiltoShimeji from './assets/pastel flavours/romiltoShimeji.webp'
// import romiltoSoja from './assets/pastel flavours/romiltoSoja.webp'

import romiltoBrocolis from '../../assets/pastel flavours/romiltoBrocolis.webp'
import romiltoCalabresa from '../../assets/pastel flavours/romiltoCalabresa.webp'
import romiltoJaca from '../../assets/pastel flavours/romiltoJaca.webp'
import romiltoPalmito from '../../assets/pastel flavours/romiltoPalmito.webp'
//import romiltoPizza from '../../assets/pastel flavours/romiltoPizza.webp'
import romiltoShimeji from '../../assets/pastel flavours/romiltoShimeji.webp'
import romiltoSoja from '../../assets/pastel flavours/romiltoSoja.webp'

function PremadePasteis() {
    return(
        <>
        <div className='pastelFlavourContainer'>

        <p>CONHEÇA NOSSOS PASTÉIS MONTADOS</p>

        <div className='pastelFlavours'>
        <div className='pastelFlavour'>
            <Image src={romiltoBrocolis} alt='Pastel de Brócolis' width={200} height={200} />
            <p>Pastel de Brócolis</p>
        </div>
        <div className='pastelFlavour'>
            <Image src={romiltoCalabresa} alt='Pastel de Calabresa' width={200} height={200} />
            <p>Pastel de Calabresa</p>
        </div>
        <div className='pastelFlavour'>
            <Image src={romiltoJaca} alt='Pastel de Jaca' width={200} height={200} />
            <p>Pastel de Jaca</p>
        </div>
        <div className='pastelFlavour'>
            <Image src={romiltoPalmito} alt='Pastel de Palmito' width={200} height={200} />
            <p>Pastel de Palmito</p>
        </div>
        {/* <div className='pastelFlavour'>
            <img src = {romiltoPizza} alt='Pastel de Pizza'/>
            <p>Pastel de Pizza</p>
        </div> */}
        <div className='pastelFlavour'>
            <Image src={romiltoShimeji} alt='Pastel de Shimeji' width={200} height={200} />
            <p>Pastel de Shimeji</p>
        </div>
        <div className='pastelFlavour'>
            <Image src={romiltoSoja} alt='Pastel de Soja' width={200} height={200} />
            <p>Pastel de Soja</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default PremadePasteis