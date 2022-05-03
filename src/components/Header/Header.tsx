import React from 'react';

import * as S from './Header.style';

export const Header: React.FC = ({ children }) => (
    <S.Wrapper>
        <S.Inner>{children}</S.Inner>
    </S.Wrapper>
);
