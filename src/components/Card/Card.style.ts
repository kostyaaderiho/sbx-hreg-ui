import { styled } from '@material-ui/core/styles';

export const Card = styled('div')({
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '40px 35px 30px 55px'
});

export const CardInfo = styled('div')({
    flex: '1 1 auto'
});

export const CardPhoto = styled('div')({
    marginRight: '60px',
    minWidth: '120px'
});

export const ContactHolder = styled('div')({
    padding: '30px 0'
});

export const CardDescription = styled('p')(({ theme }) => ({
    lineHeight: '18px',
    color: theme.palette.secondaryTextGrey,
    margin: '8px 0',
    fontSize: '14px'
}));

export const Name = styled('h1')(({ theme }) => ({
    fontSize: '36px',
    color: theme.palette.primaryTextGrey,
    margin: 0
}));

export const Link = styled('a')(({ theme }) => ({
    color: theme.palette.primaryTextBlue,
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '24px'
}));

export const Contant = styled('span')({
    fontSize: '14px',
    lineHeight: '24px'
});

export const Label = styled('span')(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.primaryTextGrey,
    lineHeight: '18px',
    width: '100px',
    display: 'inline-block'
}));

export const CardTextArea = styled('div')(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.primaryTextGrey,
    lineHeight: '24px',
    margin: '8px 0'
}));
