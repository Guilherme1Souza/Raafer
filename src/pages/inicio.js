import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';
import styled from 'styled-components';
import AnimatedNumber from '../../animated';
import { Search, MoveRight, Droplet, ShoppingBag, Truck } from 'lucide-react';

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

const Process = styled.div`
  font-weight: 600;
  padding-inline: 10.9rem;
  padding-top: 15rem;

  h2 {
     font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
  }
`;

const ProcessLoading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 10.9rem;
`;

const ProcessContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 4.9rem;
  margin: 0 auto;

  h3 {
  text-align: center;
  line-height: 2rem;
  font-size: 18px;
  font-weight: 500;
  width: 142px;
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
                <AnimatedNumber value={1500} />
                <p>Frutas entregues</p>
              </div>
              <div>
                <AnimatedNumber value={690} />
                <p>Clientes atendidos</p>
              </div>
              <div>
                <AnimatedNumber value={25000} />
                <p>Vidas transformadas</p>
              </div>
            </div>
          </Numbers>
        </Estatistics>
      </div>
      <Process>
        <h2>Nosso Processo</h2>
        <ProcessLoading>
          <ProcessContent>
            <Search />
            <h3>Seleção das melhores frutas</h3>
          </ProcessContent>
            <MoveRight />
          <ProcessContent>
            <Droplet />
            <h3>Higienização das frutas</h3>
          </ProcessContent>
            <MoveRight />
          <ProcessContent>
            <ShoppingBag />
            <h3>Montagem do pedido</h3>
          </ProcessContent>
            <MoveRight />
          <ProcessContent>
             <Truck />
            <h3>Saída para entrega</h3>
          </ProcessContent>
        </ProcessLoading>
      </Process>
    </>
  );
}

export default Home;