import React,{useContext} from 'react';
import firebaseContext from '../Firebase/context'
import Slider from './Slider/Slider'

import * as S from './styledComponents'

const Home = () => {
    const firebase = useContext(firebaseContext);
    console.log(firebase.auth.currentUser)
    return (
        <S.Home>
            <Slider></Slider>
            {firebase.auth.currentUser ? firebase.auth.currentUser.email : null}
        </S.Home>
    );
};

export default Home;