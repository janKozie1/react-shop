import styled from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'

export let SignUp = styled.section`
    grid-column:2/3;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        align-items:flex-start;
    }

`

export let FormContainer = styled.div`
    width:70%;
    display:grid;
    grid-template-columns: 4fr 6fr;
    height:${sizes.signUp.formContainer.big};
    justify-items:center;
    align-content:center;
    grid-column-gap:2em;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        grid-template-columns:1fr;
        grid-column-gap:0;
        margin-top:20px;
        width:calc(100% - 42px);
        height:auto;
        align-content:start;
    }
    position:relative;
`
export let Spacer = styled.div`
    grid-row:2/3;
    grid-column:2/3;
    display: ${props => props.mode==='login'?"none":"block"};
    @media(max-width:${sizes.firstBreakpoint.upper}){
        display:none;
    }
    
`


export let Form = styled.form` 
    display:grid;
    border-radius:5px;
    grid-template-columns:1fr 1fr;
    grid-auto-rows:1fr;
    flex-direction:column;
    grid-row-gap:1.5em;
    grid-column-gap:3em;
    width:100%;
    height:${sizes.signUp.formContainer.big};
    @media(max-width:${sizes.firstBreakpoint.upper}){
        grid-template-columns:1fr;
        grid-column-end:0;
        height:auto;
    }
    
`

export let SubmitButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    cursor: pointer;
    border-radius:5px;
    height:35px;
    align-self:center;
    border:none;
    color:${colors.primaryColor};
    background:white;
    box-shadow:0px 0px 2px rgba(0,0,0,0.3);
    transform-origin:center center;
    transition:transform 0.3s ease;
    &:last-child{
        justify-self:end;  
        color:white;
        background:${colors.primaryColor};
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
        width:100%;
    }
    &:hover{
        transform:scale(1.05);
    }
`
export let LinkContainer = styled(NavLink)`
    position:relative;
    display:flex;
    align-items:center;
    color:rgba(0,0,0,0.7);
    font-size:0.8rem;
    text-decoration:none;
    width:max-content;
    &::before{
            content:'>>';
            position:absolute;
            left:0;
            z-index:0;
            height:100%;
            display:flex;
            align-items:center;
            opacity:0;
            width:15px;
            transition:opacity 1s ease;
    }
    &:hover{
       &::before{
           opacity:1;
       }
        >p{
            transform:translateX(20px);
            
        }
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
        margin-top:-40px;
       grid-row:7/8;
    }
    
`
export let Paragraph = styled.p`
    width:100%;
    margin:0;
    padding:10px 5px;
    padding-left:0px;
    font-size:0.8rem;
    text-decoration:none;
    display:flex;
    align-items:flex-end;
    background:white;
    position:relative;
    z-index:3;
    transition: transform 0.5s ease;
    
    
`