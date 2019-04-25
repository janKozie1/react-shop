import React from 'react';
import * as S from './styledComponents'
const errorIcon = ({errorMsg, isValid}) => {
    return (
        <S.ErrorContainer data-errormsg={errorMsg} isValid={isValid}>
            <S.ErrorIcon />
        </S.ErrorContainer>
    );
};

export default errorIcon;