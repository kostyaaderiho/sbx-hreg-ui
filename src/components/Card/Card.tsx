import React, { ChangeEvent } from 'react';

import { StatusLabel } from '~/components/StatusLabel';
import { Textarea } from '~/components/Textarea';
import { Input } from '~/components/Input';
import { EntityStatus } from '~/types/entity';

import * as S from './Card.style';

export type CardChangeHandler = ({
    value
}: {
    value: string;
    name: string;
    id: string;
}) => void;

export type CardInputProps = {
    onChange: CardChangeHandler;
    value: string;
    name: string;
    id?: string;
};

export const CardInput: React.FC<CardInputProps> = ({
    value = '',
    onChange,
    name,
    id = ''
}) => (
    <Input
        onChange={({ target }) => {
            onChange({
                value: target.value,
                name: target.name,
                id
            });
        }}
        placeholder={name[0].toUpperCase() + name.slice(1)}
        fullWidth={true}
        name={name}
        value={value}
    />
);

export type ContactProps = {
    onChange: CardChangeHandler;
    isLink?: boolean;
    isEditing: boolean;
    label: string;
    value: string;
    name: string;
    id?: string;
};

export const Contact: React.FC<ContactProps> = ({
    isLink = false,
    isEditing,
    onChange,
    label,
    value,
    name,
    id
}) => {
    const text = isLink ? (
        <S.Link target='_blank' title={name} href={value}>
            {value}
        </S.Link>
    ) : (
        <S.Contant>{value}</S.Contant>
    );

    return (
        <div>
            <S.Label>{label}</S.Label>
            {isEditing ? (
                <CardInput
                    onChange={onChange}
                    value={value}
                    name={name}
                    id={id}
                />
            ) : (
                text
            )}
        </div>
    );
};

export type CardNameProps = {
    status: EntityStatus;
    name: string;
    label: string;
};

export const CardName: React.FC<CardNameProps> = ({ name, status, label }) => (
    <S.Name>
        {name}
        <StatusLabel status={status}>{label}</StatusLabel>
    </S.Name>
);

export type CardTextareaProps = {
    isEditing: boolean;
    value: string;
    name: string;
    placeholder: string;
    onChange: CardChangeHandler;
    id: string;
};

export const CardTextarea: React.FC<CardTextareaProps> = ({
    isEditing,
    value,
    name,
    placeholder,
    onChange,
    id
}) => (
    <S.CardTextArea>
        {isEditing ? (
            <Textarea
                placeholder={placeholder}
                onChange={(ev: ChangeEvent<HTMLTextAreaElement>) => {
                    onChange({
                        value: ev.target.value,
                        name: ev.target.name,
                        id
                    });
                }}
                value={value}
                name={name}
                fullWidth={true}
            />
        ) : (
            value
        )}
    </S.CardTextArea>
);
