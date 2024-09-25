import './Armazem do Campo.css'

import armazem from './armazem.png'

function ArmazemDoCampo() {
    return (
        <>
            <div className="armazemDoCampoContainer">
                <div className='textContainer'>
                    <p className='title'>SUA COMIDA SEM VENENO</p>
                    <p>Nossos pastéis são preparados com ingredientes frescos e orgânicos fornecidos pelo Armazém do Campo, uma iniciativa do MST, que utiliza práticas agroecológicas que respeitam o meio ambiente e garantem a saúde dos consumidores.</p>
                    <button className='orderNowBtn'>PEÇA JÁ!</button>
                </div>
                <div className='imgContainer'>
                    <img src={armazem} alt="Armazém do Campo"/>
                </div>
            </div>
        </>
    )
}

export default ArmazemDoCampo