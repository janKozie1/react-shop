import styled from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'

export let Wrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    background:white;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        margin-top:20px;
        width:calc(100% - 42px);
        height:auto;
        align-content:start;
    }
    position:relative;
`
export let FormSection = styled.section`
    flex:3;
    min-width:820px;
    height:100%;
    padding:50px 0;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-around;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        width:100%;
        min-width:100%;
    }
    >h2{
        margin:0;
        >span{
            color:${colors.primaryColor};
        }
    }
`

export let Form = styled.form` 
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:600px;
    padding:0 60px;
    border-radius:10px;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        height:auto;
    }
    
`
export let ActionContainer = styled.div`
    width:100%;
    justify-content:space-between;
    display:flex;
    padding:5px;
`
export let SubmitButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:40%;
    cursor: pointer;
    border-radius:5px;
    height:35px;
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
    width:40%;
    
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
        grid-row:${props => props.mode==='signup'?'7/8':'4/5'};
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