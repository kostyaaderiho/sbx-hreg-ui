import { Recognition, QueryOffsetType, QuerySortParamType } from '~/types';

import { RECOGNITION_ACTIONS } from './actions';

export const addRecognitionRequest = (payload: Recognition[]) => ({
    type: RECOGNITION_ACTIONS.addRequest,
    payload
});

export const updateRecognitionRequest = (payload: Recognition) => ({
    type: RECOGNITION_ACTIONS.updateRequest,
    payload
});

export const updateRecognitionListRequest = (payload: Recognition[]) => ({
    type: RECOGNITION_ACTIONS.updateListRequest,
    payload
});

export const deleteRecognitionRequest = (payload: Recognition) => ({
    type: RECOGNITION_ACTIONS.deleteRequest,
    payload
});

export const getRecognitionListRequest = (
    payload: Partial<
        Pick<Recognition, 'country' | 'status'> &
            QueryOffsetType &
            QuerySortParamType
    >
) => ({
    type: RECOGNITION_ACTIONS.getListRequest,
    payload
});
