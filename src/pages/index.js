import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/hero';
import styled from 'styled-components';
import AnimatedNumber from '../../animated';
import { Search, MoveRight, Droplet, ShoppingBag, Truck, Leaf, Clock, ChartArea } from 'lucide-react';
import centauroLogo from '../images/centauroLogo.png';
import MagaluLogoNegative from '../images/magaluLogo-negative.jpg';
import NanicaLogoNegatice from '../images/nanicaLogo-negative.png';
import MenFazendeiro from '../images/menFazendeiro.png';
import { Testimonials } from '../components/testimonials';
import { Footer } from '../components/footer';
import { LineBottom } from '../components/line';
import { Apresentacao } from '../components/apresentação';

const Numbers = styled.div`
  position: absolute;
  bottom: -50px; /* metade da altura do card */
  left: 50%;
  padding-inline: 8rem;
  transform: translateX(-50%);
  width: 80%;
  height: 99px;
  border-radius: 0 10px;
  background: #FFF;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      width: 650px;
      font-size: 3.8rem;
      padding-inline: 1rem;
  }

   @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      height: auto;
      bottom: -150px;
      margin-top: 80px;
      padding-block: 1rem;
      width: 355px;
      flex-direction: column;
      gap: 1rem;
    }
`;


const Estatistics = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  text-align: start;
 

  strong {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 4px;
    display: block;
  }

  p {
    color:rgb(180, 125, 43);
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
   display: flex;  
   flex-direction: column;
   width: 50%;
  
    strong {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
    display: block;
  }

    }
  `;

const Process = styled.div`
  font-weight: 600;
  padding-inline: 10.9rem;
  padding-block: 15rem;
  background: ${({ theme }) => theme.COLORS.WHITE2};

  h2 {
     font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
  }

   @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      padding-left: 4rem;
      padding-top: 25rem;
  }

   @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      padding-left: 2rem;
  }
`;

const ProcessLoading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 10.9rem;

   @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    display: flex;
    align-items: center;
    margin: 0 auto;

  }
`;

const StyledIcon = styled(MoveRight)`
  width: 24px;
  height: 24px;

   @media (max-width: ${({ theme }) => theme.bp.desktop}) {
    display: none;
  }
`;

const ProcessContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 4.9rem;
  margin: 0 auto;


  h3 {
  text-align: center;
  line-height: 2rem;
  font-size: 18px;
  font-weight: 500;
  width: 142px;
  }
  `;


const Clientes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18.8rem 10.9rem 0;
  flex-wrap: wrap;

   @media (max-width: ${({ theme }) => theme.bp.mobile}) {
     padding: 6rem 2rem 0;
    flex-wrap: wrap;
  }
  
`;

const TextContainer = styled.div`
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    max-width: 350px;
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
`;

const HighlightText = styled.p`
  font-size: 18px;
  color: #b88e2f;
  font-weight: 600;
  line-height: 1.6;
`;

const CarouselWrapper = styled.div`
  margin: 24px 0;
`;

const Logo = styled.img`
  height: 32px;
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
`;




const Home = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const logos = [
    { src: centauroLogo, alt: 'Centauro' },
    { src: MagaluLogoNegative, alt: 'Magalu' },
    { src: NanicaLogoNegatice, alt: 'Nanica' },
  ];



  return (
    <>
      <Helmet>
        <title>Inicio | Raafer</title>
        <meta
          name="description"
          content="Bem-vindo à Raafer! Conheça nossa linha de alimentos frescos, naturais e sustentáveis, direto do produtor para sua casa. Qualidade e saúde em cada escolha."
        />
        <meta
          property="og:title"
          content="Raafer | Sua Fonte de Alimentos Naturais e Frescos"
        />
        <meta
          property="og:description"
          content="Descubra como a Raafer transforma a alimentação com produtos naturais, frescos e de origem sustentável. Experimente saúde e sabor em cada detalhe."
        />
        <meta name="author" content="Raafer" />
        <meta property="og:url" content="https://www.raafer.com.br/" />
      </Helmet>

      <HeroComponent
        title="Do campo para sua empresa"
        subtitle="Frutas selecionadas que promovem saúde, bem-estar e produtividade no ambiente corporativo."
        buttonText="Conheça nossos clientes"
      />
      <div style={{ position: 'relative' }}>
        <Estatistics>
          <Numbers>
           <div style={{ display: 'flex', flexDirection: 'row' , gap: '2rem', alignItems: 'center' }}>
              <Leaf  style={{height: '50px', width: '50px'}} />
              <p>Aumente o bem-estar e
                melhore a produtividade
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' , gap: '2rem', alignItems: 'center' }}>
              <Clock  style={{height: '50px', width: '50px'}} />
              <p>Economize tempo e ofereça
                mais saúde no seu ambiente de trabalho
              </p>
            </div>
             <div style={{ display: 'flex', flexDirection: 'row' , gap: '2rem', alignItems: 'center' }}>
              <ChartArea style={{height: '50px', width: '50px'}} />
              <p>Reduza custos operacionais
                com um serviço prático e eficiente
              </p>
            </div>
          </Numbers>
        </Estatistics>
      </div>
      <Process>
        <h2>Nosso Processo</h2>
        <ProcessLoading>
          <ProcessContent>
            <Search />
            <h3>Seleção das melhores frutas</h3>
          </ProcessContent>
          <StyledIcon />
          <ProcessContent>
            <Droplet />
            <h3>Higienização das frutas</h3>
          </ProcessContent>
          <StyledIcon />
          <ProcessContent>
            <ShoppingBag />
            <h3>Montagem do pedido</h3>
          </ProcessContent>
          <StyledIcon />
          <ProcessContent>
            <Truck />
            <h3>Saída para entrega</h3>
          </ProcessContent>
        </ProcessLoading>
      </Process>
      <LineBottom />
      <Clientes>
        <TextContainer>
          <Title>Clientes que escolhem a Raafer</Title>
          <HighlightText>
            Mais de 540 clientes, 100 grandes corporações que levam saúde e qualidade de vida
            para os seus colaboradores
          </HighlightText>

          {/* <CarouselWrapper>
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index}>
                  <Logo src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </Slider>
          </CarouselWrapper> */}
        </TextContainer>
        <Image src={MenFazendeiro} alt="Homem segurando bananas" />
      </Clientes>
      <Testimonials />
      <Apresentacao />
      <Footer />
    </>
  );
}

export default Home;