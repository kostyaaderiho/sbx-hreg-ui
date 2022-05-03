// @ts-nocheck
import { takeEvery, put, call } from 'redux-saga/effects';

import { recognitionModel } from '~/httpServiceModels/recognition.model';

import {
    addRecognition,
    addRecognitionList,
    updateRecognition,
    updateRecognitionList,
    deleteRecognition,
    fetchRecognitionListStarted,
    fetchRecognitionListFinished,
    RECOGNITION_ACTIONS
} from '.';

// -------------------------------------
// CREATE recognition
// =====================================
function* addRecognitionRequest(action) {
    const { data: recognition } = yield call(
        [recognitionModel, recognitionModel.create],
        action.payload
    );
    yield put(addRecognition(recognition));
}

export function* watchAddRecognitionRequest() {
    yield takeEvery(RECOGNITION_ACTIONS.addRequest, addRecognitionRequest);
}

// -------------------------------------
// GET recognition
// =====================================
function* getRecognitionRequest(action) {
    const { data: recognition } = yield call(
        [recognitionModel, recognitionModel.get],
        action.payload
    );
    yield put(addRecognition(recognition));
}

export function* watchGetRecognitionRequest() {
    yield takeEvery(RECOGNITION_ACTIONS.getRequest, getRecognitionRequest);
}

// -------------------------------------
// GET LIST recognition
// =====================================
function* getRecognitionListRequest(action) {
    yield put(fetchRecognitionListStarted());

    const { data: recognitions } = yield call(
        [recognitionModel, recognitionModel.getList],
        action.payload
    );

    yield put(fetchRecognitionListFinished());
    yield put(addRecognitionList(recognitions));
}

export function* watchGetRecognitionListRequest() {
    yield takeEvery(
        RECOGNITION_ACTIONS.getListRequest,
        getRecognitionListRequest
    );
}

// -------------------------------------
// UPDATE newcomer
// =====================================
function* updateRecognitionRequest(action) {
    const { data: recognition } = yield call(
        [recognitionModel, recognitionModel.update],
        action.payload
    );
    yield put(
        updateRecognition({
            id: recognition.id,
            changes: recognition
        })
    );
}

export function* watchUpdateRecognitionRequest() {
    yield takeEvery(
        RECOGNITION_ACTIONS.updateRequest,
        updateRecognitionRequest
    );
}

// -------------------------------------
// UPDATE LIST newcomer
// =====================================
function* updateRecognitionListRequest(action) {
    const { data: recognitions } = yield call(
        [recognitionModel, recognitionModel.updateList],
        action.payload
    );
    yield put(
        updateRecognitionList(
            recognitions.map(({ id, ...changes }) => ({
                id,
                changes
            }))
        )
    );
}

export function* watchUpdateRecognitionListRequest() {
    yield takeEvery(
        RECOGNITION_ACTIONS.updateListRequest,
        updateRecognitionListRequest
    );
}

// -------------------------------------
// DELETE recognition
// =====================================
function* deleteRecognitionRequest(action) {
    const { data: recognition } = yield call(
        [recognitionModel, recognitionModel.delete],
        action.payload
    );
    yield put(deleteRecognition(recognition.id));
}

export function* watchDeleteRecognitionRequest() {
    yield takeEvery(
        RECOGNITION_ACTIONS.deleteRequest,
        deleteRecognitionRequest
    );
}
