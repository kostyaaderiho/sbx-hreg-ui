import React, { useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { NewcomerHeader, NewcomerList } from '~/components/Newcomer';
import { PageContent } from '~/components/PageContent';
import {
    selectArchivedNewcomers,
    getNewcomerListRequest,
    selectIsFetching
} from '~/redux/newcomers';
import { RouteParams } from '~/types/routeParams';
import { Newcomer } from '~/types/newcomer';
import { FiltersContext, useFilters, useLazyLoading } from '~/hooks';
import { encodeQueryParams } from '~/utils';

import {
    INITIAL_FILTERS,
    SORTERS_FUNC,
    LAZY_LOAD_LIMIT,
    LAZY_LOAD_START_OFFSET
} from './AdminNewcomerArchiveListPage.constants';

export const AdminNewcomerArchiveListPage = () => {
    const { country }: RouteParams = useParams();
    const dispatch = useDispatch();

    const scrollEl = useMemo(() => document.getElementById('app'), []);
    const newcomers: Newcomer[] = useSelector(selectArchivedNewcomers);
    const isLoading = useSelector(selectIsFetching);

    const fetchActionCreator = useCallback(
        (offset) => {
            dispatch(
                getNewcomerListRequest({
                    sort: encodeQueryParams({ createdDate: 'desc' }),
                    status: 'archived',
                    country,
                    limit: LAZY_LOAD_LIMIT,
                    offset
                })
            );
        },
        [dispatch, country]
    );

    useLazyLoading({
        fetchFn: fetchActionCreator,
        el: scrollEl!,
        offset: LAZY_LOAD_LIMIT + LAZY_LOAD_START_OFFSET,
        limit: LAZY_LOAD_LIMIT,
        fetching: isLoading
    });

    const { state, actions } = useFilters(
        INITIAL_FILTERS,
        undefined,
        SORTERS_FUNC
    );

    useEffect(() => {
        actions.updateEntities(newcomers);
    }, [actions, newcomers]);

    useEffect(() => {
        fetchActionCreator(LAZY_LOAD_START_OFFSET);
    }, [fetchActionCreator]);

    return (
        <FiltersContext state={state} actions={actions}>
            <NewcomerHeader isGenerateButtonEnabled={false} />
            <PageContent>
                <NewcomerList newcomers={state.show} />
            </PageContent>
        </FiltersContext>
    );
};
