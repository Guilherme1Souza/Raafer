import React, {useRef, useState, useEffect} from 'react';
import { Container, BoxHero, Text, Subtext, Background, Button } from './style.js';
import { Nav } from '../nav/index.jsx';

export function HeroComponent({ title, subtitle, buttonText }) {

   const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.3 }
      );
  
      if (ref.current) observer.observe(ref.current);
  
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, []);

  return (
    <Container>
      <Nav />
      <BoxHero ref={ref} isVisible={isVisible}>
      <Text>
         <h1>{title}</h1>
        <Subtext>{subtitle}</Subtext>
         <Button>{buttonText}</Button>
      </Text>
      <Background />
      </BoxHero>
    </Container>
  );
}