import './armazem-do-campo.css'

import Image from 'next/image'

function ArmazemDoCampo() {
    return (
        <>
            <div className="ADCContainer">
                <div className='ADCTextContainer'>
                    <p className='ADCTitle'>SEU PASTEL SEM VENENO</p>
                    <p>Nossos pastéis são preparados com ingredientes frescos e orgânicos fornecidos pelo Armazém do Campo, uma iniciativa do MST, que utiliza práticas agroecológicas que respeitam o meio ambiente e garantem a saúde dos consumidores.</p>
                    {/* <OrderNowBtn className='ADCBtn' size='1.25rem' color='#F6A011' backgroundColor='#f1ecc8' hoverColor='#F6A011'/> */}
                </div>
                <div className='ADCImgContainer'>
                    {/* <img src={armazem} alt="Armazém do Campo"/> */}
                    <Image src="/armazem.png" alt="Produtos da Armazém do Campo" width={776} height={520} quality={100} className='ADCImg'/>
                </div>
            </div>
        </>
    )
}

export default ArmazemDoCampo