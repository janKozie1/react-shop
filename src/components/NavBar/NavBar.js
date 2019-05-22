import React from 'react';
import * as S from './styledComponents'
import NavIcon from './NavIcon'
import ToggleButton from './ToggleButton/ToggleButon'
const NavBar = ({links}) => {
    return (
        <S.Nav>
            <S.Container>
                <ToggleButton />
                <S.Logo>PLANT <span>IT</span></S.Logo>
                    <S.Links>
                        <S.PrimaryNavLink exact to='/account/'>Log in</S.PrimaryNavLink>
                        <S.PrimaryNavLink exact to='/account/'>Sign up</S.PrimaryNavLink>
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
