import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { SelectImageGallery as _SelectImageGallery } from '~/components/SelectImageGallery';
import { Textarea } from '~/components/Textarea';

export const EmailPreview = styled('div')({
    width: '880px',
    margin: '0 auto'
});

export const EditButton = styled(Button)({
    margin: '0 20px 0 auto'
});

export const Configuration = styled('div')(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: theme.decoration.boxShadow,
    borderRadius: theme.decoration.borderRadius
}));

export const SelectImageGallery = styled(_SelectImageGallery)({
    margin: '25px 0 40px'
});

export const ConfigurationTextArea = styled(Textarea)({
    width: '600px'
});

export const ConfigurationOptions = styled('div')({
    padding: '18px 24px 30px'
});

export const ConfigurationOptionsDescription = styled('p')(({ theme }) => ({
    color: theme.palette.secondaryTextGrey,
    fontSize: '12px',
    lineHeight: '16px',
    margin: 0
}));

export const ConfigurationOptionsTitle = styled('p')(({ theme }) => ({
    color: theme.palette.secondaryTextGrey,
    fontSize: '14px',
    lineHeight: '18px',
    margin: '20px 0 0'
}));

export const ConfigurationControls = styled('div')(({ theme }) => ({
    borderTop: `1px solid ${theme.decoration.strokeGrey}`,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '18px 24px',

    '& a': {
        textDecoration: 'none'
    }
}));
