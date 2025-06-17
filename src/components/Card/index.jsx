import React, { useEffect, useRef, useState } from "react";
import { CardsContainer, PillarsCard } from "./style";

export function CardsSection() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const cardData = [
    {
      title: "Missão",
      description: "Distribuir frutas e alimentos selecionados com excelência, praticidade e compromisso com a saúde dos colaboradores, fortalecendo hábitos saudáveis dentro das empresas.",
      delay: "0.2s"
    },
    {
      title: "Visão",
      description: "Construir um ambiente corporativo mais saudável, através de uma alimentação natural, acessível e de qualidade, sendo reconhecida por sua dedicação e compromisso com o bem-estar dos colaboradores.",
      delay: "0.4s"
    },
    {
      title: "Valores",
      description: "Entregamos mais que frutas, entregamos cuidado. Prezamos pela qualidade, sustentabilidade, pontualidade e confiança, sempre com foco no relacionamento humano com clientes, fornecedores e colaboradores.",
      delay: "0.6s"
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
            if (!prev.includes(index)) return [...prev, index];
            return prev;
          });
        }
      }, { threshold: 0.3 });

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <CardsContainer>
      {cardData.map((card, index) => (
        <PillarsCard
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          isVisible={visibleCards.includes(index)}
          delay={card.delay}
        >
          <p className="title">{card.title}</p>
          <div className="line"></div>
          <p className="description">{card.description}</p>
        </PillarsCard>
      ))}
    </CardsContainer>
  );
}
