import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.DARK_GREY || "#333"};
`;

export const NavLinks = styled.ul`
    display: flex;
    font-weight: 400;
    gap: 48px;
    padding-right: 74px;
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
`;
