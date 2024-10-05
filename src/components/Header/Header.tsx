import './Header.css'

import OrderNowBtn from '../Order now Btn/Order now Btn';
import logo from '../../assets/logo.png'
import preFooter from '../Footer/preFooter.png'

import { useState } from 'react'

function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <header>
                <img src={logo} alt="Logo Gabriel Pastel"/>
                <h1>GABRIEL PASTEL</h1>
                <a className='headerMenu' onClick={toggleMenu}>
                    <div className={`headerMenuLine ${menu ? 'active' : ''}`}></div>
                    <div className={`headerMenuLine ${menu ? 'active' : ''}`}></div>
                    <div className={`headerMenuLine ${menu ? 'active' : ''}`}></div>
                </a>
                <nav>   
                    <a href="#">HOME</a>
                    <a href="#">NOSSO IMPACTO</a>
                    <a href="#">NOSSA HISTÓRIA</a>
                    <OrderNowBtn size='1.25rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/>
                </nav>
            </header>
            <div className={`headerMenuMobile ${menu ? 'active' : ''}`}>
                <a href="#">HOME</a>
                <a href="#">NOSSO IMPACTO</a>
                <a href="#">NOSSA HISTÓRIA</a>
                <OrderNowBtn size='2rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/>
                <div className='headerMenuFooter'>
                    <img src={preFooter} alt="Pre Footer" className='headerMenuPreFooter'/>
                    <div className='headerMenuFooterFiller'></div>
                </div>
            </div>
        </>
    )
}

export default Header;