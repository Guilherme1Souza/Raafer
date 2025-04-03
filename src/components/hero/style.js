import styled from "styled-components";
import imageHero from "../../images/hero.png";
import imgCasal from "../../images/casal.png"


export const Container = styled.div`
  background: url(${imageHero}) center/cover no-repeat;
  max-width: 100%;
  height: 646px;
  padding-left: 94px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        padding-left: 28px;
        height: auto;
        max-width: 100%;
        background-size: cover;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        padding-left: 28px;
        height: auto;
        max-width: 100%;
        background-size: cover;
    }
`;

export const BoxHero = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        flex-direction: column;
        max-width: 100%;
        margin-top: 50px;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        flex-direction: column;
        max-width: 100%;
        margin-top: 100px;
    }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 620px;
  padding: 180px 0;
  text-align: start;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        height: 500px;
        width: 700px;
        padding: 20px;
    }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        height: 500px;
        width: 320px;
        padding: 20px;
    }
`;

export const Subtext = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  max-width: 528px;
  margin-top: 14px;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        height: 100px;
        width: 700px;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        height: 300px;
        width: 240px;
    }
`;

export const BackgroundCasal = styled.div`
  background: url(${imgCasal})center/cover no-repeat;
  width: 500px;
  height: 500px;
  margin-left: 440px;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    display: none;
   
    }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    display: none;
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
  border-radius: 0px 10px;
  transition: 0.3s ease-in-out;

  &:hover {
        color: ${({ theme }) => theme.COLORS.BLACK};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.BLACK};
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      margin-left: 0;
      width: 203px;
      height: 40px;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      margin-left: 0;
      width: 203px;
      height: 50px;
    }
`
