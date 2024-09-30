import './Header.css'

import OrderNowBtn from '../Order now Btn/Order now btn';
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
                    <OrderNowBtn size='1.25rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/>
                </nav>
            </header>
        </>
    )
}

export default Header;