import React from 'react';
import * as S from './styledComponents'
const HeroSection = () => {
    console.log(S)
    return (
        <S.HeroWrapper>
            <S.HeroText>
                <S.HeroHeading>Welcome at PLANT <span>it</span></S.HeroHeading>
                <S.HeroDesc>
                   {/* Join our quickly growing community and experiance the fruits of our hard work. Years of experiance and our qualified workers makes us the best on the market. <br /> Sign un to get our special offers and personalized discounts. */}
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