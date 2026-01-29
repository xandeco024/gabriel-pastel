"use client";

import OrderNowBtn from "@/components/ui/order-now-btn";
import {
  Leaf,
  PawPrint,
  ThermometerSun,
  Droplet,
  Recycle,
  Heart,
  TrendingDown,
  Sprout,
  Wind,
  Calculator,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function OurImpactPage() {
  const [eatenPasteis, setEatenPasteis] = useState(0);
  const [savedAnimals, setSavedAnimals] = useState(0);
  const [savedWaterL, setSavedWaterL] = useState(0);
  const [savedCO2Kg, setSavedCO2Kg] = useState(0);

  const lifePerPastel = 1 / 700;
  const waterPerPastelLiters = 1500;
  const co2PerPastelKg = 6;

  const calculateImpact = () => {
    setSavedAnimals(eatenPasteis * lifePerPastel);
    setSavedWaterL(eatenPasteis * waterPerPastelLiters);
    setSavedCO2Kg(eatenPasteis * co2PerPastelKg);
  };

  return (
    <div className="min-h-screen mt-24 pt-24 flex flex-col items-center space-y-48">
      {/* page header container */}
      <div className="flex flex-col items-center w-2/3 text-center">
        <h1 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-4 justify-center">
          NOSSO IMPACTO NO MUNDO
          <Sparkles className="w-12 h-12 text-vegYellow" />
        </h1>
        <p className="text-2xl font-gluten mt-6 text-vegBrown-light leading-relaxed">
          Na <span className="font-bold text-vegGreen">Gabriel Pastel</span>,
          acreditamos que{" "}
          <span className="font-bold text-vegYellow">
            pequenas escolhas diárias
          </span>{" "}
          podem transformar o mundo. Cada pastel vegano que você escolhe faz uma{" "}
          <span className="font-bold text-vegOrange">grande diferença</span>{" "}
          para os animais, o planeta e sua saúde.
        </p>
        {/* badges */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
          <div className="bg-vegYellow/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegYellow/25 transition-all duration-200 hover:scale-105">
            <PawPrint className="text-vegYellow" size={24} />
            <p className="text-vegYellow font-semibold">Bem-estar animal</p>
          </div>
          <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegGreen/25 transition-all duration-200 hover:scale-105">
            <Leaf className="text-vegGreen" size={24} />
            <p className="text-vegGreen font-semibold">Sustentabilidade</p>
          </div>
          <div className="bg-vegOrange/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegOrange/25 transition-all duration-200 hover:scale-105">
            <ThermometerSun className="text-vegOrange" size={24} />
            <p className="text-vegOrange font-semibold">Redução de CO²</p>
          </div>
          <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegGreen/25 transition-all duration-200 hover:scale-105">
            <Droplet className="text-vegGreen-light" size={24} />
            <p className="text-vegGreen-light font-semibold">
              Economia de água
            </p>
          </div>
        </div>
      </div>

      {/* bem estar animal */}
      <div className="grid grid-cols-2 gap-12 items-center w-full text-center px-60">
        {/* imagem */}
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/testimony-animals/farm-sanctuary-credit_jo-anne_mcarthur.webp"
            alt="Fazenda Santuário - Crédito: Jo-Anne McArthur"
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>

        {/* texto */}
        <div className="flex flex-col w-full text-left space-y-6">
          <h2 className="text-4xl font-holtwood text-vegBrown-dark flex items-center gap-3">
            <PawPrint className="w-10 h-10 text-vegYellow" />
            BEM-ESTAR ANIMAL
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            <span className="font-bold text-vegRed">Milhões de animais</span>{" "}
            sofrem em condições cruéis para sustentar o consumo de carne. Cada
            ano,{" "}
            <span className="font-bold text-vegRed">bilhões de animais</span>{" "}
            são criados em condições de confinamento, privados de suas
            necessidades básicas e comportamentos naturais.
          </p>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Na <span className="font-bold text-vegGreen">Gabriel Pastel</span>,
            cada pastel é feito{" "}
            <span className="font-bold text-vegYellow">sem crueldade</span>, só
            com sabor, amor, e respeito à vida. Nossos ingredientes são{" "}
            <span className="font-bold text-vegGreen">100% vegetais</span>,
            garantindo que nenhum animal seja prejudicado para o seu lanche.
          </p>
          <div className="bg-vegYellow/20 p-6 rounded-lg border-l-4 border-vegYellow shadow-md">
            <p className="text-vegBrown-dark font-semibold text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-vegYellow" />
              Escolher um pastel sem carne é dizer não à crueldade — uma mordida
              de cada vez.
            </p>
          </div>
        </div>
      </div>

      {/* economia e redução */}
      <div className="grid grid-cols-2 gap-12 items-center w-full text-center bg-vegGreen/10 p-24 px-60">
        {/* texto */}
        <div className="flex flex-col w-full text-left space-y-6">
          <h2 className="text-4xl font-holtwood text-vegBrown-dark flex items-center gap-3">
            <TrendingDown className="w-10 h-10 text-vegYellow" />
            Economia e Redução
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Produzir{" "}
            <span className="font-bold text-vegRed">1kg de carne de vaca</span>{" "}
            consome aproximadamente{" "}
            <span className="font-bold text-vegRed">15.000L de água</span>, e
            libera{" "}
            <span className="font-bold text-vegRed">
              60kg de gases de efeito estufa
            </span>
            .
          </p>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Já{" "}
            <span className="font-bold text-vegGreen">
              1kg de proteína de soja
            </span>
            , consome aproximadamente{" "}
            <span className="font-bold text-vegGreen">1.400L de água</span>, e
            de quebra a planta ainda{" "}
            <span className="font-bold text-vegYellow">absorve CO²</span>.
          </p>
          {/* cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg space-y-3 shadow-md hover:scale-105 transition-all duration-200">
              <Droplet className="text-vegGreen" size={48} />
              <p className="text-vegBrown text-lg font-holtwood">
                91% menos água
              </p>
              <p className="text-vegBrown-light text-sm">
                Comparado à carne bovina, a soja gasta quase 10x menos água.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg space-y-3 shadow-md hover:scale-105 transition-all duration-200">
              <ThermometerSun className="text-vegYellow" size={48} />
              <p className="text-vegBrown text-lg font-holtwood">
                97% menos CO²
              </p>
              <p className="text-vegBrown-light text-sm">
                A soja emite uma fração do carbono da carne, e ainda ajuda a
                capturá-lo.
              </p>
            </div>
          </div>
        </div>

        {/* imagem */}
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg justify-self-end">
          <Image
            src="/testimony-animals/Kristen-MacMillanleft_Lor.jpg"
            alt="Moças vendo plantação de soja - Crédito: Kristen MacMillan"
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
      </div>

      {/* Sustentabilidade Section */}
      <div className="grid grid-cols-2 gap-12 items-center w-full text-center px-60">
        {/* imagem */}
        <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg">
          <Image
            src="/shutterstock_2205879965-eco-friendly-food-packaging.jpg"
            alt="Símbolo de reciclagem"
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </div>
        {/* texto */}
        <div className="flex flex-col w-full text-left space-y-6">
          <h2 className="text-4xl font-holtwood text-vegBrown-dark flex items-center gap-3">
            <Leaf className="w-10 h-10 text-vegYellow" />
            SUSTENTABILIDADE
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Na <span className="font-bold text-vegGreen">Gabriel Pastel</span>,
            usamos{" "}
            <span className="font-bold text-vegYellow">
              embalagens biodegradáveis de papel
            </span>
            , pensando no cuidado com o planeta.
          </p>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Os{" "}
            <span className="font-bold text-vegGreen">resíduos orgânicos</span>{" "}
            gerados aqui são destinados a programas de{" "}
            <span className="font-bold text-vegYellow">compostagem</span>,
            enquanto os recicláveis seguem para{" "}
            <span className="font-bold text-vegGreen">reciclagem</span>,
            garantindo um descarte responsável e sustentável!
          </p>
          {/* badges */}
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegGreen/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Recycle className="text-vegGreen" size={24} />
              <p className="text-vegGreen font-semibold">
                Embalagens biodegradáveis
              </p>
            </div>

            <div className="bg-vegYellow/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegYellow/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Leaf className="text-vegYellow" size={24} />
              <p className="text-vegYellow font-semibold">Compostagem</p>
            </div>

            <div className="bg-vegOrange/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegOrange/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Recycle className="text-vegOrange" size={24} />
              <p className="text-vegOrange font-semibold">Reciclagem</p>
            </div>
          </div>
        </div>
      </div>

      {/* O que os bichinhos dizem Section */}
      <div className="flex flex-col items-center w-full text-center px-60 space-y-12">
        <div className="flex flex-col items-center w-2/3 space-y-6">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-3 justify-center">
            <Heart className="w-12 h-12 text-vegYellow" />O QUE OS BICHINHOS
            DIZEM?
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light leading-relaxed">
            Conheça alguns dos animais que foram{" "}
            <span className="font-bold text-vegGreen">poupados</span> graças às{" "}
            <span className="font-bold text-vegYellow">
              escolhas alimentares conscientes
            </span>{" "}
            dos nossos clientes. Cada pastel vegano que você come ajuda a{" "}
            <span className="font-bold text-vegOrange">salvar vidas</span> como
            estas!
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 w-full">
          {/* Animal 1 mimosa */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-vegYellow/30">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/testimony-animals/mother-and-baby-cow-in-grass-mimosa.jpg"
                alt="Mimosa a vaca"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-vegYellow/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-vegYellow" />
                </div>
                <h3 className="text-2xl font-holtwood text-vegYellow">
                  MIMOSA
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;Graças à Gabriel Pastel, meu leite agora alimenta meus
                filhotes. Finalmente, sou mãe de verdade.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegGreen pt-2 border-t border-vegGreen/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  Vaca resgatada de fazenda leiteira
                </span>
              </div>
            </div>
          </div>

          {/* Animal 2 nilda */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-vegGreen/30">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/testimony-animals/Wing-clipping_1-nilda.webp"
                alt="Nilda a galinha"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-vegGreen/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-vegGreen" />
                </div>
                <h3 className="text-2xl font-holtwood text-vegGreen">NILDA</h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;Minhas asas não são mais cortadas para caber na gaiola.
                Hoje, eu voo - do meu jeito.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegGreen pt-2 border-t border-vegGreen/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  Galinha resgatada de granja industrial
                </span>
              </div>
            </div>
          </div>

          {/* Animal 3 guilherme */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-vegOrange/30">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/testimony-animals/Porcupine-fish-Diodon-hystox-guilherme.webp"
                alt="Guilherme o peixe"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-vegOrange/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-vegOrange" />
                </div>
                <h3 className="text-2xl font-holtwood text-vegOrange">
                  GUILHERME
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;Blú blú.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegOrange pt-2 border-t border-vegOrange/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  Peixe que continua nadando livremente
                </span>
              </div>
            </div>
          </div>

          {/* Animal 4 jorge e zoe */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-vegYellow/30">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/testimony-animals/porquinho-casal-jorge-zoe.webp"
                alt="Jorge e Zoe os porquinhos"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-vegYellow/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-vegYellow" />
                </div>
                <h3 className="text-2xl font-holtwood text-vegYellow">
                  JORGE E ZOE
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;Agora eu consigo aproveitar a lama com minha família sem
                me preocupar em virarmos bacon!&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegYellow pt-2 border-t border-vegYellow/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  Porquinhos resgatados de fazenda industrial
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contador de Impacto - New Section */}
      <div className="w-full py-16 md:py-24 bg-vegGreen/10">
        <div className="mx-auto px-4 md:px-6 text-center space-y-8">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark">
            NOSSO IMPACTO EM NÚMEROS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <PawPrint className="w-10 h-10 text-vegGreen mx-auto" />
              <div className="text-5xl font-bold text-vegGreen">+22</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                Vidas animais poupadas
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Droplet className="w-10 h-10 text-vegYellow mx-auto" />
              <div className="text-5xl font-bold text-vegYellow">23,4M</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                Litros de água economizados
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Wind className="w-10 h-10 text-vegOrange mx-auto" />
              <div className="text-5xl font-bold text-vegOrange">93,6T</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                CO² não emitido
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Recycle className="w-10 h-10 text-vegGreen mx-auto" />
              <div className="text-5xl font-bold text-vegGreen">1,56T</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                Resíduos evitados com embalagens
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculadora de Impacto - New Section */}
      <div className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-vegYellow p-8 text-white text-center">
              <h2 className="text-3xl font-holtwood flex items-center gap-3 justify-center">
                <Calculator className="w-8 h-8" />
                CALCULE SEU IMPACTO POSITIVO
              </h2>
              <p className="mt-3 text-lg">
                Descubra quanto você já ajudou o planeta comendo pastéis
                veganos!
              </p>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#555] mb-2">
                    Quantos pastéis veganos você já comeu?
                  </label>
                  <input
                    type="number"
                    name="eatenPasteis"
                    min="1"
                    placeholder="hmmm pasteis"
                    onChange={(e) => setEatenPasteis(Number(e.target.value))}
                    className="w-full px-4 h-10 border border-vegYellow/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vegYellow"
                    aria-label="Quantos pastéis veganos você já comeu?"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    className="w-full bg-vegGreen text-white px-4 h-10 rounded-lg hover:bg-vegGreen/90 transition-colors"
                    onClick={calculateImpact}
                  >
                    Calcular Impacto
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="bg-vegYellow/10 p-4 rounded-lg text-center space-y-2">
                  <Heart className="w-8 h-8 text-vegYellow mx-auto" />
                  <div className="text-xl font-holtwood text-vegYellow">
                    {savedAnimals.toFixed(2)}
                  </div>
                  <p className="text-sm text-vegBrown-light">
                    Animais poupados
                  </p>
                </div>
                <div className="bg-vegGreen/10 p-4 rounded-lg text-center space-y-2">
                  <Droplet className="w-8 h-8 text-vegGreen mx-auto" />
                  <div className="text-xl font-holtwood text-vegGreen">
                    {savedWaterL}L
                  </div>
                  <p className="text-sm text-vegBrown-light">
                    Água economizada
                  </p>
                </div>
                <div className="bg-vegYellow/10 p-4 rounded-lg text-center space-y-2">
                  <ThermometerSun className="w-8 h-8 text-vegYellow mx-auto" />
                  <div className="text-xl font-holtwood text-vegYellow">
                    {savedCO2Kg}kg
                  </div>
                  <p className="text-sm text-vegBrown-light">CO² não emitido</p>
                </div>
              </div>

              {eatenPasteis >= 100000 && (
                <div className="mt-8 text-center">
                  <p className="text-lg text-vegBrown-light">
                    Você realmente gosta de pasteis hein?!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-vegYellow/10 w-full">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark mb-6 flex items-center gap-3 justify-center">
            <Sparkles className="w-12 h-12 text-vegYellow" />
            FAÇA PARTE DESSA MUDANÇA
          </h2>
          <p className="text-xl font-gluten text-vegBrown-light max-w-2xl mx-auto leading-relaxed">
            Cada pastel vegano que você escolhe é um{" "}
            <span className="font-bold text-vegGreen">
              passo em direção a um mundo mais sustentável
            </span>
            , <span className="font-bold text-vegYellow">ético</span> e{" "}
            <span className="font-bold text-vegOrange">saudável</span>. Junte-se
            a nós nessa jornada!
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
