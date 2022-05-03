import React from 'react';

import { RECOGNIZE_CATEGORIES } from '~/constants/recognition';
import { UploadImage } from '~/components/UploadImage';
import translations from '~/i18n/translations.json';
import {
    CardTextarea,
    CardInput,
    CardName,
    Card,
    CardInfo,
    CardPhoto,
    CardDescription,
    CardChangeHandler
} from '~/components/Card';
import { Recognition } from '~/types/recognition';

import { STATUS_LABEL } from './RecognitionCard.constants';

export type RecognitionCardProps = {
    onCardChange: CardChangeHandler;
    isEditing: boolean;
    recognition: Recognition;
};

export const RecognitionCard = React.forwardRef<
    HTMLCanvasElement,
    RecognitionCardProps
>(({ onCardChange, isEditing, recognition }, ref) => {
    const {
        personalMessage,
        nominator,
        category,
        position,
        fullName,
        message,
        status,
        photo,
        id
    } = recognition;

    return (
        <Card>
            <CardPhoto>
                <UploadImage
                    defaultImageURL={photo as string}
                    isDescriptionEnabled={false}
                    isButtonEnabled={isEditing}
                    ref={ref}
                />
            </CardPhoto>
            <CardInfo>
                <CardName
                    label={STATUS_LABEL[status]}
                    name={fullName}
                    status={status}
                />
                <CardDescription>
                    {RECOGNIZE_CATEGORIES[category]}
                </CardDescription>
                <CardDescription>{nominator}</CardDescription>
                {isEditing ? (
                    <CardInput
                        onChange={onCardChange}
                        name='position'
                        value={position}
                        id={id}
                    />
                ) : (
                    <CardDescription>{position}</CardDescription>
                )}
                <CardTextarea
                    placeholder={
                        translations.card_recognition_recognize_message_placeholder
                    }
                    value={message}
                    name='message'
                    onChange={onCardChange}
                    isEditing={isEditing}
                    id={id}
                />
                <CardTextarea
                    placeholder={
                        translations.card_recognition_personal_message_placeholder
                    }
                    value={personalMessage}
                    name='personalMessage'
                    onChange={onCardChange}
                    isEditing={isEditing}
                    id={id}
                />
            </CardInfo>
        </Card>
    );
});

RecognitionCard.displayName = 'RecognitionCard';
