import React from 'react';
import * as S from './styledComponents'
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
            <S.Container>
                <S.Logo>PLANT <span>IT</span></S.Logo>
                <S.Ul> 
                    {links.map((e,index)=>{
                        return <NavIcon key={index} path={e.path} text={e.text}/>
                    
                    })}
                </S.Ul>
                </S.Container>
        </S.Nav>
    );
};

export default NavBar;
