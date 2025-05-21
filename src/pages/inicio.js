import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';

const Home = () => {
    return (
       <>
      <Helmet>
        <title>Quem Somos | Raafer</title>
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
      </Helmet>
       <HeroComponent />
        </>
    );
    }

export default Home;