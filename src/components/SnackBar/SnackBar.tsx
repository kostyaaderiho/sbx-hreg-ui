import React from 'react';
import MaterialSnackBar from '@material-ui/core/Snackbar';

import * as S from './SnackBar.style';

export type SnackbarProps = {
    isSnackbarOpened: boolean;
    message: string;
    onClose: () => void;
};

export const SnackBar: React.FC<SnackbarProps> = ({
    message,
    onClose,
    isSnackbarOpened
}) => (
    <MaterialSnackBar
        anchorOrigin={{
            horizontal: 'right',
            vertical: 'top'
        }}
        open={isSnackbarOpened}
        onClose={onClose}
    >
        <S.Wrapper
            aria-describedby='client-snackbar'
            action={[
                <S.CloseButton
                    key='close'
                    aria-label='Close'
                    color='inherit'
                    onClick={onClose}
                >
                    <S.CloseIcon />
                </S.CloseButton>
            ]}
            message={
                <S.MessageWrapper id='message-id'>
                    <S.DoneIcon />
                    <S.Message>{message}</S.Message>
                </S.MessageWrapper>
            }
        />
    </MaterialSnackBar>
);
