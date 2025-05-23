import styled from "styled-components";
import Mercado from '../../images/mercado.png';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
     background: url(${Mercado}) no-repeat center;
      background-size: 100% auto;
    align-items: center;
    justify-content: center;
    padding-block: 15rem;
    
    h2 {
        font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: center;
        width: 755px;
        margin-bottom: 2rem;
        font-weight: 600;

        @media (max-width: ${({ theme }) => theme.bp.tablet}) {
            max-width: 650px;
            font-size: 3.8rem;
            padding-inline: 1rem;
        }

        @media (max-width: ${({ theme }) => theme.bp.mobile}) {
            max-width: 375px;
            font-size: 2.5rem;
        }
    } 
    `;


export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0px 10px;
  overflow: hidden;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 590px;
  height: 34px;
  flex-shrink: 0;
`;

export const EmailInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  font-size: 1.8rem;
  flex: 1;
   color: #FFFFFF;
   background-color: transparent;

    &::placeholder {
    color: #FFFFFF;
  }

  &:focus {
    outline: none;
    background-color: transparent;
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
  padding: 0.75rem 1rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background-color: #d2e8d7;
  }
`;