import React, { useRef, useState, useEffect } from "react";
import IconWpp from "../../assets/icons-whatsapp.svg";
import { Container, ButtonWpp } from "./style";

export function ButtonWppComponent() {
  const handleClick = () => {
    window.open("https://wa.me/5511948544448", "_blank");
  };

  return (
    <>
      <Container>
        <ButtonWpp onClick={handleClick}>
          <img src={IconWpp} alt="WhatsApp" />
        </ButtonWpp>
      </Container>
    </>
  );
}
