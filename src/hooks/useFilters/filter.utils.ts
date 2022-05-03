import {
    FiltersKeyValueConfig,
    SortersKeyValueConfig,
    FilterFunctions,
    SorterFunctions,
    StateFilters,
    StateSorters
} from '~/hooks/useFilters/types';

export const applyFilters = <
    TEntity,
    TFilterConfig extends FiltersKeyValueConfig
>(
    entities: TEntity[],
    filtersFunc?: FilterFunctions<TEntity, TFilterConfig>,
    filters?: StateFilters<TFilterConfig>
) => {
    if (!filtersFunc || !filters) {
        return entities;
    }

    const filterKeys = Object.keys(filters);

    return filterKeys.reduce((acc, filterKey) => {
        const filter = filtersFunc[filterKey];

        if (!filter) {
            return acc;
        }

        const boundFilter = filter(filters[filterKey]);

        return acc.filter(boundFilter);
    }, entities);
};

export const applySorters = <
    TEntity,
    TSorterConfig extends SortersKeyValueConfig
>(
    entities: TEntity[],
    sortersFunc?: SorterFunctions<TEntity, TSorterConfig>,
    sorters?: StateSorters<TSorterConfig>
) => {
    if (!sortersFunc || !sorters) {
        return entities;
    }

    const sorterKeys = Object.keys(sorters);

    return sorterKeys.reduce((acc, sorterKey) => {
        const sorter = sortersFunc[sorterKey];

        if (!sorter) {
            return acc;
        }

        const boundSorter = sorter(sorters[sorterKey]);

        return Array.from(acc.sort(boundSorter));
    }, entities);
};
