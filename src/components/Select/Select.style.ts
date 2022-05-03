import { styled } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export const Wrapper = styled(Select)({
    backgroundColor: '#fff',
    margin: '20px 0 10px',
    display: 'block',
    color: '#525462',
    fontSize: '14px',
    minWidth: '80px',
    paddingTop: '16px'
});

export const Label = styled(InputLabel)({
    fontSize: '16px',
    color: '#525462'
});
