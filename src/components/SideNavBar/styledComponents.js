import styled,{css} from 'styled-components'
import {sizes} from '../cssVariables'
import {colorVar} from '../cssVariables'

export let Nav = styled.nav`
    height:100%;
    width:40%;
    position:absolute;
    left:0%;
    top:${sizes.navHeight};
    position:fixed;
    box-sizing:border-box;
    transform:translateX(-100%);
    transition:transform 0.8s ease;
    border-right:1px solid ${colorVar.dividerColor};
    ${props => props.isToggled && css`
        transform:translateX(0%);
    `}

`