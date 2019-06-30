import React, {useState} from 'react';
import Input from './Input/Input'
import * as S from './styledComponents'
const AuthForm = () => {
    

    return (
        <S.FormContainer>
            <h1>Join us at PLANT <span>IT</span></h1>
            <S.Form>
                <Input id='email' text='email'/>
                <Input id='password' text='password'/>
                <S.ActionContainer>
                    <S.Link to='/'>Forgot your password?</S.Link>
                    <S.Spacer/>
                    <S.SwitchType>Got an account? Log in</S.SwitchType>
                </S.ActionContainer>
                <S.SubmitButton type='submit'>Sign in</S.SubmitButton>
            </S.Form>
            <S.SectionDivider>
                    <p>or</p>
            </S.SectionDivider>
            <S.SignInGoogle>
                    <S.GoogleIcon />
                    <p>Sign in with Google</p>
            </S.SignInGoogle>
            <S.Disclaimer>
                By clicking Sign in or Sign in with Google , you agree to PLANT IT's Terms of Use and Privacy Policy. Read more about our policies <a>here</a>
            </S.Disclaimer>
        </S.FormContainer>
    );
};

export default AuthForm;