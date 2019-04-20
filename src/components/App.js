import React, { Component,useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as S from './styledComponents'

import About from './About/About';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar'
import Categories from './Categories/Categories'
import SideNavBar from './SideNavBar/SideNavBar'
import GlobalContext from './context/GlobalContext'
const App = () => {
    
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
    let categories = [
        'Indoors',
        'Outdoors',
        'Herbs',
        'Aquarium',
        'Fruits',
        'Vegetables',
        'Accesories'
    ]
    return (
        <GlobalContext>
            <Router>
                <S.GlobalStyle />
                <S.Header>
                    <NavBar links={links}/>
                    <Categories categories={categories} />
                </S.Header>
                <SideNavBar links={links}/>
                <S.Main>
                    <Route path='/' exact component={Home} />
                    <Route path='/about/' exact component={About} />
                </S.Main>
            </Router>
        </GlobalContext>
    );
    
}

export default App; 
