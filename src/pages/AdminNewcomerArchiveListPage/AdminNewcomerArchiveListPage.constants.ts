import { SorterFunctions } from '~/hooks/useFilters/types';
import { Newcomer } from '~/types/newcomer';

type PeopleSortConfig = {
    SORT_BY_CREATED_DATE: boolean;
};

export const INITIAL_FILTERS = {
    sorters: {
        SORT_BY_CREATED_DATE: true
    }
};

export const SORTERS_FUNC: SorterFunctions<Newcomer, PeopleSortConfig> = {
    SORT_BY_CREATED_DATE: () => (personA, personB) => {
        return personB.createdDate - personA.createdDate;
    }
};

export const LAZY_LOAD_LIMIT = 50;

export const LAZY_LOAD_START_OFFSET = 0;
