"use client";

import './Header.css'

import OrderNowBtn from '../order-now-btn/order-now-btn';
// import mountains from '@/public/footer/mountains.png'
import Image from 'next/image';

import { useState } from 'react'

function Header() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <header>
                {/* <img src={logo} alt="Logo Gabriel Pastel"/> */}
                <Image src="/icon.png" width={104} height={110} alt="Logo Gabriel Pastel" quality={100} className='logo'/>
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
                    {/* <img src={mountains} alt="Pre Footer" className='headerMenuPreFooter'/> */}
                    <Image src="/footer/mountains.png" width={1920} height={240} alt="mountains image, to make the footer prettier." quality={100} className='headerMenuPreFooter'/>
                    <div className='headerMenuFooterFiller'></div>
                </div>
            </div>
        </>
    )
}

export default Header;