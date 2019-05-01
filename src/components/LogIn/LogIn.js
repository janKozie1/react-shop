import React, {useContext,useReducer, useState, useEffect} from 'react';
import {withRouter} from 'react-router'
import * as S from './styledComponents'
import Input from './Input/Input' 
import BackgroundFade from '../BackgroundFade/BackgroundFade'
import {userDataReducer} from '../reducers/reducers'
import firebaseContext from '../Firebase/context'
import Leaflet from './Leaflet/Leaflet'
import {fields} from './data/fields'
import {emptyFields} from './data/fields'


const SignUp = props => {
    let defaultResult = {text:'Loading',secText:'',type:'loading'}
    const firebase = useContext(firebaseContext);
    const [result,setResult] = useState(defaultResult)
    const [confirmed,setConfirmed] = useState(false)
    const [isLoading,setLoading] = useState(false);
    const [wasSubmited, setSubmited] = useState(false);
    const [userState,dispatch] = useReducer(userDataReducer,emptyFields)
    let onFormSubmit = async(e) => {
        setSubmited(true)
        e.preventDefault();
        let validated = Object.keys(userState).reduce((prev,current)=>{
            return !userState[current].valid.value?prev=userState[current].valid.value:prev;
        },true)
        if(validated){
            setLoading(true);
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
    }
    useEffect(()=>{
        if(confirmed && result.type==='success'){
            props.history.push("/");
        }else if(confirmed){
            setLoading(false)
            setTimeout(()=>{
                setResult(defaultResult)
                setConfirmed(false);
            },800)
        } 
    },[confirmed])
    let handleLoaderClick = () =>{
        setLoading(false)
        setResult(defaultResult)
    }
    return (
        <S.SignUp>
            <S.FormContainer>
                <Leaflet isLoading={isLoading} result={result} setConfirmed={setConfirmed}/>
                <S.Form onSubmit={e => onFormSubmit(e)}>
                    {fields.map((e,index)=>{
                        return <Input key={index} data={e} state={userState} dispatch={dispatch} isLoading={isLoading} wasSubmited={wasSubmited} />
                    })}
                    <BackgroundFade isLoading={isLoading} handleClick={handleLoaderClick}/>
                    <S.LinkContainer exact to='/user'>
                        <S.Paragraph>No account? Sign up</S.Paragraph>
                    </S.LinkContainer>
                    <S.SubmitButton disabled={isLoading} type="submit"><span>Sign up</span></S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.SignUp>
    );
};
const SignUpRouter = withRouter(SignUp)
export default SignUpRouter;