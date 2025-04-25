import React from "react";
import { CardsContainer, PillarsCard } from "./style";

export function CardsSection() {
    return (
        <CardsContainer>
            <PillarsCard>
                <p className="title">Missão</p>
                <div className="line"></div>
              <p className="description">Superar as expectativas dos clientes, através da experiência de compra e 
                da mais ampla oferta de soluções, no âmbito das nossas atividades, gerando 
                valor aos acionistas, colaboradores e fornecedores.</p>  
            </PillarsCard>
            <PillarsCard>
                <p className="title">Visão</p>
                <div className="line"></div>
              <p className="description">Superar as expectativas dos clientes, através da experiência de compra e 
                da mais ampla oferta de soluções, no âmbito das nossas atividades, gerando 
                valor aos acionistas, colaboradores e fornecedores.</p>  
            </PillarsCard>  
            <PillarsCard>
                <p className="title">Valores</p>
                <div className="line"></div>
              <p className="description">Superar as expectativas dos clientes, através da experiência de compra e 
                da mais ampla oferta de soluções, no âmbito das nossas atividades, gerando 
                valor aos acionistas, colaboradores e fornecedores.</p>  
            </PillarsCard>
        </CardsContainer>
    );
};