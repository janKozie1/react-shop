import React from 'react';
import * as S from '../../styledComponents/all.js'
import Logo from '../Logo'

const NavBar = () => {
    let links = [
        {
            path:'/',
            text:'home'       
        },
        {
            path:'/user',
            text:'user'       
        },
        {
            path:'/cart',
            text:'cart'       
        },
        {
            path:'/about',
            text:'about'       
        },
    ]
    return (
        <S.Nav>
            <S.Logo>LOGO</S.Logo>
            <S.Ul> 
                {links.map((e,index)=>{
                    return <S.Li><S.StyledNavLink exact to={e.path}><Logo name={e.text} medium />{e.text}</S.StyledNavLink></S.Li>
                })}
            </S.Ul>

        </S.Nav>
    );
};

export default NavBar;
