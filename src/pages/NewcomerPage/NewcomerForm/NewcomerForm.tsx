import React, { ChangeEventHandler } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { SelectProps } from '@material-ui/core/Select';

import { UploadImage, UploadImageProps } from '~/components/UploadImage';
import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';
import { Select } from '~/components/Select';
import { JOB_TITLES, JOB_TITLES_UXD } from '~/constants/entity';
import { FormControlWrapper } from '~/components/Form';
import { Newcomer } from '~/types/newcomer';

export type NewcomerFormProps = Newcomer & {
    onPhotoChange: UploadImageProps['onPhotoChange'];
    onFormUpdate: ChangeEventHandler<HTMLInputElement>;
    uxd: boolean;
};

export const NewcomerForm: React.FC<NewcomerFormProps> = ({
    selfIntroduction,
    onPhotoChange,
    onFormUpdate,
    uxd,
    telescope,
    fullName,
    position,
    linkedin,
    dribbble,
    behance,
    heroes,
    skype,
    github,
    telegram
}) => {
    const jobTitles = uxd ? JOB_TITLES_UXD : JOB_TITLES;

    return (
        <form>
            <FormControlWrapper>
                <UploadImage onPhotoChange={onPhotoChange} />
            </FormControlWrapper>
            <FormControlWrapper>
                <Input
                    onChange={onFormUpdate}
                    placeholder='e.g. David Brown'
                    label='Full name *'
                    fullWidth={true}
                    name='fullName'
                    value={fullName}
                />
            </FormControlWrapper>
            <FormControlWrapper>
                <Select
                    onChange={
                        onFormUpdate as unknown as SelectProps['onChange']
                    }
                    label='Job position *'
                    fullWidth={true}
                    name='position'
                    value={position}
                >
                    {Object.keys(jobTitles).map((jobTitle) => (
                        <MenuItem
                            value={
                                uxd
                                    ? JOB_TITLES_UXD[jobTitle]
                                    : JOB_TITLES[jobTitle]
                            }
                            key={jobTitle}
                        >
                            {uxd
                                ? JOB_TITLES_UXD[jobTitle]
                                : JOB_TITLES[jobTitle]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControlWrapper>
            <FormControlWrapper>
                <Input
                    onChange={onFormUpdate}
                    placeholder='e.g. http://telescope.com/david-brown'
                    label='Telescope *'
                    fullWidth={true}
                    name='telescope'
                    value={telescope}
                />
            </FormControlWrapper>
            <FormControlWrapper>
                <Input
                    onChange={onFormUpdate}
                    placeholder='e.g. david_brown'
                    label={uxd ? 'Skype' : 'Skype *'}
                    fullWidth={true}
                    name='skype'
                    value={skype}
                />
            </FormControlWrapper>
            <FormControlWrapper>
                <Input
                    onChange={onFormUpdate}
                    placeholder='e.g. http://linkedin.com/david-brown'
                    label='LinkedIn'
                    fullWidth={true}
                    name='linkedin'
                    value={linkedin}
                />
            </FormControlWrapper>
            {uxd ? (
                <>
                    <FormControlWrapper>
                        <Input
                            onChange={onFormUpdate}
                            placeholder='e.g. http://dribbble.com/david-brown'
                            label='Dribbble'
                            fullWidth={true}
                            name='dribbble'
                            value={dribbble}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <Input
                            onChange={onFormUpdate}
                            placeholder='e.g. http://behance.com/david-brown'
                            label='Behance'
                            fullWidth={true}
                            name='behance'
                            value={behance}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <Input
                            onChange={onFormUpdate}
                            placeholder='e.g. david-brown'
                            label='Telegram'
                            fullWidth={true}
                            name='telegram'
                            value={telegram}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <Input
                            onChange={onFormUpdate}
                            placeholder='e.g. http://heroes.com/david-brown'
                            label='Heroes *'
                            fullWidth={true}
                            name='heroes'
                            value={heroes}
                        />
                    </FormControlWrapper>
                </>
            ) : (
                <FormControlWrapper>
                    <Input
                        onChange={onFormUpdate}
                        placeholder='e.g. http://github.com/david-brown'
                        label='GitHub'
                        fullWidth={true}
                        name='github'
                        value={github}
                    />
                </FormControlWrapper>
            )}
            <FormControlWrapper>
                <Textarea
                    onChange={
                        onFormUpdate as unknown as ChangeEventHandler<HTMLTextAreaElement>
                    }
                    placeholder='Please tell your story.'
                    label='Self-introduction *'
                    name='selfIntroduction'
                    fullWidth={true}
                    value={selfIntroduction}
                />
            </FormControlWrapper>
        </form>
    );
};
