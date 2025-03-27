import React from 'react';
import { Container, Text, Subtext } from './style';
import { Nav } from '../nav';

export function HeroComponent() {
  return (
    <Container>
      <Nav />
      <Text>
        Do campo para a sua mesa, com qualidade
        e frescor incomparáveis.
      </Text>
      <Subtext>
        Uma vida mais saudável começa com escolhas inteligentes.
        Aposte em produtos frescos, ricos em nutrientes e sem conservantes
        para garantir bem-estar e vitalidade todos os dias.
      </Subtext>
    </Container>
  );
}