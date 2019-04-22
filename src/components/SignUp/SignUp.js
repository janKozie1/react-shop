import React, {useState} from 'react';
import img from '../../images/plant.png'
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
            <S.FormContainer>
            <S.ImageContainer>
                <h3>Join us at PLANT <span>IT</span></h3>
                <p>We provide our clients with the highest quality of saplings, herbs and many other plants.</p>
                <S.Img src={img} alt='sapling'/>
            </S.ImageContainer>
            <S.Form onSubmit={onFormSubmit}>
                <S.Label htmlFor="nameInput">
                    <span>Name</span>
                    <S.Input type="text" id="nameInput" placeholder='Name...' value={userEmail} onChange={e=>changeUserEmail(e.target.value)} />
                </S.Label>
                <S.Label  htmlFor="surnameInput">
                    <span>Surname</span>
                    <S.Input type="text" id="surnameInput" placeholder='Surname' value={userEmail} onChange={e=>changeUserEmail(e.target.value)} />
                </S.Label>
                <S.Label email htmlFor="emailInput">
                    <span>E-mail</span>
                    <S.Input type="email" id="emailInput" placeholder='E-mail...' value={userEmail} onChange={e=>changeUserEmail(e.target.value)} />
                </S.Label>
                <S.Spacer></S.Spacer>
                <S.Label password htmlFor="passwordInput">
                    <span>Password</span>
                    <S.Input type="password" id="passwordInput" placeholder='Password...' value={userPassword} onChange={e=>changeUserPassword(e.target.value)} />
                </S.Label>
            
                <S.Label htmlFor="confirmPassword">
                    <span>Confirm password</span>
                    <S.Input type="password" id="confirmPassword" placeholder='Confirm password...' value={userPassword} onChange={e=>changeUserPassword(e.target.value)} />
                </S.Label>
                <S.LinkContainer exact to='/login'>
                    <S.Paragraph>Got an account? Login</S.Paragraph>
                </S.LinkContainer>
                <S.SubmitButton type="submit">Sign up</S.SubmitButton>
            </S.Form>
            </S.FormContainer>
        </S.SignUp>
    );
};

export default SignUp;