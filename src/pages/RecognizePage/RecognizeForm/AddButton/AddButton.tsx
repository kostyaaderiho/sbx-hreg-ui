import React, { MouseEventHandler, FunctionComponent } from 'react';

import * as S from './AddButton.style';

export type AddButtonProps = {
    onClick: MouseEventHandler;
};

export const AddButton: FunctionComponent<AddButtonProps> = ({
    onClick,
    children
}) => (
    <S.Button onClick={onClick} color={'primary'}>
        {children}
    </S.Button>
);
