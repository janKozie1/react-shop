import React from 'react';
import * as S from './styledComponents'
const errorIcon = ({errorMsg, isValid, wasUnfocused}) => {
    return (
        <S.ErrorContainer data-errormsg={errorMsg} isValid={isValid} wasUnfocused={wasUnfocused}>
            <S.ErrorIcon />
        </S.ErrorContainer>
    );
};

export default errorIcon;