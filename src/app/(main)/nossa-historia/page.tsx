"use client";

import Image from "next/image";
import {
  Heart,
  Leaf,
  Utensils,
  Code,
  Github,
  ExternalLink,
  Carrot,
  Pizza,
  Salad,
} from "lucide-react";

import Link from "next/link";
import OrderNowBtn from "@/components/ui/order-now-btn";

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen mt-24 pt-24 space-y-48 relative overflow-hidden">
      {/* Ícones Decorativos - 100% Veganos */}

      {/* Canto superior direito */}
      <Leaf className="absolute top-12 right-[15%] w-[280px] h-[280px] -z-10 opacity-[0.15] text-vegGreen-light rotate-[25deg] animate-float-slow" />

      {/* Esquerda superior mais central */}
      <Carrot className="absolute top-[20%] left-[10%] w-[240px] h-[240px] -z-10 opacity-[0.18] text-vegOrange -rotate-[35deg] animate-float-slower" />

      {/* Direita centro */}
      <Salad className="absolute top-[35%] right-[12%] w-[260px] h-[260px] -z-10 opacity-[0.16] text-vegGreen rotate-[15deg] animate-float-slow" />

      {/* Esquerda centro-baixo */}
      <Pizza className="absolute top-[55%] left-[8%] w-[300px] h-[300px] -z-10 opacity-[0.14] text-vegYellow rotate-[20deg] animate-float-slower" />

      {/* Centro-direita baixo */}
      <Leaf className="absolute bottom-[25%] right-[18%] w-[220px] h-[220px] -z-10 opacity-[0.17] text-vegGreen-dark -rotate-[40deg] animate-float-slow" />

      {/* Centro-esquerda meio */}
      <Carrot className="absolute top-[42%] left-[15%] w-[190px] h-[190px] -z-10 opacity-[0.15] text-vegOrange-light rotate-[50deg] animate-float-slower" />

      {/* Mais central superior */}
      <Salad className="absolute top-[28%] right-[25%] w-[200px] h-[200px] -z-10 opacity-[0.13] text-vegGreen-light rotate-[-25deg] animate-float-slow" />

      {/* Mais central inferior */}
      <Pizza className="absolute bottom-[20%] left-[22%] w-[240px] h-[240px] -z-10 opacity-[0.16] text-vegRed rotate-[35deg] animate-float-slower" />

      {/* Centro quase no meio */}
      <Leaf className="absolute top-[48%] right-[30%] w-[180px] h-[180px] -z-10 opacity-[0.12] text-vegGreen rotate-[10deg] animate-float-slow" />

      {/* Hero Section */}
      <div className="relative">
        {/* <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-vegYellow/10 rounded-l-full"></div>     */}
        <div className="w-2/3 mx-auto text-center">
          <h1 className="text-4xl font-holtwood mb-10">
            A HISTÓRIA DA GABRIEL PASTEL
          </h1>
          <p className="text-2xl text-vegBrown-light max-w-3xl mx-auto">
            De um simples trabalho escolar a um projeto com propósito: conheça a
            trajetória que deu origem à lanchonete de pastéis veganos mais
            saborosa que você já conheceu.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-60">
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
                <h2 className="text-3xl font-holtwood mb-4">
                  O INÍCIO NA ETEC
                </h2>
                <p className="text-xl text-vegBrown-light font-light">
                  A Gabriel Pastel nasceu de um trabalho de Marketing na ETEC.
                </p>
                <p className="text-xl text-vegBrown-light font-light mt-4">
                  A missão era simples: criar uma marca. Mas como o professor
                  também dava aula de desenvolvimento web, ele uniu as
                  disciplinas e nos desafiou a construir um site para essa
                  marca.
                </p>
              </div>
              <div className="relative">
                {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegYellow/20 -right-10 -top-10"></div> */}
                {/* <div className="bg-white p-4 rounded-xl shadow-lg">
                                <Image
                                    src="/nossa-historia/etec-identidade.jpg"
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
                {/* <div className="bg-white p-4 rounded-xl shadow-lg">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Os dois Gabriéis, Gabriel Paiva e Gabriel Alexander"
                                width={400}
                                height={300}
                                className="rounded-lg h-auto"
                            />
                            </div> */}
              </div>
              <div className="order-1 md:order-2 mb-8 md:mb-0">
                <div className="inline-block rounded-full bg-vegYellow/20 px-4 py-1 text-md font-semibold text-vegYellow mb-4">
                  A PARCERIA
                </div>
                <h2 className="text-3xl font-holtwood mb-4">
                  DOIS GABRIÉIS, UMA IDEIA
                </h2>
                <p className="text-xl text-vegBrown-light font-light">
                  O programador que vos fala, Gabriel Alexander, juntou-se ao
                  seu grande parceiro Gabriel Paiva.
                </p>
                <p className="text-xl text-vegBrown-light font-light mt-4">
                  Depois de muita reflexão e brainstorming... Gabriel... Gabriel
                  com cara de quê? Pastel! E assim, surgiu a Gabriel Pastel,
                  fruto de uma ideia divertida e cheia de sabor!
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
                <h2 className="text-3xl font-holtwood mb-4">
                  PRIMEIROS PASSOS DIGITAIS
                </h2>
                <p className="text-xl text-vegBrown-light font-light">
                  Com HTML e CSS básicos, criamos o primeiro site da Gabriel
                  Pastel. Era simples, mas cumpria seu papel no projeto escolar.
                  Aqui está a primeira versão da nossa marca e um link para o
                  site original.
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
                <h2 className="text-3xl font-holtwood mb-4">
                  A TRANSFORMAÇÃO VEGANA
                </h2>
                <p className="text-xl text-vegBrown-light font-light">
                  Alguns anos se passaram, e Gabriel (o Alexander) se tornou
                  vegano e decidiu dar uma repaginada no site no seu tempo livre
                  – afinal, todo programador precisa de um bom portfólio, certo?
                </p>
                <p className="text-xl text-vegBrown-light font-light mt-4">
                  A Gabriel Pastel ganhou então uma nova missão: promover uma
                  alimentação deliciosa, ética e sustentável através de pastéis
                  100% veganos.
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
                <h2 className="text-3xl font-holtwood mb-4">
                  UM PROJETO COM PROPÓSITO
                </h2>
                <p className="text-xl text-vegBrown-light font-light">
                  Apesar de ter nascido de um projeto despretensioso de ensino
                  médio, a nova versão da Gabriel Pastel carrega uma mensagem de
                  amor e cuidado com o planeta e os animais.
                </p>
                <p className="text-xl text-vegBrown-light font-light mt-4">
                  Além disso, reflete um grande avanço tecnológico: o que antes
                  era feito com HTML e CSS básicos, agora é uma aplicação
                  robusta desenvolvida em React e TypeScript, integrada com
                  banco de dados e outras tecnologias de ponta.
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
      <div className="py-16 md:py-24 bg-vegGreen/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-holtwood mb-12">
            NOSSOS VALORES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <div className="w-16 h-16 bg-vegYellow/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-vegYellow" />
              </div>
              <h3 className="text-xl font-holtwood">COMPAIXÃO</h3>
              <p className="text-vegBrown-light">
                Acreditamos que todos os seres merecem respeito e compaixão. Por
                isso, nossos pastéis são 100% livres de crueldade animal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <div className="w-16 h-16 bg-vegGreen/15 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-vegGreen-light" />
              </div>
              <h3 className="text-xl font-holtwood">SUSTENTABILIDADE</h3>
              <p className="text-vegBrown-light">
                Nosso compromisso com o planeta se reflete em cada aspecto do
                nosso negócio, desde os ingredientes até as embalagens
                biodegradáveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
              <div className="w-16 h-16 bg-vegYellow/15 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="h-8 w-8 text-vegYellow" />
              </div>
              <h3 className="text-xl font-holtwood">SABOR</h3>
              <p className="text-vegBrown-light">
                Provamos que comida ética e sustentável também pode ser
                deliciosa. Nossos pastéis são uma explosão de sabores que
                conquistam até os mais céticos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16 md:py-24 px-60">
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-vegGreen/15 px-4 py-1 text-sm font-medium text-vegGreen-light   mb-4">
                TECNOLOGIA
              </div>
              <h2 className="text-2xl md:text-3xl font-holtwood mb-6">
                DE HTML BÁSICO A REACT
              </h2>
              <p className="text-lg text-vegBrown-light mb-6">
                A evolução da Gabriel Pastel também reflete o crescimento
                profissional do seu criador. O que começou com HTML e CSS
                básicos se transformou em uma aplicação moderna construída com:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-vegYellow">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">React & TypeScript</h3>
                    <p className="text-vegBrown-light">
                      Para uma interface dinâmica e tipagem segura
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-vegYellow">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Next.js</h3>
                    <p className="text-vegBrown-light">
                      Framework React para renderização híbrida e otimização
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-vegYellow">
                    <Code size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Banco de Dados</h3>
                    <p className="text-vegBrown-light">
                      Para armazenamento e gerenciamento de dados
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-0 relative">
              {/* <div className="absolute -z-10 h-64 w-64 rounded-full bg-vegGreen/15 -right-10 -bottom-10"></div> */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-vegYellow/15 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                    <Image
                      src="/techlogos/react.png"
                      alt="React Logo"
                      width={80}
                      height={80}
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className="bg-vegYellow/15 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                    <Image
                      src="/techlogos/typescript.png"
                      alt="TypeScript Logo"
                      width={80}
                      height={80}
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className="bg-vegYellow/15 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                    <Image
                      src="/techlogos/nextjs.png"
                      alt="Next.js Logo"
                      width={80}
                      height={80}
                      className="h-16 w-auto"
                    />
                  </div>
                  <div className="bg-vegYellow/15 p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-200">
                    <Image
                      src="/techlogos/neon.png"
                      alt="Neon Database Logo"
                      width={80}
                      height={80}
                      className="h-16 w-auto"
                    />
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <Link
                    href="https://github.com/xandeco024/gabriel-pastel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-vegGreen-light hover:text-vegYellow hover:scale-105 text-xl transition-all duration-200"
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
          <h2 className="text-2xl font-holtwood text-vegBrown-dark md:text-3xl mb-6">
            FAÇA PARTE DESSA HISTÓRIA
          </h2>
          <p className="text-lg text-vegBrown-light max-w-2xl mx-auto mb-8">
            A Gabriel Pastel continua evoluindo e queremos que você faça parte
            dessa jornada. Experimente nossos deliciosos pastéis veganos e ajude
            a escrever os próximos capítulos dessa história!
          </p>
          <OrderNowBtn
            size="xl2"
            bgColor="bg-vegYellow"
            borderColor="border-vegYellow"
            textColor="text-white"
            hoverBgColor="hover:bg-vegYellow hover:border-vegYellow"
            hoverTextColor="hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}
