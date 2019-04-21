import React, {useState} from 'react';

import * as S from './styledComponents'

const SignUp = () => {
    let [userEmail,changeUserEmail] = useState('');
    let [userPassword,changeUserPassword] = useState('');
    let onFormSubmit = e => {
        e.preventDefault();
        console.log({userEmail,userPassword})
    }
    return (
        <S.SignUp>
            <S.Form onSubmit={onFormSubmit}>
                <S.Label htmlFor="emailInput">E-mail</S.Label>
                <S.Input type="email" id="emailInput" placeholder='E-mail...' value={userEmail} onChange={e=>changeUserEmail(e.target.value)} />
                <S.Label htmlFor="passwordInput">Password</S.Label>
                <S.Input type="password" id="passwordInput" placeholder='Password...' value={userPassword} onChange={e=>changeUserPassword(e.target.value)} />
                <S.SubmitButton type="submit">Sign up</S.SubmitButton>
                <S.SubmitButton type="submit">Log in instead</S.SubmitButton>
            </S.Form>
          
        </S.SignUp>
    );
};

export default SignUp;