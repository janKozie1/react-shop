import React,{useState} from 'react';

import * as S from './styledComponents.js'
const ToggleButon = () => {
    let [isToggled,setIsToggled]=useState(false)
    return (
        <S.Button isToggled={isToggled} onClick={()=>setIsToggled(!isToggled)}>
            <S.Bar />
        </S.Button>
    );
};

export default ToggleButon;