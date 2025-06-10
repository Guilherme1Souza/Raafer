import styled, { keyframes, css } from "styled-components";
import React, {useRef, useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';

import Raafer from '../images/raafer.jpg'

import { HeroComponent } from '../components/Hero';
import { CardsSection } from '../components/card';
import { Testimonials } from '../components/testimonials';
import {Footer} from '../components/footer';
import { Pillars } from '../components/Pillars';




const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const About = styled.div`
  padding-block: 80px;
  opacity: 0;
  transform: translateX(-60px);
  visibility: hidden;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${slideInLeft} 0.8s ease-out forwards;
      visibility: visible;
    `}

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

    
    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      max-width: 650px;
      font-size: 1.6rem;
      padding-inline: 1rem;
  }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 375px;
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
      max-width: 375px;
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


const Sobre = () => {

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Quem Somos | Raafer</title>
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
        <meta name="author" content="Raphael Pires e Fernanda Pires" />
        <meta property="og:url" content="https://www.seusite.com.br/sobre" />
      </Helmet>
      <HeroComponent
        title="Do campo para a sua mesa, com qualidade e frescor incomparáveis."
      subtitle="Uma vida mais saudável começa com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."
      buttonText="Conheça nossos clientes"
      />
      <About ref={ref} isVisible={isVisible}>
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
      <Pillars subtitle="NOSSOS PILARES"/>
      <CardsSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default Sobre;
