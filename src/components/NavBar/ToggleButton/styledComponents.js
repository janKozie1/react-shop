import styled, {css, keyframes} from 'styled-components'
import {colors} from '../../cssVariables'
import {sizes} from '../../cssVariables'
const closeTop = keyframes`
    0%{
        transform:translateY(-400%);
    }
    50%{
        transform:translateY(0%);
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(45deg);
    }
`

const closeBottom = keyframes`
    0%{
        transform:translateY(400%);
    }
    50%{
        transform:translateY(0%);
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(-45deg);
    }
`
const closeMiddle = keyframes`
    0%{
        visibility:visible;
    }
    50%{
        visibility:visible;
    }
    50.001%{
        visibility:hidden;
    }
    100%{
        visibility:hidden;
    }
`
const openBottom = keyframes`
    0%{
        transform:rotate(-45deg);
    }
    50%{
        transform:translateY(0%);
        transform:rotate(0deg);
    }
    100%{
        transform:translateY(400%);
    }
`

const openTop = keyframes`
    0%{
        transform:rotate(45deg);
    }
    50%{
        transform:translateY(0%);
        transform:rotate(0deg);
    }
    100%{
        transform:translateY(-400%);
    }
`
const openMiddle = keyframes`
    0%{
        visibility:hidden;
    }
    50%{
        visibility:hidden;
    }
    50.001%{
        visibility:visible;
    }
    100%{
        visibility:visible;
    }
`

export let Button = styled.button`
    height:21px;
    border:none;
    width:21px;
    display:flex;
    padding:0;
    justify-content:center;
    align-items:center;
    background:white;
    position:relative;
    cursor:pointer;
    outline:none;
    left:0;
    position:relative;
    margin-right:auto;
    -webkit-tap-highlight-color: transparent;
    @media (min-width:${sizes.firstBreakpoint.lower}){
        display:none;
    }
    &:active{
        outline:none;
    }
    
`
export let Bar = styled.div`
    width:100%;
    height:2px;
    padding:0;
    background:${colors.text};  
    position:relative; 
    animation:${openMiddle} ${sizes.toggleAnimDur} ease;
    ${props => props.sideNavVisible && css`
        animation:${closeMiddle} ${sizes.toggleAnimDur} ease;
        visibility:hidden;
    `}
    &:after,&:before{
        content:'';
        left:0;
        width:100%;
        height:2px;
        position:absolute;
        visibility: visible;
        background: ${colors.text};
    }
    &:before{
        animation:${openTop} ${sizes.toggleAnimDur} ease;
        transform:translateY(-400%);
        ${props => props.sideNavVisible && css`
            animation:${closeTop} ${sizes.toggleAnimDur} ease;
            transform:translateY(0);
            transform:rotate(45deg);
        `}
       
    }
    &:after{
        animation:${openBottom} ${sizes.toggleAnimDur} ease;
        transform:translateY(400%);
        ${props => props.sideNavVisible && css`
            animation:${closeBottom} ${sizes.toggleAnimDur} ease;
            transform:translateY(0);
            transform:rotate(-45deg);
        `}
    }
`