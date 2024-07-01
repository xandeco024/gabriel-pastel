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
            <div className='ticker'>
                <div className='tickerItem'>SEM CRUELDADE</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM PREÇO ABUSIVO</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM GORDURA TRANSGÊNICA</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM CONSERVANTES</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM CORANTES</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM ANTIBIOTICS</div>
                <div className='tickerItem'>-</div>
                <div className='tickerItem'>SEM HORMÔNIOS</div>
                <div className='tickerItem'>-</div>
            </div>
        </>
    )
}

export default Banner;