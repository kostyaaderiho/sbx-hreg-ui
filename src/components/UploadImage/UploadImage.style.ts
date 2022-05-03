import { styled } from '@material-ui/core/styles';

export const Wrapper = styled('div')({
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
});

export const ImageHolder = styled('div')(
    ({ editable }: { editable: boolean }) => ({
        verticalAlign: 'middle',
        overflow: 'hidden',
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        marginBottom: '16px',

        ...(editable ? { cursor: 'move' } : {})
    })
);

export const Image = styled('img')({
    width: '120px',
    height: '120px'
});

export const Description = styled('div')({
    marginBottom: '10px',
    fontSize: '14px'
});

export const Label = styled('span')(({ theme }) => ({
    color: theme.palette.fourthTextGrey
}));

export const Name = styled('span')(({ theme }) => ({
    color: theme.palette.primaryTextGrey
}));
