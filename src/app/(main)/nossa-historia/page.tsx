'use client';

import Image from "next/image";
import {
    Heart,
    Leaf,
    Utensils,
    Code,
    Github,
    ExternalLink,
} from "lucide-react"

import Link from "next/link"

export default function OurHistoryPage() {
    return (
        <div className="min-h-screen mt-24 pt-24 space-y-48">
            {/* Hero Section */}
            <div className="relative">
                {/* <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-vegYellow/10 rounded-l-full"></div>     */}
                <div className="w-2/3 mx-auto text-center">
                    <h1 className="text-4xl font-holtwood mb-10">A HISTÓRIA DA GABRIEL PASTEL</h1>
                    <p className="text-2xl text-vegBrown-light max-w-3xl mx-auto">
                        De um simples trabalho escolar a um projeto com propósito: conheça a trajetória que deu origem à
                        lanchonete de pastéis veganos mais saborosa que você já conheceu.
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-vegGreen/20"></div>

                    {/* Timeline Item 1 */}
                    <div className="relative mb-24">
                        <div className="md:grid md:grid-cols-2 gap-8 items-center">
                            <div className="md:text-right mb-8 md:mb-0">
                                <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                                2018
                                </div>
                                <h2 className="text-3xl font-holtwood mb-4">O INÍCIO NA ETEC</h2>
                                <p className="text-xl text-vegBrown-light font-light">
                                    A Gabriel Pastel nasceu de um trabalho de Marketing na ETEC.
                                </p>
                                <p className="text-xl text-vegBrown-light font-light mt-4">
                                    A missão era simples:
                                    criar uma marca. Mas como o professor também dava aula de desenvolvimento web, ele uniu as
                                    disciplinas e nos desafiou a construir um site para essa marca.
                                </p>
                            </div>
                            <div className="relative">
                                {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegYellow/20 -right-10 -top-10"></div> */}
                                {/* <div className="bg-white p-4 rounded-xl shadow-lg">
                                <Image
                                    src="/etec-identidade.jpg"
                                    alt="ETEC logo"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full h-auto"
                                    priority
                                />
                                </div> */}
                            </div>
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vegYellow border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="relative mb-24">
                        <div className="md:grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 relative">
                            {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegGreen/20 -left-10 -top-10"></div> */}
                            <div className="bg-white p-4 rounded-xl shadow-lg">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Os dois Gabriéis, Gabriel Paiva e Gabriel Alexander"
                                width={400}
                                height={300}
                                className="rounded-lg h-auto"
                            />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 mb-8 md:mb-0">
                            <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                            A PARCERIA
                            </div>
                            <h2 className="text-3xl font-holtwood mb-4">DOIS GABRIÉIS, UMA IDEIA</h2>
                            <p className="text-xl text-vegBrown-light font-light">
                                O programador que vos fala, Gabriel Alexander, juntou-se ao seu grande parceiro Gabriel Paiva.
                            </p>
                            <p className="text-xl text-vegBrown-light font-light mt-4">
                                Depois de muita reflexão e brainstorming... Gabriel... Gabriel com cara de quê? Pastel! E assim,
                                surgiu a Gabriel Pastel, fruto de uma ideia divertida e cheia de sabor!
                            </p>
                        </div>
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vegGreen-light border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="relative mb-24">
                        <div className="md:grid md:grid-cols-2 gap-8 items-center">
                        <div className="md:text-right mb-8 md:mb-0">
                            <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                            O PRIMEIRO SITE
                            </div>
                            <h2 className="text-3xl font-holtwood mb-4">PRIMEIROS PASSOS DIGITAIS</h2>
                            <p className="text-xl text-vegBrown-light font-light">
                            Com HTML e CSS básicos, criamos o primeiro site da Gabriel Pastel. Era simples, mas cumpria seu
                            papel no projeto escolar. Aqui está a primeira versão da nossa marca e um link para o site
                            original.
                            </p>
                            <div className="mt-4">
                            <Link
                                href="/site-original"
                                className="inline-flex items-center text-vegGreen-light hover:text-vegYellow hover:scale-105 text-xl transition-all duration-200"
                            >
                                Ver site original <ExternalLink className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </div>
                        <div className="relative">
                            {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegYellow/20 -right-10 -top-10"></div> */}
                            {/* <div className="bg-white p-4 rounded-xl shadow-lg">
                                <Image
                                    src="/o/LOGO.png"
                                    alt="Primeira marca da Gabriel Pastel"
                                    width={400}
                                    height={300}
                                    className="rounded-lg h-auto"
                                    priority
                                />
                            </div> */}
                        </div>
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vegYellow border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="relative mb-24">
                        <div className="md:grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1 relative">
                            {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegGreen/20 -left-10 -top-10"></div> */}
                            {/* <div className="bg-white p-4 rounded-xl shadow-lg">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    alt="Transformação vegana"
                                    width={400}
                                    height={300}
                                    className="rounded-lg w-full h-auto"
                                />
                            </div> */}
                        </div>
                        <div className="order-1 md:order-2 mb-8 md:mb-0">
                            <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                            2023
                            </div>
                            <h2 className="text-3xl font-holtwood mb-4">A TRANSFORMAÇÃO VEGANA</h2>
                            <p className="text-xl text-vegBrown-light font-light">
                            Alguns anos se passaram, e Gabriel (o Alexander) se tornou vegano e decidiu dar uma repaginada no
                            site no seu tempo livre – afinal, todo programador precisa de um bom portfólio, certo?
                            </p>
                            <p className="text-xl text-vegBrown-light font-light mt-4">
                            A Gabriel Pastel ganhou então uma nova missão: promover uma alimentação deliciosa, ética e
                            sustentável através de pastéis 100% veganos.
                            </p>
                        </div>
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vegGreen-light border-4 border-background hidden md:block"></div>
                    </div>

                    {/* Timeline Item 5 */}
                    <div className="relative">
                        <div className="md:grid md:grid-cols-2 gap-8 items-center">
                        <div className="md:text-right mb-8 md:mb-0">
                            <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                            HOJE
                            </div>
                            <h2 className="text-3xl font-holtwood mb-4">UM PROJETO COM PROPÓSITO</h2>
                            <p className="text-xl text-vegBrown-light font-light">
                            Apesar de ter nascido de um projeto despretensioso de ensino médio, a nova versão da Gabriel
                            Pastel carrega uma mensagem de amor e cuidado com o planeta e os animais.
                            </p>
                            <p className="text-xl text-vegBrown-light font-light mt-4">
                            Além disso, reflete um grande avanço tecnológico: o que antes era feito com HTML e CSS básicos,
                            agora é uma aplicação robusta desenvolvida em React e TypeScript, integrada com banco de dados e
                            outras tecnologias de ponta.
                            </p>
                        </div>
                        <div className="relative">
                            {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegYellow/20 -right-10 -top-10"></div>
                            <div className="bg-white p-4 rounded-xl shadow-lg">
                            <Image
                                src="/banner/pastel-dude-splash.png"
                                alt="Nova Gabriel Pastel"
                                width={400}
                                height={300}
                                className="rounded-lg w-full h-auto"
                            />
                            </div> */}
                        </div>
                        </div>
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-vegYellow border-4 border-background hidden md:block"></div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 md:py-24 bg-[#00A388]/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-12">NOSSOS VALORES</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="w-16 h-16 bg-[#F58A07]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Heart className="h-8 w-8 text-[#F58A07]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">COMPAIXÃO</h3>
                        <p className="text-[#555]">
                        Acreditamos que todos os seres merecem respeito e compaixão. Por isso, nossos pastéis são 100% livres
                        de crueldade animal.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="w-16 h-16 bg-[#00A388]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Leaf className="h-8 w-8 text-[#00A388]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">SUSTENTABILIDADE</h3>
                        <p className="text-[#555]">
                        Nosso compromisso com o planeta se reflete em cada aspecto do nosso negócio, desde os ingredientes até
                        as embalagens biodegradáveis.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="w-16 h-16 bg-[#F58A07]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Utensils className="h-8 w-8 text-[#F58A07]" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">SABOR</h3>
                        <p className="text-[#555]">
                        Provamos que comida ética e sustentável também pode ser deliciosa. Nossos pastéis são uma explosão de
                        sabores que conquistam até os mais céticos.
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="md:grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block rounded-full bg-[#00A388]/20 px-4 py-1 text-sm font-medium text-[#00A388] mb-4">
                        TECNOLOGIA
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">DE HTML BÁSICO A REACT</h2>
                        <p className="text-lg text-[#555] mb-6">
                        A evolução da Gabriel Pastel também reflete o crescimento profissional do seu criador. O que começou
                        com HTML e CSS básicos se transformou em uma aplicação moderna construída com:
                        </p>
                        <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="mr-4 mt-1 text-[#F58A07]">
                            <Code size={20} />
                            </div>
                            <div>
                            <h3 className="font-medium">React & TypeScript</h3>
                            <p className="text-[#555]">Para uma interface dinâmica e tipagem segura</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="mr-4 mt-1 text-[#F58A07]">
                            <Code size={20} />
                            </div>
                            <div>
                            <h3 className="font-medium">Next.js</h3>
                            <p className="text-[#555]">Framework React para renderização híbrida e otimização</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="mr-4 mt-1 text-[#F58A07]">
                            <Code size={20} />
                            </div>
                            <div>
                            <h3 className="font-medium">Tailwind CSS</h3>
                            <p className="text-[#555]">Para estilização rápida e responsiva</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="mr-4 mt-1 text-[#F58A07]">
                            <Code size={20} />
                            </div>
                            <div>
                            <h3 className="font-medium">Banco de Dados</h3>
                            <p className="text-[#555]">Para armazenamento e gerenciamento de dados</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 relative">
                        <div className="absolute -z-10 h-64 w-64 rounded-full bg-[#00A388]/20 -right-10 -bottom-10"></div>
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#F58A07]/5 p-4 rounded-lg flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=80&width=80"
                                alt="React Logo"
                                width={80}
                                height={80}
                                className="h-16 w-auto"
                            />
                            </div>
                            <div className="bg-[#F58A07]/5 p-4 rounded-lg flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=80&width=80"
                                alt="TypeScript Logo"
                                width={80}
                                height={80}
                                className="h-16 w-auto"
                            />
                            </div>
                            <div className="bg-[#F58A07]/5 p-4 rounded-lg flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=80&width=80"
                                alt="Next.js Logo"
                                width={80}
                                height={80}
                                className="h-16 w-auto"
                            />
                            </div>
                            <div className="bg-[#F58A07]/5 p-4 rounded-lg flex items-center justify-center">
                            <Image
                                src="/placeholder.svg?height=80&width=80"
                                alt="Tailwind CSS Logo"
                                width={80}
                                height={80}
                                className="h-16 w-auto"
                            />
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#00A388] hover:text-[#00A388]/80 font-medium"
                            >
                            <Github className="mr-2 h-5 w-5" /> Ver código no GitHub
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 md:py-24 bg-[#F58A07]/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-bold text-[#333] md:text-3xl mb-6">FAÇA PARTE DESSA HISTÓRIA</h2>
                    <p className="text-lg text-[#555] max-w-2xl mx-auto mb-8">
                    A Gabriel Pastel continua evoluindo e queremos que você faça parte dessa jornada. Experimente nossos
                    deliciosos pastéis veganos e ajude a escrever os próximos capítulos dessa história!
                    </p>
                    <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-[#F58A07] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#F58A07]/90 transition-all duration-200 hover:shadow-xl"
                    >
                    PEDIR AGORA
                    </Link>
                </div>
            </div>
        </div>
    )
}

