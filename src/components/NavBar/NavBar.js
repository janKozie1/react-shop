import React from 'react';
import { NavLink } from 'react-router-dom'
import * as S from '../../styledComponents/all.js'
const NavBar = () => {
    return (
        <S.Nav>
            <S.Logo>LOGO</S.Logo>
          
            <S.Ul> 
                <li> <S.StyledNavLink exact to='/'>home</S.StyledNavLink></li>
                <li><S.StyledNavLink exact to='/about'>about</S.StyledNavLink></li>
                <li><S.StyledNavLink exact to='/about'>about</S.StyledNavLink></li>
                <li><S.StyledNavLink exact to='/about'>about</S.StyledNavLink></li>
            </S.Ul>

        </S.Nav>
    );
};

export default NavBar;

{/*            <Router>
                <div className='app'>
                    <NavLink activeStyle={{ color: 'skyblue' }} exact to='/'>home</NavLink>
                    <NavLink activeStyle={{ color: 'red' }} exact to='/about'>About</NavLink>
                    <Route path='/' exact render={() => {
                        return <h1>Welcome home!</h1>
                    }}>
                    </Route>

                    <Route path='/about' exact render={() => {
                        return <h1>Welcome in about!</h1>
                    }}>
                    </Route>
                    <Route path='/user/:username' component={User} />
                </div>
            </Router> */}