import { SorterFunctions } from '~/hooks/useFilters/types';
import { Recognition } from '~/types/recognition';

type RecognitionSortConfig = {
    SORT_BY_CREATED_DATE: boolean;
};

export const INITIAL_FILTERS = {
    sorters: {
        SORT_BY_CREATED_DATE: true
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
