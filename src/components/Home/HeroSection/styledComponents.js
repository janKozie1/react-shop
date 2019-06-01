import styled from 'styled-components'
import {colors,sizes} from '../../cssVariables'
import bg from '../../../images/plants-hero6.jpg'

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

export let HeroHeading = styled.h1`
    background:transparent;
    font-size:2.5rem;
    >span{
        color:${colors.primaryColor};
        text-transform:uppercase; 
    }
    text-align:left;
`

export let HeroText = styled.div`
    grid-column:2/3;
    justify-self:flex-start;
    height:100%;
    width:40%;
    display:flex;
    justify-content:center;
    flex-direction:column;

`

export let HeroDesc = styled.h3`
    text-align:left;

`