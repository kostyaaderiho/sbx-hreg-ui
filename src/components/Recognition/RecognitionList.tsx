import React from 'react';

import { Recognition } from '~/types/recognition';

import { RecognitionListItem } from './RecognitionListItem';

import * as S from './RecognitionList.style';

export type RecognitionListProps = {
    recognitions: Recognition[];
};

export const RecognitionList: React.FC<RecognitionListProps> = ({
    recognitions
}) => {
    if (!recognitions.length) {
        return <S.Message>No items</S.Message>;
    }

    return (
        <>
            {recognitions.map((recognition) => (
                <RecognitionListItem
                    recognition={recognition}
                    key={recognition.id}
                />
            ))}
        </>
    );
};
