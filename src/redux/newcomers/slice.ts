import {
    createSlice,
    createEntityAdapter,
    createSelector
} from '@reduxjs/toolkit';

import { Newcomer } from '~/types/newcomer';
import { ENTITY_STATUS } from '~/constants/entity';

import { RootState } from '../store';

const newcomersAdapter = createEntityAdapter<Newcomer>();
const initialState = newcomersAdapter.getInitialState({
    fetching: false
});

const newcomersSlice = createSlice({
    name: 'newcomers',
    initialState,
    reducers: {
        addNewcomer: newcomersAdapter.addOne,
        addNewcomerList: newcomersAdapter.addMany,
        setAllNewcomerList: newcomersAdapter.setAll,
        updateNewcomer: newcomersAdapter.updateOne,
        updateNewcomerList: newcomersAdapter.updateMany,
        deleteNewcomer: newcomersAdapter.removeOne,
        fetchNewcomerListStarted(state) {
            state.fetching = true;
        },
        fetchNewcomerListFinished(state) {
            state.fetching = false;
        }
    }
});

export const {
    addNewcomer,
    updateNewcomer,
    updateNewcomerList,
    deleteNewcomer,
    fetchNewcomerListStarted,
    fetchNewcomerListFinished,
    setAllNewcomerList,
    addNewcomerList
} = newcomersSlice.actions;

export const newcomersReducer = newcomersSlice.reducer;

export const {
    selectAll: selectNewcomers,
    selectById: selectNewcomerById,
    selectTotal
} = newcomersAdapter.getSelectors<RootState>((state) => state.newcomers);

export const selectApprovedNewcomers = createSelector(
    selectNewcomers,
    (newcomers): Newcomer[] => {
        return newcomers.filter(
            (newcomer) => newcomer.status === ENTITY_STATUS.approved
        );
    }
);

export const selectArchivedNewcomers = createSelector(
    selectNewcomers,
    (newcomers): Newcomer[] => {
        return newcomers.filter(
            (newcomer) => newcomer.status === ENTITY_STATUS.archived
        );
    }
);

export const selectIsFetching = createSelector(
    (state: RootState) => state,
    ({ newcomers }) => newcomers.fetching
);
