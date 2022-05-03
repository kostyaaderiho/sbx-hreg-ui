import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('div')(({ theme }) => ({
    transform: 'translate(-50%, -50%)',
    backgroundColor: ' #fff',
    borderRadius: '3px',
    boxShadow: theme.decoration.boxShadow,
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: '35px',
    width: '400px',
    position: 'fixed',
    left: '50%',
    top: '50%'
}));
