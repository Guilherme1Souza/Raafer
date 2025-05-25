import React from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';
import styled from 'styled-components';
import AnimatedNumber from '../../animated';
import { Search, MoveRight, Droplet, ShoppingBag, Truck } from 'lucide-react';
import centauroLogo from '../images/centauroLogo.png';
import MagaluLogoNegative from '../images/magaluLogo-negative.jpg';
import NanicaLogoNegatice from '../images/nanicaLogo-negative.png';
import MenFazendeiro from '../images/menFazendeiro.png';
import { Button } from '../components/Hero/style';
import { Testimonials } from '../components/testimonials';
import { Footer } from '../components/footer';
import { LineBottom } from '../components/line';
import { Apresentacao } from '../components/apresentação';

const Numbers = styled.div`
  position: absolute;
  bottom: -50px; /* metade da altura do card */
  left: 50%;
  transform: translateX(-50%);
  width: 851px;
  height: 99px;
  border-radius: 0 10px;
  background: #FFF;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  gap: 6rem;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      max-width: 650px;
      font-size: 3.8rem;
      padding-inline: 1rem;
  }

   @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 375px;
       gap: 1rem;
    }
`;


const Estatistics = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  text-align: center;
 

  strong {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 4px;
    display: block;
  }

  p {
    color: #828282;
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
      padding-inline: 1rem;
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
    justify-content: center;
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
`;

const TextContainer = styled.div`
  max-width: 500px;
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
        <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
        <meta property="og:title" content="Quem Somos | Raafer" />
        <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
      </Helmet>
      <HeroComponent
        title="Do campo para a sua mesa, com qualidade e frescor incomparáveis."
        subtitle="Uma vida mais saudável começa com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."
        buttonText="Conheça nossos clientes"
      />
      <div style={{ position: 'relative' }}>
        <Estatistics>
          <Numbers>
            <div>
              <AnimatedNumber value={1500} />
              <p>Frutas entregues</p>
            </div>
            <div>
              <AnimatedNumber value={690} />
              <p>Clientes atendidos</p>
            </div>
            <div>
              <AnimatedNumber value={25000} />
              <p>Vidas transformadas</p>
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
      <LineBottom/>
      <Clientes>
        <TextContainer>
          <Title>Clientes que escolhem a Raafer</Title>
          <HighlightText>
            Mais de 540 clientes, 100 grandes corporações que levam saúde e qualidade de vida
            para os seus colaboradores
          </HighlightText>

          <CarouselWrapper>
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index}>
                  <Logo src={logo.src} alt={logo.alt} />
                </div>
              ))}
            </Slider>
          </CarouselWrapper>
         <Button>Orçamento para sua empresa</Button>
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