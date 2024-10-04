import OrderNowBtn from '../Order now Btn/Order now Btn';
import './PastelOnYourWay.css';

import pastelOnYourWay from './PastelOnYourWay.png';

function PastelOnYourWay() {
    return (
        <>
            <div className='POYWContainer'>
                <div className='POYWImgContainer'>
                    <img src={pastelOnYourWay} alt='Pasteizinhos'/>
                </div>
                <div className='POYWTextContainer'>
                    <p className='POYWTitle'>PASTEL DO SEU JEITO</p>
                    <p className='POYWText'>Na Gabriel pastel, é você quem escolhe os recheios do seu pastel, te dando a liberdade para criar sabores unicos e deliciosos!
                    O limite é a sua imaginação!</p>
                    <OrderNowBtn className='POYWBtn' size='1.25rem' color='#F6A011' backgroundColor='#f1ecc8' hoverColor='#F6A011'/>
                </div>
            </div>
        </>
    )
}

export default PastelOnYourWay;