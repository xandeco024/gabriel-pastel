import './Banner.css'

import rapazSplash from './rapaz com splash.png'
import OrderNowBtn from '../Order now Btn/Order now Btn';

function Banner() {
    return (
        <>
            <div className='bannerContainer'>
                <div className='bannerTextContainer'>
                    <p className='bannerSlogan'>"O PASTEL QUE TE LEVA ATÉ O CÉU"</p>
                    <p className='bannerP'>Com a união de dois Gabrieis, que gostavam de pastéis, surge a Gabriel Pastel. </p>
                    <p className='bannerP'>A lanchonete com o melhor pastel da região, 100% vegana, e com o preço que cabe no seu bolso.</p>
                    <OrderNowBtn size='1.25rem' color='#FFFFFF' backgroundColor='#F6A011' hoverColor='#FFFFFF'/>
                </div>
                <img src={rapazSplash} alt='Rapaz com pastéis' />
            </div>
        </>
    )
}

export default Banner;