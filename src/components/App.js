import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as S from './styledComponents'

import About from './About/About';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar'
import Categories from './Categories/Categories'

class App extends Component {
    render() {
        return (
            <Router>
                <S.GlobalStyle />
                <S.Header>
                    <NavBar />
                    <Categories />
                </S.Header>


                <S.Main>
                    <Route path='/' exact component={Home} />
                    <Route path='/about/' exact component={About} />
                </S.Main>

            </Router>
        );
    }
}

export default App; 
