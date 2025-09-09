import styled from "styled-components";
import Mercado from "../../images/mercado.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${Mercado}) no-repeat center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  padding-block: 15rem;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding-block: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    padding-block: 4rem;
    padding-inline: 1.5rem;
  }

  h2 {
    font-size: clamp(2.4rem, 2vw + 1.6rem, 3.6rem);
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    max-width: 755px;
    margin-bottom: 2rem;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
      max-width: 650px;
      font-size: 2.8rem;
      padding-inline: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
      max-width: 100%;
      font-size: 2rem;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 590px;
  height: 42px;

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
    gap: 0.8rem;
    padding: 0.75rem;
  }
`;

export const EmailInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  flex: 1;
  color: #ffffff;
  background-color: transparent;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    outline: none;
    background-color: transparent;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    font-size: 1.4rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 201px;
  gap: 0.5rem;
  color: #2b7a4b;
  font-size: 1.3rem;
  padding: 0.85rem 1rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  background: #ffffff;
  border-radius: 6px;

  &:hover {
    background-color: #d2e8d7;
  }

  @media (max-width: ${({ theme }) => theme.bp.mobile}) {
    width: 100%;
    font-size: 1.4rem;
  }
`;
