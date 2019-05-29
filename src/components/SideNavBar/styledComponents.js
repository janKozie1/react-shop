import styled,{css} from 'styled-components'
import {sizes} from '../cssVariables'
import {colors} from '../cssVariables'
import {NavLink} from 'react-router-dom'

export let Nav = styled.nav`
    width:100%;
    z-index:260;
    min-height:300px;
    max-height:calc(100% - ${sizes.navHeight});
    background:white;
    left:0%;
    top:${sizes.navHeight};
    position:fixed;
    overflow-y:auto;
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
    height:50px;
    display:flex;
    background:white;
    user-select:none;
    >a{
        width:100%;
        margin: 0;
        display:flex;
        padding:12.5px ${sizes.sideMargin.small};
        border-bottom:0.5px solid rgba(0,0,0,0.3);
        align-items:center;
        justify-content:flex-start;
        >p{
            display:flex;
            height:100%;
            align-items:center;
            margin:0;
            margin:0 12px;
        }
    }
    transition:transform 0.3s ease-in-out;
`
export let SubLi = styled(Li)`
    z-index:-200;
    height:0px;
    transition:height 0.3s ease-in-out, transform 0.3s ease-in-out;
    width:100%;
    position:relative;
    transform:translateY(-100%);
    ${props => props.expanded && css`
        height:350px;
        transform:translateY(0%);
    `}
`
export let PrimaryLi = styled(Li)`
    background:${colors.primaryColor};
    >a{
        color:white;
        position:relative;
        >p{
            transform:translateX(-10px);
            transition:transform 0.3s ease;
        }
        &::before{
                content:'>>';
                position:absolute;
                left:${sizes.sideMargin.small};
                z-index:0;
                height:100%;
                display:flex;
                align-items:center;
                opacity:0;
                width:15px;
                transition:opacity 0.3s ease;
        }
        &:hover{
            &::before{
                opacity:1;
            }
            >p{
                transform:translateX(20px); 
            }
        }
    }
`
export let StyledNavLink = styled(NavLink)`
    text-transform:uppercase;
    font-size:1rem;
    font-weight:bolder;  
    text-decoration:none;
    color:${colors.text};
    margin:0 2rem;
    position:relative;
    align-items:center;
    justify-content:center;
    display:flex;   
    width:100%;
`
export let SubCategories = styled.ul`
    width:100%;
    display:flex;
    height:0;
    flex-direction:column;
    list-style-type:none;
    overflow-y:scroll;
	overflow-x:hidden;
    position:absolute;
    margin:0px;
    padding:0px;
    ${props => props.expanded && css`
        height:100%;
    `}
`
export let SubItem = styled(Li)`
    >a{
        padding:12.5px calc(${sizes.sideMargin.small} * 2);
    }
`