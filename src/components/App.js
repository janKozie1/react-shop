import React,{useEffect,useContext,useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import * as S from './styledComponents'
import About from './About/About';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp'
import NavBar from './NavBar/NavBar'
import Categories from './Categories/Categories'
import SideNavBar from './SideNavBar/SideNavBar'
import BackgroundFade from './BackgroundFade/BackgroundFade'
import firebaseContext from './Firebase/context'
import UxContext from './context/ux-context'
const App = () => {
    let firebase = useContext(firebaseContext)
    let {categories,dispatch} = useContext(UxContext) 
    useEffect(()=>{
        firebase.app.database().ref('/categories').once('value',(snap)=>{
            dispatch({type:'updateCategories',value:snap.val()})
            dispatch({type:'initialLoadComplete'})
        })
        // firebase.getCategories().then(snapshot => setCategories(snapshot.val()))
    },[])
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
        }
        
    ]
   
    return (
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
    );
    
}

export default App; 
