import React from 'react';
import { Container, BoxHero, Text, Subtext, Background, Button } from './style';
import { Nav } from '../nav/index.jsx';

export function HeroComponent() {
  return (
    <Container>
      <Nav />
      <BoxHero>
      <Text>
        <h1>Do campo para a sua mesa, com qualidade
        e frescor incomparáveis.</h1>
      <Subtext>
        Uma vida mais saudável começa com escolhas inteligentes.
        Aposte em produtos frescos, ricos em nutrientes e sem conservantes
        para garantir bem-estar e vitalidade todos os dias.
      </Subtext>
      <Button>Conheça nossos clientes</Button>
      </Text>
      <Background />
      </BoxHero>
    </Container>
  );
}