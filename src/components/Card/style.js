import styled, { keyframes, css } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.6rem; 
  padding: 4rem; 
  padding-bottom: 12rem;
  overflow: hidden;


  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    flex-direction: column;
  }
`;

export const PillarsCard = styled.div`
  width: 37rem;
  height: 37.9rem;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  box-shadow: 0.8rem 0.8rem 0.4rem 0 rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.4rem;
  font-weight: bold;
  border-radius: 0.2rem;
  text-align: center;
  gap: 3.8rem;
  opacity: 0;
  transform: translateX(-60px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${slideInLeft} 0.8s ease-out forwards;
      animation-delay: ${delay};
    `}

  .title {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem;
    font-weight: 600;
  }

  .line {
    width: 70%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .description {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.8rem;
    font-weight: lighter;
    width: 27.5rem;
    text-align: center;
  }
`;