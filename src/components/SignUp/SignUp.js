import React, {useContext,useReducer, useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router'
import firebaseContext from '../Firebase/context'
import UxContext from '../context/ux-context'
import Leaflet from './Leaflet/Leaflet'
import Input from './Input/Input'
import {userDataReducer} from '../reducers/reducers'
import * as fields from './data/fields'

import * as S from './styledComponents'
const SignUp = props => {
    console.log(props.location.state)
    let key = props.location.state ? props.location.state.key : 0
    
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const firebase = useContext(firebaseContext)
    const uxContext = useContext(UxContext)
    const [result,setResult] = useState(defaultResult)
    const [confirmed,setConfirmed] = useState(false)
    const [isLoading,setLoading] = useState(false)
    const [wasSubmited, setSubmited] = useState(false)
    let fType = props.match.params.type
    let [userState,dispatch] = useReducer(userDataReducer,fields[`empty_${fType}`])
    console.log(userState)
    
    let onFormSubmit = async(e) => {
        setSubmited(true)
        e.preventDefault()
        let validated = Object.keys(userState).reduce((prev,current)=>{
            return !userState[current].valid.value?prev=userState[current].valid.value:prev;
        },true)
       
        if(validated){
            uxContext.dispatch({type:'toggleBgFade',value:true})
            setLoading(true);
            if(fType === 'signup'){
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
            }else if(fType==='login'){
                firebase.auth.signInWithEmailAndPassword(userState.email.value,userState.password.value).then(e=>{
                    setResult({text:'Success!',secText:'Press the button to be redirected',type:'success'})
                }).catch(err => {
                    setResult({text:'Something went wrong',secText:err.message,type:'error'})
                })
            }
           
        }
    }
    

    useEffect(()=>{
        if(confirmed && result.type==='success'){
            props.history.push("/")
            uxContext.dispatch({type:'toggleBgFade',value:false})
        }else if(confirmed){
            setLoading(false)
            uxContext.dispatch({type:'toggleBgFade',value:false})
            setTimeout(()=>{
                setResult(defaultResult)
                setConfirmed(false)
            },800)
        } 
    },[confirmed])

    useEffect(()=>{
        if(!uxContext.bgFadeVisible && isLoading){
            setLoading(false)
            setResult(defaultResult)
        }
    },[uxContext.bgFadeVisible])
    
    return (
        <S.SignUp key={key}> 
            <S.FormContainer >
                <Leaflet isLoading={isLoading} result={result} setConfirmed={setConfirmed}/>
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {

                        fields[fType].map((e,index)=>{
                            return <Input key={index} data={e} state={userState} dispatch={dispatch} isLoading={isLoading} wasSubmited={wasSubmited} formType={fType} />
                        })
                    }
                    <S.Spacer type={fType}/>
                    <S.LinkContainer exact  to={`/account/${fType==='signup'?'login':'signup'}`}>
                        <S.Paragraph>{fType ==='signup' ? 'Got an account? Login' :  "No account? Sign up"}</S.Paragraph>
                    </S.LinkContainer>
                    <S.SubmitButton disabled={isLoading} fType="submit"><span>{fType ==='signup' ? 'Sign Up' : 'Log in'}</span></S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.SignUp>
    );
};
const SignUpRouter = withRouter(SignUp)
export default SignUpRouter;