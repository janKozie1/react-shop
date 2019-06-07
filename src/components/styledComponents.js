import styled, { createGlobalStyle } from 'styled-components';
import {sizes,colors} from './cssVariables'
import bg from '../images/plants.jpg'
export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    @import url('https://fonts.googleapis.com/css?family=Raleway:400,600');
    html{
        
        min-height:100%;
        font-family:'Raleway','sans-serif';
        overflow-y: auto;
        /* &::-webkit-scrollbar-track{
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
        }
        &::-webkit-scrollbar{
            width: 6px;
            background-color: #F5F5F5;

        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: ${colors.darkPrimaryColor};
        } */
        >body{
            position:absolute;
            height:1px;
            min-height:100%;
            width:100%;
            padding:0;
            margin:0;
            #root{
                height:1px;
                min-height:calc(100% - ${sizes.headerHeight});
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
    position:relative;
    @media (max-width:${sizes.firstBreakpoint.upper}){
        margin-top:${sizes.navHeight};
    }
    min-height:100%;
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
    z-index:500;
    display:flex;
    flex-direction:column;
`

