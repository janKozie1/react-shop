import styled from 'styled-components'
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
    width:40%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin:0;
    
    
`


export let HeroHeading = styled.h1`
    background:transparent;
    font-size:2.8rem;
    margin:0;
    >span{
        color:${colors.primaryColor};
        text-transform:uppercase; 
    }
    text-align:left;
`



export let HeroDesc = styled.h3`
    text-align:left;
    font-size:1.3rem;
    margin:0;
    margin:60px 0px;
`
export let PrimaryNavLink = styled(NavLink)`
    background:${colors.primaryColor};
    border:2px solid ${colors.primaryColor};
    padding:8px 20px;
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
`
export let Scroll = styled.div`
    margin-top:10px;
    height:70px;
    width:30px;
    border:3px solid white;
    border-radius:15px;
    position:relative;
    &::after{
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