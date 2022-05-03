import React from 'react';

import { NewcomerListItem } from '~/components/Newcomer';
import { Newcomer } from '~/types/newcomer';

import * as S from './NewcomerList.style';

export type NewcomerProps = {
    newcomers: Newcomer[];
};

export const NewcomerList: React.FC<NewcomerProps> = ({ newcomers }) => {
    if (!newcomers.length) {
        return <S.Message>No items</S.Message>;
    }

    return (
        <>
            {newcomers.map((newcomer) => (
                <NewcomerListItem newcomer={newcomer} key={newcomer.id} />
            ))}
        </>
    );
};
