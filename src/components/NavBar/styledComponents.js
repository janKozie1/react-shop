import styled from 'styled-components'
import {colors} from '../cssVariables'
import {sizes} from '../cssVariables'
import {NavLink} from 'react-router-dom'



export let Nav = styled.nav`
    width:100%;
    height:${sizes.navHeight};
    display:grid;
    grid-template-columns: ${sizes.sideMargin.big} 1fr  ${sizes.sideMargin.big};
    @media(max-width:${sizes.firstBreakpoint.upper}){
        grid-template-columns: ${sizes.sideMargin.small} 1fr  ${sizes.sideMargin.small}; 
    }
    padding:0;
    margin:0;
    background:white;
    z-index:300;
    box-sizing:border-box;
    border-bottom: 1px solid ${colors.dividerColor};
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
    border-right:1px solid ${colors.dividerColor};
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
    color:${colors.text};
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
    font-size:2rem;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    >span{
        padding-left:1rem;
        color:${colors.primaryColor}
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
        margin-right:auto;
    }
`