import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ControlsPanel } from '~/components/ControlsPanel';
import {
    updateRecognitionListRequest,
    selectApprovedRecognitions
} from '~/redux/recognitions';
import { ENTITY_STATUS } from '~/constants/entity';
import { Recognition } from '~/types/recognition';
import { useFiltersContext } from '~/hooks/useFilters';

export const RecognitionControlsPanel = () => {
    const dispatch = useDispatch();
    const recognitions: Recognition[] = useSelector(selectApprovedRecognitions);

    const { actions } = useFiltersContext();

    const onSearcInputChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        actions.applyFiltersAndSort({
            FILTER_BY_NAME: ev.target.value
        });
    };

    const onArchive = () => {
        dispatch(
            updateRecognitionListRequest(
                recognitions.map((recognition: Recognition) => ({
                    ...recognition,
                    status: ENTITY_STATUS.archived
                }))
            )
        );
    };

    return (
        <ControlsPanel
            isArchiveEnabled={Boolean(recognitions.length)}
            onSearch={onSearcInputChangeHandler}
            onArchive={onArchive}
        />
    );
};
