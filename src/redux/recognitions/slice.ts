import {
    createSlice,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';

import { ENTITY_STATUS } from '~/constants/entity';
import { Recognition } from '~/types/recognition';

import { RootState } from '../store';

const recognitionsAdapter = createEntityAdapter<Recognition>();
const initialState = recognitionsAdapter.getInitialState({
    fetching: false
});

const recognitionSlice = createSlice({
    name: 'recognition',
    initialState,
    reducers: {
        addRecognition: recognitionsAdapter.addOne,
        addRecognitionList: recognitionsAdapter.addMany,
        setAllNewcomerList: recognitionsAdapter.setAll,
        updateRecognition: recognitionsAdapter.updateOne,
        updateRecognitionList: recognitionsAdapter.updateMany,
        deleteRecognition: recognitionsAdapter.removeOne,
        fetchRecognitionListStarted(state) {
            state.fetching = true;
        },
        fetchRecognitionListFinished(state) {
            state.fetching = false;
        }
    }
});

export const {
    addRecognition,
    addRecognitionList,
    updateRecognition,
    updateRecognitionList,
    deleteRecognition,
    fetchRecognitionListStarted,
    fetchRecognitionListFinished
} = recognitionSlice.actions;

export const recognitionsReducer = recognitionSlice.reducer;

export const { selectAll: selectRecognitions } =
    recognitionsAdapter.getSelectors<RootState>((state) => state.recognitions);

export const selectApprovedRecognitions = createSelector(
    selectRecognitions,
    (recognitions) => {
        return recognitions.filter(
            (recognition) => recognition.status === ENTITY_STATUS.approved
        );
    }
);

export const selectArchivedRecognitions = createSelector(
    selectRecognitions,
    (recognitions) => {
        return recognitions.filter(
            (recognition) => recognition.status === ENTITY_STATUS.archived
        );
    }
);

export const selectIsFetching = createSelector(
    (state: RootState) => state,
    ({ recognitions }) => recognitions.fetching
);
