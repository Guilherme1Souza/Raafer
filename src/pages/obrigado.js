import React from "react";
import PropTypes from 'prop-types';
import imgLogo from '../images/logo.svg';

const ObrigadoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;  // não renderiza se isOpen for falso

  return (
    <>
      {/* Fundo escurecido */}
      <div
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose}  // fecha modal se clicar no fundo
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#AB8B3E",
          color: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          width: "90%",
          maxWidth: "400px",
          zIndex: 1001,
          textAlign: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <img src={imgLogo} alt="Logo da Raafer"
          style={{ width: "150px", marginBottom: "1.5rem" }}
        />

        <h1 style={{ fontSize: "1.8rem", marginTop: "1rem" }}>Obrigado por enviar o e-mail!</h1>
        <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
          Entraremos em contato com você em breve.
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "1.5rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#fff",
            color: "#AB8B3E",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Fechar
        </button>
      </div>
    </>
  );
};

ObrigadoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ObrigadoModal;
