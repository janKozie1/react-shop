import React from 'react';
import * as S from './styledComponents'
const Slider = () => {
    return (
        <S.Slider>
            <S.Button left>&lt;</S.Button>
            <S.Button right>&gt;</S.Button>
        </S.Slider>
    );
};

export default Slider;