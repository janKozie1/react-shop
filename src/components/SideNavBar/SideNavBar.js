import React,{useContext} from 'react';

import * as S from './styledComponents'
import SideNavLink from './SideNavItem'
import UxContext from '../context/ux-context'

const SideNavBar = ({links}) => {
    let {sideNavVisible,dispatch} = useContext(UxContext)
    let onClickDefault = () =>{
        dispatch({type:'toggleSideNav',value:false})
    }
    return (
        <S.Nav sideNavVisible={sideNavVisible}>
            <S.Li onClick={onClickDefault}><S.PrimaryNavLink exact to='/account/login'><p>Log in</p></S.PrimaryNavLink></S.Li>
            <S.Li onClick={onClickDefault}><S.PrimaryNavLink exact to='/account/signup'><p>Sign up</p></S.PrimaryNavLink></S.Li>
            {links.map((e,index)=>{
                return <SideNavLink key={index} path={e.path} desc={e.desc} text={e.text} iconSize={'small'} onClick={onClickDefault} expandable={false}/>
            })}
            <SideNavLink path='/categories' text='categories' iconSize={'small'}  expandable={true}/>
        </S.Nav>
    );
};

export default SideNavBar;