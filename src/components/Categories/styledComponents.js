import styled from 'styled-components'
import { colorVar } from '../cssVariables'
import { sizes } from '../cssVariables'
export let CategoryList = styled.menu`
    width:100%;
    display:grid;
    grid-template-columns:${sizes.sideMargin} 1fr ${sizes.sideMargin};
    margin:0;
    padding:0;

    border-bottom:1px solid ${colorVar.dividerColor};
    background-color:rgba(0,0,0,0.11);
    @media (max-width:${sizes.firstBreakpoint}){
        display:none;
    }
    >ul{
        padding:0;
        grid-column:2/3;
        margin:0;
        list-style-type:none;
        flex-direction:row;
        height:100%;
        display:grid;
        grid-template-columns:repeat(7,1fr);
        >li{
            flex:1;
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
                transform:translateY(100%);
                position:absolute;
                background:${colorVar.primaryColor};
                transition:transform 0.3s ease;
            }
            &:hover::before{
                transform:translateY(0);
            }
            

        }
    }
`