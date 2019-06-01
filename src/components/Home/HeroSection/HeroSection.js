import React from 'react';
import * as S from './styledComponents'
const HeroSection = () => {
    console.log(S)
    return (
        <S.HeroWrapper>
            <S.HeroText>
                <S.HeroHeading>Welcome at PLANT <span>it</span></S.HeroHeading>
                <S.HeroDesc>
                   Join our quickly growing community and experiance the fruits of our hard work. Years of experiance and our qualified workers Choose from variety of flowers, trees, herbs and anything else that is even remotely resembles a plant. <br /> Sign in to get our special offers and personalized discounts.
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