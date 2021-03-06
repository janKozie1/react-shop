import styled, {css} from 'styled-components'
import plants from '../../../images/plants.jpg'
import {sizes} from '../../cssVariables'

export let Slider = styled.div`
    margin-top: ${sizes.categoryHeight};
    width:100%;
    background:url(${plants});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
    background-attachment:fixed;
    display:flex;
    position:relative;
`
export let Button = styled.button`
    border:0;
    padding:0;
    background:transparent;
    font-size:6rem;
    color:white;
    font-family:'Raleway';
    height:100%;
    padding:2%;
    position:absolute;
    top:0;
    ${props => props.right && css`
        right:0;
    `}
`