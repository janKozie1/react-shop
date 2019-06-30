import React, {useState} from 'react';
import * as S from './styledComonents'
const Input = ({id, text}) => {
    let [wasFocused, setWasFocused] = useState(false);
    let [value, setValue] = useState('jankoziel@gmail.com');
    return (
        <S.Label  htmlFor={`user-${id}`} >
            <S.InputHeader wasFocused={wasFocused || value} >{`${text}`}</S.InputHeader>
            <S.Input onFocus={()=>setWasFocused(true)} onBlur={()=>setWasFocused(false)} type={id} name={id} id={`user-${id}`} value={value} onChange={({target})=>setValue(target.value)}/>
        </S.Label>
    );
};

export default Input;


// import React, {useState,useEffect} from 'react';
// import ErrorIcon from './ErrorIcon'
// import * as S from './styledComponents'

// const Input = ({data,state,dispatch, isLoading, wasSubmited,mode}) => {
//     let {text,type, autoId,validation} = data;
//     let id =`${data.id || text}`;
//     let {value,valid} = state[id];
//     let [wasClicked, setClicked] = useState(false);
//     let [wasUnfocused, setUnfocused] = useState(false);
//     useEffect(()=>{
//         if(wasSubmited){
//             setClicked(true)
//             setUnfocused(true)
//         }
//     },[wasSubmited])
//     // useEffect(()=>{
//     //     if(mode==='signup')
//     //         dispatch({type:'edit',field:'cPassword',data:state.cPassword.value,validation})
//     // },[state.password.value])
    
//     return (
//         <S.Label mode={mode} type={type} htmlFor={`${id}Input`} wasClicked={wasClicked} isLoading={isLoading} isValid={valid.value} wasUnfocused={wasUnfocused}>
//             <S.InputHeader >
//                     <p>{text}</p>
//                     <ErrorIcon errorMsg={valid.err} isValid={valid.value} wasUnfocused={wasUnfocused} isLoading={isLoading} />
//             </S.InputHeader>
//             <S.Input 
//                 disabled={isLoading}
//                 type={type} 
//                 id={`${id}Input`} 
//                 novalidate
//                 autoComplete={autoId} 
//                 value={value}  
//                 onFocus={()=>setClicked(true)} 
//                 onBlur={()=>setUnfocused(true)} 
//                 onChange={e=>dispatch({type:'edit',field:id,data:e.target.value,validation})} />
//         </S.Label>
//     );
// };

// export default Input;