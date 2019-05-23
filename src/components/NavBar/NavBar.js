import React from 'react';
import * as S from './styledComponents'
import NavIcon from './NavIcon'
import ToggleButton from './ToggleButton/ToggleButon'
const NavBar = ({links}) => {
    return (
        <S.Nav>
            <S.Container>
                <ToggleButton />
                <S.Logo exact to='/'>PLANT <span>IT</span></S.Logo>
                    <S.Links>
                        <S.PrimaryNavLink exact to={{
                            pathname:'/account/',
                            state:{type:'login'}
                            }}>Log in</S.PrimaryNavLink>
                        <S.PrimaryNavLink exact to={{
                            pathname:'/account/',
                            state:{type:'signup'}
                            }}>Sign up</S.PrimaryNavLink>
                        <S.Ul> 
                            {links.map((e,index)=>{
                                return <NavIcon key={index} path={e.path} text={e.text} iconSize={'medium'} desc={e.desc}/>
                            })}
                        </S.Ul>
                    </S.Links>
                    
                </S.Container>
        </S.Nav>
    );
};

export default NavBar;
