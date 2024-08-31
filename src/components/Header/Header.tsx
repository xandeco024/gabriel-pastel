import './Header.css'

import logo from '../../assets/logo.png'

function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo Gabriel Pastel"/>
                <h1>GABRIEL PASTEL</h1>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">NOSSO IMPACTO</a>
                    <a href="#">NOSSA HISTÓRIA</a>
                    <button className="orderNowBtn">PEÇA JÁ!</button>
                </nav>
            </header>
        </>
    )
}

export default Header;