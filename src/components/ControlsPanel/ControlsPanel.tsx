import React, { useState, ChangeEventHandler } from 'react';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Confirmation } from '~/components/Confirmation';

import * as S from './ControlsPanel.style';

type SearchInputProps = {
    onChange: ChangeEventHandler;
    placeholder: string;
    fullWidth: boolean;
};

const SearchInput: React.FC<SearchInputProps> = (props) => (
    <S.SearchInput
        {...props}
        startAdornment={
            <InputAdornment position='start'>
                <S.SearchInputIcon />
            </InputAdornment>
        }
    />
);

export type ControlsPanelProps = {
    onSearch: ChangeEventHandler<HTMLInputElement>;
    onArchive: Function;
    isArchiveEnabled: boolean;
};

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
    onSearch,
    onArchive,
    isArchiveEnabled
}) => {
    const [isArchiveDialogOpened, setIsArchiveDialogOpened] = useState(false);

    return (
        <S.Wrapper>
            <SearchInput
                onChange={onSearch}
                placeholder='Search by name'
                fullWidth={true}
            />
            <Button
                disabled={!isArchiveEnabled}
                onClick={() => setIsArchiveDialogOpened(true)}
                variant='contained'
            >
                Archive approved
            </Button>
            <Confirmation
                open={isArchiveDialogOpened}
                onClose={() => setIsArchiveDialogOpened(false)}
                onOk={() => {
                    onArchive();
                    setIsArchiveDialogOpened(false);
                }}
                title={'Archive recognitions?'}
            >
                <p>All Approved recognitions will be archived.</p>
            </Confirmation>
        </S.Wrapper>
    );
};
