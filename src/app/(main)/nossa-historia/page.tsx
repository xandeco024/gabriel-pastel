"use client";

import Image from "next/image";
import {
  Heart,
  Leaf,
  Utensils,
  Code,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import OrderNowBtn from "@/components/ui/order-now-btn";

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen mt-24 pt-24 space-y-48 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-2/3 mx-auto text-center space-y-6">
          <h1 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
            <Sparkles className="w-12 h-12 text-vegYellow" />A HISTÓRIA DA
            GABRIEL PASTEL
          </h1>
          <p className="text-2xl text-vegBrown-light max-w-3xl mx-auto leading-relaxed">
            De um{" "}
            <span className="font-bold text-vegYellow">
              simples trabalho escolar
            </span>{" "}
            a um{" "}
            <span className="font-bold text-vegGreen">
              projeto com propósito
            </span>
            : conheça a trajetória que deu origem à lanchonete de{" "}
            <span className="font-bold text-vegOrange">
              pastéis veganos mais saborosa
            </span>{" "}
            que você já conheceu.
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
                <div className="inline-block rounded-full bg-vegYellow/20 px-5 py-2 text-lg font-semibold text-vegYellow mb-4 shadow-md">
                  2018
                </div>
                <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                  O INÍCIO NA ETEC
                </h2>
                <p className="text-xl text-vegBrown-light leading-relaxed">
                  A{" "}
                  <span className="font-bold text-vegGreen">
                    Gabriel Pastel
                  </span>{" "}
                  nasceu de um trabalho de{" "}
                  <span className="font-bold text-vegYellow">
                    Marketing na ETEC
                  </span>
                  .
                </p>
                <p className="text-xl text-vegBrown-light leading-relaxed mt-4">
                  A missão era simples:{" "}
                  <span className="font-bold text-vegOrange">
                    criar uma marca
                  </span>
                  . Mas como o professor também dava aula de desenvolvimento
                  web, ele uniu as disciplinas e nos desafiou a construir um{" "}
                  <span className="font-bold text-vegGreen">
                    site para essa marca
                  </span>
                  .
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
                <div className="inline-block rounded-full bg-vegYellow/20 px-5 py-2 text-lg font-semibold text-vegYellow mb-4 shadow-md">
                  A PARCERIA
                </div>
                <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                  DOIS GABRIÉIS, UMA IDEIA
                </h2>
                <p className="text-xl text-vegBrown-light leading-relaxed">
                  O <span className="font-bold text-vegGreen">programador</span>{" "}
                  que vos fala,{" "}
                  <span className="font-bold text-vegYellow">
                    Gabriel Alexander
                  </span>
                  , juntou-se ao seu grande parceiro{" "}
                  <span className="font-bold text-vegYellow">
                    Gabriel Paiva
                  </span>
                  .
                </p>
                <p className="text-xl text-vegBrown-light leading-relaxed mt-4">
                  Depois de muita reflexão e brainstorming... Gabriel... Gabriel
                  com cara de quê?{" "}
                  <span className="font-bold text-vegOrange">Pastel!</span> E
                  assim, surgiu a{" "}
                  <span className="font-bold text-vegGreen">
                    Gabriel Pastel
                  </span>
                  , fruto de uma ideia divertida e cheia de sabor!
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
                <div className="inline-block rounded-full bg-vegYellow/20 px-5 py-2 text-lg font-semibold text-vegYellow mb-4 shadow-md">
                  O PRIMEIRO SITE
                </div>
                <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                  PRIMEIROS PASSOS DIGITAIS
                </h2>
                <p className="text-xl text-vegBrown-light leading-relaxed">
                  Com{" "}
                  <span className="font-bold text-vegYellow">
                    HTML e CSS básicos
                  </span>
                  , criamos o primeiro site da Gabriel Pastel. Era simples, mas
                  cumpria seu papel no{" "}
                  <span className="font-bold text-vegGreen">
                    projeto escolar
                  </span>
                  . Aqui está a{" "}
                  <span className="font-bold text-vegOrange">
                    primeira versão
                  </span>{" "}
                  da nossa marca e um link para o site original.
                </p>
                <div className="mt-6">
                  <Link
                    href="/site-original"
                    className="inline-flex items-center text-vegGreen hover:text-vegYellow hover:scale-105 text-xl transition-all duration-200 font-semibold"
                  >
                    Ver site original <ExternalLink className="ml-2 h-5 w-5" />
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
                <div className="inline-block rounded-full bg-vegYellow/20 px-5 py-2 text-lg font-semibold text-vegYellow mb-4 shadow-md">
                  2023
                </div>
                <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                  A TRANSFORMAÇÃO VEGANA
                </h2>
                <p className="text-xl text-vegBrown-light leading-relaxed">
                  Alguns anos se passaram, e Gabriel (o Alexander){" "}
                  <span className="font-bold text-vegGreen">
                    se tornou vegano
                  </span>{" "}
                  e decidiu dar uma{" "}
                  <span className="font-bold text-vegYellow">
                    repaginada no site
                  </span>{" "}
                  no seu tempo livre – afinal, todo programador precisa de um
                  bom portfólio, certo?
                </p>
                <p className="text-xl text-vegBrown-light leading-relaxed mt-4">
                  A Gabriel Pastel ganhou então uma{" "}
                  <span className="font-bold text-vegOrange">nova missão</span>:
                  promover uma alimentação{" "}
                  <span className="font-bold text-vegGreen">
                    deliciosa, ética e sustentável
                  </span>{" "}
                  através de pastéis 100% veganos.
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
                <div className="inline-block rounded-full bg-vegYellow/20 px-5 py-2 text-lg font-semibold text-vegYellow mb-4 shadow-md">
                  HOJE
                </div>
                <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                  UM PROJETO COM PROPÓSITO
                </h2>
                <p className="text-xl text-vegBrown-light leading-relaxed">
                  Apesar de ter nascido de um projeto despretensioso de ensino
                  médio, a nova versão da{" "}
                  <span className="font-bold text-vegGreen">
                    Gabriel Pastel
                  </span>{" "}
                  carrega uma{" "}
                  <span className="font-bold text-vegYellow">
                    mensagem de amor e cuidado
                  </span>{" "}
                  com o planeta e os animais.
                </p>
                <p className="text-xl text-vegBrown-light leading-relaxed mt-4">
                  Além disso, reflete um{" "}
                  <span className="font-bold text-vegOrange">
                    grande avanço tecnológico
                  </span>
                  : o que antes era feito com{" "}
                  <span className="font-bold text-vegYellow">
                    HTML e CSS básicos
                  </span>
                  , agora é uma{" "}
                  <span className="font-bold text-vegGreen">
                    aplicação robusta
                  </span>{" "}
                  desenvolvida em React e TypeScript, integrada com banco de
                  dados e outras tecnologias de ponta.
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
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark">
            NOSSOS VALORES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 space-y-4">
              <div className="w-20 h-20 bg-vegYellow/15 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Heart className="h-10 w-10 text-vegYellow" />
              </div>
              <h3 className="text-2xl font-holtwood text-vegYellow">
                COMPAIXÃO
              </h3>
              <p className="text-vegBrown-light leading-relaxed">
                Acreditamos que{" "}
                <span className="font-bold text-vegGreen">
                  todos os seres merecem respeito
                </span>{" "}
                e compaixão. Por isso, nossos pastéis são{" "}
                <span className="font-bold text-vegYellow">
                  100% livres de crueldade animal
                </span>
                .
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 space-y-4">
              <div className="w-20 h-20 bg-vegGreen/15 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Leaf className="h-10 w-10 text-vegGreen" />
              </div>
              <h3 className="text-2xl font-holtwood text-vegGreen">
                SUSTENTABILIDADE
              </h3>
              <p className="text-vegBrown-light leading-relaxed">
                Nosso{" "}
                <span className="font-bold text-vegGreen">
                  compromisso com o planeta
                </span>{" "}
                se reflete em cada aspecto do nosso negócio, desde os{" "}
                <span className="font-bold text-vegYellow">ingredientes</span>{" "}
                até as{" "}
                <span className="font-bold text-vegOrange">
                  embalagens biodegradáveis
                </span>
                .
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 space-y-4">
              <div className="w-20 h-20 bg-vegOrange/15 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Utensils className="h-10 w-10 text-vegOrange" />
              </div>
              <h3 className="text-2xl font-holtwood text-vegOrange">SABOR</h3>
              <p className="text-vegBrown-light leading-relaxed">
                Provamos que comida{" "}
                <span className="font-bold text-vegGreen">
                  ética e sustentável
                </span>{" "}
                também pode ser deliciosa. Nossos pastéis são uma{" "}
                <span className="font-bold text-vegYellow">
                  explosão de sabores
                </span>{" "}
                que conquistam até os mais céticos.
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
              <div className="inline-block rounded-full bg-vegGreen/15 px-5 py-2 text-lg font-semibold text-vegGreen mb-4 shadow-md">
                TECNOLOGIA
              </div>
              <h2 className="text-4xl font-holtwood mb-6 text-vegBrown-dark">
                DE HTML BÁSICO A REACT
              </h2>
              <p className="text-lg text-vegBrown-light mb-6 leading-relaxed">
                A{" "}
                <span className="font-bold text-vegYellow">
                  evolução da Gabriel Pastel
                </span>{" "}
                também reflete o{" "}
                <span className="font-bold text-vegGreen">
                  crescimento profissional
                </span>{" "}
                do seu criador. O que começou com HTML e CSS básicos se
                transformou em uma{" "}
                <span className="font-bold text-vegOrange">
                  aplicação moderna
                </span>{" "}
                construída com:
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
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-3 justify-center">
            <Sparkles className="w-12 h-12 text-vegYellow" />
            FAÇA PARTE DESSA HISTÓRIA
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light max-w-2xl mx-auto leading-relaxed">
            A <span className="font-bold text-vegGreen">Gabriel Pastel</span>{" "}
            continua evoluindo e queremos que você{" "}
            <span className="font-bold text-vegYellow">
              faça parte dessa jornada
            </span>
            . Experimente nossos{" "}
            <span className="font-bold text-vegOrange">
              deliciosos pastéis veganos
            </span>{" "}
            e ajude a escrever os próximos capítulos dessa história!
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
