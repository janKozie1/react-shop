import styled, {css} from 'styled-components'
import {colors} from '../cssVariables'
export let ModalContainer = styled.div`
    width:100vw;
    height:100vh;
    position:fixed;
    background:rgba(0,0,0,0.35);
    z-index:800;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
`