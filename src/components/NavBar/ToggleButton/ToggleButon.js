import React,{useState} from 'react';

import * as S from './styledComponents'

import NavContext from "../../nav-context";
const ToggleButon = () => {
    return (
        <NavContext.Consumer>
            {({isToggled,setToggle})=>(
                <S.Button  onClick={()=>setToggle(!isToggled)}>
                    <S.Bar isToggled={isToggled}  />   
                </S.Button>
            )}
            
        </NavContext.Consumer>
        
    );
};

export default ToggleButon;