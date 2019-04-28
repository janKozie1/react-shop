import React, {useState,useEffect} from 'react';
import ErrorIcon from './ErrorIcon'
import * as S from './styledComponents'

const Input = ({data,state,dispatch, isLoading}) => {
    let {text,type} = data;
    let id =`${data.id || text}`;
    
    let [wasClicked, setClicked] = useState(false);
    let [wasUnfocused, setUnfocused] = useState(false);
    let [valid,setValid] = useState({value:false,err:`Can't be empty`})

    let validate = input =>{
        dispatch({type:`edit`,field:id,data:input})
        let result = data.validation(input,state);
        setValid({value:result.value,err:result.err})
        dispatch({type:'validate',field:id,data:result.value})
    }
    return (
        <S.Label htmlFor={`${id}Input`} wasClicked={wasClicked} isLoading={isLoading} isValid={valid.value} wasUnfocused={wasUnfocused}>
            <S.InputHeader >
                    <p>{text}</p>
                    <ErrorIcon errorMsg={valid.err} isValid={valid.value} wasUnfocused={wasUnfocused} />
            </S.InputHeader>
            <S.Input 
                disabled={isLoading}
                type={type} 
                id={`${id}Input`} 
                novalidate
                placeholder={`${text}...`} 
                value={state[data.id || text].value}  
                onFocus={()=>setClicked(true)} 
                onBlur={()=>setUnfocused(true)} 
                onChange={e=>validate(e.target.value)} />
        </S.Label>
    );
};

export default Input;