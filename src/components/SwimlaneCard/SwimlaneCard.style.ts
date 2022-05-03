import { styled } from '@material-ui/core/styles';

export const SwimlaneCard = styled('div')(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: theme.decoration.borderRadius,
    boxShadow: theme.decoration.boxShadow,
    marginBottom: '20px',

    '&:last-child': {
        marginBottom: 0
    }
}));

export const SwimlaneCardControls = styled('div')(({ theme }) => ({
    padding: '18px 25px',
    borderTop: `1px solid ${theme.decoration.strokeGrey}`,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}));

export const SwimlaneCardControl = styled('span')({
    '& + &': {
        marginLeft: '12px'
    }
});
