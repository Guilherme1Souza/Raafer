import styled from "styled-components";
import imageHero from "../../images/hero.png";

export const Container = styled.div`
  background: url(${imageHero}) center/cover no-repeat;
  max-width: 100%;
  height: 662px;
  padding-left: 94px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 180px;
  max-width: 720px;
  padding: 332px 0 54px;
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
`;
