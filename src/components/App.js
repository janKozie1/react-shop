import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import * as S from './styledComponents'

import About from './About/About';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp'
import NavBar from './NavBar/NavBar'
import Categories from './Categories/Categories'
import SideNavBar from './SideNavBar/SideNavBar'
import BackgroundFade from './BackgroundFade/BackgroundFade'
import GlobalContext from './context/GlobalContext'
const App = () => {
    let links = [
        {
            path:'/',
            text:'home'       
        },
        {
            path:'/account',
            text:'user',
            desc:'you'       
        },
        {
            path:'/cart',
            text:'cart'       
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
                <BackgroundFade />
                <S.Main>
                    <Route path='/' exact component={Home} />
                    <Route path='/about/' exact component={About} />
                    <Route path='/account/login' exact render={LogIn}/>
                    <Route path='/account/signup'  exact render={SignUp} />
                </S.Main>
            </Router>
        </GlobalContext>
    );
    
}

export default App; 
