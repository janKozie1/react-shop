import React from 'react';

import * as S from './styledComponents'
import SideNavLink from './SideNavLink'
import NavContext from '../context/nav-context'

const SideNavBar = ({links}) => {
    return (
        <NavContext.Consumer>
            {({isToggled,setToggle})=>(
                <S.Nav isToggled={isToggled}>
                    {links.map((e,index)=>{
                        return <SideNavLink onClick={()=>console.log("?")} key={index} path={e.path} text={e.text} iconSize={'small'}/>
                    
                    })}
                </S.Nav>
            )}
        </NavContext.Consumer>
        
    );
};

export default SideNavBar;