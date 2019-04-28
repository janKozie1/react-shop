import React from 'react';
import * as S from './styledComponents'
const Leaflet = ({ isLoading, result }) => {
    let { text, secText, type } = result;
    return (
        <S.Leaflet>
            <S.ImageContainer isLoading={isLoading}>
                <h3>Join us at PLANT <span>IT</span></h3>
                <p>We provide our clients with the highest quality of saplings, herbs and many other plants.</p>
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
                        : type === 'success' ?
                            <S.Success />
                            :
                            <S.Failure />
                }
            </S.Loader>
        </S.Leaflet>
    )
}

export default Leaflet;