import React, {useContext,useReducer, useState, useEffect} from 'react';
import {withRouter} from 'react-router'
import * as S from './styledComponents'
import firebaseContext from '../Firebase/context'
import {fields} from './data/fields'
import {emptyFields} from './data/fields'
import AuthForm from '../AuthForm/AuthForm'


const LogIn = props => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const [result,setResult] = useState(defaultResult)
    const firebase = useContext(firebaseContext);
    let onFormValidated = (userState) =>{
        firebase.auth.signInWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
            setResult({text:'Success!',secText:'Press the button to be redirected',type:'success'})
        }).catch(err => {
            setResult({text:'Something went wrong',secText:err.message,type:'error'})
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
            />
        </S.SignUp>
    );
};
const LogInRouter = withRouter(LogIn)
export default LogInRouter;