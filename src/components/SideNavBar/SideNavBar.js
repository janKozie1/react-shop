import React from 'react';

import * as S from './styledComponents'

import NavContext from '../nav-context'

const SideNavBar = () => {
    return (
        <NavContext.Consumer>
            {({isToggled,setToggle})=>(
                <S.Nav isToggled={isToggled}>
                    <ul>
                        <li>OwO</li>
                    </ul>
                </S.Nav>
            )}
            
        </NavContext.Consumer>
        
    );
};

export default SideNavBar;