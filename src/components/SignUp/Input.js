import React, {useState} from 'react';
import ErrorIcon from './ErrorIcon'
import * as S from './styledComponents'

const Input = ({data,state,dispatch}) => {
    let {text,type} = data;
    let [isFocused, setFocus] = useState(false);
    let [isValid, setValid] = useState(true)
    let validate = ()=>{
        if(data.id==='cPassword'){
            state[data.id] === state.password && state[data.id].length>=6  ? setValid(true) : setValid(false)
        }else{
            data.validation(state[data.id || data.text]) ? setValid(true) : setValid(false) 
        }
        
    }
    return (
        <S.Label htmlFor={`${data.id || text}Input`} isFocused={isFocused}  isValid={isValid} data-errormsg={'asdf'}>
            <S.InputHeader>
                    <p>{text}</p>
                    <ErrorIcon errorMsg={'Check your input'} />
            </S.InputHeader>
            <S.Input 
                type={type} 
                id={`${data.id || text}Input`} 
                placeholder={`${text}...`} 
                value={state[data.id || text]}  
                novalidate
                onFocus={()=>setFocus(true)} 
                onBlur={()=>validate()} 
                onChange={e=>dispatch({type:`edit-${data.id || text}`,data:e.target.value})} />
        </S.Label>
    );
};

export default Input;