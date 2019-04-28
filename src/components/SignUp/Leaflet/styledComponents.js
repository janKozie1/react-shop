import styled, {css, keyframes} from 'styled-components'
import {colors} from '../../cssVariables'
import {sizes} from '../../cssVariables'
import plant from '../../../images/plant2.png'

import { ReactComponent as failIcon } from '../../../images/failure.svg'
import { ReactComponent as succIcon } from '../../../images/ok.svg'

export let Leaflet = styled.div`
    height:${sizes.signUp.formContainer.big};
    width:100%;
    display:grid;
    grid-template-rows:${sizes.signUp.formContainer.big} ${sizes.signUp.formContainer.big};
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
    transition:transform 0.8s ease;
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

export let Image = styled.div`
    width:100%;
    height:100%;
    background-image:url(${plant});
    background-size:contain;
    background-position:center bottom;
    background-repeat:no-repeat;
`
export let Loader = styled.div`
    padding:0px 20px;
    height:100%;
    width:100%;
    display:flex;
    text-align:center;
    >h3{
        font-size:1.4rem;
        margin-bottom:0;
    }
    align-items:center;
    justify-content:center;
    flex-direction:column;
    transition:transform 0.8s ease;
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
    height:17px;
    width:17px;
    margin:5px;
    background:${colors.primaryColor}
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
export let Failure = styled(failIcon)`
    height:30px;
    width:30px;
    fill:${colors.error};
`
export let Success = styled(succIcon)`
    height:30px;
    width:30px;
    fill:${colors.primaryColor};
`
export let ConfirmContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
export let Confirm = styled.button`
    margin-top:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    border-radius:5px;
    height:35px;
    align-self:center;
    border:none;
    background:white;
    box-shadow:0px 0px 2px rgba(0,0,0,0.4);
    transform-origin:center center;
    transition:transform 0.3s ease;
    border:2px solid ${props => props.type === 'success' ? colors.primaryColor: colors.error};
    color: ${props => props.type === 'success' ? colors.primaryColor: colors.error};
        
    

    @media(max-width:${sizes.firstBreakpoint.lower}){
        width:100%;
    }
    &:hover{
        transform:scale(1.05);
    }
`