import React from 'react';
import * as S from './styledComponents'
import Logo from '../Logo/Logo'

const NavIcon = ({path,text}) => {
    return (
        <S.Li>
            <S.StyledNavLink exact to={path}><Logo name={text} medium />
                {text}
            </S.StyledNavLink>
        </S.Li>
    );
};

export default NavIcon;