import styled,{css} from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '../cssVariables'
import { sizes } from '../cssVariables'
export let CategoryList = styled.menu`
    width:100%;
    display:grid;
    grid-template-columns:${sizes.sideMargin.big} 1fr ${sizes.sideMargin.big};
    margin:0;
    padding:0;
    height:${sizes.categoryHeight};
    box-sizing:border-box;
    border-bottom:1px solid ${colors.dividerColor};
    background-color:rgba(0,0,0,0.11);
    transform:translateY(-100%);
    transition:transform 0.3s ease-in-out;
    @media (max-width:${sizes.firstBreakpoint.upper}){
        display:none;
    }
    >ul{
        padding:0;
        grid-column:2/3;
        margin:0;
        height:100%;
        list-style-type:none;
        flex-direction:row;
        display:grid;
        grid-template-columns:repeat(7,1fr);
    }
    ${props => !props.initialLoading && css`
        transform:translateY(0);
    `}
`
export let StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color:black;
    flex:1;
    height:100%;
    display:flex;
    padding:10px 25px;
    text-align:center;
    align-items:center;
    justify-content:center;
    font-size:0.9rem;
    &:last-child,&:first-child{
        margin:0;
    }
    cursor:pointer;
    position:relative;
    overflow:hidden;
    &::before{
        content:'';
        width:100%;
        height:3px;
        bottom:0;
        transform:translateY(105%);
        position:absolute;
        background:${colors.primaryColor};
        transition:transform 0.3s ease;
    }
    &:hover::before{
        transform:translateY(0);
    }  

`