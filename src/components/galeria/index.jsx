import React from "react";
import styled, { keyframes, css } from "styled-components";

import servico1 from "../../images/servico1.jpg";
import servico2 from "../../images/servico2.jpg";
import servico3 from "../../images/servico3.jpg";
import servico4 from "../../images/servico4.jpg";
import servico5 from "../../images/servico5.jpg";
import servico6 from "../../images/servico6.jpg";
import servico7 from "../../images/servico7.jpg";
import servico8 from "../../images/servico8.jpg";
import servico9 from "../../images/servico9.jpg";
import servico10 from "../../images/servico10.jpg";
import servico11 from "../../images/servico11.jpg";
import servico12 from "../../images/servico12.jpg";
import servico13 from "../../images/servico13.jpg";
import servico14 from "../../images/servico14.jpg";
import servico15 from "../../images/servico15.jpg";

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

  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block;
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

export const Galeria = () => {
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
    <Section>
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
    </Section>
  );
};
