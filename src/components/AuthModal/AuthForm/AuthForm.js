import React, {useState} from 'react';
import * as S from './styledComponents'
const AuthForm = () => {
    let [wasFocused, setWasFocused] = useState(false);

    return (
        <S.FormContainer>
            <h1>Join us at PLANT <span>IT</span></h1>
            <S.Form>
                <S.Label  htmlFor={`user-email`} >
                    <S.InputHeader wasFocused={wasFocused} >{`email`}</S.InputHeader>
                    <S.Input onFocus={()=>setWasFocused(true)} onBlur={()=>setWasFocused(false)} type={`email`} name={`email`} id={`user-email`}/>
                </S.Label>
                <S.Label htmlFor={`user-password`} >
                    <S.InputHeader wasFocused={wasFocused}>{`password`}</S.InputHeader>
                    <S.Input type={`password`} name={`password`} id={`user-password`}/>
                </S.Label>
                
            </S.Form>
        </S.FormContainer>
    );
};

export default AuthForm;