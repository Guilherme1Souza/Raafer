import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';
import styled from 'styled-components';

const Numbers = styled.div`
  position: absolute;
  bottom: -50px; /* metade da altura do card */
  left: 50%;
  transform: translateX(-50%);
  width: 851px;
  height: 99px;
  border-radius: 0 10px;
  background: #FFF;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;


const Estatistics = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  text-align: center;
 

  strong {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 4px;
    display: block;
  }

  p {
    color: #828282;
    font-size: 16px;
    font-weight: 700;
  }
  `;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Inicio | Raafer</title>
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
      </Helmet>
      <HeroComponent
        title="Do campo para a sua mesa, com qualidade e frescor incomparáveis."
        subtitle="Uma vida mais saudável começa com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."
        buttonText="Conheça nossos clientes"
      />
      <div style={{ position: 'relative' }}>
        <Estatistics>
          <Numbers>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div>
                <strong>+ 1.500,00</strong>
                <p>Frutas entregues</p>
              </div>
              <div>
                <strong>+ 690</strong>
                <p>Clientes atendidos</p>
              </div>
              <div>
                <strong>+ 25.000,00</strong>
                <p>Vidas transformadas</p>
              </div>
            </div>
          </Numbers>
        </Estatistics>
      </div>
    </>
  );
}

export default Home;