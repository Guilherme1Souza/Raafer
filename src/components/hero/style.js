import styled from "styled-components";
import imageHero from "../../images/hero.png";
import imgCasal from "../../images/casal.png"

export const Container = styled.div`
  background: url(${imageHero}) center/cover no-repeat;
  max-width: 100%;
  height: 646px;
  padding-left: 94px;
`;

export const BoxHero = styled.div`
  display: flex;
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
`;

export const Subtext = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  max-width: 528px;
  margin-top: 14px;
`;

export const BackgroundCasal = styled.div`
  background: url(${imgCasal})center/cover no-repeat;
  width: 500px;
  height: 500px;
  margin-left: 440px;
  margin-top: 32px;
`;

export const Button = styled.button`
  width: 203px;
  height: 45px;
  margin-top: 34px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0px 10px;
  transition: 0.3s ease-in-out;

  &:hover {
        color: ${({ theme }) => theme.COLORS.BLACK};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
`
