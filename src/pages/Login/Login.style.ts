import { styled } from '@material-ui/core/styles';

export const Form = styled('div')({
    backgroundColor: '#fff',
    borderRadius: '3px',
    boxSizing: 'border-box',
    padding: '32px',
    width: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const Title = styled('p')({
    textAlign: 'center',
    margin: '0 0 24px',
    fontSize: '17px'
});
