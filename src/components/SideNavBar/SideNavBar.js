import React from 'react';

import * as S from './styledComponents'
import SideNavIcon from './SideNavIcon'
import NavContext from '../nav-context'

const SideNavBar = ({links}) => {
    return (
        <NavContext.Consumer>
            {({isToggled,setToggle})=>(
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