"use client";

import OrderNowBtn from './ui/order-now-btn';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    // const [menu, setMenu] = useState(false)

    // const toggleMenu = () => {
    //     setMenu(!menu)
    // }

    return (
        // header
        <div className="w-full h-24 px-16 bg-background flex items-center justify-between shadow-md z-[1000] top-0 fixed">
            {/* logo e nome */}
            <div className="flex items-center gap-4">
                <Image 
                    src="/icon.png" 
                    width={104} 
                    height={110} 
                    alt="Logo Gabriel Pastel" 
                    quality={100} 
                    className="h-[90%] xl:h-[80px] xl:w-[75px] xl:ml-16 ml-8"
                />
                <p className="text-vegGreen-light text-4xl font-holtwood">GABRIEL PASTEL</p>
            </div>

            {/* menu */}
            <nav className="flex items-center gap-4 mr-4 text-xl text-vegGreen-light">
                <Link href="/">
                    <span className="hover:text-vegYellow hover:underline transition-all duration-200">HOME</span>
                </Link>
                <Link href="/nossa-historia">
                    <span className="hover:text-vegYellow hover:underline transition-all duration-200">NOSSA HISTÓRIA</span>
                </Link>
                <Link href="/nosso-impacto">
                    <span className="hover:text-vegYellow hover:underline transition-all duration-200">NOSSO IMPACTO</span>
                </Link>
                <Link href="/pedido">
                    <span className="hover:text-vegYellow hover:underline transition-all duration-200">PEDIDO</span>
                </Link>
                {/* <OrderNowBtn size='1.25rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/> */}

                <OrderNowBtn size='xl'/>
            </nav>
        </div>
        // <>
        //     <header className="w-full h-24 px-96 bg-pastel flex items-center shadow-md  fixed z-[1000] top-0 justify-between">
        //         <Image 
        //             src="/icon.png"  
        //             width={104} 
        //             height={110} 
        //             alt="Logo Gabriel Pastel" 
        //             quality={100} 
        //             className="h-[90%] xl:h-[80px] xl:w-[75px] xl:ml-16 ml-8"
        //         />
        //         <h1 className="ml-4 text-[2.25rem] text-vegGreen font-holtwood xl:block hidden">GABRIEL PASTEL</h1>
                
        //         <button 
        //             className="xl:hidden flex flex-col items-center justify-around h-1/2 w-8 mr-8 relative"
        //             onClick={toggleMenu}
        //             title="Menu"
        //             aria-label="Abrir menu de navegação"
        //         >
        //             <div className={`w-full h-1 bg-vegGreen rounded-full absolute transition-all duration-200 ${menu ? 'bg-vegDarkBrown rotate-45 top-1/2' : 'top-1/4'}`}></div>
        //             <div className={`w-full h-1 bg-vegGreen rounded-full absolute top-1/2 transition-all duration-200 ${menu ? 'hidden' : 'block'}`}></div>
        //             <div className={`w-full h-1 bg-vegGreen rounded-full absolute transition-all duration-200 ${menu ? 'bg-vegDarkBrown -rotate-45 top-1/2' : 'top-3/4'}`}></div>
        //         </button>

        //         <nav className="xl:flex items-center mr-16 ml-auto hidden">   
        //             <a href="#" className="text-vegGreen text-xl mr-8 transition-all duration-200 hover:text-vegYellow hover:underline">HOME</a>
        //             <a href="#" className="text-vegGreen text-xl mr-8 transition-all duration-200 hover:text-vegYellow hover:underline">NOSSO IMPACTO</a>
        //             <a href="#" className="text-vegGreen text-xl mr-8 transition-all duration-200 hover:text-vegYellow hover:underline">NOSSA HISTÓRIA</a>
        //             <OrderNowBtn size='1.25rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/>
        //         </nav>
        //     </header>

        //     <div className={`xl:hidden fixed top-[80px] right-0 w-full h-full bg-pastel flex flex-col items-center justify-between z-[1001] transition-all duration-200 pt-28 ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
        //         <a href="#" className="text-vegGreen text-3xl my-4 transition-all duration-200 hover:text-vegYellow hover:underline">HOME</a>
        //         <a href="#" className="text-vegGreen text-3xl my-4 transition-all duration-200 hover:text-vegYellow hover:underline">NOSSO IMPACTO</a>
        //         <a href="#" className="text-vegGreen text-3xl my-4 transition-all duration-200 hover:text-vegYellow hover:underline">NOSSA HISTÓRIA</a>
        //         <OrderNowBtn size='2rem' color='#10806E' backgroundColor='#F1ECC8' hoverColor='#F6A011'/>
                
        //         <div className="flex flex-col mt-40 mb-20">
        //             <Image 
        //                 src="/footer/mountains.png" 
        //                 width={1920} 
        //                 height={240} 
        //                 alt="mountains image, to make the footer prettier." 
        //                 quality={100} 
        //                 className="w-full h-auto object-cover object-left translate-y-[1px]"
        //             />
        //             <div className="w-full h-28 bg-[#099b84]"></div>
        //         </div>
        //     </div>
        // </>
    )
}