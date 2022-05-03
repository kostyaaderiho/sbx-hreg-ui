import React from 'react';

import { EntityStatus } from '~/types/entity';

import * as S from './StatusLabel.style';

export type StatusLabelProps = {
    status: EntityStatus;
};

export const StatusLabel: React.FC<StatusLabelProps> = ({
    children,
    status
}) => <S.Wrapper status={status}>{children}</S.Wrapper>;
