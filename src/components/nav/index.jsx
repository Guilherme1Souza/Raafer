import React from 'react';
import imgLogo from '../../images/logo.svg';
import { useState } from "react";
import closeIcon from "../../assets/closeIcon.svg"
import hamburguer from "../../assets/hamburguer.svg"


import { NavContainer, Logo, NavLinks, NavLi, Links, StyledLink, MenuIcon } from './style';

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <NavContainer>
                <Logo>
                    <img src={imgLogo} alt="Logo da Raafer" />
                </Logo>
                <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? closeIcon : hamburguer} alt="Menu" />
                </MenuIcon>
                <NavLinks open={menuOpen}>
                <NavLi to="/inicio">
                        <StyledLink>Inicio</StyledLink>
                    </NavLi>
                    <NavLi to="/sobre">
                        <StyledLink>Quem somos</StyledLink>
                    </NavLi>
                    <NavLi to="/contato">
                        <StyledLink>Contato</StyledLink>
                    </NavLi>
                    <NavLi to="/">
                        <Links>Demonstração</Links>
                    </NavLi>
                </NavLinks>
            </NavContainer>
        </>
    );
};