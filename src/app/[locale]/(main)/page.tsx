import React from 'react';
import Banner from '@/components/Banner/Banner';
import Ticker from '@/components/Ticker/Ticker';
import PastelYourWay from '@/components/pastel-your-way/pastel-your-way';
import ArmazemDoCampo from '@/components/armazem-do-campo/armazem-do-campo';

export default function Page() {
    return (
        <div>
            <Banner/>
            <Ticker/>
            <PastelYourWay/>
            <ArmazemDoCampo/>
        </div>
    )
}