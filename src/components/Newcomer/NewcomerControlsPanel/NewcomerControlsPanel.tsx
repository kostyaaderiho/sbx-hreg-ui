import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ControlsPanel as Panel } from '~/components/ControlsPanel';
import {
    selectApprovedNewcomers,
    updateNewcomerListRequest
} from '~/redux/newcomers';
import { ENTITY_STATUS } from '~/constants';
import { Newcomer } from '~/types/newcomer';
import { useFiltersContext } from '~/hooks/useFilters';

export const NewcomerControlsPanel = () => {
    const dispatch = useDispatch();
    const newcomers: Newcomer[] = useSelector(selectApprovedNewcomers);

    const { actions } = useFiltersContext();

    const onSearcInputChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        actions.applyFiltersAndSort({
            FILTER_BY_NAME: ev.target.value
        });
    };

    const onArchive = () => {
        dispatch(
            updateNewcomerListRequest(
                newcomers.map((newcomer) => ({
                    ...newcomer,
                    status: ENTITY_STATUS.archived
                }))
            )
        );
    };

    return (
        <Panel
            isArchiveEnabled={Boolean(newcomers.length)}
            onSearch={onSearcInputChangeHandler}
            onArchive={onArchive}
        />
    );
};
