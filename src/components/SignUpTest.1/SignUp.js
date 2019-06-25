import React from 'react';
import * as S from './styledComponents'
const SignUp = () => {
    return (
       <S.SignUp>
           <S.Leaflet />
           <S.FormSection>
               <h2>Join us at PLANT <span>IT</span></h2>
               <S.FormContainer>
                    <S.Label>
                        <p>First name:</p>
                        <S.Input />
                    </S.Label>
                    <S.Label>
                        Surname:
                        <S.Input />
                    </S.Label>
                    <S.Label>
                        E-mail:
                        <S.Input />
                    </S.Label>
                    <S.Label>
                        Password:
                        <S.Input />
                    </S.Label>
                    <S.Label>
                        <S.Input type='checkbox'/>
                        I've read and agree with all Terms of Service
                    </S.Label>
                    <S.ActionContainer>
                    <S.Link exact to='/account/login'>
                            Got an account? Log in
                        </S.Link>
                        <S.SubmitButton type='submit'>
                            Sign up
                        </S.SubmitButton>
                        
                    </S.ActionContainer>
               </S.FormContainer>
           </S.FormSection>
       </S.SignUp>
    );
};

export default SignUp;