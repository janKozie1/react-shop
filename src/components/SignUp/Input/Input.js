import React, {useState,useEffect} from 'react';
import ErrorIcon from './ErrorIcon'
import * as S from './styledComponents'

const Input = ({data,state,dispatch, isLoading, wasSubmited,formType}) => {
    let {text,type, autoId,validation} = data;
    let id =`${data.id || text}`;
    let {value,valid} = state[id];
    let [wasClicked, setClicked] = useState(false);
    let [wasUnfocused, setUnfocused] = useState(false);
    useEffect(()=>{
        if(wasSubmited){
            setClicked(true)
            setUnfocused(true)
        }
    },[wasSubmited])
    useEffect(()=>{
        setClicked(false)
        setUnfocused(false)
    },[formType])
    useEffect(()=>{
        if(formType==='signup')
            dispatch({type:'edit',field:'cPassword',data:state.cPassword.value,validation})
    },[state.password.value])
    
    return (
        <S.Label type={formType} htmlFor={`${id}Input`} wasClicked={wasClicked} isLoading={isLoading} isValid={valid.value} wasUnfocused={wasUnfocused}>
            <S.InputHeader >
                    <p>{text}</p>
                    <ErrorIcon errorMsg={valid.err} isValid={valid.value} wasUnfocused={wasUnfocused} isLoading={isLoading} />
            </S.InputHeader>
            <S.Input 
                disabled={isLoading}
                type={type} 
                id={`${id}Input`} 
                novalidate
                autoComplete={autoId}
                placeholder={`${text}...`} 
                value={value}  
                onFocus={()=>setClicked(true)} 
                onBlur={()=>setUnfocused(true)} 
                onChange={e=>dispatch({type:'edit',field:id,data:e.target.value,validation})} />
        </S.Label>
    );
};

export default Input;