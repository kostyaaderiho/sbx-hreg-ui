import React, { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RecognitionHeader } from '~/components/Recognition/RecognitionHeader';
import {
    RecognitionControlsPanel,
    RecognitionList
} from '~/components/Recognition';
import { PageContent } from '~/components/PageContent';
import { RouteParams } from '~/types';
import {
    getRecognitionListRequest,
    selectRecognitions,
    selectIsFetching
} from '~/redux/recognitions';
import { FiltersContext, useFilters, useLazyLoading } from '~/hooks';
import { encodeQueryParams } from '~/utils';

import {
    INITIAL_FILTERS,
    FILTERS_FUNC,
    SORTERS_FUNC,
    LAZY_LOAD_LIMIT,
    LAZY_LOAD_START_OFFSET
} from './AdminRecognitionListPage.constants';

export const AdminRecognitionListPage = () => {
    const { country }: RouteParams = useParams();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsFetching);
    const recognitions = useSelector(selectRecognitions);

    const scrollEl = useMemo(() => document.getElementById('app'), []);
    const { state, actions } = useFilters(
        INITIAL_FILTERS,
        FILTERS_FUNC,
        SORTERS_FUNC
    );

    const fetchActionCreator = useCallback(
        (offset) => {
            dispatch(
                getRecognitionListRequest({
                    sort: encodeQueryParams({ createdDate: 'desc' }),
                    limit: LAZY_LOAD_LIMIT,
                    country,
                    offset
                })
            );
        },
        [country, dispatch]
    );

    useLazyLoading({
        fetchFn: fetchActionCreator,
        el: scrollEl!,
        offset: LAZY_LOAD_LIMIT + LAZY_LOAD_START_OFFSET,
        limit: LAZY_LOAD_LIMIT,
        fetching: isLoading
    });

    useEffect(() => {
        fetchActionCreator(LAZY_LOAD_START_OFFSET);
        actions.applyFiltersAndSort({
            FILTER_BY_NOT_ARCHIVE: undefined
        });
    }, [actions, fetchActionCreator]);

    useEffect(() => {
        actions.updateEntities(recognitions);
    }, [recognitions, actions]);

    return (
        <FiltersContext state={state} actions={actions}>
            <RecognitionHeader isGenerateButtonEnabled={true} />
            <PageContent>
                <RecognitionControlsPanel />
                <RecognitionList recognitions={state.show} />
            </PageContent>
        </FiltersContext>
    );
};
