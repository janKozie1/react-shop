import React, {useContext,useReducer, useState} from 'react';
import img from '../../images/plant.png'
import * as S from './styledComponents'
import Input from './Input' 
import {userDataReducer} from '../reducers/reducers'
import firebaseContext from '../Firebase/context'

const SignUp = () => {
    const firebase = useContext(firebaseContext);
    let emptyFields = {
        name:'',
        surname:'',
        email:'',
        password:'',
        cPassword:''
    }
    const [user,setUser] = useState({})
    const [userState,dispatch] = useReducer(userDataReducer,emptyFields)
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
        firebase.auth.createUserWithEmailAndPassword(userState.email,userState.password)
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