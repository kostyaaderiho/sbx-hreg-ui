import { styled } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

export const HeaderNavItemLink = styled(NavLink)(({ theme }) => ({
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: '20px',
    fontSize: '14px',
    color: theme.palette.primaryTextGrey,
    fontWeight: 600,

    '&:hover': {
        color: theme.palette.primaryTextBlue
    },

    '&.navItemLink--active': {
        borderBottom: `2px solid ${theme.palette.primaryTextBlue}`,
        color: theme.palette.primaryTextBlue
    }
}));
