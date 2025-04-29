import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.BROWN};
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  margin: 0;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <div>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Ops! Página não encontrada.</ErrorMessage>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
