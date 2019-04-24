import styled, {css} from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'
import {ReactComponent as icon} from '../../images/errorIcon.svg'

export let SignUp = styled.section`
    grid-column:2/3;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    @media(max-width:${sizes.firstBreakpoint.lower}){
        align-items:flex-start;
    }

`

export let FormContainer = styled.div`
    width:80%;
    display:grid;
    grid-template-columns: 4fr 6fr;
    height:300px;
    justify-items:center;
    align-content:center;
    grid-column-gap:2em;
    @media(max-width:${sizes.firstBreakpoint.lower}){
        grid-template-columns:1fr;
        grid-column-gap:0;
        margin-top:20px;
        height:auto;
        align-content:start;
    }
`
export let Spacer = styled.div`
    grid-row:2/3;
    grid-column:2/3;
    @media(max-width:${sizes.firstBreakpoint.lower}){
            display:none;
    }
`
export let ImageContainer = styled.div`
    height:300px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom-left-radius:30px;
    border-top-left-radius:30px;
    flex-direction:column;
    text-align:center;
    padding:0px 20px;
    border-right:2px solid ${colors.dividerColor};
    >h3{
        margin-top:0;
        >span{
            color:${colors.primaryColor}
        }
    }
    @media(max-width:${sizes.firstBreakpoint.lower}){
        display:none;
    }
    
`

export let Img = styled.img`
    width:150px;
    height:150px;
    margin-bottom:-16.11px;
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
    height:300px;
    @media(max-width:${sizes.firstBreakpoint.lower}){
        grid-template-columns:1fr;
        grid-column-end:0;
        height:auto;
    }
    
`
export let Label = styled.label`
    font-size:0.9rem;
    display:flex;
    align-items:space-between;
    justify-content:space-between;
    position:relative;
    height:100%;
    flex-direction:column;
    &::after{
            position:absolute;
            bottom:0;
            width:0%;
            height:1px;
            transition:0.5s width ease ;
            z-index:100;
            content:'';
    }
    ${props => props.isFocused && css`  
       &::after{
           width:100%;
           background:${props => props.isValid ? colors.primaryColor : colors.error}
          
       }
    `}
`
export let InputHeader = styled.span`
    display:flex;
    align-items:center;
    >p{
        margin:0;
        &::first-letter{
            text-transform:capitalize;
        }
    }
`
export let ErrorContainer = styled.div`
    margin-left:15px;
    height:20px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    &::after{
            transform:translateY(100%);
            opacity:0;
            transition:transform 0.5s ease,opacity 0.5s ease;
            position:absolute;
            top:-20px;
            width:max-content;
            height:20px;
            content:attr(data-errorMsg);
    }
    &:hover{
        &::after{
            transform:translateY(0);
            opacity:1;
        }
    }

`
export let ErrorIcon = styled(icon)`
    fill:${colors.error};
    height:100%;
  
    position:relative;
    
    &:hover{
        
    }

`

export let Input = styled.input`
    border:none;
    border-bottom:1px solid ${colors.dividerColor};
    padding:9px 0px;
    position:relative;
    &:after{
            width:100%;
            height:10px;
            position:absolute;
            left:0;
            bottom:0;
            color:red;
    }
    &::placeholder{
        color:rgba(0,0,0,0.4);
    }
    &[type='password']{
        grid-column:1/2;
        &:last-child{
            grid-column:2/3;
        }
    }
    &:focus{
        outline:none;
    }
`

export let SubmitButton = styled.button`
    
    display:flex;
    justify-content:center;
    align-items:center;
    
    width:50%;
    height:min-content;
    padding:10px 5px;
    border-radius:5px;
    align-self:center;
    border:none;
    color:${colors.primaryColor};
    background:white;
    box-shadow:0px 0px 2px rgba(0,0,0,0.3);
    &:last-child{
        justify-self:end;  
        color:white;
        background:${colors.primaryColor};
    }
    @media(max-width:${sizes.firstBreakpoint.lower}){
        width:100%;
    }

`
export let LinkContainer = styled(NavLink)`
    position:relative;
    display:flex;
    align-items:center;
    color:rgba(0,0,0,0.7);
    font-size:0.8rem;
    text-decoration:none;
    width:100%;
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
    @media(max-width:${sizes.firstBreakpoint.lower}){
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