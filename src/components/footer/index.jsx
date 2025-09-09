import React from "react";
import {
  FooterContainer,
  ContentGrid,
  Column,
  Logo,
  Description,
  Title,
  LinkItem,
  ContactItem,
  SocialIcon,
  Button,
  CopyRight,
} from "./style";
import { Mail, Phone, Instagram } from "lucide-react";
import imgLogo from "../../images/logo.svg";

export function Footer() {
  return (
    <>
      <FooterContainer>
        <ContentGrid>
          <Column>
            <Logo src={imgLogo} alt="Logo da Raafer" />
            <Description>
              Levamos sabor, frescor e saúde ao seu ambiente corporativo com
              frutas selecionadas e serviço de confiança. Plantamos bem-estar
              todos os dias. Raafer — Criando Raízes.
            </Description>
          </Column>

          <Column>
            <Title>Institucional</Title>
            <LinkItem to="/sobre">Sobre</LinkItem>
            <LinkItem>Fale Conosco</LinkItem>
            <LinkItem>Trabalhe Conosco</LinkItem>
            <LinkItem to="/contato">Dúvidas Frequentes</LinkItem>
          </Column>

          <Column>
            <Title>Contato</Title>
            <ContactItem>
              <Mail size={16} /> raafer_hortifruti@hotmail.com
            </ContactItem>
            <ContactItem>
              <Phone size={16} /> (11) 94854-4448
            </ContactItem>
            <ContactItem>
              <Phone size={16} /> (11) 98751-4466
            </ContactItem>
          </Column>

          <Column>
            {/* <Title>Siga-nos nas redes sociais:</Title>
            <SocialIcon>
              <Instagram size={20} />
            </SocialIcon> */}
            <Button>Faça um orçamento</Button>
          </Column>
        </ContentGrid>
        <CopyRight>
          © 2025 Raafer - Todos os direitos reservados - Desenvolvido por
          Guilherme Souza
        </CopyRight>
      </FooterContainer>
    </>
  );
}
