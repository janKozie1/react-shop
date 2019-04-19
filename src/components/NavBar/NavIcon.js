import React from 'react';
import * as S from './styledComponents'
import Logo from '../Logo/Logo'

const NavIcon = ({path,text,iconSize}) => {
    return (
        <S.Li>
            <S.StyledNavLink exact to={path}><Logo name={text} size={iconSize} />
                {text}
            </S.StyledNavLink>
        </S.Li>
    );
};

export default NavIcon;