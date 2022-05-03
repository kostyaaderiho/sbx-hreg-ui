import React, { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    NewcomerControlsPanel,
    NewcomerHeader,
    NewcomerList
} from '~/components/Newcomer';
import { getNewcomerListRequest } from '~/redux/newcomers/actionCreators';
import { PageContent } from '~/components/PageContent';
import { RouteParams } from '~/types/routeParams';
import { selectIsFetching, selectNewcomers } from '~/redux/newcomers';
import { Newcomer } from '~/types/newcomer';
import { FiltersContext, useFilters, useLazyLoading } from '~/hooks';
import { encodeQueryParams } from '~/utils';

import {
    INITIAL_FILTERS,
    FILTERS_FUNC,
    SORTERS_FUNC,
    LAZY_LOAD_LIMIT,
    LAZY_LOAD_START_OFFSET
} from './AdminNewcomerListPage.constants';

export const AdminNewcomerListPage = () => {
    const { country }: RouteParams = useParams();
    const newcomers: Newcomer[] = useSelector(selectNewcomers);
    const isLoading = useSelector(selectIsFetching);
    const dispatch = useDispatch();

    const scrollEl = useMemo(() => document.getElementById('app'), []);
    const { state, actions } = useFilters(
        INITIAL_FILTERS,
        FILTERS_FUNC,
        SORTERS_FUNC
    );

    const fetchActionCreator = useCallback(
        (offset) => {
            dispatch(
                getNewcomerListRequest({
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
        actions.updateEntities(newcomers);
    }, [newcomers, actions]);

    return (
        <FiltersContext state={state} actions={actions}>
            <NewcomerHeader isGenerateButtonEnabled={true} />
            <PageContent>
                <NewcomerControlsPanel />
                <NewcomerList newcomers={state.show} />
            </PageContent>
        </FiltersContext>
    );
};
