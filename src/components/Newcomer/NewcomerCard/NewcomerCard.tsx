import React from 'react';

import UserPhotoPlaceholder from '~/assets/icons/userpic-icon.svg';
import translations from '~/i18n/translations.json';
import {
    CardTextarea,
    Contact,
    CardName,
    CardInput,
    Card,
    CardInfo,
    CardPhoto,
    ContactHolder,
    CardDescription,
    CardChangeHandler
} from '~/components/Card';
import { Avatar } from '~/components/Avatar';
import { Newcomer } from '~/types/newcomer';

import { STATUS_LABEL } from './NewcomerCard.constants';

export type NewcomerCardProps = {
    onCardChange: CardChangeHandler;
    isEditing: boolean;
    newcomer: Newcomer;
};

export const NewcomerCard: React.FC<NewcomerCardProps> = ({
    onCardChange,
    isEditing,
    newcomer
}) => {
    const {
        selfIntroduction,
        department,
        telescope,
        fullName,
        position,
        linkedin,
        status,
        github,
        telegram,
        heroes,
        dribbble,
        behance,
        skype,
        photo,
        id,
        country
    } = newcomer;

    const uxd = country.includes('-uxd');

    return (
        <Card>
            <CardPhoto>
                <Avatar
                    src={photo ? '/' + photo : UserPhotoPlaceholder}
                    alt='Newcomer photo'
                />
            </CardPhoto>
            <CardInfo>
                <CardName
                    label={STATUS_LABEL[status]}
                    name={fullName}
                    status={status}
                />
                {isEditing ? (
                    <>
                        <CardInput
                            onChange={onCardChange}
                            value={position}
                            name='position'
                            id={id}
                        />
                        {!uxd && (
                            <CardInput
                                onChange={onCardChange}
                                value={department}
                                name='department'
                                id={id}
                            />
                        )}
                    </>
                ) : (
                    <>
                        <CardDescription>{position}</CardDescription>
                        {!uxd && (
                            <CardDescription>{department}</CardDescription>
                        )}
                    </>
                )}
                <ContactHolder>
                    <Contact
                        label={translations.card_info_label_telescope}
                        isEditing={isEditing}
                        onChange={onCardChange}
                        value={telescope}
                        name={'telescope'}
                        isLink={true}
                        id={id}
                    />
                    {(skype || isEditing) && (
                        <Contact
                            label={translations.card_info_label_skype}
                            isEditing={isEditing}
                            onChange={onCardChange}
                            value={skype}
                            name={'skype'}
                            id={id}
                        />
                    )}
                    {(linkedin || isEditing) && (
                        <Contact
                            label={translations.card_info_label_linkidin}
                            isEditing={isEditing}
                            onChange={onCardChange}
                            value={linkedin}
                            name={'linkedin'}
                            isLink={true}
                            id={id}
                        />
                    )}
                    {(dribbble || isEditing) && (
                        <Contact
                            label={translations.card_info_label_dribbble}
                            isEditing={isEditing}
                            onChange={onCardChange}
                            value={dribbble}
                            name={'dribbble'}
                            isLink={true}
                            id={id}
                        />
                    )}
                    {(behance || isEditing) && (
                        <Contact
                            label={translations.card_info_label_behance}
                            isEditing={isEditing}
                            onChange={onCardChange}
                            value={behance}
                            name={'behance'}
                            isLink={true}
                            id={id}
                        />
                    )}
                    {uxd ? (
                        <>
                            {(telegram || isEditing) && (
                                <Contact
                                    label={
                                        translations.card_info_label_telegram
                                    }
                                    isEditing={isEditing}
                                    onChange={onCardChange}
                                    value={telegram}
                                    name={'telegram'}
                                    id={id}
                                />
                            )}
                            <Contact
                                label={translations.card_info_label_heroes}
                                isEditing={isEditing}
                                onChange={onCardChange}
                                value={heroes}
                                name={'heroes'}
                                isLink={true}
                                id={id}
                            />
                        </>
                    ) : (
                        (github || isEditing) && (
                            <Contact
                                label={translations.card_info_label_github}
                                isEditing={isEditing}
                                onChange={onCardChange}
                                value={github}
                                name={'github'}
                                id={id}
                            />
                        )
                    )}
                </ContactHolder>
                <CardTextarea
                    placeholder={
                        translations.card_newcomer_self_introduction_placeholder
                    }
                    value={selfIntroduction}
                    name='selfIntroduction'
                    onChange={onCardChange}
                    isEditing={isEditing}
                    id={id}
                />
            </CardInfo>
        </Card>
    );
};
