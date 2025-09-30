import styled, { keyframes, css } from "styled-components";
import React from "react";
import { Helmet } from "react-helmet";

import Favicon from "../../favicon.ico";
import { HeroComponent } from "../components/hero";
import { Footer } from "../components/footer";
import { ButtonWppComponent } from "../components/buttonWpp";

// Imagens fictícias
import servico1 from "../images/servico1.jpg";
import servico2 from "../images/servico2.jpg";
import servico3 from "../images/servico3.jpg";
import servico4 from "../images/servico4.jpg";
import servico5 from "../images/servico5.jpg";
import servico6 from "../images/servico6.jpg";
import servico7 from "../images/servico7.jpg";
import servico8 from "../images/servico8.jpg";
import servico9 from "../images/servico9.jpg";
import servico10 from "../images/servico10.jpg";
import servico11 from "../images/servico11.jpg";
import servico12 from "../images/servico12.jpg";
import servico13 from "../images/servico13.jpg";
import servico14 from "../images/servico14.jpg";
import servico15 from "../images/servico15.jpg";

// Ícones fictícios
import { FaAppleAlt, FaBuilding, FaLeaf } from "react-icons/fa";

// animações
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

/* Carrossel */
const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 4rem 0;
`;

const CarouselRow = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ${({ direction }) =>
    direction === "left"
      ? css`
          ${scrollLeft} 25s linear infinite
        `
      : css`
          ${scrollRight} 25s linear infinite
        `};

  &:hover {
    animation-play-state: paused;
  }
`;

const CarouselItem = styled.div`
  flex: 0 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);

  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block;
  }
`;

const CtaBox = styled.div`
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
  background: ${({ bg }) => bg || "white"};
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
  const images = [
    servico1,
    servico2,
    servico3,
    servico4,
    servico5,
    servico6,
    servico7,
    servico8,
  ];

  const moreImages = [
    servico9,
    servico10,
    servico11,
    servico12,
    servico13,
    servico14,
    servico15,
  ];

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

      {/* Hero */}
      <HeroComponent
        title="Nossos Serviços"
        subtitle="Levamos saúde e frescor diretamente para empresas, famílias e eventos com soluções personalizadas."
        buttonText="Solicite um orçamento"
        buttonLink="/contato/"
      />

      {/* Carrosséis */}
      <Section bg="#f7f7f7">
        <Title>
          Galeria <span>Alguns de nossos serviços</span>
        </Title>

        <CarouselWrapper>
          <CarouselRow direction="left">
            {[...images, ...images].map((img, index) => (
              <CarouselItem key={`row1-${index}`}>
                <img src={img} alt={`Serviço ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselRow>
        </CarouselWrapper>

        <CarouselWrapper>
          <CarouselRow direction="right">
            {[...moreImages, ...moreImages].map((img, index) => (
              <CarouselItem key={`row2-${index}`}>
                <img src={img} alt={`Serviço ${index + 1}`} />
              </CarouselItem>
            ))}
          </CarouselRow>
        </CarouselWrapper>

        <CtaBox>
          <a href="/contato">Solicitar Orçamento</a>
        </CtaBox>
      </Section>

      <Section>
        <Title>
          O que oferecemos <span>Soluções saudáveis e práticas</span>
        </Title>
        <TextBlock>
          A Raafer transforma o consumo de frutas em uma experiência prática e
          acessível. Nossos serviços são voltados para empresas que buscam mais
          saúde e produtividade para seus colaboradores, além de famílias que
          desejam qualidade no dia a dia.
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
