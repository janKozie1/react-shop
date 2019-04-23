import React from 'react';
import * as S from './styledComponents'

const Input = ({data,state,dispatch}) => {
    let {text,type} = data
    return (
        <S.Label htmlFor={`${data.id || text}Input`}>
            <span style={{textTransform:'capitalize'}}>{text}</span>
            <S.Input type={type} id={`${data.id || text}Input`} placeholder={`${text}...`} value={state[data.id || text]} onChange={e=>dispatch({type:`edit-${data.id || text}`,data:e.target.value})} />
        </S.Label>
    );
};

export default Input;