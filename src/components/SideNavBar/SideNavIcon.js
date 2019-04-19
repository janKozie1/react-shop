import React from 'react';
import Logo from '../Logo/Logo'
import * as S from './styledComponents'

const SideNavIcon = ({path,text,iconSize}) => {
    return (
        <S.Li>
            <S.StyledNavLink exact to={path}><Logo name={text} size={iconSize} />
                <p>{text}</p>
            </S.StyledNavLink>
        </S.Li>
    );
};

export default SideNavIcon;