import styled, {css, keyframes} from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'
import plant from '../../images/plant2.png'

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
    height:${sizes.signUp.formContainer.big};
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

export let Leaflet = styled.div`
    height:${sizes.signUp.formContainer.big};
    width:100%;
    display:grid;
    grid-template-rows:${sizes.signUp.formContainer.big} ${sizes.signUp.formContainer.big};
    transition:transform 1s ease;
    overflow:hidden;
    
    @media(max-width:${sizes.firstBreakpoint.lower}){
        display:none;
    }
    
`
export let ImageContainer = styled.div`
    height:${sizes.signUp.formContainer.big};
    width:100%;
    display:grid;
    grid-template-rows:1fr 1fr 3fr;
    text-align:center;
    padding:0px 20px;
    transition:transform 1s ease;
    border-right:2px solid ${colors.dividerColor};
    >h3{
            margin-top:0;
            
            >span{
                color:${colors.primaryColor}
            }
    }
    >p{
        margin:0;
        
    
    }
    
    ${props => props.isLoading && css`
        transform:translateY(-100%);
    `}
   
`
export let ImageHeader = styled.div`
   
    
`
export let Image = styled.div`
    width:100%;
    height:100%;
    background-image:url(${plant});
    background-size:contain;
    background-position:center bottom;
    background-repeat:no-repeat;
`
export let Loader = styled.div`
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    transition:transform 1s ease;
    border-right:2px solid ${colors.dividerColor};
    ${props => props.isLoading && css`
        transform:translateY(-100%);
    `}
`
const bubble = keyframes`
    0%{
        transform:scale(0);
    }
    40%{
        transform:scale(1);
    }
    80%{
        transform:scale(0);
    }
    100%{
        transform:scale(0);
    }

    
`
export let DotContainer = styled.div`
    display:flex;
`

export let Dot = styled.div`
    height:15px;
    width:15px;
    margin:5px;
    background:${colors.primaryColor};
    border:2px solid ${colors.primaryColor};
    border-radius:50%;  
    animation: 1.5s ${bubble} infinite ease-in-out both;
    display:flex;
    align-items:center;
    justify-content:center;
    &:first-child{
        animation-delay:-0.3s
    }
    &:last-child{
        animation-delay:0.3s;
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
    @media(max-width:${sizes.firstBreakpoint.lower}){
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
    @media(max-width:${sizes.firstBreakpoint.lower}){
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