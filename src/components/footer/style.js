import styled from 'styled-components';
import { Link } from "gatsby";  // Importando o Link do Gatsby

export const FooterContainer = styled.footer`
  background-color: #e0e0e0;
  padding: 40px 20px 10px;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.8fr 1fr;
  column-gap: 80px; 
  row-gap: 20px;
  max-width: 1200px;
  align-items: center;
  margin: 20px auto;

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.5;
`;

export const Title = styled.h4`
  font-size: 16px;
  color: #2d4b27;
  margin-bottom: 10px;
`;

export const LinkItem = styled(Link)`
  font-size: 14px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactItem = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SocialIcon = styled.div`
  color: #2d4b27;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #2d4b27;
  color: white;
  border: none;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export const CopyRight = styled.div`
  text-align: center;
  font-size: 13px;
  color: #555;
  margin-top: 30px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;
