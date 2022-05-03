import React, { MouseEventHandler } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import * as S from './MenuButton.style';

export type MenuButtonProps = {
    className?: string;
    MenuOpen: MouseEventHandler;
};

export const MenuButton: React.FC<MenuButtonProps> = ({
    className,
    MenuOpen
}) => (
    <S.Wrapper
        className={className}
        aria-haspopup='true'
        aria-label='More'
        onClick={MenuOpen}
    >
        <MoreVertIcon />
    </S.Wrapper>
);
