import React,{useContext} from 'react';

import * as S from './styledComponents'
import SideNavLink from './SideNavLink'
import UxContext from '../context/ux-context'

const SideNavBar = ({links}) => {
    let {sideNavVisible,dispatch} = useContext(UxContext)
    return (
        <S.Nav sideNavVisible={sideNavVisible}>
            {links.map((e,index)=>{
                return <SideNavLink key={index} path={e.path} text={e.text} iconSize={'small'} dispatch={dispatch}/>
            })}
        </S.Nav>
    );
};

export default SideNavBar;