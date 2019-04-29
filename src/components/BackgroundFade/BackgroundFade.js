import React from 'react';
import * as S from './styledComponents'
const BackgroundFade = ({isLoading,handleClick}) => {
    return (
        <S.BackgroundFade isLoading={isLoading} onClick={()=>handleClick()}>
            
        </S.BackgroundFade>
    );
};

export default BackgroundFade;