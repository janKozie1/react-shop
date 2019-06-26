import React,{useContext} from 'react';
// import firebaseContext from '../Firebase/context'
// import Slider from './Slider/Slider'
import HeroSection from './HeroSection/HeroSection'
import * as S from './styledComponents'

const Home = () => {
    // const firebase = useContext(firebaseContext);
    return (
        <S.Home>
            <HeroSection />
            {/* <Slider></Slider> */}
        </S.Home>
    );
};

export default Home;