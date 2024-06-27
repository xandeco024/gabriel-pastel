import './Banner.css'
import rapaz from './rapaz.png'
function Banner() {
    return (
        <>
            <div className='main'>
                <div className='bannerContent'>
                    <div className='textContainer'>
                        <p className='slogan'>"O PASTEL QUE TE LEVA ATÉ O CÉU"</p>
                        <p className='text'>Com a união de dois Gabrieis, que gostavam de pastéis, surge a Gabriel Pastel. </p>
                        <p className='text'>A lanchonete com o melhor pastel da região, 100% vegana, e com o preço que cabe no seu bolso.</p>
                    </div>
                    <img src={rapaz} alt='Rapaz com pastéis' />
                </div>
            </div>
            <div className='strip'>
                vegana - cruelty free - deliciosa - aconchegante - sustentável - vegana - cruelty free - deliciosa - sustentavel - vegana - cruelty free - deliciosa - sustentavel
            </div>
        </>
    )
}

export default Banner;