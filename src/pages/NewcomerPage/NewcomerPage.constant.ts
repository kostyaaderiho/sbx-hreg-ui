import { ENTITY_STATUS } from '~/constants/entity';
import { Newcomer } from '~/types/newcomer';

export const DEFAULT_NEWCOMER: Partial<Newcomer> = {
    status: ENTITY_STATUS.pending,
    isSubmitted: false
};
