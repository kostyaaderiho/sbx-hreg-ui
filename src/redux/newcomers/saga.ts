// @ts-nocheck
import { takeEvery, put, call } from 'redux-saga/effects';

import { Newcomer } from '~/types/newcomer';
import { newcomerModel } from '~/httpServiceModels/newcomer.model';

import {
    fetchNewcomerListStarted,
    fetchNewcomerListFinished,
    addNewcomer,
    updateNewcomer,
    updateNewcomerList,
    deleteNewcomer,
    NEWCOMER_ACTIONS,
    addNewcomerList
} from './';

// -------------------------------------
// CREATE newcomer
// =====================================
function* addNewcomerRequest(action) {
    const { data: newcomer } = yield call(
        [newcomerModel, newcomerModel.create],
        action.payload
    );

    yield put(addNewcomer(newcomer));
}

export function* watchAddNewcomerRequest() {
    yield takeEvery(NEWCOMER_ACTIONS.addRequest, addNewcomerRequest);
}

// -------------------------------------
// GET newcomer
// =====================================
function* getNewcomerRequest(action) {
    const { response: newcomer } = yield call(
        [newcomerModel, newcomerModel.get],
        action.payload
    );
    yield put(addNewcomer(newcomer));
}

export function* watchGetNewcomerRequest() {
    yield takeEvery(NEWCOMER_ACTIONS.getRequest, getNewcomerRequest);
}

// -------------------------------------
// GET LIST newcomer
// =====================================
function* getNewcomerListRequest(action) {
    yield put(fetchNewcomerListStarted());

    const { data: newcomers } = yield call(
        [newcomerModel, newcomerModel.getList],
        action.payload
    );

    yield put(fetchNewcomerListFinished());
    yield put(addNewcomerList(newcomers));
}

export function* watchGetNewcomerListRequest() {
    yield takeEvery(NEWCOMER_ACTIONS.getListRequest, getNewcomerListRequest);
}

// -------------------------------------
// UPDATE newcomer
// =====================================
function* updateNewcomerRequest(action) {
    const { data: newcomer } = yield call(
        [newcomerModel, newcomerModel.update],
        action.payload
    );

    yield put(
        updateNewcomer({
            id: newcomer.id,
            changes: newcomer
        })
    );
}

export function* watchUpdateNewcomerRequest() {
    yield takeEvery(NEWCOMER_ACTIONS.updateRequest, updateNewcomerRequest);
}

// -------------------------------------
// UPDATE LIST newcomer
// =====================================
function* updateNewcomerListRequest(action) {
    const { data: newcomers }: { data: Newcomer[] } = yield call(
        [newcomerModel, newcomerModel.updateList],
        action.payload
    );

    yield put(
        updateNewcomerList(
            newcomers.map(({ id, ...changes }) => ({
                id,
                changes
            }))
        )
    );
}

export function* watchUpdateNewcomerListRequest() {
    yield takeEvery(
        NEWCOMER_ACTIONS.updateListRequest,
        updateNewcomerListRequest
    );
}

// -------------------------------------
// DELETE newcomer
// =====================================
function* deleteNewcomerRequest(action) {
    const { data: newcomer } = yield call(
        [newcomerModel, newcomerModel.delete],
        action.payload
    );

    yield put(deleteNewcomer(newcomer.id));
}

export function* watchDeleteNewcomerRequest() {
    yield takeEvery(NEWCOMER_ACTIONS.deleteRequest, deleteNewcomerRequest);
}
