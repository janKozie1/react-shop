import styled from 'styled-components'
import {colorVar} from '../cssVariables'

export let Svg = styled.svg`
    fill:${colorVar.icons};
    width:${props => props.medium ? '2rem':'0.5rem'};
    height:${props => props.medium ? '2rem':'0.5rem'};
`