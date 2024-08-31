import './PastelOnYourWay.css';

import pastelOnYourWay from './PastelOnYourWay.png';

function PastelOnYourWay() {
    return (
        <>
            <div className='pastelOnYourWayContainer'>
                <img src={pastelOnYourWay}/>
                <div className='pastelOnYourWayTextContainer'>
                    <p className='pastelOnYourWayTitle'>PASTEL DO SEU JEITO</p>
                    <p className='pastelOnYourWayText'>Na Gabriel pastel, é você quem escolhe os recheios do seu pastel, te dando a liberdade para criar sabores unicos e deliciosos!
                    O limite é a sua imaginação!</p>
                    <button className="orderNowBtn3">PEÇA JÁ!</button>
                </div>
            </div>
        </>
    )
}

export default PastelOnYourWay;