import './Banner.css'

import OrderNowBtn from '../order-now-btn/order-now-btn';
import Image from 'next/image';

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
                {/* <img src={rapazSplash} alt='Rapaz com pastéis' /> */}
                <Image src="/banner/pastel-dude-splash.png" alt='Rapaz com pastéis' width={818} height={554} quality={100} className='pastelDude'/>
            </div>
        </>
    )
}

export default Banner;