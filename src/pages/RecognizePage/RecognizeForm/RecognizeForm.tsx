import React, { ChangeEvent, ChangeEventHandler } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectProps } from '@material-ui/core/Select';

import { Textarea } from '~/components/Textarea';
import { Input } from '~/components/Input';
import { Select } from '~/components/Select';
import { RECOGNIZE_CATEGORIES } from '~/constants/recognition';
import { FormControlWrapper } from '~/components/Form';
import { Recognition } from '~/types/recognition';

import { AddButton } from './AddButton';

export type RecognizeFormProps = Pick<
    Recognition,
    'nominator' | 'category' | 'message' | 'title'
> & {
    onInput: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    onNomineeInput: (
        ev: ChangeEvent<HTMLInputElement>,
        id: Recognition['id']
    ) => void;
    onSelect: SelectProps['onChange'];
    onAdd: () => void;
    recognitions: Recognition[];
};

export const RecognizeForm: React.FC<RecognizeFormProps> = ({
    onInput,
    onNomineeInput,
    onSelect,
    onAdd,
    nominator,
    category,
    message,
    recognitions,
    title
}) => (
    <form>
        <FormControlWrapper>
            <Select
                onChange={onSelect}
                label='Category'
                fullWidth={true}
                name='category'
                value={category}
            >
                {Object.entries(RECOGNIZE_CATEGORIES).map(([value, name]) => (
                    <MenuItem value={value} key={value}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControlWrapper>
        <FormControlWrapper>
            {recognitions.map((recognition: Recognition, index: number) => (
                <Input
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        onNomineeInput(event, recognition.id)
                    }
                    placeholder='e.g. David Brown'
                    label={!index ? 'Name' : ''}
                    value={recognition.fullName}
                    fullWidth={true}
                    name='fullName'
                    key={recognition.id}
                />
            ))}
            <AddButton onClick={onAdd}>Add nominee name</AddButton>
        </FormControlWrapper>
        <FormControlWrapper>
            <Input
                onChange={onInput}
                placeholder='RM, Customer'
                label='From Who'
                fullWidth={true}
                name='nominator'
                value={nominator}
            />
        </FormControlWrapper>
        <FormControlWrapper>
            <Input
                onChange={onInput}
                placeholder='External ASMT'
                label='Title'
                fullWidth={true}
                name='title'
                value={title}
            />
        </FormControlWrapper>
        <FormControlWrapper>
            <Textarea
                onChange={onInput}
                placeholder='Please describe nominee achivements'
                fullWidth={true}
                label='Message'
                name='message'
                value={message}
            />
        </FormControlWrapper>
    </form>
);

RecognizeForm.displayName = 'RecognizeForm';
