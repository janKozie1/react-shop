import styled, { createGlobalStyle } from 'styled-components';
import {colorVar} from './cssVariables'
import {sizes} from './cssVariables'

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,600');
    html{
        
        height:100%;
        font-family:'Raleway','sans-serif';
        &::-webkit-scrollbar{
            display:none;
        }
        >body{
            position:absolute;
            height:100%;
            width:100%;
            padding:0;
            margin:0;
            #root{
                height:100%;
            }
        }   
        *,*::after,*::before{
            box-sizing:border-box;
        } 
    }
`


export let Main = styled.main`
    width:100%;
    margin:0;
    padding:0;
    margin-top:${sizes.headerHeight};
    @media (max-width:${sizes.firstBreakpoint.upper}){
        margin-top:${sizes.navHeight};
    }
    height:100%;
    display:grid;
    grid-template-columns:${sizes.sideMargin.big} 1fr ${sizes.sideMargin.big};
    @media(max-width:${sizes.firstBreakpoint.upper}){
        grid-template-columns:${sizes.sideMargin.small} 1fr ${sizes.sideMargin.small};
    }
`
export let Header = styled.header`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    padding:0;
    margin:0;
    background:white;
    z-index:300;
    display:flex;
    flex-direction:column;
`

