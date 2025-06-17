import styled, { keyframes, css } from "styled-components";
import { Link } from "gatsby";  // Importando o Link do Gatsby

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateY(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    z-index: 2;
    position: relative;

     transform: translateY(60px);
        visibility: hidden;
      
        ${({ isVisible }) =>
          isVisible &&
          css`
            animation: ${slideInLeft} 1.88s ease-out forwards;
            visibility: visible;
          `}

    @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) { 
        padding-left: 20px;
        padding-top: 2.0rem;
     }
`;

export const Logo = styled.div`
`;

export const NavLinks = styled.ul`
    display: flex;
    font-weight: 400;
    gap: clamp(2.4rem, 4vw, 4.8rem);
    padding-right: 74px;
    transition: 0.5s ease-in-out;

    @media (max-width: ${({ theme }) => theme.bp.desktop}) {
        padding-left: 40px;
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) {
        padding: 20px;
        text-align: right;
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        display: ${({ open }) => (open ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 100px;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        border-radius: 10px;  
    }

    @media (max-width: ${({ theme }) => theme.bp.mobile}) {
        justify-content: center;
        right: 5px;  
        height: 300px;
    }
`;

export const StyledLink = styled.li`
    font-size: 2.0rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding-top: 10px;
    transition: color 0.3s ease-in-out;
    margin-right: 20px;
    font-weight: 400;
    
    &:hover {
        color: ${({ theme }) => theme.COLORS.GREEN || "#008000"};
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}){
        margin-right: 0px;

        &:hover {
        color: ${({ theme }) => theme.COLORS.BROWN};
    }
    }
`;

export const NavLi = styled(Link)`
    transition: none;
`;

export const Links = styled(StyledLink)`
    border-radius: 0 10px;
    border: 1px solid #f1f1f1;
    width: 205px;
    height: 34px;
    flex-shrink: 0;
    padding-inline: auto;
    text-align: center;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        color: ${({ theme }) => theme.COLORS.BROWN};
        background-color: ${({ theme }) => theme.COLORS.WHITE};
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        justify-content: center;
        margin: 0 auto;
        width: 405px;
        height: 34px;
        padding-top: 1px;
    }

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        justify-content: center;
        margin: 0 auto;
        width: 80%;
        height: auto;
        padding: 1rem;
    }
`;

export const MenuIcon = styled.div`
    display: none;
    cursor: pointer;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: ${({ theme }) => theme.bp.tablet}) {
        display: block;
    }
`;