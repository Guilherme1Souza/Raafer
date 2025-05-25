// src/components/Duvidas/index.jsx
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import {
  Container,
  Title,
  StyledAccordion,
  Item,
  Header,
  Trigger,
  Content,
  ChevronIcon,
} from './style';
import { questions } from './questions';

const Duvidas = () => (
  <Container>
    <Title>Dúvidas Frequentes</Title>
    <StyledAccordion type="single" collapsible>
      {questions.map((question, index) => (
        <Item value={`item-${index}`} key={index}>
          <Header>
            <Trigger>
              {question}
              <ChevronIcon />
            </Trigger>
          </Header>
          <Content>
            <div style={{ padding: '15px 0' }}>
              Aqui vai a resposta para: "{question}"
            </div>
          </Content>
        </Item>
      ))}
    </StyledAccordion>
  </Container>
);

export default Duvidas;
