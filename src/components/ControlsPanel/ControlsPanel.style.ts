import { styled } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { Search } from '@material-ui/icons';

export const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    alignItems: 'center'
});

export const SearchInput = styled(Input)({
    border: '1px solid #c0c3ce',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    borderRadius: '3px',
    padding: '3px 9px',
    color: '#525462',
    fontSize: '14px',
    width: '450px',

    '&::before, &::after': {
        border: 'none'
    },

    '&:hover::before, &:hover::after': {
        border: 'none !important',
        color: 'red'
    }
});

export const SearchInputIcon = styled(Search)({
    color: '#c0c3ce'
});
