import styled from 'styled-components';
import React from 'react';
import { Helmet } from 'react-helmet';

import Raafer from '../images/raafer.jpg'
import Mercado from '../images/mercado.png'

import { HeroComponent } from '../components/Hero';


const About = styled.div`
  padding-block: 80px;
  background: ${({ theme }) => theme.COLORS.WHITE};

  h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    text-align: center;
    font-size: 7.6rem;
    font-weight: 600;
  }

  span {
    display: block;
    color: #1E1E1E;
    font-size: 3.2rem;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 480px;
      font-size: 1rem;
      padding-block: 9.0rem;

      h1 {
        font-size: 5rem;
      }

      span {
        font-size: 2.5rem;
      }
    }
`;

const AboutBox = styled.div`
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 4px 4px 20.8px 0px rgba(0, 0, 0, 0.45);
    width: 864px;
    height: auto;
    flex-shrink: 0;
    margin: 5.0rem auto;
    padding-top: 2.2rem;

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 425px;
      font-size: 1rem;
    }
`;

const AboutImg = styled.div`
    border-radius: 100px;
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    background: url(${Raafer}) center;
    background-size: cover;
    margin: 0 auto;
`;

const Position = styled.div`
    width: 14rem; 
    color: #1E1E1E;
    text-align: center;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    margin: 15px auto;
    line-height: 1.8rem;

    p {
      color: rgba(0, 0, 0, 0.57);
      text-align: center;
      font-size: 1.2rem;
      margin-block: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 480px;
      font-size: 1.8rem;

      p {
        font-size: 1.4rem;
      }
    }
`;

const AboutText = styled.div`
  color: #1E1E1E;
  text-align: center;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.2rem;
  max-width: 640px;
  padding-bottom: 3.0rem;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 450px;
      font-size: 1.6rem;
      padding-inline: 1rem;
  }
`;

const Pillars = styled.div`
background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const PillarsBox = styled.div`
  position: relative;
  background: url(${Mercado}) no-repeat center fixed;
  background-size: contain;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding: 2rem;
  min-height: 60vh;
  z-index: 1;
  margin-bottom: 180px;

`;

const PillarsContent = styled.div`
  position: relative;
  z-index: 2; 
  width: 60%;

  p {
    margin-top: 22px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
`;

const PillarsTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 5.5rem;
  text-align: center;
  white-space: nowrap;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 5px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    flex-grow: 1;
    margin: 0 1rem;
  }
`;



const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Raafer</title>
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
      </Helmet>
      <HeroComponent />
      <About>
        <h1>DO RAAFER <span>PARA SUA FAMILIA</span></h1>
        <AboutBox>
          <AboutImg />
          <Position>
            Raphael Pires e
            Fernanda Pires
            <p>CEOs e Fundadores</p>
            Raafer
          </Position>
          <AboutText>
            "O Raafer atua há mais de quatro anos no mercado, oferecendo soluções em alimentação sustentável para empresas,
            seus colaboradores e estabelecimentos comerciais. Nosso compromisso é promover o bem-estar por meio de uma
            nutrição equilibrada, garantindo a reposição de vitaminas essenciais que elevam a satisfação, qualidade de
            vida e desempenho no ambiente de trabalho. Acreditamos que uma alimentação adequada fortalece a disposição
            e o engajamento, tornando o dia a dia mais saudável e produtivo.
            Com inovação e excelência, ajudamos negócios que valorizam o cuidado com as pessoas e a sustentabilidade."
          </AboutText>
        </AboutBox>
      </About>
      <Pillars>
        <PillarsBox>
          <PillarsContent>
            <PillarsTitle>NOSSOS PILARES</PillarsTitle>
            <p>Compromisso, qualidade e paixão em tudo o que fazemos.</p>
          </PillarsContent>
        </PillarsBox>
      </Pillars>
    </>
  );
};

export default Sobre;
