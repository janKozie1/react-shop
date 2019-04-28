import React, {useContext,useReducer, useState} from 'react';
import * as S from './styledComponents'
import Input from './Input/Input' 
import {userDataReducer} from '../reducers/reducers'
import firebaseContext from '../Firebase/context'
import Leaflet from './Leaflet/Leaflet'

import {fields} from './data/fields'
import {emptyFields} from './data/fields'

const SignUp = () => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const firebase = useContext(firebaseContext);
    const [result,setResult] = useState(defaultResult)
    const [isLoading,setLoading] = useState(false);
    const [wasSubmited, setSubmited] = useState(false);
    const [userState,dispatch] = useReducer(userDataReducer,emptyFields)
    let onFormSubmit = async(e) => {
        setSubmited(true)
        e.preventDefault();
        let validated = Object.keys(userState).reduce((prev,current)=>{
            return !userState[current].valid?prev=userState[current].valid:prev;
        },true)
        if(validated){
            setLoading(true);
            firebase.auth.createUserWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
                setResult({text:'Success!',secText:'You will be redirected',type:'success'})
                setTimeout(()=>{
                    setLoading(false)
                    setResult(defaultResult)
                },3500)
                
            }).catch(err => {
                setResult({text:'Something went wrong',secText:err.message,type:'error'})
                setTimeout(()=>{
                    setLoading(false)
                    setResult(defaultResult)
                },3500)
            })
        }
    }
    return (

        <S.SignUp>
            <S.FormContainer>
                <Leaflet isLoading={isLoading} result={result} />
                
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {fields.map((e,index)=>{
                        return <Input key={index} data={e} state={userState} dispatch={dispatch} isLoading={isLoading} wasSubmited={wasSubmited} />
                    })}
                    <S.Spacer />
                    <S.LinkContainer exact to='/login'>
                        <S.Paragraph>Got an account? Login</S.Paragraph>
                    </S.LinkContainer>
                    <S.SubmitButton disabled={isLoading} type="submit"><span>Sign up</span></S.SubmitButton>
                </S.Form>
            </S.FormContainer>
            
        </S.SignUp>
    );
};

export default SignUp;