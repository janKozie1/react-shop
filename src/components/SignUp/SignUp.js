import React, {useContext,useReducer, useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router'
import firebaseContext from '../Firebase/context'
import AuthForm from '../AuthForm/AuthForm'
import {userDataReducer} from '../reducers/reducers'
import {fields} from './data/fields'
import {emptyFields} from './data/fields'
import {resultReducer} from '../reducers/reducers'
import * as S from './styledComponents'

const SignUp = props => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const [result,dispatch] = useReducer(resultReducer, defaultResult)
    const firebase = useContext(firebaseContext)
    let onFormValidated = (userState) =>{
        firebase.auth.createUserWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
            firebase.auth.currentUser.updateProfile({
                displayName:`${userState.name.value} ${userState.surname.value}`
            }).then(()=>{
                dispatch({type:'updateResult',payload:{text:'Success!',secText:'Press the button to be redirected',type:'success'}})
            }).catch((err)=>{
                dispatch({type:'updateResult',payload:{text:'Something went wrong',secText:err.message,type:'error'}})
            })
        }).catch(err => {
            dispatch({type:'updateResult',payload:{text:'Something went wrong',secText:err.message,type:'error'}})
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
                dispatchResult={dispatch}
            />
        </S.SignUp>
    );
};
const SignUpRouter = withRouter(SignUp)
export default SignUpRouter;