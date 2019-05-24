import styled, { css } from 'styled-components'
import { colors } from '../../cssVariables'
import { ReactComponent as errIcon } from '../../../images/errorIcon.svg'
import { ReactComponent as lockIcon } from '../../../images/lockIcon.svg'

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
    font-size:0.9rem;
    display:flex;
    align-items:space-between;
    justify-content:space-between;
    position:relative;
    height:100%;
    flex-direction:column;
    ${props => props.type === 'login' && css`
        grid-column:1/3;rr
    `}
    &::after{
            position:absolute;
            bottom:0;
            width:0%;
            height:1px;
            transition:0.5s width ease ;
            z-index:100;
            content:'';
    }
    ${props => props.wasClicked && css`  
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
    padding:9px 0px;
    position:relative;
    background:transparent;
    &:-internal-autofill-selected,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus{
        background:white  !important;
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
    &::placeholder{
        color:rgba(0,0,0,0.4);
    }
    &[type='password']{
        grid-column:1/2;
        &:last-child{
            grid-column:2/3;
        }
    }
    &:focus{
        outline:none;
    }

`
