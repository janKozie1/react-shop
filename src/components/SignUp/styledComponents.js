import styled from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'

export let SignUp = styled.section`
    grid-column:1/4;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    @media(max-width:${sizes.firstBreakpoint.upper}){
        align-items:flex-start;
    }
`
