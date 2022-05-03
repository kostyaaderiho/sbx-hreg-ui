import React, {
    createContext,
    useContext,
    memo,
    PropsWithChildren
} from 'react';

import { INITIAL_STATE } from './useFilters.constants';
import {
    UseFiltersAction,
    UseFiltersState,
    FiltersKeyValueConfig,
    SortersKeyValueConfig
} from './types';

export const FiltersContextValue = createContext<any>(INITIAL_STATE);
export const FiltersContextActions = createContext<any>(null);

export const useFiltersContext = <
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig,
    TSorterConfig extends SortersKeyValueConfig
>() => {
    const state =
        useContext<UseFiltersState<TEntity, TFilterConfig, TSorterConfig>>(
            FiltersContextValue
        );
    const actions = useContext<
        UseFiltersAction<TEntity, TFilterConfig, TSorterConfig>
    >(FiltersContextActions);

    return { state, actions };
};

export const FiltersContext = memo<
    PropsWithChildren<{
        state: UseFiltersState<any, any, any>;
        actions: UseFiltersAction<any, any, any>;
    }>
>(({ children, state, actions }) => (
    <FiltersContextActions.Provider value={actions}>
        <FiltersContextValue.Provider value={state}>
            {children}
        </FiltersContextValue.Provider>
    </FiltersContextActions.Provider>
));

FiltersContext.displayName = 'FiltersContext';
