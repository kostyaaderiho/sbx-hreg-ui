import React, { ChangeEventHandler } from 'react';
import FormControl from '@material-ui/core/FormControl';

import * as S from './Textarea.style';

export type TextareaProps = {
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    fullWidth: boolean;
    label?: string;
    placeholder: string;
    className?: string;
    value: string;
    name: string;
    rows?: number;
};

export const Textarea: React.FC<TextareaProps> = ({
    fullWidth,
    label,
    placeholder,
    className,
    onChange,
    value,
    name,
    rows = 10
}) => (
    <FormControl fullWidth={fullWidth}>
        <S.Label shrink>{label}</S.Label>
        <S.Wrapper
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            value={value}
            name={name}
            multiline={true}
            rows={rows}
        />
    </FormControl>
);
