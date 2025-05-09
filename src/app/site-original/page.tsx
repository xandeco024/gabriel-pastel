import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './GabrielsPastel.module.css';
import Link from 'next/link';

export default function OriginalSite() {
  return (
    <>
      <Head>
        <title>Gabriel's Pastel</title>
        <link rel="shortcut icon" href="/o/LOGO.png" type="image/png" />
      </Head>
      <div className={styles.header}>
        <div>            
          <img src="/o/LOGO.png" width="150" style={{marginRight: '90%', marginTop: 0}} alt="Gabriel's Pastel Logo"/>
        </div>
        <div>
          <h1 style={{marginTop: '45px', fontFamily: 'AdumusRegular, sans-serif'}}>Gabriel's Pastel</h1>
        </div>
      </div>
      <div className={styles.nav}>
        <a style={{marginRight: '55.3%'}} href="Home.html">Gabriel's Pastel</a>
        <a href="">WhatsApp: +55 11 40028922</a>
        {/* voltar para o gabriel pastel novo */}
        <Link href="/">Voltar para a nova gabriel pastel</Link>
      </div>
      <div className={styles.explaning}>
        <div className={styles.row}>
          <div className={styles.column1}>
            <h3 style={{textAlign:'left', paddingBottom: '60px', fontFamily: 'Cambria, Cochin, Georgia, Times, \'Times New Roman\', serif', fontSize: '40px'}}>O que é Gabriel's Pastel?</h3>
            <p>Com a união de dois Gabrieis, que gostavam de pastéis, surge Gabriel's Pastel. A lanchonete com o melhor pastel da região, e com o preço que cabe no seu bolso.</p>
            <p>"O pastel que te leva até o céu..."</p>  
          </div>
          <img src="/o/pastel-frito.png" width="550" style={{float:'right', margin: '15px', marginRight: '100px', marginTop: '100px'}} alt="Pastel Frito"/>
        </div>
      </div>
      <div className={styles.topsell}>
        <h2 style={{color: '#000000'}}>Pastéis:</h2>
            
        <div className={styles.column}>
          <div>
            <img src="/o/sabores/carne.png" width="450" alt="Pastel de Carne"/>
            <h4>Pastel de Carne</h4>
            <p>Pastel recheado com carne moída.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/queijo.png" width="450" alt="Pastel de Queijo"/>
            <h4>Pastel de Queijo</h4>
            <p>Pastel recheado com queijo derretido.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/calabresa.png" width="450" alt="Pastel de Calabresa"/>
            <h4>Pastel de Calabresa</h4>
            <p>Pastel recheado com calabresa frita.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/4 quejios.png" width="250" alt="Pastel de 4 Queijos"/>
            <h4>Pastel de 4 Queijos</h4>
            <p>Pastel recheado muçarela, requeijão, cheddar e provolone.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/palmito.png" width="450" alt="Pastel de Palmito"/>
            <h4>Pastel de Palmito</h4>
            <p>Pastel recheado com palmito picado.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/pizza.png" width="450" alt="Pastel de Pizza"/>
            <h4>Pastel de Pizza</h4>
            <p>Pastel recheado com queijo derretido, tomate e orégano.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/chocolate.png" width="450" alt="Pastel de Chocolate"/>
            <h4>Pastel de Chocolate</h4>
            <p>Pastel recheado com chocolate derretido.</p>
            <h3>RS$ 9,90</h3> 
          </div>

          <div>
            <img src="/o/sabores/sensaçoes.png" width="450" alt="Pastel de Sensações"/>
            <h4>Pastel de Sensações</h4>
            <p>Pastel recheado com chocolate derretido e pedaços de morango.</p>
            <h3>RS$ 9,90</h3> 
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <h3 style={{fontFamily: 'AdumusRegular, sans-serif'}}>Gabriel's Pastel, Carapicuíba 2022 Todos os direitos reservados a ninguém.</h3>
        <img src="/o/LOGO.png" width="200" alt="Gabriel's Pastel Logo"/>
      </div>
    </>
  );
}