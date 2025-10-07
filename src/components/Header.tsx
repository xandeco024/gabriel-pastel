"use client";

import OrderNowBtn from './ui/order-now-btn';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from 'react';

export default function Header() {
    const { data: session, status } = useSession();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleSignOut = () => {
        signOut({ callbackUrl: '/' });
        setUserMenuOpen(false);
    };

    // Fechar menu ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setUserMenuOpen(false);
            }
        };

        if (userMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userMenuOpen]);

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

                <OrderNowBtn size='xl'/>

                {/* User Auth Section */}
                {status === "loading" ? (
                    <div className="text-vegGreen-light">...</div>
                ) : session ? (
                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className="flex items-center gap-2 text-vegGreen-light hover:text-vegYellow transition-colors duration-200 bg-pastel px-3 py-2 rounded-lg border border-vegGreen/20"
                        >
                            <span className="text-lg">👤</span>
                            <span className="hidden lg:block text-sm font-medium">
                                Olá, {session.user?.name?.split(' ')[0] || 'Usuário'}!
                            </span>
                            <span className="text-xs">▼</span>
                        </button>

                        {userMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-pastel rounded-lg shadow-lg border border-vegGreen/20 z-50">
                                <div className="p-3 border-b border-vegGreen/20">
                                    <p className="text-sm font-medium text-foreground">{session.user?.name}</p>
                                    <p className="text-xs text-vegGreen-light">{session.user?.email}</p>
                                </div>
                                <div className="py-2">
                                    <Link href="/profile" className="block px-4 py-2 text-sm text-vegGreen hover:bg-background transition-colors">
                                        Meu Perfil
                                    </Link>
                                    <Link href="/orders" className="block px-4 py-2 text-sm text-vegGreen hover:bg-background transition-colors">
                                        Meus Pedidos
                                    </Link>
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full text-left px-4 py-2 text-sm text-vegRed hover:bg-background transition-colors"
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/auth/signin"
                            className="text-sm font-medium text-vegGreen-light hover:text-vegYellow transition-colors duration-200"
                        >
                            ENTRAR
                        </Link>
                        <Link
                            href="/auth/signup"
                            className="text-sm font-medium bg-vegGreen text-background px-4 py-2 rounded-lg hover:bg-vegGreen-dark transition-all duration-200 shadow-md"
                        >
                            CRIAR CONTA
                        </Link>
                    </div>
                )}
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