import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: relative;

    @media (max-width: ${({ theme }) => theme.bp.smallDesktop}) { 
        padding-left: 20px;
     }
`;

export const Logo = styled.div`
`;

export const NavLinks = styled.ul`
    display: flex;
    font-weight: 400;
    gap: 48px;
    padding-right: 74px;
    transition: 0.5s ease-in-out;

    @media (max-width: ${({ theme }) => theme.bp.desktop}) {
        padding: 20px;
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
        right: 15px;
        background-color: ${({ theme }) => theme.COLORS.GREEN};
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        border-radius: 10px;
       
    }
`;

const BaseLink = styled.li`
    font-size: 18px;
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
        font-size: 28px;

        &:hover {
        color: ${({ theme }) => theme.COLORS.BROWN};
    }
    }
`;

export const NavLink = styled(BaseLink)`
    transition: none;
`;

export const Link = styled(BaseLink)`
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