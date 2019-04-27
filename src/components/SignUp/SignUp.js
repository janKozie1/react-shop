import React, {useContext,useReducer, useState} from 'react';
import * as S from './styledComponents'
import Input from './Input/Input' 
import {userDataReducer} from '../reducers/reducers'
import firebaseContext from '../Firebase/context'

const SignUp = () => {
    const firebase = useContext(firebaseContext);
    let emptyFields = {
        name:{
            value:'',
            valid:false
        },
        surname:{
            value:'',
            valid:false
        },
        email:{
            value:'',
            valid:false
        },
        password:{
            value:'',
            valid:false
        },
        cPassword:{
            value:'',
            valid:false
        },
    }
    const [isLoading,setLoading] = useState(false);
    const [userState,dispatch] = useReducer(userDataReducer,emptyFields)
    const fields = [
        {
            text:'name',
            type:'text',
            required:true,
            validation:(input)=>{
                let regex = /^[a-zA-Z]+$/;
                if(input.length<3){
                    return {err:`Name is too short`,value:false}
                }else if(!regex.test(input)){
                    return {err:'Name is invalid',value:false}
                }
                return {err:'',value:true};
            }
        },
        {
            text:'surname',
            type:'text',
            required:false,
            validation:(input)=>{
                let regex =  /^[a-zA-Z]+$/
                if(input.length<3){
                    return {err:`Surname is too short`,value:false}
                }else if(!regex.test(input)){
                    return {err:'Surname is invalid',value:false}
                }
                return {err:'',value:true};
            }
        },
        {
            text:'email',
            type:'email',
            required:true,
            validation:(input)=>{
                let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                if(!input.length){
                  return {err:`E-mail is required`,value:false}  
                }else if(!regex.test(input)){
                    return {err:`This e-mail is invalid`,value:false}
                }
                return {err:'',value:true};
            }
        },
        {
            text:'password',
            type:'password',
            required:true,
            validation:(input)=>{
                if(input.length<6){
                    return {err:'Password is too short',value:false}
                }
                return {err:'',value:true};
            }
        },
        {
            text:'confirm password',
            id:'cPassword',
            type:'password',
            required:true,
            validation:(input,state)=>{
                if(input.length<6){
                    return {err:'Password too short',value:false}
                }else if(input!==state.password){
                    return {err:`Passwords are different`,value:false}
                }
                return {err:'',value:true};
            }
        },
    ]
    let onFormSubmit = async(e) => {
        
        setLoading(true);
        e.preventDefault();
        console.log(userState);
        let validated = Object.keys(userState).reduce((prev,current)=>{
            return !userState[current].valid?prev=userState[current].valid:prev;
        },true)
        console.log(validated)
        //let userRegistered  = await firebase.auth.createUserWithEmailAndPassword(userState.email,userState.password)
        setLoading(true)
        //if(userRegistered){
          //  console.log(userRegistered)
       // }
    }
    return (

        <S.SignUp>
            <S.FormContainer>
                <S.Leaflet>
                    <S.ImageContainer isLoading={isLoading}>
                        <h3>Join us at PLANT <span>IT</span></h3>
                        <p>We provide our clients with the highest quality of saplings, herbs and many other plants.</p>
                        <S.Image />
                    </S.ImageContainer>
                    <S.Loader isLoading={isLoading}>
                        <p>Loading</p>
                        <S.DotContainer>
                            <S.Dot />
                            <S.Dot />
                            <S.Dot />
                        </S.DotContainer>
                        </S.Loader>
                </S.Leaflet>
                
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {fields.map((e,index)=>{
                        return <Input key={index} data={e} state={userState} dispatch={dispatch} isLoading={isLoading} />
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