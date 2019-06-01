import React from 'react';
import * as S from './styledComponents'
const HeroSection = () => {
    console.log(S)
    return (
        <S.HeroWrapper>
            <S.HeroText>
                <S.HeroHeading>Welcome at PLANT <span>it</span></S.HeroHeading>
                <S.HeroDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus metus, elementum ac purus ut, tempus viverra risus. Integer auctor, nunc vel porttitor pharetra, massa ex venenatis arcu, id vehicula leo odio sodales turpis. Morbi scelerisque felis eget elit cursus sagittis. Nullam laoreet aliquet porta. Suspendisse sit amet massa velit.
                </S.HeroDesc>
            </S.HeroText>
           
        </S.HeroWrapper>
    );
};

export default HeroSection;