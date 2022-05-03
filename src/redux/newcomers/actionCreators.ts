import { Newcomer, QueryOffsetType, QuerySortParamType } from '~/types';

import { NEWCOMER_ACTIONS } from './actions';

export const addNewcomerRequest = (payload: FormData) => ({
    type: NEWCOMER_ACTIONS.addRequest,
    payload
});

export const getNewcomerRequest = (payload: Newcomer) => ({
    type: NEWCOMER_ACTIONS.getRequest,
    payload
});

export const getNewcomerListRequest = (
    payload: Partial<
        Pick<Newcomer, 'country' | 'status'> &
            QueryOffsetType &
            QuerySortParamType
    >
) => ({
    type: NEWCOMER_ACTIONS.getListRequest,
    payload
});

export const updateNewcomerRequest = (payload: Newcomer) => ({
    type: NEWCOMER_ACTIONS.updateRequest,
    payload
});

export const updateNewcomerListRequest = (payload: Newcomer[]) => ({
    type: NEWCOMER_ACTIONS.updateListRequest,
    payload
});

export const deleteNewcomerRequest = (payload: Newcomer) => ({
    type: NEWCOMER_ACTIONS.deleteRequest,
    payload
});
