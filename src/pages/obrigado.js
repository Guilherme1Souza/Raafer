import React from "react";
import PropTypes from "prop-types";
import imgLogo from "../images/logo.svg";
import styled from "styled-components";


 const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

 const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ab8b3e;
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  z-index: 1001;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

 const ModalImage = styled.img`
  width: 150px;
  margin-bottom: 1.5rem;
`;

 const ModalTitle = styled.h1`
  font-size: 1.8rem;
  margin-top: 1rem;
`;

 const ModalText = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

 const ModalButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #ab8b3e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;


const ObrigadoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <ModalImage src={imgLogo} alt="Logo da Raafer" />
        <ModalTitle>Obrigado por enviar o e-mail!</ModalTitle>
        <ModalText>Entraremos em contato com você em breve.</ModalText>
        <ModalButton onClick={onClose}>Fechar</ModalButton>
      </ModalContainer>
    </>
  );
};

ObrigadoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ObrigadoModal;
