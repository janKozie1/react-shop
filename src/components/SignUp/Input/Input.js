import React, {useState} from 'react';
import ErrorIcon from './ErrorIcon'
import * as S from './styledComponents'

const Input = ({data,state,dispatch, isLoading}) => {
    let {text,type} = data;
    let [wasClicked, setClicked] = useState(false);
    let [isValid, setValid] = useState({})
    let [errorMsg,setErrorMsg] = useState('');
    let id =`${data.id || text}`;
    let validate = () =>{
        let result = data.validation(state[data.id || data.text].value,state);
        setErrorMsg(result.err)
        setValid(result.value)
        dispatch({type:'validate',field:id,data:result.value})
    }
    return (
        <S.Label htmlFor={`${id}Input`} wasClicked={wasClicked} isLoading={isLoading} isValid={isValid}>
            <S.InputHeader >
                    <p>{text}</p>
                    <ErrorIcon errorMsg={errorMsg} isValid={isValid} />
            </S.InputHeader>
            <S.Input 
                disabled={isLoading}
                type={type} 
                id={`${id}Input`} 
                novalidate
                placeholder={`${text}...`} 

                value={state[data.id || text].value}  
                onFocus={()=>setClicked(true)} 
                onBlur={()=>validate()} 
                onChange={e=>dispatch({type:`edit`,field:id,data:e.target.value})} />
        </S.Label>
    );
};

export default Input;