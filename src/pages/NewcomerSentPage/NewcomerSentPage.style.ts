import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('div')({
    width: '475px',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'fixed',
    textAlign: 'center'
});

export const Image = styled('img')({
    display: 'inline-block',
    width: '400px'
});

export const Title = styled('h1')(({ theme }) => ({
    marginTop: '50px',
    color: theme.palette.thirdTextGrey,
    fontWeight: 'normal'
}));
