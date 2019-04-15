import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import User from './User'
class App extends Component {
    render() {
        return (
            <Router>

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
            </Router>
        );
    }
}

export default App; 