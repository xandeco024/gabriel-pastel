import { Leaf, PawPrint, ThermometerSun, Droplet } from 'lucide-react'
import Image from 'next/image'

export default function OurImpactPage() {
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
            <div className="grid grid-cols-2 gap-12 items-center w-full text-center px-48">
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
            <div className="grid grid-cols-2 gap-12 items-center w-full text-center bg-vegGreen/10 p-24 px-48">
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
            
        </div>
    )
}

