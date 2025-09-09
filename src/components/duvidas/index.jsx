// src/components/Duvidas/index.jsx
import React from "react";
import {
  Container,
  Title,
  StyledAccordion,
  Item,
  Header,
  Trigger,
  Content,
  ChevronIcon,
} from "./style";
import { questions } from "./questions";

const Duvidas = () => (
  <Container>
    <Title>Dúvidas Frequentes</Title>
    <StyledAccordion type="single" collapsible>
      {questions.map((q, index) => (
        <Item value={q.question} key={index}>
          <Header>
            <Trigger>
              {q.question}
              <ChevronIcon />
            </Trigger>
          </Header>
          <Content>
            {q.answer && <div style={{ padding: "15px 25px" }}>{q.answer}</div>}
          </Content>
        </Item>
      ))}
    </StyledAccordion>
  </Container>
);

export default Duvidas;
