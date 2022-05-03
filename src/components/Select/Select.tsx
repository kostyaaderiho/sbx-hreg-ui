import React, { FunctionComponent } from 'react';
import { SelectProps as MaterialSelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import * as S from './Select.style';

export type SelectProps = {
    onChange: MaterialSelectProps['onChange'];
    value: string | number;
    fullWidth?: boolean;
    disabled?: boolean;
    label?: string;
    name: string;
};

export const Select: FunctionComponent<SelectProps> = ({
    fullWidth = false,
    disabled = false,
    label,
    onChange,
    value,
    name,
    children
}) => (
    <FormControl fullWidth={fullWidth}>
        {label && <S.Label shrink>{label}</S.Label>}
        <S.Wrapper
            onChange={onChange}
            disabled={disabled}
            value={value}
            name={name}
        >
            {children}
        </S.Wrapper>
    </FormControl>
);
