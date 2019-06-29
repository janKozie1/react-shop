import styled, {css} from 'styled-components';
import {colors} from '../../cssVariables'
import {NavLink} from 'react-router-dom'
export let FormContainer = styled.div`
    height:600px;
    width:380px;
    background:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:30px 15px;
    border-radius:5px;
    >h1{
        margin:0;
        font-size:1.7rem;
        font-weight:normal;
        width:100%;
        text-align:left;
        >span{
            color:${colors.primaryColor}
        }
    }
`

export let Form = styled.form`
    width:100%;
    margin-top:10px;
`

export let Label = styled.label`
    position:relative;
    width:100%;
    height:45px;
    margin-top:25px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`

export let InputHeader = styled.p`
    font-weight:bolder;
    text-transform:uppercase;
    font-size:0.75rem;
    position:absolute;
    left:11px;
    bottom:0;
    padding:0px 10px;
    margin:0;
    bottom:22px;
    transform:translateY(50%);
    z-index:850;
    transition:bottom 0.3s ease-out;
    ${props => props.wasFocused && css`
        bottom:44px;
        background:white;
    
        box-sizing:content-box;
    `}
    

`
export let Input = styled.input`
    height:45px;
    font-family:inherit;
    width:100%;
    border:1px solid rgba(0,0,0,0.15);
    transition:border-color 0.3s ease-out;
    &:hover{
        border-color:rgba(0,0,0,0.3)
    }
    padding: 15px 30px;
    border-radius:5px;
    font-size:0.75rem;
    &:focus{
        outline:none;
    }
`

export let ActionContainer = styled.div`
    width:100%;
    height:45px;
    margin-top:25px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:0.75rem;
`


export let Spacer = styled.div`
    height:50%;
    width:1px;
    background:${colors.dividerColor};
`
export let Link = styled(NavLink)`
    text-decoration:none;
    color:black;
    width:49.5%;
    height:50%;
    display:flex;
    align-items:center;

`

export let SwitchType = styled.p`
    margin:0;
    width:49.5%;
    cursor:pointer;
    height:50%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

export let SubmitButton = styled.button`
    width:100%;
    margin-top:25px;
    padding:12px;
    background:${colors.darkPrimaryColor};
    font-family:inherit;
    font-weight:600;
    color:white;
    font-size:0.9rem;
    border:0;
    border-radius:5px;
`

export let SectionDivider = styled.div`
    color:${colors.dividerColor};
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:25px;
    position:relative;
    >p{
        margin:0;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0 10px;
        
    }
    &::after,&::before{
            position: relative;
            content:'';
            flex:1;
            background:${colors.dividerColor};
            height:1px;
    }
`