import styled, { keyframes, css } from "styled-components";
import imgCasal from "../../images/casal.png";

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

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23655225' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23AB8B3E' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23a9893d' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23a6873c' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23a4853b' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23a1833a' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%239f813a' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%239d7f39' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%239a7d38' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23987b37' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23967936' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23937735' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23917534' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%238f7433' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%238c7232' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%238a7032' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23886e31' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23856c30' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23836A2F' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  max-width: 100%;
  height: 63.3rem;
  padding-inline: 10.9rem;

  @media (min-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    padding-inline: 26.9rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    height: auto;
    max-width: 100%;
    background-size: cover;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    height: auto;
    max-width: 100%;
    background-size: cover;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    height: auto;
    max-width: 100%;
    background-size: cover;
    padding-inline: 30px;
  }
`;

export const BoxHero = styled.div`
  display: flex;

  transform: translateX(-60px);
  visibility: hidden;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${slideInLeft} 1.68s ease-out forwards;
      visibility: visible;
    `}

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    gap: 14rem;
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    max-width: 100%;
    padding-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    flex-direction: column;
    max-width: 100%;
    gap: 0.2rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 180px 40px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  h1 {
    font-weight: 600;
    font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
    line-height: 36px;
    max-width: 800px;
    text-align: start;
  }

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    max-width: 800px;
  }

  @media (min-width: ${({ theme }) => theme.bp.bigDesktop}) {
    max-width: 620px;
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    max-width: 550px;
    padding: 80px 0;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    padding: 80px 0;
    max-width: 550px;
    line-height: 42px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    height: auto;
    max-width: 700px;
    padding: 20px;
    margin: 10rem auto 0.5rem;
    gap: 3.5rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    height: auto;
    max-width: 460px;
    padding: 0;
    margin: 6rem auto;
    text-align: start;
  }
`;

export const Subtext = styled.div`
  font-size: clamp(1.8rem, 1vw + 0.6rem, 2.2rem);
  font-weight: 400;
  line-height: 1.3;
  max-width: 750px;
  margin-top: 14px;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    max-width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
    max-width: 620px;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    max-width: 550px;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    max-width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    height: 100px;
    max-width: 700px;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    height: 180px;
    max-width: 400px;
  }
`;

export const Background = styled.div`
  background: url(${imgCasal}) center/cover no-repeat;
  width: 400px;
  height: 400px;
  margin-left: 300px;
  margin-top: 105px;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    width: 500px;
    height: 500px;
    margin-left: 80px;
    margin-top: 35px;
  }

  @media (max-width: ${({ theme }) => theme.bp.veryBigDesktop}) {
    width: 400px;
    height: 400px;
    margin-left: 100px;
    margin-top: 137px;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
    width: 100%;
    height: 400px;
    margin-left: 90px;
    margin-top: 135px;
  }

  @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    width: 100%;
    height: 400px;
    margin-left: -20px;
    margin-top: 135px;
  }

  @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
    width: 400px;
    height: 400px;
    margin-left: -20px;
    margin-top: 110px;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    /* display: none; */
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0 auto;
    width: 500px;
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    width: 300px;
    height: 300px;
  }
`;

export const Button = styled.button`
  width: 203px;
  height: 45px;
  margin-top: 34px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.28);
  border: none;
  border-radius: 6px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    margin-left: 0;
    width: 203px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    margin-left: 0;
    width: 203px;
    margin-top: 0;
  }
`;
