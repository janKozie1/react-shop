import React from 'react';
import * as S from './styledComponents'
const HeroSection = () => {
    console.log(S)
    return (
        <S.HeroWrapper>
            <S.HeroText>
                <S.HeroHeading>Welcome at <S.FlowBreaker>PLANT <span>it</span></S.FlowBreaker></S.HeroHeading>
                <S.HeroDesc>
                    Fruits of our hard work for you.
                </S.HeroDesc>
                <S.PrimaryNavLink exact to='/account/signup'>Sign up</S.PrimaryNavLink>
            </S.HeroText>
            <S.ScrollIndicator>
                <p>Explore</p>
                <S.Scroll />
            </S.ScrollIndicator>
        </S.HeroWrapper>
    );
};

export default HeroSection;