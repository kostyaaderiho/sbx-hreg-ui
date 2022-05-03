import { useReducer, Reducer } from 'react';

import { applyFilters, applySorters } from '~/hooks/useFilters/filter.utils';

import { INITIAL_STATE } from './useFilters.constants';
import {
    UseFiltersState,
    FiltersAction,
    FiltersKeyValueConfig,
    SortersKeyValueConfig
} from './types';

function getCommonValues<
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
>(
    state: UseFiltersState<TEntity, TFilterConfig, TSorterConfig>,
    action: FiltersAction<TEntity, TFilterConfig, TSorterConfig>
) {
    const { filters: oldFilters, sorters: oldSorters } = state;
    const { filtersFunc, sortersFunc } = action.meta;

    return {
        oldFilters,
        oldSorters,
        filtersFunc,
        sortersFunc
    };
}

export const filtersReducer = <
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
>(
    state: UseFiltersState<
        TEntity,
        TFilterConfig,
        TSorterConfig
    > = INITIAL_STATE,
    action?: FiltersAction<TEntity, TFilterConfig, TSorterConfig>
): UseFiltersState<TEntity, TFilterConfig, TSorterConfig> => {
    switch (action?.type) {
        case 'INITIALIZE_FILTERS': {
            const { filtersFunc, sortersFunc, oldFilters, oldSorters } =
                getCommonValues(state, action);
            const {
                entities,
                filters: newFilters,
                sorters: newSorters
            } = action.payload;
            const filteredEntities = applyFilters(
                entities,
                filtersFunc,
                newFilters
            );
            const sortedAndFilteredEntities = applySorters(
                filteredEntities,
                sortersFunc,
                newSorters
            );

            return {
                all: entities,
                show: sortedAndFilteredEntities,
                filters: newFilters || oldFilters,
                sorters: newSorters || oldSorters
            };
        }
        case 'APPLY_FILTERS_AND_SORT': {
            const { filters: newFilters, sorters: newSorters } = action.payload;
            const { all: allEntities } = state;
            const { oldFilters, oldSorters, filtersFunc, sortersFunc } =
                getCommonValues(state, action);

            const combinedFilters = { ...oldFilters, ...newFilters };
            const combinedSorters = { ...oldSorters, ...newSorters };

            // Filters are applied to all entities
            const filteredEntities = applyFilters(
                allEntities,
                filtersFunc,
                combinedFilters
            );
            const sortedAndFilteredEntities = applySorters(
                filteredEntities,
                sortersFunc,
                combinedSorters
            );

            return {
                all: allEntities,
                show: sortedAndFilteredEntities,
                filters: combinedFilters,
                sorters: combinedSorters
            };
        }
        case 'UPDATE_ENTITIES': {
            const { entities } = action.payload;
            const { oldFilters, oldSorters, filtersFunc, sortersFunc } =
                getCommonValues(state, action);
            const filteredEntities = applyFilters(
                entities,
                filtersFunc,
                oldFilters
            );
            const sortedAndFilteredEntities = applySorters(
                filteredEntities,
                sortersFunc,
                oldSorters
            );

            return {
                all: entities,
                show: sortedAndFilteredEntities,
                filters: oldFilters,
                sorters: oldSorters
            };
        }
        case 'RESET_FILTERS': {
            const { sortersFunc, oldSorters } = getCommonValues(state, action);
            const sortedEntities = applySorters(
                state.all,
                sortersFunc,
                oldSorters
            );

            return {
                all: state.all,
                show: sortedEntities,
                filters: {},
                sorters: oldSorters
            };
        }
        default:
            return state;
    }
};

export const useFiltersReducer = <
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
>(
    initialState = {}
) =>
    useReducer<
        Reducer<
            UseFiltersState<TEntity, TFilterConfig, TSorterConfig>,
            FiltersAction<TEntity, TFilterConfig, TSorterConfig>
        >
    >(filtersReducer, {
        ...INITIAL_STATE,
        ...initialState
    });
