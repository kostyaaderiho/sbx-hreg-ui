import React, { useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RecognitionHeader } from '~/components/Recognition/RecognitionHeader/RecognitionHeader';
import { RecognitionList } from '~/components/Recognition/RecognitionList';
import { PageContent } from '~/components/PageContent';
import {
    selectArchivedRecognitions,
    getRecognitionListRequest,
    selectIsFetching
} from '~/redux/recognitions';
import { RouteParams } from '~/types/routeParams';
import { FiltersContext, useFilters, useLazyLoading } from '~/hooks';
import { encodeQueryParams } from '~/utils';

import {
    INITIAL_FILTERS,
    SORTERS_FUNC,
    LAZY_LOAD_LIMIT,
    LAZY_LOAD_START_OFFSET
} from './AdminRecognitionArchiveListPage.constants';

export const AdminRecognitionArchiveListPage = () => {
    const { country }: RouteParams = useParams();
    const recognitions = useSelector(selectArchivedRecognitions);
    const dispatch = useDispatch();

    const scrollEl = useMemo(() => document.getElementById('app'), []);
    const { state, actions } = useFilters(
        INITIAL_FILTERS,
        undefined,
        SORTERS_FUNC
    );
    const isLoading = useSelector(selectIsFetching);

    const fetchActionCreator = useCallback(
        (offset) => {
            dispatch(
                getRecognitionListRequest({
                    sort: encodeQueryParams({ createdDate: 'desc' }),
                    status: 'archived',
                    country,
                    limit: LAZY_LOAD_LIMIT,
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
        actions.updateEntities(recognitions);
    }, [recognitions, actions]);

    useEffect(() => {
        fetchActionCreator(LAZY_LOAD_START_OFFSET);
    }, [fetchActionCreator]);

    return (
        <FiltersContext state={state} actions={actions}>
            <RecognitionHeader isExcelButtonEnabled={true} />
            <PageContent>
                <RecognitionList recognitions={state.show} />
            </PageContent>
        </FiltersContext>
    );
};
