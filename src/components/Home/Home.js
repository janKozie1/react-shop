import React,{useContext} from 'react';
import firebaseContext from '../Firebase/context'
import Slider from './Slider/Slider'

import * as S from './styledComponents'

const Home = () => {
    const firebase = useContext(firebaseContext);
    return (
        <S.Home>
            <Slider></Slider>
        </S.Home>
    );
};

export default Home;