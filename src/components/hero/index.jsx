import React from 'react';
import { Container, BoxHero, Text, Subtext, Background, Button } from './style';
import { Nav } from '../nav/index.jsx';

export function HeroComponent({ title, subtitle, buttonText }) {
  return (
    <Container>
      <Nav />
      <BoxHero>
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