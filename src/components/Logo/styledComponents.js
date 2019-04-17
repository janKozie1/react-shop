import styled from 'styled-components'
import {colorVar} from '../../styledComponents/cssVariables'

export let Svg = styled.svg`
    fill:${colorVar.icons};
    width:${props => props.medium ? '32px':'16px'};
    height:${props => props.medium ? '32px':'16px'};
`