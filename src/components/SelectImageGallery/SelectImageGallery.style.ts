import { styled } from '@material-ui/core/styles';

export const Title = styled('p')(({ theme }) => ({
    lineHeight: '18px',
    fontSize: '14px',
    color: theme.palette.primaryTextGrey,
    margin: '0 0 10px'
}));

export const Description = styled('p')(({ theme }) => ({
    color: theme.palette.primaryTextGrey,
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0 0 25px'
}));

export const Selection = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
});

export const SelectionImage = styled('img')(
    ({ selected }: { selected: boolean }) => ({
        width: '100%',
        display: 'inline-block',
        boxSizing: 'border-box',
        borderRadius: selected ? 0 : '3px'
    })
);

export const SelectionImageTitle = styled('p')(({ theme }) => ({
    margin: '5px 0 0',
    color: theme.palette.primaryTextGrey,
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '22px'
}));

export const SelectionImageWrapper = styled('div')(
    ({ selected }: { selected: boolean }) => ({
        borderRadius: '3px',
        border: '4px solid transparent',
        overflow: 'hidden',
        height: '74px',
        width: '190px',

        '&:hover': {
            cursor: 'pointer'
        },

        ...(selected
            ? {
                  border: '4px solid #39c2d7'
              }
            : {})
    })
);
