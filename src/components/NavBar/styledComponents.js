import styled from 'styled-components'
import {colorVar} from '../../styledComponents/cssVariables'
import {marginVar} from '../../styledComponents/cssVariables'
import {NavLink} from 'react-router-dom'
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