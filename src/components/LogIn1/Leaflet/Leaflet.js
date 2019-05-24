import React from 'react';
import * as S from './styledComponents'
const Leaflet = ({ isLoading, result,setConfirmed }) => {
    let { text, secText, type } = result;
    return (
        <S.Leaflet isLoading={isLoading}>
            <S.ImageContainer isLoading={isLoading}>
                <h3>Welcome back in PLANT <span>IT</span></h3>
                <p>We are happy to give you the best new offerts and deals.</p>
                <S.Image />
            </S.ImageContainer>
            <S.Loader isLoading={isLoading}>
                <h3>{text}</h3>
                <p>{secText}</p>
                {
                    type === 'loading' ?
                        <S.DotContainer>
                            <S.Dot />
                            <S.Dot />
                            <S.Dot />
                        </S.DotContainer>
                        : 
                        <S.ConfirmContainer>
                            {
                                type === 'success' ?
                                    <S.Success />
                                    :
                                    <S.Failure />
                            }  
                            <S.Confirm type={type} onClick={()=>setConfirmed(true)}>{type==='success'?'Continue':'Try again'}</S.Confirm> 
                        </S.ConfirmContainer>

                        
                }
            </S.Loader>
        </S.Leaflet>
    )
}

export default Leaflet;