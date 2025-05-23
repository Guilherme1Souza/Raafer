import React from "react";
import {Container, FormWrapper, EmailInput, DownloadButton} from './style';
import { Download } from 'lucide-react';

export function Apresentacao() {
    return (
        <>
            <Container>
                <h2>Conheça a Raafer e ofereça qualidade e bem-estar para o seu espaço corporativo</h2>
                <FormWrapper>
                    <EmailInput type="email" placeholder="Digite seu e-mail" />
                    <DownloadButton>
                        <Download />
                        Baixar a apresentação
                    </DownloadButton>
                </FormWrapper>
            </Container>
        </>
    );
}