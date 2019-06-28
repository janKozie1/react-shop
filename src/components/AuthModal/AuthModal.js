import React from 'react';
import AuthForm from './AuthForm/AuthForm.js'
import * as S from './styledComponents'
const AuthModal = () => {
    return (
        <S.ModalContainer>
            <AuthForm />
        </S.ModalContainer>
    );
};

export default AuthModal;