import React,{useContext} from 'react';
import firebaseContext from '../Firebase/context'
// import Slider from './Slider/Slider'
import HeroSection from './HeroSection/HeroSection'
import * as S from './styledComponents'

const Home = () => {
    const firebase = useContext(firebaseContext);
    return (
        <S.Home>
            <p style={{position:'absolute'}}>{firebase.app.auth().currentUser ? firebase.app.auth().currentUser.email : ''}</p>
            <HeroSection />
            {/* <Slider></Slider> */}
        </S.Home>
    );
};

export default Home;