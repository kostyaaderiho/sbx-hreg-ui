import { styled } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

export const Input = styled(InputBase)({
    border: '1px solid #c0c3ce',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    borderRadius: '3px',
    padding: '3px 9px',
    margin: '20px 0 10px',
    display: 'block',
    color: '#525462',
    fontSize: '14px',
    minWidth: '80px',
    height: '36px',

    '&disabled': {
        backgroundColor: '#eee'
    }
});

export const Label = styled(InputLabel)({
    fontSize: '16px'
});
