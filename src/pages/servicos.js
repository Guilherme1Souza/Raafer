import styled, { keyframes, css } from "styled-components";
import React from "react";
import { Helmet } from "react-helmet";

import Favicon from "../../favicon.ico";
import { HeroComponent } from "../components/hero";
import { Footer } from "../components/footer";
import { ButtonWppComponent } from "../components/buttonWpp";

// Imagens fictícias

// Ícones fictícios
import { FaAppleAlt, FaBuilding, FaLeaf } from "react-icons/fa";
import { Testimonials } from "../components/testimonials";
import { Galeria } from "../components/galeria";

const CtaBox = styled.div`
  padding-inline: 8rem;
  margin-top: 4rem;
  justify-content: start;
  text-align: center;
  display: flex;

  a {
    padding: 1rem 2rem;
    border-radius: 8px;
    width: 203px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    color: ${({ theme }) => theme.COLORS.WHITE};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.28);
    border: none;
    border-radius: 6px;
    transition: 0.3s ease-in-out;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.BLACK};
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 4rem;

  span {
    display: block;
    font-size: 3rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    font-size: 4rem;
    span {
      font-size: 2rem;
    }
  }
`;

const TextBlock = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: #333;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const Card = styled.div`
  padding: 4rem;
  border-radius: 12px;
  background: #b88e2f;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 2.2rem;
    margin-bottom: 5rem;
    color: white;
  }

  p {
    font-size: 1.4rem;
    margin-top: 0.5rem;
    color: #f1f1f1;
  }

  svg {
    font-size: 3.5rem;
    color: #25d366;
  }
`;

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Raafer</title>
        <meta
          name="description"
          content="Conheça os serviços da Raafer: entregas corporativas, cestas personalizadas e eventos especiais."
        />
        <link rel="icon" href={Favicon} />
      </Helmet>

      <HeroComponent
        title="Nossos Serviços"
        subtitle="Levamos saúde e frescor diretamente para empresas, famílias e eventos com soluções personalizadas."
        buttonText="Solicite um orçamento"
        buttonLink="/contato/"
      />
      <Galeria />
      <Section>
        <CtaBox>
          <a href="/contato">Solicitar Orçamento</a>
        </CtaBox>
      </Section>
      <Testimonials />
      <Section>
        <Title>
          O que oferecemos <span>Soluções saudáveis e práticas</span>
        </Title>
        <TextBlock>
          O Raafer transforma o consumo de frutas em uma experiência prática e
          acessível. Nossos serviços são voltados para empresas que buscam mais
          saúde e produtividade para seus colaboradores, além de famílias que
          desejam qualidade no dia a dia.
        </TextBlock>
        <TextBlock style={{ marginTop: "2rem" }}>
          Com entregas regulares e cestas personalizadas, garantimos que frutas
          frescas e saudáveis estejam sempre à disposição de nossos clientes.
        </TextBlock>

        <CardsWrapper>
          <Card>
            <h3>Entrega Corporativa</h3>
            <p>
              Levamos frutas frescas diretamente para sua empresa,
              proporcionando mais disposição no ambiente de trabalho.
            </p>
          </Card>
          <Card>
            <h3>Cestas Personalizadas</h3>
            <p>
              Montamos cestas exclusivas para famílias e colaboradores, com
              frutas selecionadas de acordo com sua necessidade.
            </p>
          </Card>
          <Card>
            <h3>Eventos e Coffee Breaks</h3>
            <p>
              Oferecemos soluções saudáveis para eventos corporativos, reuniões
              e celebrações especiais.
            </p>
          </Card>
        </CardsWrapper>
      </Section>

      <ButtonWppComponent />
      <Footer />
    </>
  );
};

export default Servicos;
