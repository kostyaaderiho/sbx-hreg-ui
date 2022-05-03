import { ENTITY_STATUS } from '~/constants/entity';
import { SORT_ORDER } from '~/constants/newcomer';
import { FilterFunctions, SorterFunctions } from '~/hooks/useFilters/types';
import { Newcomer } from '~/types/newcomer';

type PeopleFilterConfig = {
    FILTER_BY_NAME: string;
    FILTER_BY_NOT_ARCHIVE: unknown;
};

type PeopleSortConfig = {
    SORT_BY_JOB_TITLE: boolean;
};

export const INITIAL_FILTERS = {
    sorters: {
        SORT_BY_JOB_TITLE: true
    }
};

export const FILTERS_FUNC: FilterFunctions<Newcomer, PeopleFilterConfig> = {
    FILTER_BY_NAME: (filter) => (newcomer) => {
        return (
            newcomer.fullName
                .toLocaleLowerCase()
                .indexOf(filter!.toLocaleLowerCase()) !== -1
        );
    },
    FILTER_BY_NOT_ARCHIVE: () => (newcomer) => {
        return newcomer.status !== ENTITY_STATUS.archived;
    }
};

export const SORTERS_FUNC: SorterFunctions<Newcomer, PeopleSortConfig> = {
    SORT_BY_JOB_TITLE: () => (personA, personB) => {
        return SORT_ORDER[personA.position] - SORT_ORDER[personB.position];
    }
};

export const LAZY_LOAD_LIMIT = 50;

export const LAZY_LOAD_START_OFFSET = 0;
