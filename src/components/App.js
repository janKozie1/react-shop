import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import * as S from '../styledComponents/all'
import About from './About';
import Home from './Home';
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

{/*            <Router>
                <NavBar />
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