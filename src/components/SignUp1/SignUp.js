import React, {useContext,useReducer, useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router'
import firebaseContext from '../Firebase/context'
import AuthForm from '../AuthForm/AuthForm'
import {userDataReducer} from '../reducers/reducers'
import {fields} from './data/fields'
import {emptyFields} from './data/fields'

import * as S from './styledComponents'
const SignUp = props => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const [result,setResult] = useState(defaultResult)
    const firebase = useContext(firebaseContext)

    let [userState,dispatch] = useReducer(userDataReducer,fields[`empty_signup`])
    let onFormValidated = (userState) =>{
        firebase.auth.createUserWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
            firebase.auth.currentUser.updateProfile({
                displayName:`${userState.name.value} ${userState.surname.value}`
            }).then(()=>{
                setResult({text:'Success!',secText:'Press the button to be redirected',type:'success'})
            }).catch((err)=>{
                setResult({text:'Something went wrong',secText:err.message,type:'error'})
            })
        }).catch(err => {
            setResult({text:'Something went wrong',secText:err.message,type:'error'})
        })
    }
    return (
        <S.SignUp> 
            <AuthForm 
                defaultValue={emptyFields}
                fields={fields}
                buttonText={'Sign up'} 
                altText={'Got an account? Log in'}
                altPath={'/account/login'}
                result={result}
                onFormValidated={onFormValidated}
                mode={'signup'}
            />
        </S.SignUp>
    );
};
const SignUpRouter = withRouter(SignUp)
export default SignUpRouter;