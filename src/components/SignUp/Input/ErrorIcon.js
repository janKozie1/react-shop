import React from 'react';
import * as S from './styledComponents'
const errorIcon = ({errorMsg, isValid, wasUnfocused, isLoading}) => {
    return (
        <S.ErrorContainer data-errormsg={errorMsg} isValid={isValid} wasUnfocused={wasUnfocused} isLoading={isLoading}>
        {
            isLoading?
                <S.LockIcon />
                :
                <S.ErrorIcon />
        }
            
        </S.ErrorContainer>
    );
};

export default errorIcon;