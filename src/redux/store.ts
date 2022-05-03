import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { recognitionsReducer } from './recognitions';
import { newcomersReducer } from './newcomers';
import { filterReducer } from './filter';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        recognitions: recognitionsReducer,
        newcomers: newcomersReducer,
        filter: filterReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
