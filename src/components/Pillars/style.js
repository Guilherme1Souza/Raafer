import styled from "styled-components";
import Mercado from "../../images/mercado.png";

export const WePillarsContent = styled.div`
  position: relative;
  background: url(${Mercado}) no-repeat center;
  background-size: 100% auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding: 2rem;
  min-height: 60vh;
  z-index: 1;
 


  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    margin-bottom: 0rem;
    padding: 4rem;
`;

export const PillarsTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 5.5rem;
  text-align: center;
  white-space: nowrap;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 5px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    flex-grow: 1;
    margin: 0 1rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    max-width: 650px;
    font-size: 3.8rem;
    padding-inline: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    max-width: 375px;
  }
`;

export const Pillars = styled.div``;

export const PillarsContent = styled.div`
  position: relative;
  z-index: 2;
  width: 60%;

  p {
    margin-top: 2.2rem;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 480px;
      font-size: 1.7rem;
    }
  }
`;
