import styled from 'styled-components'
import {colorVar} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'



export let Nav = styled.nav`
    width:100%;
    height:${sizes.navHeight};
    display:grid;
    grid-template-columns: ${sizes.sideMargin} 1fr  ${sizes.sideMargin};
    padding:0;
    margin:0;
    background:white;
    z-index:300;
    box-sizing:border-box;
    border-bottom: 1px solid ${colorVar.dividerColor};
`

export let Container = styled.div`
    grid-column:2/3;
    height:64px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:${sizes.firstBreakpoint.upper}){
        justify-content:center;
    }
`

export let Ul = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    
    list-style-type:none;
    @media (max-width:${sizes.firstBreakpoint.upper}){
        display:none;
    }
`

export let Li = styled.li`
    border-right:1px solid ${colorVar.dividerColor};
    display:flex;
    >a{
        width:100%;
        margin: 0;
        padding:0 25px;
    }
    &:last-child{
        border-right:none;
    }
    
`
export let StyledNavLink = styled(NavLink)`
    text-transform:uppercase;
    font-size:0.7rem;
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
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    >span{
        padding-left:1rem;
        color:${colorVar.primaryColor}
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
        margin-right:auto;
    }
`