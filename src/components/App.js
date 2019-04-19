import React, { Component,useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as S from './styledComponents'

import About from './About/About';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar'
import Categories from './Categories/Categories'
import SideNavBar from './SideNavBar/SideNavBar'

import NavContext from './nav-context'

const App = () => {
    let [isToggled,setToggle] = useState(false);
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
        <Router>
            <S.GlobalStyle />
            <NavContext.Provider value={{isToggled,setToggle}}>
                <S.Header>
                    <NavBar links={links}/>
                    <Categories />
                </S.Header>
                <SideNavBar links={links}/>
            </NavContext.Provider>
            <S.Main>
                <Route path='/' exact component={Home} />
                <Route path='/about/' exact component={About} />
            </S.Main>
        </Router>
    );
    
}

export default App; 
