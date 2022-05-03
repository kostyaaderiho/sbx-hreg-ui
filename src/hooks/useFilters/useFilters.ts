import { useMemo, useCallback } from 'react';

import { useFiltersReducer } from './useFiltersReducer';
import {
    UseFiltersState,
    UseFiltersAction,
    FilterFunctions,
    SorterFunctions,
    InitializeFiltersAction,
    ApplyFiltersAndSortAction,
    UpdateEntitiesAction,
    ResetFiltersAction,
    FiltersKeyValueConfig
} from './types';

export const useFilters = <
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends FiltersKeyValueConfig
>(
    initialState?: Partial<
        UseFiltersState<TEntity, TFilterConfig, TSorterConfig>
    >,
    filtersFunc?: FilterFunctions<TEntity, TFilterConfig>,
    sortersFunc?: SorterFunctions<TEntity, TSorterConfig>
): {
    state: UseFiltersState<TEntity, TFilterConfig, TSorterConfig>;
    actions: UseFiltersAction<TEntity, TFilterConfig, TSorterConfig>;
} => {
    const [state, dispatch] = useFiltersReducer<
        TEntity,
        TFilterConfig,
        TSorterConfig
    >(initialState);

    const initializeFilters: InitializeFiltersAction<
        TEntity,
        TFilterConfig,
        TSorterConfig
    > = useCallback(
        (entities, filters, sorters) => {
            dispatch({
                type: 'INITIALIZE_FILTERS',
                payload: { entities, filters, sorters },
                meta: { filtersFunc, sortersFunc }
            });
        },
        [dispatch, filtersFunc, sortersFunc]
    );

    const applyFiltersAndSort: ApplyFiltersAndSortAction<
        TFilterConfig,
        TSorterConfig
    > = useCallback(
        (filters, sorters) => {
            dispatch({
                type: 'APPLY_FILTERS_AND_SORT',
                payload: { filters, sorters },
                meta: { filtersFunc, sortersFunc }
            });
        },
        [dispatch, filtersFunc, sortersFunc]
    );

    const updateEntities: UpdateEntitiesAction<TEntity> = useCallback(
        (entities) => {
            dispatch({
                type: 'UPDATE_ENTITIES',
                payload: { entities },
                meta: { filtersFunc, sortersFunc }
            });
        },
        [dispatch, filtersFunc, sortersFunc]
    );

    const resetFilters: ResetFiltersAction = useCallback(() => {
        dispatch({
            type: 'RESET_FILTERS',
            payload: {},
            meta: { filtersFunc, sortersFunc }
        });
    }, [dispatch, filtersFunc, sortersFunc]);

    const actions = useMemo(
        () => ({
            initializeFilters,
            applyFiltersAndSort,
            updateEntities,
            resetFilters
        }),
        [initializeFilters, applyFiltersAndSort, updateEntities, resetFilters]
    );

    return { state, actions };
};
