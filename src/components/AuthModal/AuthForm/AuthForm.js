import React, {useState, useContext} from 'react';
import Input from './Input/Input'
import firebaseContext from '../../Firebase/context'
import * as S from './styledComponents'
const AuthForm = () => {
    let firebase = useContext(firebaseContext)
    let authWithGoogle = () => {
        console.log(firebase)
        firebase.app.auth().signInWithPopup(firebase.provider).then((e)=>{
            console.log(e)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <S.FormContainer>
            <h1>Join us at PLANT <span>IT</span></h1>
            <S.Close />
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
            <S.SectionDivider >
                    <p>or</p>
            </S.SectionDivider>
            <S.SignInGoogle onClick={()=>authWithGoogle()}>
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