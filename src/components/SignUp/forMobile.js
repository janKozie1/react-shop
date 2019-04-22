import styled from 'styled-components'
import {colors} from '../cssVariables'

export let SignUp = styled.main`
    grid-column:2/3;
    display:flex;
    flex-direction:column;
    
`
export let Form = styled.form`
    margin-top:50px;    
    display:grid;
    border-radius:5px;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr 1fr;
    flex-direction:column;
    grid-row-gap:1em;
    width:100%;
`
export let Label = styled.label`
    font-size:0.9rem;
    grid-column:1/3;
`
export let Input = styled.input`
    padding:5px 10px;
    grid-column:1/3;
    border:1px solid ${colors.dividerColor};
`

export let SubmitButton = styled.button`
    background:${colors.primaryColor};
    margin-top:calc(50px - 1em);
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    border:none;
    padding:10px 10px;
    width:80%;
    &:last-child{
        justify-self:end;
        background:${colors.darkPrimaryColor}
    }
    border-radius:5px;
    box-shadow:0px 0px 2px rgba(0,0,0,0.3)

`