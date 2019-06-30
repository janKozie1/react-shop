import styled, {css} from 'styled-components'

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
    text-transform:uppercase;
    font-size:0.8rem;
    position:absolute;
   font-weight:lighter;
    bottom:0;
    padding:0px;
    margin:0;
    bottom:22px;
    transform:translateY(50%);
    z-index:850;

    transition:bottom 0.2s ease-in-out, font-size 0.2s ease-in-out;
    ${props => props.wasFocused && css`
        bottom:44px;
        background:white;
        font-size:0.7rem
        box-sizing:content-box;
    `}
    

`
export let Input = styled.input`
    height:45px;
    font-family:inherit;
    font-weight:400;
    width:100%;
    border:0;
    border-bottom:1px solid rgba(0,0,0,0.15);
    transition:border-color 0.3s ease-out;
    &:hover{
        border-color:rgba(0,0,0,0.3)
    }
    padding:10px 0;
  
    font-size:1rem;
    &:focus{
        outline:none;
    }
`
