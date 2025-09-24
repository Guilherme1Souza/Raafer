import styled, { keyframes, css } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Raafer from "../images/raafer.jpg";

import frutas1 from "../images/corp1.png";
import frutas2 from "../images/corp2.png";

import Favicon from "../../favicon.ico";

import { HeroComponent } from "../components/hero";
import { CardsSection } from "../components/Card";
import { Testimonials } from "../components/testimonials";
import { Footer } from "../components/footer";
import { Pillars } from "../components/Pillars";

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
    color: #1e1e1e;
    font-size: 3.2rem;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    max-width: 480px;
    font-size: 1rem;
    padding-block: 9rem;

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
  margin: 5rem auto;
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
  color: #1e1e1e;
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
  color: #1e1e1e;
  text-align: center;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
  max-width: 640px;
  padding-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    max-width: 450px;
    font-size: 1.6rem;
    padding-inline: 1rem;
  }
`;

const ContactWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  top: 12rem; /* puxa pra cima em relação ao fluxo */
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding-inline: 1rem;
    top: -6rem;
  }
`;

const ContactCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 250px;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  color: white;
  font-size: 3.2rem;
  font-style: bold;
  font-weight: 600;
  background: ${({ bg }) => `url(${bg}) center/cover no-repeat`};

  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    height: 200px;
    font-size: 2.2rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.6rem;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 500;
  background: transparent;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #000;
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
        <meta
          name="description"
          content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos."
        />
        <link rel="icon" href={Favicon} />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta
          property="og:description"
          content="Conheça nossa trajetória e os pilares que nos guiam."
        />
        <meta name="author" content="Raphael Pires e Fernanda Pires" />
        <meta property="og:url" content="https://www.raafer.com.br/sobre" />
      </Helmet>
      <HeroComponent
        title="Do campo para a sua mesa, com qualidade e frescor incomparáveis."
        subtitle="Uma vida mais saudável começa com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."
        buttonText="Solicite um orçamento"
        buttonLink="/contato/"
      />
      <About ref={ref} isVisible={isVisible}>
        <h1>
          DO RAAFER <span>PARA SUA FAMILIA</span>
        </h1>
        <AboutBox>
          <AboutImg />
          <Position>
            Raphael Pires e Fernanda Pires
            <p>CEOs e Fundadores</p>
            Raafer
          </Position>
          <AboutText>
            "O Raafer atua há mais de quatro anos no mercado, oferecendo
            soluções em alimentação sustentável para empresas, seus
            colaboradores e estabelecimentos comerciais. Nosso compromisso é
            promover o bem-estar por meio de uma nutrição equilibrada,
            garantindo a reposição de vitaminas essenciais que elevam a
            satisfação, qualidade de vida e desempenho no ambiente de trabalho.
            Acreditamos que uma alimentação adequada fortalece a disposição e o
            engajamento, tornando o dia a dia mais saudável e produtivo. Com
            inovação e excelência, ajudamos negócios que valorizam o cuidado com
            as pessoas e a sustentabilidade."
          </AboutText>
        </AboutBox>
      </About>
      <ContactWrapper>
        <ContactSection>
          <ContactCard bg={frutas1}>
            <div>
              Gostaria de um orçamento para sua empresa?
              <br />
              <ContactButton href="/contato">Solicite Agora</ContactButton>
            </div>
          </ContactCard>

          <ContactCard bg={frutas2}>
            <div>
              Fale conosco via WhatsApp agora mesmo!
              <br />
              <ContactButton
                href="https://wa.me/5599999999999?text=Olá,+gostaria+de+um+orçamento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </ContactButton>
            </div>
          </ContactCard>
        </ContactSection>
      </ContactWrapper>
      <Pillars subtitle="NOSSOS PILARES" />
      <CardsSection />
      <Footer />
    </>
  );
};

export default Sobre;
