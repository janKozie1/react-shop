import React, { useContext } from 'react';

import * as S from './styledComponents'

import UxContext from "../../context/ux-context";
const ToggleButon = () => {
    const {sideNavVisible,dispatch} = useContext(UxContext)
    return (
        <S.Button onClick={() => dispatch({type:'toggleSideNav',value:!sideNavVisible})}>
            <S.Bar sideNavVisible={sideNavVisible} />
        </S.Button>
    );
};

export default ToggleButon;