import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('header')(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: theme.decoration.boxShadow
}));

export const Inner = styled('div')({
    width: '936px',
    margin: '0 auto',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& a': {
        textDecoration: 'none'
    }
});
