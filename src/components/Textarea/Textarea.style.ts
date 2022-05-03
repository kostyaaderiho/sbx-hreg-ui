import { styled } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

export const Wrapper = styled(InputBase)({
    border: '1px solid #c0c3ce',
    borderRadius: '3px',
    margin: '20px 0 0',
    fontSize: '14px',
    color: '#525462',
    padding: '9px'
});

export const Label = styled(InputLabel)({
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#525462'
});
