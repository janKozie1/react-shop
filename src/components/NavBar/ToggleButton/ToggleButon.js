import React, { useContext } from 'react';

import * as S from './styledComponents'

import NavContext from "../../context/nav-context";
const ToggleButon = () => {
    const {isToggled,setToggle} = useContext(NavContext)
    // does deconstructioning cause any problems or is it safe to use it?
    // const context = useContext(navContext) ... context.SetToggle ....
    console.log();
    return (

        <S.Button onClick={() => setToggle(!isToggled)}>
            <S.Bar isToggled={isToggled} />
        </S.Button>


    );
};

export default ToggleButon;