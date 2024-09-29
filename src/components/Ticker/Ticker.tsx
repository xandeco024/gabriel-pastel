import './Ticker.css'

function Ticker() {
    return (
        <div className='tickerContainer'>
            <ul>
                <li className='tickerItem'>SEM CRUELDADE</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM PREÇO ABUSIVO</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM GORDURA TRANSGÊNICA</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM CONSERVANTES</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM CORANTES</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM ANTIBIOTICOS</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM HORMÔNIOS</li>
                <li className='tickerItem'>-</li>
            </ul>

            <ul aria-hidden='true'>
                <li className='tickerItem'>SEM CRUELDADE</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM PREÇO ABUSIVO</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM GORDURA TRANSGÊNICA</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM CONSERVANTES</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM CORANTES</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM ANTIBIOTICOS</li>
                <li className='tickerItem'>-</li>
                <li className='tickerItem'>SEM HORMÔNIOS</li>
                <li className='tickerItem'>-</li> 
                {/* esse "-" é comido pq eu nao calculei bem a animacao e eu nao vou calcular. */}
            </ul>
        </div>
    )
}

export default Ticker