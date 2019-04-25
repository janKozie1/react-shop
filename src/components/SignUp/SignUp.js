import React, {useContext,useReducer, useState} from 'react';
import img from '../../images/plant.png'
import * as S from './styledComponents'
import Input from './Input/Input' 
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
    const [isLoading,setLoading] = useState(false);
    const [user,setUser] = useState({})
    const [userState,dispatch] = useReducer(userDataReducer,emptyFields)
    const fields = [
        {
            text:'name',
            type:'text',
            validation:(input)=>{
                let regex = /^[a-zA-Z]+$/;
                if(input.length<3){
                    return {err:`Name is too short`}
                }else if(!regex.test(input)){
                    return {err:'Name is invalid'}
                }
                return true;
            }
        },
        {
            text:'surname',
            type:'text',
            validation:(input)=>{
                let regex =  /^[a-zA-Z]+$/
                if(input.length<3){
                    return {err:`Surname is too short`}
                }else if(!regex.test(input)){
                    return {err:'Surname is invalid'}
                }
                return true;
            }
        },
        {
            text:'email',
            type:'email',
            validation:(input)=>{
                let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                if(!input.length){
                  return {err:`E-mail is required`}  
                }else if(!regex.test(input)){
                    return {err:`This e-mail is invalid`}
                }
                return true;
            }
        },
        {
            text:'password',
            type:'password',
            validation:(input)=>{
                if(input.length<6){
                    return {err:'Password is too short'}
                }
                return true;
            }
        },
        {
            text:'confirm password',
            id:'cPassword',
            type:'password',
            validation:(input,state)=>{
                if(input.length<6){
                    return {err:'Password too short'}
                }else if(input!==state.password){
                    return {err:`Passwords are different`}
                }
                return true;
            }
        },
    ]
    let onFormSubmit = e => {
        
        setLoading(!isLoading);
        e.preventDefault();
        console.log("?")
        // firebase.auth.createUserWithEmailAndPassword(userState.email,userState.password)
    }
    return (

        <S.SignUp>
            <S.FormContainer>
                <S.ImageContainer>
                    <h3>Join us at PLANT <span>IT</span></h3>
                    <p>We provide our clients with the highest quality of saplings, herbs and many other plants.</p>
                    <S.Image />
                </S.ImageContainer>
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {fields.map((e,index)=>{
                        return <Input key={index} data={e} state={userState} dispatch={dispatch} />
                    })}
                    <S.Spacer />
                    <S.LinkContainer exact to='/login'>
                        <S.Paragraph>Got an account? Login</S.Paragraph>
                    </S.LinkContainer>
                    <S.SubmitButton isLoading={isLoading} type="submit"><span>Sign up</span></S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.SignUp>
    );
};

export default SignUp;