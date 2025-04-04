import React from 'react';
import { Container, Text, Subtext, BoxHero, BackgroundCasal, Button } from './style';
import { Nav } from '../nav';

export function HeroComponent() {
  return (
    <Container>
      <Nav />
      <BoxHero>
      <Text>
        Do campo para a sua mesa, com qualidade
        e frescor incomparáveis.
      <Subtext>
        Uma vida mais saudável começa com escolhas inteligentes.
        Aposte em produtos frescos, ricos em nutrientes e sem conservantes
        para garantir bem-estar e vitalidade todos os dias. Lorem ipsum dolor sit amet consectetur adipisicing elilam.
      </Subtext>
      <Button>Conheça nossos clientes</Button>
      </Text>
      <BackgroundCasal />
      </BoxHero>
    </Container>
  );
}