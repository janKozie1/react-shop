import React, {useState,useReducer} from 'react';
import img from '../../images/plant.png'
import * as S from './styledComponents'
import Input from './Input' 

const userDataReducer = (state, action) => {
    switch(action.type){
        case 'edit-email':{
            return {...state, email:action.data}
        }
        case 'edit-password':{
            return {...state, password:action.data}
        }
        case 'edit-name':{
            return {...state, name:action.data}
        }
        case 'edit-surname':{
            return {...state, surname:action.data}
        }
        case 'edit-cPassword':{
            return {...state, cPassword:action.data}
        }
        default:{
            return state;
        }
    }
}

const SignUp = () => {
    const [userState,dispatch] = useReducer(userDataReducer,{
        name:'',
        surname:'',
        email:'',
        password:'',
        cPassword:''
    })
    const fields = [
        {
            text:'name',
            type:'text'
        },
        {
            text:'surname',
            type:'text'
        },
        {
            text:'email',
            type:'email'
        },
        {
            text:'password',
            type:'password'
        },
        {
            text:'confirm password',
            id:'cPassword',
            type:'password'
        },
    ]
    let onFormSubmit = e => {
        e.preventDefault();
        console.log(userState)
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
                {fields.map((e,index)=>{
                    return <Input key={index} data={e} state={userState} dispatch={dispatch} />
                })}
                <S.Spacer />
                {/* <S.Label htmlFor="nameInput">
                    <span>Name</span>
                    <S.Input type="text" id="nameInput" placeholder='Name...' value={userState.name} onChange={e=>dispatch({type:'edit-name',data:e.target.value})} />
                </S.Label>
                <S.Label  htmlFor="surnameInput">
                    <span>Surname</span>
                    <S.Input type="text" id="surnameInput" placeholder='Surname...' value={userState.surname} onChange={e=>dispatch({type:'edit-surname',data:e.target.value})} />
                </S.Label>
                <S.Label email htmlFor="emailInput">
                    <span>E-mail</span>
                    <S.Input type="email" id="emailInput" placeholder='E-mail...' value={userState.email} onChange={e=>dispatch({type:'edit-email',data:e.target.value})} />
                </S.Label>
                <S.Spacer></S.Spacer>
                <S.Label password htmlFor="passwordInput">
                    <span>Password</span>
                    <S.Input type="password" id="passwordInput" placeholder='Password...' value={userState.password} onChange={e=>dispatch({type:'edit-password',data:e.target.value})} />
                </S.Label>
            
                <S.Label htmlFor="confirmPassword">
                    <span>Confirm password</span>
                    <S.Input type="password" id="confirmPassword" placeholder='Confirm password...' value={userState.cPassword} onChange={e=>dispatch({type:'edit-cPassword',data:e.target.value})} />
                </S.Label> */}
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