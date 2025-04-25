import styled from "styled-components";
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.6rem; 
  padding: 4rem; 
`;

export const PillarsCard = styled.div`
  width: 37rem; 
  height: 37.9rem; 
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  box-shadow: 0.8rem 0.8rem 0.4rem 0 rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 2.4rem; 
  font-weight: bold;
  border-radius: 0.2rem; 
  text-align: center;
  gap: 3.8rem; 

  .title {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem; 
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .line {
    width: 70%;
    height: 0.1rem; 
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .description {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-size: 1.8rem; 
    font-weight: lighter;
    line-height: normal;
    width: 27.5rem; 
    flex-shrink: 0;
  }
`;
