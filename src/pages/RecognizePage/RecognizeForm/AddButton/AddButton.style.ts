import { styled } from '@material-ui/styles';
import MaterialButton from '@material-ui/core/Button';
import MaterialIcon from '@material-ui/icons/Add';

export const Button = styled(MaterialButton)({
    textTransform: 'uppercase',
    fontSize: '13px',
    padding: '0px',
    border: 0,

    '&:hover': {
        backgroundColor: 'transparent'
    }
});

export const Icon = styled(MaterialIcon)({
    marginRight: '10px'
});
