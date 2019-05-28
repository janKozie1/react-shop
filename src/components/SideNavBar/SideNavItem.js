import React, { useState } from 'react';
import Logo from '../Logo/Logo'
import * as S from './styledComponents'

const SideNavItem = ({ path, text, iconSize, onClickDefault, desc ,icon,primary}) => {
    return (
        <S.Li onClick={() => onClickDefault()} primary={primary}>
            <S.StyledNavLink exact to={path} >
                {icon && <Logo name={text} size={iconSize} />}
                <p>{(desc || text)}</p>
            </S.StyledNavLink>
        </S.Li >
    );
};

export default SideNavItem;