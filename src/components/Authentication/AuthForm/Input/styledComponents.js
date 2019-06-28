import styled, { css } from 'styled-components'
import { colors, sizes } from '../../../cssVariables'
import { ReactComponent as errIcon } from '../../../../images/errorIcon.svg'
import { ReactComponent as lockIcon } from '../../../../images/lockIcon.svg'

export let ErrorContainer = styled.div`
    margin-left:10px;
    height:18px;
    width:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:opacity 0.5s;
    ${props => ((props.wasUnfocused && !props.isValid) || props.isLoading) && css`
        opacity:1;
    `}
    
    &::after{
            transform:translateX(50%);
            opacity:1;
            transition:transform 0.5s ease,opacity 0.5s ease;
            position:absolute;
            width:max-content;
            display:flex;
            align-items:center;
            height:20px;
            content:attr(data-errormsg);
            margin-left:13px;
            font-size:0.7rem;
    }
    &:hover{
        &::after{
            transform:translateX(50%);
            opacity:1;
        }
    }

`

export let LockIcon = styled(lockIcon)`
    fill:${colors.primaryColor};
    height:100%;
    position:relative;
`
export let ErrorIcon = styled(errIcon)`
    fill:${colors.error};
    height:100%;
    position:relative;
`

export let Label = styled.label`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:space-between;
    margin:20px 0px;
    position:relative;
    @media(min-width:${sizes.firstBreakpoint.lower}){
        grid-column:${props => props.mode==='login'?'1/3':''};
    
    }
    &::after{
            position:absolute;
            bottom:0;
            width:0%;
            height:1px;
            transition:0.5s width ease ;
            z-index:100;
            content:'';
    }
    ${props => props.wasClicked && props.type !== 'checkbox' && css`  
       &::after{
           width:100%;
           background:${props => !props.wasUnfocused ? colors.primaryColor : props.isValid ? colors.primaryColor : colors.error}
          
       }
    `}
    ${props => props.isLoading && css`
       &::after{
           display:none;
       }
    `}
    ${props => props.type === 'checkbox' && css`
       font-size:0.8rem;
       flex-direction:row-reverse;
       align-items:center;
       justify-content:flex-end;
       width:max-content;
    `}

`


export let InputHeader = styled.span`
    display:flex;
    align-items:center;
   
    >p{
        margin:0;
        &::first-letter{
            text-transform:capitalize;
        }
    }
`

export let Input = styled.input`
    border:none;
    border-bottom:1px solid ${colors.dividerColor};
    flex:1;
    margin-top:20px;
    font-size:0.8rem;
    padding:10px 20px;
    position:relative;
    background:transparent;
    &:-internal-autofill-selected,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus{
        background:white  !important;
        font-size:0.8rem;
    }
    
    &:disabled{
        background:transparent;
    }
    &:after{
            width:100%;
            height:10px;
            position:absolute;
            left:0;
            bottom:0;
            color:red;
    }
    &[type='checkbox']{
        padding:0;
        margin:0;
        flex:0;
        margin-right:20px;
    }
    &::placeholder{
        color:rgba(0,0,0,0.4);
    }
    &:focus{
        outline:none;
    }
    @media(max-width:${sizes.firstBreakpoint.upper}){
        margin-top:5px;
    }
`
