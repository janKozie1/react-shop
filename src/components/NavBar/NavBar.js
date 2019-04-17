import React from 'react';
import * as S from './styledComponents'
import Logo from '../Logo/Logo'
import NavIcon from './NavIcon'
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
            <div style={{flex:1}}/>
            <S.Ul> 
                {links.map((e,index)=>{
                    return <NavIcon key={index} path={e.path} text={e.text}/>
                   
                })}
            </S.Ul>

        </S.Nav>
    );
};

export default NavBar;
