import './Armazem do Campo.css'

import armazem from './armazem.png'
import OrderNowBtn from '../Order now Btn/Order now btn.tsx'

function ArmazemDoCampo() {
    return (
        <>
            <div className="ADCContainer">
                <div className='ADCTextContainer'>
                    <p className='ADCTitle'>SEU PASTEL SEM VENENO</p>
                    <p>Nossos pastéis são preparados com ingredientes frescos e orgânicos fornecidos pelo Armazém do Campo, uma iniciativa do MST, que utiliza práticas agroecológicas que respeitam o meio ambiente e garantem a saúde dos consumidores.</p>
                    <OrderNowBtn/>
                </div>
                <div className='ADCImgContainer'>
                    <img src={armazem} alt="Armazém do Campo"/>
                </div>
            </div>
        </>
    )
}

export default ArmazemDoCampo