import styled ,{css} from 'styled-components'
import {sizes} from '../cssVariables'
export let BackgroundFade = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    left:0;
    top:0;
    z-index:200;
    background:black;
    opacity:0;
    transition:opacity 0.3s ease;
    @media(min-width:${sizes.firstBreakpoint.lower}){
       display:none;
        
    }
    ${props => props.bgFadeVisible && css`

            opacity:0.2;
        `}
    
`