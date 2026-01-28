"use client";

import OrderNowBtn from "./ui/order-now-btn";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import AuthModal from "./AuthModal";

export default function Header() {
  const { data: session, status } = useSession();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
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
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        <p className="text-vegGreen-light text-4xl font-holtwood">
          GABRIEL PASTEL
        </p>
      </div>

      {/* menu */}
      <nav className="flex items-center gap-4 mr-4 text-xl text-vegGreen-light">
        <Link href="/home">
          <span className="hover:text-vegYellow transition-all duration-200">
            HOME
          </span>
        </Link>
        <Link href="/nossa-historia">
          <span className="hover:text-vegYellow transition-all duration-200">
            NOSSA HISTÓRIA
          </span>
        </Link>
        <Link href="/nosso-impacto">
          <span className="hover:text-vegYellow transition-all duration-200">
            NOSSO IMPACTO
          </span>
        </Link>

        <OrderNowBtn size="xl" />

        {/* User Menu Dropdown */}
        <div className="relative" ref={menuRef}>
          {status === "loading" ? (
            <div className="w-10 h-10 rounded-full border-[3px] border-vegGreen-light animate-pulse"></div>
          ) : (
            <>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="group flex items-center justify-center w-10 h-10 bg-transparent border-[3px] border-vegGreen-light hover:border-vegYellow rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                aria-label="Menu do usuário"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-vegGreen-light group-hover:text-vegYellow transition-colors"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-background rounded-xl shadow-2xl border-2 border-vegGreen/20 z-50 overflow-hidden animate-dropdown-in">
                  {session ? (
                    <>
                      <div className="bg-vegGreen/10 p-4 border-b-2 border-vegGreen/20">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-vegGreen flex items-center justify-center text-background font-bold text-lg">
                            {session.user?.name?.charAt(0).toUpperCase() || "U"}
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="font-semibold text-vegGreen truncate">
                              {session.user?.name}
                            </p>
                            <p className="text-xs text-vegGreen-light truncate">
                              {session.user?.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        <Link
                          href="/perfil"
                          className="flex items-center gap-3 px-4 py-3 text-vegGreen hover:bg-vegGreen/10 transition-colors group"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 group-hover:text-vegYellow transition-colors"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span className="font-medium">Meu Perfil</span>
                        </Link>
                        <Link
                          href="/perfil/pedidos"
                          className="flex items-center gap-3 px-4 py-3 text-vegGreen hover:bg-vegGreen/10 transition-colors group"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 group-hover:text-vegYellow transition-colors"
                          >
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                          </svg>
                          <span className="font-medium">Meus Pedidos</span>
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-3 px-4 py-3 text-vegRed hover:bg-red-50 transition-colors group"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                          </svg>
                          <span className="font-medium">Sair</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setAuthMode("signin");
                          setAuthModalOpen(true);
                          setUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-vegGreen hover:bg-vegGreen/10 transition-colors group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 group-hover:text-vegYellow transition-colors"
                        >
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                          <polyline points="10 17 15 12 10 7" />
                          <line x1="15" y1="12" x2="3" y2="12" />
                        </svg>
                        <span className="font-medium">Entrar</span>
                      </button>
                      <button
                        onClick={() => {
                          setAuthMode("signup");
                          setAuthModalOpen(true);
                          setUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-background bg-vegGreen hover:bg-vegYellow transition-colors group mx-2 mb-2 rounded-lg font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <line x1="19" y1="8" x2="19" y2="14" />
                          <line x1="22" y1="11" x2="16" y2="11" />
                        </svg>
                        <span>Criar Conta</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
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
  );
}
