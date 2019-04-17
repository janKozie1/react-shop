import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom'

import {colorVar} from './cssVariables'

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');  
    html{
        height:100%;
        font-family:'Roboto';
        >body{
            position:absolute;
            height:100%;
            padding:0;
            margin:0;
            #root{
                height:100%;
            }
        }    
    }
`
export let Svg = styled.svg`
    fill:${colorVar.primaryColor};
    width:${props => props.medium ? '32px':'16px'};
    height:${props => props.medium ? '32px':'16px'};
`

export let Main = styled.main`
    margin-top:64px;
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

`
export let Ul = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    list-style-type:none;
    
`
export let Li = styled.li`
    border-right:1px solid ${colorVar.dividerColor};
    display:flex;
`
export let StyledNavLink = styled(NavLink)`
    text-decoration:none;
    margin:0 2rem;
    position:relative;
    text-transform:capitalize;
    overflow:hidden;
    align-items:center;
    justify-content:center;
    display:flex;
    align-items:center;
    justify-content:center;
    color:${colorVar.text};
    flex-direction:column;   
   
`

export let Logo = styled.div`
    font-size:1.5rem;
`