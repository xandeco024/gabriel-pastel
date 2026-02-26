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
  Wind,
  Calculator,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function OurImpactPage() {
  const t = useTranslations("impact");
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
          {t("title")}
          <Sparkles className="w-12 h-12 text-vegYellow" />
        </h1>
        <p
          className="text-2xl font-gluten mt-6 text-vegBrown-light leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.raw("subtitle") }}
        />
        {/* badges */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
          <div className="bg-vegYellow/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegYellow/25 transition-all duration-200 hover:scale-105">
            <PawPrint className="text-vegYellow" size={24} />
            <p className="text-vegYellow font-semibold">
              {t("badges.animalWelfare")}
            </p>
          </div>
          <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegGreen/25 transition-all duration-200 hover:scale-105">
            <Leaf className="text-vegGreen" size={24} />
            <p className="text-vegGreen font-semibold">
              {t("badges.sustainability")}
            </p>
          </div>
          <div className="bg-vegOrange/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegOrange/25 transition-all duration-200 hover:scale-105">
            <ThermometerSun className="text-vegOrange" size={24} />
            <p className="text-vegOrange font-semibold">
              {t("badges.co2Reduction")}
            </p>
          </div>
          <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-3 hover:bg-vegGreen/25 transition-all duration-200 hover:scale-105">
            <Droplet className="text-vegGreen-light" size={24} />
            <p className="text-vegGreen-light font-semibold">
              {t("badges.waterEconomy")}
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
            {t("animalWelfare.title")}
          </h2>
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t.raw("animalWelfare.description1"),
            }}
          />
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t.raw("animalWelfare.description2"),
            }}
          />
          <div className="bg-vegYellow/20 p-6 rounded-lg border-l-4 border-vegYellow shadow-md">
            <p className="text-vegBrown-dark font-semibold text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-vegYellow" />
              {t("animalWelfare.quote")}
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
            {t("economy.title")}
          </h2>
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("economy.description1") }}
          />
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("economy.description2") }}
          />
          {/* cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg space-y-3 shadow-md hover:scale-105 transition-all duration-200">
              <Droplet className="text-vegGreen" size={48} />
              <p className="text-vegBrown text-lg font-holtwood">
                {t("economy.cards.water.title")}
              </p>
              <p className="text-vegBrown-light text-sm">
                {t("economy.cards.water.description")}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg space-y-3 shadow-md hover:scale-105 transition-all duration-200">
              <ThermometerSun className="text-vegYellow" size={48} />
              <p className="text-vegBrown text-lg font-holtwood">
                {t("economy.cards.co2.title")}
              </p>
              <p className="text-vegBrown-light text-sm">
                {t("economy.cards.co2.description")}
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
            {t("sustainability.title")}
          </h2>
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t.raw("sustainability.description1"),
            }}
          />
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: t.raw("sustainability.description2"),
            }}
          />
          {/* badges */}
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="bg-vegGreen/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegGreen/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Recycle className="text-vegGreen" size={24} />
              <p className="text-vegGreen font-semibold">
                {t("sustainability.badges.biodegradable")}
              </p>
            </div>

            <div className="bg-vegYellow/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegYellow/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Leaf className="text-vegYellow" size={24} />
              <p className="text-vegYellow font-semibold">
                {t("sustainability.badges.composting")}
              </p>
            </div>

            <div className="bg-vegOrange/15 p-3 px-5 rounded-full flex items-center gap-2 hover:bg-vegOrange/25 hover:scale-105 transition-all duration-200 shadow-md">
              <Recycle className="text-vegOrange" size={24} />
              <p className="text-vegOrange font-semibold">
                {t("sustainability.badges.recycling")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* O que os bichinhos dizem Section */}
      <div className="flex flex-col items-center w-full text-center px-60 space-y-12">
        <div className="flex flex-col items-center w-2/3 space-y-6">
          <h2 className="text-5xl font-holtwood text-vegBrown-dark flex items-center gap-3 justify-center">
            <Heart className="w-12 h-12 text-vegYellow" />
            {t("animals.title")}
          </h2>
          <p
            className="text-xl font-gluten text-vegBrown-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("animals.subtitle") }}
          />
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
                  {t("animals.mimosa.name")}
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;{t("animals.mimosa.quote")}&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegGreen pt-2 border-t border-vegGreen/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  {t("animals.mimosa.description")}
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
                <h3 className="text-2xl font-holtwood text-vegGreen">
                  {t("animals.nilda.name")}
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;{t("animals.nilda.quote")}&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegGreen pt-2 border-t border-vegGreen/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  {t("animals.nilda.description")}
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
                  {t("animals.guilherme.name")}
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;{t("animals.guilherme.quote")}&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegOrange pt-2 border-t border-vegOrange/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  {t("animals.guilherme.description")}
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
                  {t("animals.jorgeZoe.name")}
                </h3>
              </div>
              <p className="text-vegBrown-light leading-relaxed italic text-base">
                &quot;{t("animals.jorgeZoe.quote")}&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-vegYellow pt-2 border-t border-vegYellow/20">
                <PawPrint className="w-4 h-4" />
                <span className="font-semibold">
                  {t("animals.jorgeZoe.description")}
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
            {t("numbers.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <PawPrint className="w-10 h-10 text-vegGreen mx-auto" />
              <div className="text-5xl font-bold text-vegGreen">+22</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                {t("numbers.animalsSaved")}
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Droplet className="w-10 h-10 text-vegYellow mx-auto" />
              <div className="text-5xl font-bold text-vegYellow">23,4M</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                {t("numbers.waterSaved")}
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Wind className="w-10 h-10 text-vegOrange mx-auto" />
              <div className="text-5xl font-bold text-vegOrange">93,6T</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                {t("numbers.co2NotEmitted")}
              </p>
            </div>
            <div className="space-y-3 p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
              <Recycle className="w-10 h-10 text-vegGreen mx-auto" />
              <div className="text-5xl font-bold text-vegGreen">1,56T</div>
              <p className="text-lg text-vegBrown-light font-semibold">
                {t("numbers.wasteAvoided")}
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
                {t("calculator.title")}
              </h2>
              <p className="mt-3 text-lg">{t("calculator.subtitle")}</p>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[#555] mb-2">
                    {t("calculator.inputLabel")}
                  </label>
                  <input
                    type="number"
                    name="eatenPasteis"
                    min="1"
                    placeholder={t("calculator.inputPlaceholder")}
                    onChange={(e) => setEatenPasteis(Number(e.target.value))}
                    className="w-full px-4 h-10 border border-vegYellow/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-vegYellow"
                    aria-label={t("calculator.inputLabel")}
                  />
                </div>
                <div className="flex items-end">
                  <button
                    className="w-full bg-vegGreen text-white px-4 h-10 rounded-lg hover:bg-vegGreen/90 transition-colors"
                    onClick={calculateImpact}
                  >
                    {t("calculator.calculateButton")}
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
                    {t("calculator.results.animalsSaved")}
                  </p>
                </div>
                <div className="bg-vegGreen/10 p-4 rounded-lg text-center space-y-2">
                  <Droplet className="w-8 h-8 text-vegGreen mx-auto" />
                  <div className="text-xl font-holtwood text-vegGreen">
                    {savedWaterL}L
                  </div>
                  <p className="text-sm text-vegBrown-light">
                    {t("calculator.results.waterSaved")}
                  </p>
                </div>
                <div className="bg-vegYellow/10 p-4 rounded-lg text-center space-y-2">
                  <ThermometerSun className="w-8 h-8 text-vegYellow mx-auto" />
                  <div className="text-xl font-holtwood text-vegYellow">
                    {savedCO2Kg}kg
                  </div>
                  <p className="text-sm text-vegBrown-light">
                    {t("calculator.results.co2NotEmitted")}
                  </p>
                </div>
              </div>

              {eatenPasteis >= 100000 && (
                <div className="mt-8 text-center">
                  <p className="text-lg text-vegBrown-light">
                    {t("calculator.funnyMessage")}
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
            {t("cta.title")}
          </h2>
          <p
            className="text-xl font-gluten text-vegBrown-light max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("cta.description") }}
          />
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
