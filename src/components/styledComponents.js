import styled, { createGlobalStyle } from 'styled-components';
import {colorVar} from './cssVariables'
import {sizes} from './cssVariables'

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    @import url('https://fonts.googleapis.com/css?family=Raleway');
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
        *{
            box-sizing:border-box;
        } 
    }
`


export let Main = styled.main`
    width:100%;
    margin:0;
    padding:0;
    margin-top:${sizes.headerHeight};
    height:100%;
    display:grid;
    grid-template-columns:${sizes.sideMargin} 1fr ${sizes.sideMargin};
`
export let Header = styled.header`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:${sizes.headerHeight};
    padding:0;
    margin:0;
    background:white;
    z-index:300;
    display:flex;
    flex-direction:column;
    
`

