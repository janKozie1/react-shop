import styled,{css} from 'styled-components'
import {sizes} from '../cssVariables'
import {colorVar} from '../cssVariables'
import {NavLink} from 'react-router-dom'
export let Nav = styled.nav`
    height:100%;
    width:40%;
    position:absolute;
    left:0%;
    top:${sizes.navHeight};
    position:fixed;
    box-sizing:border-box;
    transform:translateX(-100%);
    transition:transform 0.8s ease;
    border-right:1px solid ${colorVar.dividerColor};
    ${props => props.isToggled && css`
        transform:translateX(0%);
    `}

`

export let Li = styled.li`
    display:flex;
    >a{
        width:100%;
        margin: 0;
        display:flex;
        padding:12.5px 20px;
        align-items:center;
        justify-content:flex-start;
        >svg{
            
        }
        >p{
            display:flex;
            height:100%;
            align-items:center;
            margin:0;
            margin-left:12px;
        }
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
    width:100%;
    &:hover{
        transform:scale(1.1);
        transition:transform 0.3s;
    }  
`