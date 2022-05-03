import { createSlice } from '@reduxjs/toolkit';

import { EntityStatus } from '~/types/entity';

const initialState: {
    status: EntityStatus | '';
    search: string;
} = {
    status: '',
    search: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload;
        },
        setSearch(state, action) {
            state.search = action.payload;
        }
    }
});

export const { setStatus, setSearch } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
