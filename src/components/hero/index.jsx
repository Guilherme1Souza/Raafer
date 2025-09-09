import React, { useRef, useState, useEffect } from "react";
import { Container, BoxHero, Text, Subtext, Background, Button } from "./style";
import { Link } from "gatsby";
import { Nav } from "../nav/index.jsx";

export function HeroComponent({ title, subtitle, buttonText, buttonLink }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Container>
      <Nav />
      <BoxHero ref={ref} isVisible={isVisible}>
        <Text>
          <h1>{title}</h1>
          <Subtext>{subtitle}</Subtext>
          {buttonText && buttonLink && (
            <Link to={buttonLink}>
              <Button>{buttonText}</Button>
            </Link>
          )}
        </Text>
        <Background />
      </BoxHero>
    </Container>
  );
}
