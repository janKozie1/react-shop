import React from 'react';

import Logo from '../Logo/Logo'
import NavContext from '../context/nav-context'
import * as S from './styledComponents'

const SideNavLink = ({path,text,iconSize}) => {
    return (
        <NavContext.Consumer>
            {({setToggle})=>(
                <S.Li onClick={()=>setToggle(false)}>
                    <S.StyledNavLink exact to={path}><Logo name={text} size={iconSize} />
                        <p>{text}</p>
                    </S.StyledNavLink>
                </S.Li>
            )}
            
        </NavContext.Consumer>
        
    );
};

export default SideNavLink;