import * as React from "react";
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
  TextFooter,
} from "./style";
import { Mail, Phone, Instagram } from "lucide-react";
import imgLogo from "../../images/raafer.jpg";
import { Link } from "gatsby";

import { track } from "../../utils/metrics";

export function Footer() {
  React.useEffect(() => {
    track("page_view");
  }, []);

  const handleCta = () => {
    track("orcamento_click", { button_id: "hero_cta" });
  };
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
            <Link to="/sobre">
              <LinkItem>Sobre</LinkItem>
            </Link>
            <Link to="/contato">
              <LinkItem>Fale Conosco</LinkItem>
            </Link>
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
            <Link to="/contato">
              <Button onClick={handleCta}>Faça um orçamento</Button>
            </Link>
          </Column>{" "}
          {/* <Column>
            <Title>Siga-nos nas redes sociais:</Title>
            <SocialIcon>
              <Instagram size={20} />
            </SocialIcon>
          </Column> */}
        </ContentGrid>
        <CopyRight>
          © 2025 Raafer - Todos os direitos reservados - Desenvolvido por
          <Link
            to="https://www.linkedin.com/in/guilhermeeduardo/"
            target="_blank"
          >
            <TextFooter>Guilherme Souza</TextFooter>
          </Link>
        </CopyRight>
      </FooterContainer>
    </>
  );
}
