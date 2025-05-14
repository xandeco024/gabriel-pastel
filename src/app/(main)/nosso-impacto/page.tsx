"use client"

import OrderNowBtn from '@/components/ui/order-now-btn';
import { Leaf, PawPrint, ThermometerSun, Droplet, Recycle, Heart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react';

export default function OurImpactPage() {

    const [eatenPasteis, setEatenPasteis] = useState(0);
    const [savedAnimals, setSavedAnimals] = useState(0);
    const [savedWaterL, setSavedWaterL] = useState(0);
    const [savedCO2Kg, setSavedCO2Kg] = useState(0);

    const lifePerPastel = 1/700;
    const waterPerPastelLiters = 1500;
    const co2PerPastelKg = 6;

    const calculateImpact = () => {
        setSavedAnimals(eatenPasteis * lifePerPastel);
        setSavedWaterL(eatenPasteis * waterPerPastelLiters);
        setSavedCO2Kg(eatenPasteis * co2PerPastelKg);
    }

    return (
        <div className="min-h-screen mt-24 pt-24 flex flex-col items-center space-y-48">
            {/* page header container */}
            <div className="flex flex-col items-center w-2/3 text-center">
                <h1 className="text-4xl font-holtwood">NOSSO IMPACTO NO MUNDO</h1>
                <p className="text-2xl font-gluten mt-10 text-vegBrown-light">Na Gabriel Pastel, acreditamos que pequenas escolhas diárias podem transformar o mundo. Cada pastel vegano que você escolhe faz uma grande diferença para os animais, o planeta e sua saúde.</p>
                {/* badges */}
                <div className="flex flex-row gap-4 mt-8">
                    <div className="bg-vegYellow/15 p-2 px-4 rounded-full flex items-center gap-2">
                        <PawPrint className="text-vegYellow-light" size={20}/>
                        <p className="text-vegYellow font-light">Bem-estar animal</p>
                    </div>
                    <div className="bg-vegGreen/15 p-2 px-4 rounded-full flex items-center gap-2">
                        <Leaf className="text-vegGreen-light" size={20}/>
                        <p className="text-vegGreen-light font-light">Sustentabilidade</p>
                    </div>
                    <div className="bg-vegYellow/15 p-2 px-4 rounded-full flex items-center gap-2">
                        <ThermometerSun className="text-vegYellow-light" size={20}/>
                        <p className="text-vegYellow font-light">Redução de CO²</p>
                    </div>
                    <div className="bg-vegGreen/15 p-2 px-4 rounded-full flex items-center gap-2">
                        <Droplet className="text-vegGreen-light" size={20}/>
                        <p className="text-vegGreen-light font-light">Economia de água</p>
                    </div>
                </div>
            </div>

            {/* bem estar animal */}
            <div className="grid grid-cols-2 gap-12 items-center w-full text-center px-60">
                {/* imagem */}
                <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg">
                    <Image 
                        src="/farm-sanctuary-credit_jo-anne_mcarthur.webp"
                        alt="Fazenda Santuário - Crédito: Jo-Anne McArthur"
                        fill
                        className="object-cover"
                        sizes="(max-width: 600px) 100vw, 600px"
                    />
                </div>

                {/* texto */}
                <div className="flex flex-col w-full text-left space-y-4">
                    <h2 className="text-3xl font-holtwood">BEM-ESTAR ANIMAL</h2>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">Milhões de animais sofrem em condições cruéis para sustentar o consumo de carne. Cada ano, bilhões de animais são criados em condições de confinamento, privados de suas necessidades básicas e comportamentos naturais.</p>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">Na Gabriel Pastel, cada pastel é feito sem crueldade, só com sabor, amor, e respeito à vida. Nossos ingredientes são 100% vegetais, garantindo que nenhum animal seja prejudicado para o seu lanche.</p>                    
                    <div className="bg-vegYellow/15 p-4 rounded-lg border-l-4 border-vegYellow">
                        <p className="text-vegYellow font-light">
                            Escolher um pastel sem carne é dizer não à crueldade — uma mordida de cada vez.
                        </p>
                    </div>
                </div>
            </div>

            {/* economia e redução */}
            <div className="grid grid-cols-2 gap-12 items-center w-full text-center bg-vegGreen/10 p-24 px-60">
                {/* texto */}
                <div className="flex flex-col w-full text-left space-y-4">
                    <h2 className="text-3xl font-holtwood">Economia e Redução</h2>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">
                        Produzir 1kg de carne de vaca consome aproximadamente 15.000L de água, e libera 60kg de gases de efeito estufa.
                    </p>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">
                        Já 1kg de proteína de soja, consome aproximadamente 1.400L de água, e de quebra planta ainda absorve CO².                    
                    </p>
                    {/* cards */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg space-y-2">
                            <Droplet className="text-vegGreen" size={40}/>
                            <p className="text-vegBrown text-md font-holtwood">
                                91% menos água
                            </p>
                            <p className="text-vegBrown-light text-sm font-light">
                                Comparado a carne bovina, a soja gasta quase 10x menos água.
                            </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg space-y-2">
                            <ThermometerSun className="text-vegYellow" size={40}/>
                            <p className="text-vegBrown text-md font-holtwood">
                                97% menos CO²
                            </p>
                            <p className="text-vegBrown-light text-sm font-light">
                                A soja emite uma fração do carbono da carne, e ainda ajuda a captura-lo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* imagem */}
                <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg justify-self-end">
                    <Image 
                        src="/Kristen-MacMillanleft_Lor.jpg"
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
                <div className="flex flex-col w-full text-left space-y-4">
                    <h2 className="text-3xl font-holtwood">SUSTENTABILIDADE</h2>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">
                        Na Gabriel Pastel, usamos embalagens biodegradáveis de papel, pensando no cuidado com o planeta.
                    </p>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">
                        Os resíduos orgânicos gerados aqui são destinados a programas de compostagem, enquanto os recicláveis
                        seguem para reciclagem, garantindo um descarte responsável e sustentável!
                    </p>
                    {/* badges */}
                    <div className="flex flex-row gap-4">
                        <div className="bg-vegGreen/15 p-2 px-4 rounded-full flex items-center gap-2">
                            <Recycle className="text-vegGreen-light" size={20}/>
                            <p className="text-vegGreen-light font-light">Embalagens biodegradáveis</p>
                        </div>

                        <div className="bg-vegYellow/15 p-2 px-4 rounded-full flex items-center gap-2">
                            <Leaf className="text-vegYellow-light" size={20}/>
                            <p className="text-vegYellow font-light">Compostagem</p>
                        </div>

                        <div className="bg-vegGreen/15 p-2 px-4 rounded-full flex items-center gap-2">
                            <Recycle className="text-vegGreen-light" size={20}/>
                            <p className="text-vegGreen-light font-light">Reciclagem</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* O que os bichinhos dizem Section */}
            <div className="flex flex-col items-center w-full text-center px-60 space-y-12">
                <div className="flex flex-col items-center w-2/3 space-y-4">
                    <h2 className="text-3xl font-holtwood">O QUE OS BICHINHOS DIZEM?</h2>
                    <p className="text-xl font-gluten text-vegBrown-light font-light">
                        Conheça alguns dos animais que foram poupados graças às escolhas alimentares conscientes dos nossos
                        clientes. Cada pastel vegano que você come ajuda a salvar vidas como estas!
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-8 w-full">
                    {/* Animal 1 mimosa */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="relative h-48 overflow-hidden bg-vegYellow/20">
                            <Image
                                src="/testimony-animals/mother-and-baby-cow-in-grass-mimosa.jpg"
                                alt="Mimosa a vaca"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-holtwood mb-2 text-vegYellow">MIMOSA</h3>
                            <p className="text-vegBrown-light font-light mb-4">
                                &quot;Graças à Gabriel Pastel, meu leite agora alimenta meus filhotes. Finalmente, sou mãe de verdade.&quot;
                            </p>
                            <div className="flex items-center text-sm text-vegGreen">
                                <Heart className="w-4 h-4 mr-1" />
                                <span>Vaca resgatada de fazenda leiteira</span>
                            </div>
                        </div>
                    </div>

                    {/* Animal 2 nilda */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="relative h-48 overflow-hidden bg-vegYellow/20">
                            <Image
                                src="/testimony-animals/Wing-clipping_1-nilda.webp"
                                alt="Nilda a galinha"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-holtwood mb-2 text-vegYellow">NILDA</h3>
                            <p className="text-vegBrown-light font-light mb-4">
                                &quot;Minhas asas não são mais cortadas para caber na gaiola. Hoje, eu voo - do meu jeito.&quot;
                            </p>
                            <div className="flex items-center text-sm text-vegGreen">
                                <Heart className="w-4 h-4 mr-1" />
                                <span>Galinha resgatada de granja industrial</span>
                            </div>
                        </div>
                    </div>

                    {/* Animal 3 guilherme */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="relative h-48 overflow-hidden bg-vegYellow/20">
                            <Image
                                src="/testimony-animals/Porcupine-fish-Diodon-hystox-guilherme.webp"
                                alt="Guilherme o peixe"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-holtwood mb-2 text-vegYellow">GUILHERME</h3>
                            <p className="text-vegBrown-light font-light mb-4">&quot;Blú blú.&quot;</p>
                            <div className="flex items-center text-sm text-vegGreen">
                                <Heart className="w-4 h-4 mr-1" />
                                <span>Peixe que continua nadando livremente</span>
                            </div>
                        </div>
                    </div>

                    {/* Animal 4 jorge e zoe */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="relative h-48 overflow-hidden bg-vegYellow/20">
                            <Image
                                src="/testimony-animals/porquinho-casal-jorge-zoe.webp"
                                alt="Jorge e Zoe os porquinhos"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-holtwood mb-2 text-vegYellow">JORGE E ZOE</h3>
                            <p className="text-vegBrown-light font-light mb-4">
                                &quot;Agora eu consigo aproveitar a lama com minha família sem me preocupar em virarmos bacon!&quot;
                            </p>
                            <div className="flex items-center text-sm text-vegGreen">
                                <Heart className="w-4 h-4 mr-1" />
                                <span>Porquinhos resgatados de fazenda industrial</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contador de Impacto - New Section */}
            <div className=" w-full py-16 md:py-24 bg-vegGreen/10">
                <div className="mx-auto px-4     md:px-6 text-center">
                    <h2 className="text-3xl font-holtwood mb-12">NOSSO IMPACTO EM NÚMEROS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-vegYellow">+22</div>
                        <p className="text-lg text-vegBrown-light">Vidas animais poupadas</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-vegYellow">23,4M</div>
                        <p className="text-lg text-vegBrown-light">Litros de água economizados</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-vegYellow">93,6T</div>
                        <p className="text-lg text-vegBrown-light">CO² não emitido</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-vegYellow">1,56T</div>
                        <p className="text-lg text-vegBrown-light">Resíduos evitados com embalagens</p>
                    </div>
                    </div>
                </div>
            </div>


            {/* Calculadora de Impacto - New Section */}
            <div className="py-16 md:py-24">
                <div className="mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-vegYellow p-6 text-white text-center">
                        <h2 className="text-2xl font-holtwood">CALCULE SEU IMPACTO POSITIVO</h2>
                        <p className="mt-2">Descubra quanto você já ajudou o planeta comendo pastéis veganos!</p>
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
                                placeholder='hmmm pasteis'
                                onChange={(e) => setEatenPasteis(Number(e.target.value))}
                                className="w-full px-4 h-10 border border-vegYellow/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vegYellow"
                                aria-label="Quantos pastéis veganos você já comeu?"
                            />
                        </div>
                        <div className="flex items-end">
                            <button className="w-full bg-vegGreen text-white px-4 h-10 rounded-lg hover:bg-vegGreen/90 transition-colors" onClick={calculateImpact}>
                                Calcular Impacto
                            </button>
                        </div>
                        </div>

                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <div className="bg-vegYellow/10 p-4 rounded-lg text-center space-y-2">
                            <Heart className="w-8 h-8 text-vegYellow mx-auto" />
                            <div className="text-xl font-holtwood text-vegYellow">{savedAnimals.toFixed(2)}</div>
                            <p className="text-sm text-vegBrown-light">Animais poupados</p>
                        </div>
                        <div className="bg-vegGreen/10 p-4 rounded-lg text-center space-y-2">
                            <Droplet className="w-8 h-8 text-vegGreen mx-auto" />
                            <div className="text-xl font-holtwood text-vegGreen">{savedWaterL}L</div>
                            <p className="text-sm text-vegBrown-light">Água economizada</p>
                        </div>
                        <div className="bg-vegYellow/10 p-4 rounded-lg text-center space-y-2">
                            <ThermometerSun className="w-8 h-8 text-vegYellow mx-auto" />
                            <div className="text-xl font-holtwood text-vegYellow">{savedCO2Kg}kg</div>
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
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-holtwood text-vegBrown-dark md:text-3xl mb-6">FAÇA PARTE DESSA MUDANÇA</h2>
                    <p className="text-lg text-vegBrown-light max-w-2xl mx-auto mb-8">
                        Cada pastel vegano que você escolhe é um passo em direção a um mundo mais sustentável, ético e saudável.
                        Junte-se a nós nessa jornada!
                    </p>
                    <OrderNowBtn size='xl2' bgColor='bg-vegYellow' borderColor='border-vegYellow' textColor='text-white' hoverBgColor='hover:bg-vegYellow hover:border-vegYellow' hoverTextColor='hover:text-white'/>
                </div>
            </div>
        </div>
    )
}

