import styled from 'styled-components'
import bg from '../../images/1.jpg'
import {colors} from '../cssVariables'
import {NavLink} from 'react-router-dom'
export let SignUp = styled.section`
    grid-column:1/4;
    background:white;
    width:100%;
    height:100%;
    max-height:100%;
    display:flex;
    
   
    
`
export let Leaflet = styled.div`
    flex:1;
    max-width:50%;
    background-image: url(${bg});
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
`
export let FormSection = styled.section`
    
    width:820px;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-around;
    >h2{
        margin-top:60px;
        >span{
            color:${colors.primaryColor};
        }
    }
`

export let FormContainer = styled.form`
   
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width:600px;
    padding:30px 60px;
    border-radius:10px;
    margin-bottom:60px;
`

export let Label = styled.label`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:space-between;
    justify-content:space-between;
    padding:20px 0px;
    >*{
        vertical-align: middle;
    }
`

export let Input = styled.input`
    flex:1;
    margin-top:15px;
    padding:10px 20px;
    border:none;
    font-size:1rem;
    border-bottom:1px solid ${colors.dividerColor};
    font-family:inherit;
    
    &::placeholder{
        color:rgba(0,0,0,0.4);
    }
    &:focus{
        outline:none;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus{
        padding:10px 20px;
        font-size:1rem;
        font-family:inherit;
     
    }
`

export let ActionContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px 0;
    width:100%;
`
export let Link = styled(NavLink)`
    font-size:0.8rem;
    color:black;
    text-decoration:none;
`
export let SubmitButton = styled.button`
    background:${colors.primaryColor};
    padding:10px 30px;
    border:none;
    border-radius:5px;
    color:white;
`