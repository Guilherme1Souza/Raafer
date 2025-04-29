import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  width: 100%;
  height: 84.7rem;
  padding-inline: 25.9rem;

  @media (max-width: ${({ theme }) => theme.bp.hugeDesktop}) {
    padding-inline: 5rem;
    height: 80.5rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.bigDesktop}) {
    padding-inline: 5rem;
    height: 80.5rem;
  }

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    padding-inline: 4rem;
    height: 70.5rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3rem; 
  font-style: normal;
  font-weight: 600;
  line-height: 3.8rem;
  width: 60.8rem;
  padding-top: 5.3rem;
  padding-bottom: 13.1rem;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    width: 100%;
    font-size: 2.4rem; 
    text-align: center;
    padding-bottom: 4rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0 auto;
`;

export const Card = styled.div`
 background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1.5rem 0rem; 
  padding: 2rem;
  height: 48.8rem;
  max-width: 40rem; 
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    height: 43rem; 
    padding: 1.5rem;
  }
`;

export const Avatar = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  width: 16.1rem;
  height: 14.3rem; 
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    width: 12rem;
    height: 11rem; 
  }
`;

export const Name = styled.h3`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 auto;
  padding-bottom: 0.6rem;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 auto;
`;

export const Company = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  padding-block: 1.2rem;
  margin: 0 auto;
`;

export const Text = styled.p`
  width: 25rem;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.bp.tablet}) {
    width: 100%;
  }
`;

export const Stars = styled.div`
  text-align: center;
  align-items: center;
  margin: 1.8rem auto;
`;
