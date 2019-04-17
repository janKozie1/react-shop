import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as S from '../styledComponents/all'
import About from './About';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar'

class App extends Component {
    render() {
        return (
            <Router>
                <S.GlobalStyle />
                <NavBar />
                <S.Main>
                    <Route path='/' exact component={Home} />
                    <Route path='/about/' exact component={About} />
                </S.Main>
               
            </Router>
        );
    }
}

export default App; 
