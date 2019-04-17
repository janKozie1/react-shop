import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom'
import {colorVar} from './cssVariables'
import {marginVar} from './cssVariables'

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
    }
`


export let Main = styled.main`
    width:100%;
    margin:0;
    padding:0;
    margin-top:64px;
    height:100%;
    display:grid;
    grid-template-columns:${marginVar.sideMargin} 1fr ${marginVar.sideMargin};
    
`
export let Nav = styled.nav`
    width:100%;
    height:64px;
    padding:0;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:fixed;
    left:0;
    top:0;
    background:white;
    z-index:300;
    border-bottom: 1px solid ${colorVar.dividerColor};

`
export let Ul = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style-type:none;
    margin-right:${marginVar.sideMargin};
`
export let Li = styled.li`
    border-right:1px solid ${colorVar.dividerColor};
    display:flex;
    >a{
        width:100%;
        margin:auto 0;
        padding:0 25px;
    }
    &:last-child{
        border-right:none;
    }
    
`
export let StyledNavLink = styled(NavLink)`
    text-transform:uppercase;
    font-size:0.8rem;
    font-weight:bolder;  
    text-decoration:none;
    color:${colorVar.text};
    margin:0 2rem;
    position:relative;
    overflow:hidden;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;   
    width:100%;
    &:hover{
        transform:scale(1.1);
        transition:transform 0.3s;
    }

   
`
export let Logo = styled.div`
    font-size:1.5rem;
    margin-left:${marginVar.sideMargin};
`

