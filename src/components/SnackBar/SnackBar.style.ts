import { styled } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import _CloseIcon from '@material-ui/icons/Close';
import _DoneIcon from '@material-ui/icons/Done';

export const Wrapper = styled(SnackbarContent)({
    boxShadow:
        '0 1px 2px 0 rgba(44,47,60,0.06), 0 3px 10px 0 rgba(44,47,60,0.09)',
    borderTop: '1px solid #a3c644',
    maxWidth: '330px',
    padding: '6px 10px',
    backgroundColor: '#fff',
    borderRadius: '3px',
    alignItems: 'start',
    display: 'flex'
});

export const MessageWrapper = styled('div')({
    maxWidth: '260px',
    alignItems: 'start',
    display: 'flex'
});

export const Message = styled('p')({
    color: '#525462',
    fontSize: '14px',
    lineHeight: '21px',
    margin: 0
});

export const CloseButton = styled(IconButton)({
    margin: '5px',
    padding: '5px',
    color: '#ddd'
});

export const CloseIcon = styled(_CloseIcon)({
    fontSize: '16px'
});

export const DoneIcon = styled(_DoneIcon)({
    verticalAlign: 'top',
    marginRight: '10px',
    fontSize: '17px',
    color: '#a3c644'
});
