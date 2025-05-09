
import Image from 'next/image'

function Footer() {
    return (
        <>
            <footer className='mt-60'>
                <div className='w-full h-auto flex items-end'>
                    <Image src='/footer/mountains.png' width={1920} height={240} quality={100} alt="mountains to make the footer preetier" className='w-full h-auto m-0 object-cover object-left'/>
                </div>
                <div className='h-[320px] w-full bg-[#099B84] flex justify-evenly items-center'>
                    <div className="w-[15%] h-[60%] flex flex-col justify-center items-center">
                        <Image src="/icon.png" alt="Logo Gabriel Pastel" width={104} height={110} quality={100} className='w-32 h-auto mb-4' />
                        <p className="text-white text-xl text-justify leading-[150%] m-0">Fazemos nosso melhor para transformar o mundo num lugar melhor.</p>
                    </div>
                    <div className="w-[15%] h-[60%]">
                        <p className='text-white mb-4 text-[1.75rem] text-center'>Funcionamento</p>
                        <ul className="[&>li]:text-white [&>li]:text-xl [&>li]:marker:text-white [&>li]:marker:text-3xl">
                            <li>
                                <p>Segunda a Quinta 12h - 22h</p>
                            </li>
                            <li>
                                <p>Sexta e Sábado 12h - 00h</p>
                            </li>
                            <li>
                                <p>Domingo 12h - 22h</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[15%] h-[60%]">
                        <p className='text-white mb-4 text-[1.75rem] text-center'>Endereço</p>
                        <p className="text-white text-xl text-justify leading-[150%] m-0">Rua dos bobos, 0 - Rochdale, Osasco - SP</p>
                    </div>
                    <div className="w-[15%] h-[60%]">
                        <p className='text-white mb-4 text-[1.75rem] text-center'>Contato</p>
                        <div className="contact">
                            <div>
                                <p className="text-white text-xl text-justify leading-[150%] m-0">Telefone</p>
                                <p className="text-white text-xl text-justify leading-[150%] m-0">(11) 95113-8721</p>
                            </div>
                            <div>
                                <p className="text-white text-xl text-justify leading-[150%] m-0">Email</p>
                                <p className="text-white text-xl text-justify leading-[150%] m-0">alepbravo1702@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15%] h-[60%]">
                        <p className='text-white mb-4 text-[1.75rem] text-center'>Redes Sociais</p>
                        <div className="flex justify-around items-center w-full h-auto mt-2.5">
                            <a href="https://api.whatsapp.com/send/?phone=%2B5511951138721&text=Olá%2C%20vim%20pelo%20site%20Gabriel%20Pastel%20e%20gostaria%20de%20fazer%20um%20pedido%20de%20pastel.%20Poderia%20me%20ajudar%3F&type=phone_number&app_absent=0" className="w-[10%] aspect-square">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer w-full h-full text-white fill-white">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636" />
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/xandeco420/" className="w-[10%] aspect-square">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer w-full h-full text-white fill-white">
                                    <path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5" />
                                </svg>
                            </a>
                            <a href="https://www.tiktok.com/@cozinhadoromilto" className="w-[10%] aspect-square">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer w-full h-full text-white fill-white">
                                    <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@xandeco420" className="w-[10%] aspect-square">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="cursor-pointer w-full h-full text-white fill-white">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor" d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-20 bg-[#F6A011] flex items-center">
                    <p className="text-white text-xl ml-[55px]">© 2024, Osasco - Todos os direitos reservados, Gabriel Alexander Pinheiro Bravo</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;