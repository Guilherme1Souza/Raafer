import styled from 'styled-components';
import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';


const About = styled.div`
  padding-inline: 288px;
  padding-block: 180px;
  background: ${({theme}) => theme.COLORS.WHITE};

  h1 {
    color: ${({theme}) => theme.COLORS.BLACK};
    text-align: center;
    font-size: 7.6rem;
    font-weight: 600;
  }

  span {
    display: block;
    color: #1E1E1E;
    font-size: 3.2rem;
    font-weight: 600;
  }
`;

const AboutBox = styled.div`
    border-radius: 5px;
    background: ${({theme}) => theme.COLORS.WHITE};
    box-shadow: 4px 4px 20.8px 0px rgba(0, 0, 0, 0.45);
    width: 864px;
    height: 449px;
    flex-shrink: 0;
    margin: 5.0rem auto;
    padding-top: 2.2rem;
`;

const AboutImg = styled.div`
    border-radius: 100px;
    width: 161px;
    height: 153px;
    flex-shrink: 0;
    background-color: ${({theme}) => theme.COLORS.GRAY};
    margin: 0 auto;
`;

const Position = styled.p`
    width: 142px;
    color: #1E1E1E;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 10px auto;
`;

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Raafer</title>
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
      </Helmet>
      <HeroComponent/>
      <About>
        <h1>DO RAAFER <span>PARA SUA FAMILIA</span></h1>
        <AboutBox>
          <AboutImg>

          </AboutImg>
          <Position>
            Raphael Pires e 
            Fernanda Pires
          </Position>
        </AboutBox>
      </About>
    </>
  );
};

export default Sobre;
