import styled, {css} from 'styled-components';
import {colors} from '../../cssVariables'
import {NavLink} from 'react-router-dom'
import googleIcon from '../../../images/google_icon.svg'
import {ReactComponent as closeIcon} from '../../../images/close.svg'

export let FormContainer = styled.div`

    width:380px;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    position:relative;
    padding:30px 30px;
    border-radius:5px;
    >h1{
        margin:0;
        font-size:1.7rem;
        font-weight:normal;
        width:100%;
        text-align:left;
        >span{
            color:${colors.primaryColor}
        }
    }
`

export let Form = styled.form`
    width:100%;
    margin-top:10px;
    
`

export let Close = styled(closeIcon)`
    position:absolute;
    top:0px;
    right:0px;
    width:30px;
    height:30px;
    padding:5px;
    fill:rgba(0,0,0,0.25);
    cursor:pointer;
    transition:fill 0.3s ease-in-out;
    &:hover{
        fill:rgba(0,0,0,0.7);
    }
`

export let Label = styled.label`
    position:relative;
    width:100%;
    height:45px;
    margin-top:25px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`

export let InputHeader = styled.p`
    font-weight:bolder;
    text-transform:uppercase;
    font-size:0.75rem;
    position:absolute;
    left:11px;
    bottom:0;
    padding:0px 10px;
    margin:0;
    bottom:22px;
    transform:translateY(50%);
    z-index:850;
    transition:bottom 0.3s ease-out;
    ${props => props.wasFocused && css`
        bottom:44px;
        background:white;
    
        box-sizing:content-box;
    `}
    

`
export let Input = styled.input`
    height:45px;
    font-family:inherit;
    width:100%;
    border:1px solid rgba(0,0,0,0.15);
    transition:border-color 0.3s ease-out;
    &:hover{
        border-color:rgba(0,0,0,0.3)
    }
    padding: 15px 30px;
    border-radius:5px;
    font-size:0.75rem;
    &:focus{
        outline:none;
    }
`

export let ActionContainer = styled.div`
    width:100%;
    height:45px;
    margin-top:12.5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:0.75rem;
`


export let Spacer = styled.div`
    height:50%;
    width:1px;
    background:${colors.dividerColor};
`
export let Link = styled(NavLink)`
    text-decoration:none;
    width:49.5%;
    height:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:rgba(0,0,0,0.6);
    transition:color 0.3s ease-in-out;
    &:hover{
        color:rgba(0,0,0,0.8)
    }
`

export let SwitchType = styled.p`
    margin:0;
    width:49.5%;
    cursor:pointer;
    height:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:rgba(0,0,0,0.6);
    transition:color 0.3s ease-in-out;
    &:hover{
        color:rgba(0,0,0,0.8)
    }

`

export let SubmitButton = styled.button`
    width:100%;
    margin-top:12.5px;
    padding:12px;
    background:${colors.darkPrimaryColor};
    font-family:inherit;
    font-weight:600;
    color:white;
    font-size:0.9rem;
    border:0;
    border-radius:5px;
    cursor:pointer;
    transition:background 0.3s ease-in-out;
    &:hover{
        background:${colors.primaryColor}
    }
`

export let SectionDivider = styled.div`
    color:${colors.dividerColor};
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:25px;
    position:relative;
    >p{
        margin:0;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0 10px;
        
    }
    &::after,&::before{
            position: relative;
            content:'';
            flex:1;
            background:${colors.dividerColor};
            height:1px;
    }
`

export let SignInGoogle = styled.button`
    width:100%;
    cursor:pointer;
    margin-top:25px;
    background:white;
    padding:0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    transition:box-shadow 0.3s ease-in-out;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.0);
    border:1px solid rgba(0,0,0,0.175);
    >p{
        margin:0;
        font-family:'Roboto';
        font-size:0.95rem;
    }
    &:hover{
        box-shadow: 0px 0px 5px rgba(0,0,0,0.3);

    }
`
export let GoogleIcon = styled.div`
    margin:0;
    width:45px;
    height:45px;
    background:url(${googleIcon});
    background-position:center center;
    background-size:contain;
`
export let Disclaimer = styled.div`
    margin-top:25px;
    font-size:0.7rem;
    >a{
        text-decoration:underline;
        cursor:pointer;
    }
`