import styled from 'styled-components'
import {sizes} from '../../cssVariables'

export let LogIn = styled.section`
    grid-column:1/4;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        align-items:flex-start;
        grid-column:2/3;
    }

`

