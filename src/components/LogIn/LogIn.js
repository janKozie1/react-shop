import React, {useContext,useReducer, useState} from 'react';
import {withRouter} from 'react-router'
import * as S from './styledComponents'
import firebaseContext from '../Firebase/context'
import {fields} from './data/fields'
import {emptyFields} from './data/fields'
import AuthForm from '../AuthForm/AuthForm'
import {resultReducer} from '../reducers/reducers'

const LogIn = props => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const [result,dispatch] = useReducer(resultReducer, defaultResult)
    const firebase = useContext(firebaseContext);
    let onFormValidated = (userState) =>{
        firebase.auth.signInWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
            dispatch({type:'updateResult',payload:{text:'Success!',secText:'Press the button to be redirected',type:'success'}})
        }).catch(err => {
            dispatch({type:'updateResult',payload:{text:'Something went wrong',secText:err.message,type:'error'}})
        })
    }
    return (
        <S.SignUp>
            <AuthForm 
                defaultValue={emptyFields}
                fields={fields}
                buttonText={'Log In'} 
                altText={'No account? Sign up'}
                altPath={'/account/signup'}
                result={result}
                onFormValidated={onFormValidated}
                mode={'login'}
                dispatchResult={dispatch}
            />
        </S.SignUp>
    );
};
const LogInRouter = withRouter(LogIn)
export default LogInRouter;