import React from 'react';

import InfoSentMessage from '~/assets/images/info-sent-message.svg';

import * as S from './NewcomerSentPage.style';

export const NewcomerSentPage = () => (
    <S.Wrapper>
        <S.Image src={InfoSentMessage} />
        <S.Title>Thank you. Your story sent.</S.Title>
    </S.Wrapper>
);
