import styled,{css} from 'styled-components'
import {sizes} from '../cssVariables'
import {colors} from '../cssVariables'
import {NavLink} from 'react-router-dom'

export let Nav = styled.nav`
    width:130%;
    position:absolute;
    z-index:300;
    background:white;
    left:0%;
    top:${sizes.navHeight};
    position:fixed;
    box-sizing:border-box;
    transform:translateY(-200%);
    transition:transform ${sizes.toggleAnimDur} ease-in-out;
    ${props => props.sideNavVisible && css`
        transform:translateY(0%);
      
    `}
    @media (min-width:${sizes.firstBreakpoint.lower}){
        display:none;
    }

`

export let Li = styled.li`
    display:flex;
    >a{
        width:100%;
        margin: 0;
        display:flex;
        padding:12.5px ${sizes.sideMargin.small};
        
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
export let PrimaryNavLink = styled(NavLink)`

`
export let StyledNavLink = styled(NavLink)`
    text-transform:uppercase;
    font-size:1rem;
    font-weight:bolder;  
    text-decoration:none;
    color:${colors.text};
    margin:0 2rem;
    position:relative;
    overflow:hidden;
    align-items:center;
    justify-content:center;
    display:flex;   
    width:100%;
    &:hover{
        transform:scale(1.05);
        transition:transform 0.3s;
    }  
`