import styled from "styled-components";
import { Link } from "gatsby"; // Importando o Link do Gatsby

export const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 4rem 2rem 2rem;
  border-top: 2px solid #e0e0e0;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 3rem 6rem;
  max-width: 1200px;
  align-items: start;
  margin: 0 auto;

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 3rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  color: #444;
  line-height: 1.6;
  max-width: 320px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d4b27;
  margin-bottom: 0.5rem;
`;

export const LinkItem = styled(Link)`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #2d4b27;
  }
`;

export const ContactItem = styled.div`
  font-size: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.div`
  color: #2d4b27;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  background-color: #2d4b27;
  color: #fff;
  border: none;
  padding: 1rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a6330;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  font-size: 1.3rem;
  color: #666;
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  padding-top: 1.2rem;
`;

export const TextFooter = styled.p`
  font-size: 1.3rem;
  color: green;
`;
