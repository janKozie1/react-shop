import React,{useContext} from 'react';
import * as S from './styledComponents'
import UxContext from '../context/ux-context'
const BackgroundFade = () => {
    let {bgFadeVisible} = useContext(UxContext)
    return (
        <S.BackgroundFade bgFadeVisible={bgFadeVisible}>
            
        </S.BackgroundFade>
    );
};

export default BackgroundFade;