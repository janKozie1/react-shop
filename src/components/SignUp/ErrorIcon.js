import React from 'react';
import {ReactComponent as ErrorIcon} from '../../images/errorIcon.svg'
import * as S from './styledComponents'
const errorIcon = ({errorMsg}) => {
    return (
        <S.ErrorContainer data-errorMsg={errorMsg}>
            <S.ErrorIcon />
        </S.ErrorContainer>
    );
};

export default errorIcon;