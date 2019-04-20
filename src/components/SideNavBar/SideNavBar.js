import React from 'react';

import * as S from './styledComponents'
import SideNavIcon from './SideNavIcon'
import NavContext from '../context/nav-context'

const SideNavBar = ({links}) => {
    return (
        <NavContext.Consumer>
            {({isToggled})=>(
                <S.Nav isToggled={isToggled}>
                    {links.map((e,index)=>{
                        return <SideNavIcon key={index} path={e.path} text={e.text} iconSize={'small'}/>
                    
                    })}
                </S.Nav>
            )}
        </NavContext.Consumer>
        
    );
};

export default SideNavBar;