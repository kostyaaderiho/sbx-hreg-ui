import React, { MouseEventHandler } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export type ConfirmationProps = {
    onClose: MouseEventHandler;
    onOk: MouseEventHandler;
    open: boolean;
    title: string;
    children: React.ReactNode;
};

export const Confirmation: React.FC<ConfirmationProps> = ({
    onClose = () => {},
    onOk = () => {},
    open,
    title = '',
    children
}) => (
    <Dialog
        aria-labelledby='confirmation-dialog-title'
        maxWidth='xs'
        open={open}
    >
        {title && (
            <DialogTitle id='confirmation-dialog-title'>{title}</DialogTitle>
        )}
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
            <Button onClick={onClose} color='primary' autoFocus>
                Cancel
            </Button>
            <Button onClick={onOk} variant='contained' color='secondary'>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
);
