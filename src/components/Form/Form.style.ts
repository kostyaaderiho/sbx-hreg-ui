import { styled } from '@material-ui/core/styles';

export const FormPreview = styled('div')(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: '0 1px 24px 0 rgba(0, 0, 0, 0.04)',
    borderRadius: theme.decoration.borderRadius,
    width: '600px',
    margin: '25px auto 50px'
}));

export const FormWrapper = styled('div')({
    padding: '24px'
});

export const FormControlWrapper = styled('div')({
    marginBottom: '24px',

    '&:last-child': {
        marginBottom: 0
    },

    '& label': {
        fontSize: '16px'
    }
});

export const FormControlsWrapper = styled('div')({
    borderTop: '1px solid #ddd',
    padding: '20px 25px',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '40px',

    '& button + button': {
        marginLeft: '16px'
    }
});
