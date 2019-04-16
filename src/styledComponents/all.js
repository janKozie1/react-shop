import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom'

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
export let StyledNavLink = styled(NavLink)`
    background:black;
    padding:5px 15px;
    border-radius:15px;
    background:white;
    text-decoration:none;
    color:#FF9800;
    margin:0 2rem;
    position:relative;
    border:1.5px solid #FF9800;
    text-transform:capitalize;
    
   
`

export let Logo = styled.div`
    font-size:1.5rem;
`