import React,{useContext} from 'react';

import * as S from './styledComponents'
import SideNavLink from './SideNavLink'
import UxContext from '../context/ux-context'

const SideNavBar = ({links}) => {
    let {sideNavVisible,dispatch} = useContext(UxContext)
    return (
        <S.Nav sideNavVisible={sideNavVisible}>
            <S.Li><S.PrimaryNavLink exact to='/account/login'>Log in</S.PrimaryNavLink></S.Li>
            <S.Li> <S.PrimaryNavLink exact to='/account/signup'>Sign up</S.PrimaryNavLink></S.Li>
            {links.map((e,index)=>{
                return <SideNavLink key={index} path={e.path} text={e.text} iconSize={'small'} dispatch={dispatch}/>
            })}
        </S.Nav>
    );
};

export default SideNavBar;