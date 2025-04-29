import React from 'react';
import imgLogo from '../../images/logo.svg';
import { useState } from "react";
import  closeIcon from "../../assets/closeIcon.svg"
import  hamburguer from "../../assets/hamburguer.svg"

import { NavContainer, Logo, NavLinks, NavLink, Link, MenuIcon } from './style';

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
                <NavLink>Inicio</NavLink>
                <NavLink>Sobre</NavLink>
                <NavLink>Contato</NavLink>
                <Link>Seja um patrocinador</Link>
            </NavLinks>
        </NavContainer>
        </>
    );
};