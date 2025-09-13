import React from "react";
import { Container, FormWrapper, EmailInput, DownloadButton } from "./style";
import { Download } from "lucide-react";

export function Apresentacao() {
  const handleOpen = () => {
    window.open("https://www.raafer.com.br/apresentacao.pdf", "_blank");
  };

  return (
    <>
      <Container>
        <h2>
          Conheça a Raafer e ofereça qualidade e bem-estar para o seu espaço
          corporativo
        </h2>
        <FormWrapper>
          <EmailInput type="email" placeholder="Digite seu e-mail" />
          <DownloadButton onClick={handleOpen}>
            <Download />
            Baixar a apresentação
          </DownloadButton>
        </FormWrapper>
      </Container>
    </>
  );
}
