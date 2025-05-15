import React from 'react';
import { FooterContainer, ContentGrid, Column, Logo, Description, Title, LinkItem, ContactItem, SocialIcon, Button, CopyRight } from './style';
import { Mail, Phone, Instagram } from 'lucide-react';
import imgLogo from '../../images/logo.svg';

export function Footer() {
    return (
        <>
      <FooterContainer>
        <ContentGrid>
          <Column>
            <Logo src={imgLogo} alt="Logo da Raafer" />
            <Description>
              A Raafer é o seu parceiro especializado em alimentos frescos e naturais. Seja através das nossas plataformas online ou nas lojas físicas, oferecemos sempre os produtos mais frescos e de melhor qualidade, com um cuidado excepcional na seleção de cada item.
            </Description>
          </Column>
  
          <Column>
            <Title>Institucional</Title>
            <LinkItem href="#">Sobre</LinkItem>
            <LinkItem href="#">Fale Conosco</LinkItem>
            <LinkItem href="#">Trabalhe Conosco</LinkItem>
            <LinkItem href="#">Dúvidas Frequentes</LinkItem>
          </Column>
  
          <Column>
            <Title>Contato</Title>
            <ContactItem><Mail size={16} /> raphael@rapher.com.br</ContactItem>
            <ContactItem><Mail size={16} /> fernanda@rapher.com.br</ContactItem>
            <ContactItem><Phone size={16} /> (11) 2042-4822</ContactItem>
          </Column>
  
          <Column>
            <Title>Siga-nos nas redes sociais:</Title>
            <SocialIcon><Instagram size={20} /></SocialIcon>
            <Button>Faça um orçamento</Button>
          </Column>
        </ContentGrid>
        <CopyRight>
          © 2025 Raafer - Todos os direitos reservados - Desenvolvido por Guilherme Souza
        </CopyRight>
      </FooterContainer>
      </>
    );
  }