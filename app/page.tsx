import React from 'react';
import Header from '@/app/components/Header/Header';
import Banner from '@/app/components/Banner/Banner';
import Ticker from '@/app/components/Ticker/Ticker';
import PastelYourWay from '@/app/components/pastel-your-way/pastel-your-way';
import ArmazemDoCampo from '@/app/components/armazem-do-campo/armazem-do-campo';
import Footer from '@/app/components/Footer/Footer';

export default function Page() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Ticker/>
            <PastelYourWay/>
            <ArmazemDoCampo/>
            <Footer/>
        </div>
    )
}