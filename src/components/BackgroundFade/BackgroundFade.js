import React,{useContext} from 'react';
import * as S from './styledComponents'
import UxContext from '../context/ux-context'
const BackgroundFade = () => {
    let {bgFadeVisible,dispatch} = useContext(UxContext)
    return (
        <S.BackgroundFade bgFadeVisible={bgFadeVisible} onClick={()=>dispatch({type:'toggleSideNav',value:false})}>
            
        </S.BackgroundFade>
    );
};

export default BackgroundFade;