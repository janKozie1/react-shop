import styled ,{css} from 'styled-components'
import {sizes} from '../cssVariables'
export let BackgroundFade = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    display:none;
    left:0;
    top:0;
    z-index:200;
    background:rgba(0,0,0,0.2);
    @media(max-width:${sizes.firstBreakpoint.upper}){
        display:none;
        ${props => props.isLoading && css`
            display:block;
        `}
    }
    
`