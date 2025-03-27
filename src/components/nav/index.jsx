import React from 'react';
import imgLogo from '../../images/logo.svg';

import { NavContainer, Logo, NavLinks, NavLink, Link } from './style';

export function Nav() {
    return (
        <>
        <NavContainer>
            <Logo>
                <img src={imgLogo} alt="Logo da Raafer" />
            </Logo>
            <NavLinks>
                <NavLink>Inicio</NavLink>
                <NavLink>Sobre</NavLink>
                <NavLink>Contato</NavLink>
                <NavLink>Clientes</NavLink>
                <Link>Seja um patrocinador</Link>
            </NavLinks>
        </NavContainer>
        </>
    );
};