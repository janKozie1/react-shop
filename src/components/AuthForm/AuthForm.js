import React, {useContext,useReducer, useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router'
import firebaseContext from '../Firebase/context'
import UxContext from '../context/ux-context'
import Leaflet from './Leaflet/Leaflet'
import Input from './Input/Input'
import {userDataReducer} from '../reducers/reducers'

import * as S from './styledComponents'
const SignUp = props => {
    let {defaultValue,fields, buttonText, altText,altPath,result, onFormValidated, mode, dispatchResult} = props
    const [confirmed,setConfirmed] = useState(false)
    const [isLoading,setLoading] = useState(false)
    const [wasSubmited, setSubmited] = useState(false)
    const uxContext = useContext(UxContext)
    let [userState,dispatch] = useReducer(userDataReducer,defaultValue)
    let onFormSubmit = async(e) => {
        setSubmited(true)
        e.preventDefault()
        let validated = Object.keys(userState).reduce((prev,current)=>{
            return !userState[current].valid.value?prev=userState[current].valid.value:prev;
        },true)
       
        if(validated){
            uxContext.dispatch({type:'toggleBgFade',value:true})
            setLoading(true);
            onFormValidated(userState)
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
                dispatchResult({type:'restoreDefault'})
                setConfirmed(false)
            },800)
        } 
    },[confirmed])

    useEffect(()=>{
        if(!uxContext.bgFadeVisible && isLoading){
            setLoading(false)
            dispatchResult({type:'restoreDefault'})
        }
    },[uxContext.bgFadeVisible])
    
    return (
        <S.SignUp> 
            <S.FormContainer >
                <Leaflet isLoading={isLoading} result={result} setConfirmed={setConfirmed}/>
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {
                        fields.map((e,index)=>{
                            return <Input key={index} data={e} state={userState} dispatch={dispatch} isLoading={isLoading} wasSubmited={wasSubmited} mode={mode}/>
                        })
                    }
                    <S.Spacer mode={mode}/>
                    <S.LinkContainer exact  to={altPath} mode={mode}>
                        <S.Paragraph>{altText}</S.Paragraph>
                    </S.LinkContainer>
                    <S.SubmitButton disabled={isLoading} type="submit"><span>{buttonText}</span></S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.SignUp>
    );
};
const SignUpRouter = withRouter(SignUp)
export default SignUpRouter;