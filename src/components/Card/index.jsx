import React, { useEffect, useRef, useState } from "react";
import { CardsContainer, PillarsCard } from "./style";

export function CardsSection() {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const cardData = [
    {
      title: "Missão",
      description: "Superar as expectativas dos clientes, através da experiência de compra e da mais ampla oferta de soluções, no âmbito das nossas atividades, gerando valor aos acionistas, colaboradores e fornecedores.",
      delay: "0.4s"
    },
    {
      title: "Visão",
      description: "Ser referência nacional em qualidade, inovação e excelência no atendimento, promovendo crescimento sustentável e reconhecido pelo mercado.",
      delay: "0.6s"
    },
    {
      title: "Valores",
      description: "Ética, respeito às pessoas, transparência, inovação, responsabilidade socioambiental e compromisso com resultados.",
      delay: "0.8s"
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
