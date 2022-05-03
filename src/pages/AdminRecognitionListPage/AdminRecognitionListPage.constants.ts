import { FilterFunctions, SorterFunctions } from '~/hooks/useFilters/types';
import { ENTITY_STATUS } from '~/constants/entity';
import { Recognition } from '~/types/recognition';

type RecognitionFilterConfig = {
    FILTER_BY_NAME: string;
    FILTER_BY_NOT_ARCHIVE: unknown;
};

type RecognitionSortConfig = {
    SORT_BY_CREATED_DATE: boolean;
};

export const INITIAL_FILTERS = {
    sorters: {
        SORT_BY_CREATED_DATE: true
    }
};

export const FILTERS_FUNC: FilterFunctions<
    Recognition,
    RecognitionFilterConfig
> = {
    FILTER_BY_NAME: (filter) => (recognition) => {
        return (
            recognition.fullName
                .toLocaleLowerCase()
                .indexOf(filter!.toLocaleLowerCase()) !== -1
        );
    },
    FILTER_BY_NOT_ARCHIVE: () => (recognition) => {
        return recognition.status !== ENTITY_STATUS.archived;
    }
};

export const SORTERS_FUNC: SorterFunctions<Recognition, RecognitionSortConfig> =
    {
        SORT_BY_CREATED_DATE: () => (recognitionA, recognitionB) => {
            return recognitionB.createdDate! - recognitionA.createdDate!;
        }
    };

export const LAZY_LOAD_LIMIT = 50;

export const LAZY_LOAD_START_OFFSET = 0;
