import React, { ChangeEventHandler } from 'react';
import FormControl from '@material-ui/core/FormControl';

import * as S from './Input.style';

export type InputProps = {
    onChange: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    placeholder: string;
    disabled?: boolean;
    fullWidth: boolean;
    name: string;
    value: string;
};

export const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    onChange,
    disabled,
    fullWidth,
    name,
    value
}) => (
    <FormControl fullWidth={fullWidth}>
        {label && <S.Label shrink>{label}</S.Label>}
        <S.Input
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
            name={name}
        />
    </FormControl>
);
