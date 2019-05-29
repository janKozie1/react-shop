import React,{useContext} from 'react';
import * as S from './styledComponents'
import NavIcon from './NavIcon'
import ToggleButton from './ToggleButton/ToggleButon'
import UxContext from '../context/ux-context'
const NavBar = () => {
    let {links} = useContext(UxContext)
    return (
        <S.Nav>
            <S.Container>
                <ToggleButton />
                <S.Logo exact to='/'>PLANT <span>IT</span></S.Logo>
                    <S.Links>
                    <S.PrimaryNavLink exact to='/account/login'>Log in</S.PrimaryNavLink>
                    <S.PrimaryNavLink exact to='/account/signup'>Sign up</S.PrimaryNavLink>
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
