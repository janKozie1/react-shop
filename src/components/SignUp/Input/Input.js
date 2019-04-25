import React, {useState} from 'react';
import ErrorIcon from './ErrorIcon'
import * as S from './styledComponents'

const Input = ({data,state,dispatch}) => {
    let {text,type} = data;
    let [isFocused, setFocus] = useState(false);
    let [isValid, setValid] = useState(true)
    let [errorMsg,setErrorMsg] = useState('');
    let validate = () =>{
            let result = data.validation(state[data.id || data.text],state);
            return result.err ? [setValid(false),setErrorMsg(result.err)] : setValid(true) 
    }
    return (
        <S.Label htmlFor={`${data.id || text}Input`} isFocused={isFocused}  isValid={isValid}>
            <S.InputHeader>
                    <p>{text}</p>
                    <ErrorIcon errorMsg={errorMsg} isValid={isValid} />
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