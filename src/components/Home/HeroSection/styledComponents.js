import styled,{keyframes} from 'styled-components'
import {colors,sizes} from '../../cssVariables'
import bg from '../../../images/plants-hero6.jpg'
import {NavLink} from 'react-router-dom'
export let HeroWrapper = styled.section`
    grid-row-gap:1rem;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
    background-attachment:fixed;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.2)), url(${bg});
    color:white;
    position:relative;
    display:grid;
    grid-template-columns:${sizes.sideMargin.big} 1fr ${sizes.sideMargin.big};
`
export let HeroText = styled.div`
    grid-column:2/3;
    justify-self:flex-start;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:0;
    text-align:left;
    align-items:flex-start;
    
    
    @media(max-width:${sizes.firstBreakpoint.upper}){
       text-align:center;
       width:100%;
       justify-content:center;
       height:70%;
       align-items:center;
      
       
    }
    
`


export let HeroHeading = styled.h1`
    background:transparent;
    font-size:3.0rem;
    margin:0;
    
    @media(max-width:${sizes.firstBreakpoint.upper}){
        font-size:2rem;
       
    }
    
`
export let FlowBreaker = styled.span`
    color:white;
    white-space: pre;
    >span{
        color:${colors.primaryColor};
        text-transform:uppercase; 
    }
`


export let HeroDesc = styled.h3`
    font-size:1.7rem;
    margin:0;
    width:60%;
    margin:30px 0px;
    >p{
        margin:0;
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
       margin:20px 0;
        font-size:1.2rem;
        width:80%;
      

    }
    
`
export let PrimaryNavLink = styled(NavLink)`
    background:${colors.primaryColor};
    border:2px solid ${colors.primaryColor};
    padding:10px 30px;
    font-size:1rem;
    width:max-content;
    color:white;
    border-radius:5px;
    margin:0;
    text-decoration:none;
    transition:transform 0.5s ease;
    &:first-child{
        border:none;    
        border-radius:0;
        color:black;
        background:white;
        font-weight:bolder;
    }
    &:hover{
        transform:scale(1.1);
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
       padding:9px 18px;
       font-size:0.8rem;
    }
`

export let ScrollIndicator = styled.div`
    position:absolute;
    left:50%;
    top:88%;
    transform:translate(-50%,-50%);
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    cursor:pointer;
    >p{
        font-size:1.2rem;
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
       top:90%;
       >p{
           font-size:0.8rem;
       }
    }
`
const bounce = keyframes`
    0%{
        transform:translate(-50%,-50%);
        opacity:0;
    }
    25%{
        transform:translate(-50%,-50%);
        opacity:1;
    }
    50%{
        transform:translate(-50%,50%);
        opacity:0;
    }
    100%{
        transform:translate(-50%,50%);
        opacity:0;
    }
`

export let Scroll = styled.div`
    margin-top:10px;
    height:70px;
    width:30px;
    border:3px solid white;
    border-radius:15px;
    position:relative;
    @media(max-width:${sizes.firstBreakpoint.upper}){
       margin:0;
       height:40px;
       width:17px;
    }
    &::after{
        animation:${bounce} 3s ease-in-out infinite;
        content:'';
        width:40%;
        height:35%;
        position:absolute;
        background:white;
        left:50%;
        top:30%;
        transform:translate(-50%,-50%);
        border-radius:15px;
    }
`
