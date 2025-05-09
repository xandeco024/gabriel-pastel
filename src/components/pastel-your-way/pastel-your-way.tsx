import OrderNowBtn from '../ui/order-now-btn';
import './pastel-your-way.css';

import Image from 'next/image';

function PastelYourWay() {
    return (
        <>
            <div className='POYWContainer'>
                <div className='POYWImgContainer'>
                    {/* <img src={pastelYourWay} alt='Pasteizinhos'/> */}
                    <Image src="/pastelSplash.png" alt="Pasteizinhos" width={925} height={793} quality={100} className='POYWImg'/>
                </div>
                <div className='POYWTextContainer'>
                    <p className='POYWTitle'>PASTEL DO SEU JEITO</p>
                    <p className='POYWText'>Na Gabriel pastel, é você quem escolhe os recheios do seu pastel, te dando a liberdade para criar sabores unicos e deliciosos!
                    O limite é a sua imaginação!</p>
                    {/* <OrderNowBtn className='POYWBtn' size='1.25rem' color='#F6A011' backgroundColor='#f1ecc8' hoverColor='#F6A011'/> */}
                </div>
            </div>
        </>
    )
}

export default PastelYourWay;