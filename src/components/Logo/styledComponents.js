import styled from 'styled-components'
import {colorVar} from '../cssVariables'

export let Svg = styled.svg`
    fill:${colorVar.icons};
    width:${props => props.size === 'medium' ? '1.6rem': props.size==='small'?'1.5rem':'3rem'};
    height:${props => props.size === 'medium' ? '1.6rem': props.size==='small'?'1.5rem':'3rem'};
`