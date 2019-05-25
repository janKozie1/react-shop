import styled, {css} from 'styled-components'
import { colors } from '../cssVariables'

export let Svg = styled.svg`

    fill:${colors.icons};
    width:${props => props.size === 'big' ? '3rem' : props.size === 'medium' ? '1.6rem' : props.size === 'small' ? '1.5rem' : props.size === 'tiny' ? '1.15rem' : '1.3rem'};
    height:${props => props.size === 'big' ? '3rem' : props.size === 'medium' ? '1.6rem' : props.size === 'small' ? '1.5rem' : props.size === 'tiny' ? '1.15rem' : '1.3rem'};
    transition:transform 0.3s ease-in-out;
    ${props => props.expanded && css`
        transform:rotate(-180deg);
    `}
`