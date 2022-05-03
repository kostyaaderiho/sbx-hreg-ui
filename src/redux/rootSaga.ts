import { all } from 'redux-saga/effects';

import {
    watchUpdateNewcomerListRequest,
    watchGetNewcomerListRequest,
    watchUpdateNewcomerRequest,
    watchDeleteNewcomerRequest,
    watchGetNewcomerRequest,
    watchAddNewcomerRequest
} from './newcomers/saga';
import {
    watchUpdateRecognitionListRequest,
    watchGetRecognitionListRequest,
    watchUpdateRecognitionRequest,
    watchDeleteRecognitionRequest,
    watchGetRecognitionRequest,
    watchAddRecognitionRequest
} from './recognitions/saga';

export default function* rootSaga() {
    yield all([
        watchUpdateNewcomerListRequest(),
        watchGetNewcomerListRequest(),
        watchDeleteNewcomerRequest(),
        watchUpdateNewcomerRequest(),
        watchGetNewcomerRequest(),
        watchAddNewcomerRequest(),

        watchUpdateRecognitionListRequest(),
        watchGetRecognitionListRequest(),
        watchDeleteRecognitionRequest(),
        watchUpdateRecognitionRequest(),
        watchGetRecognitionRequest(),
        watchAddRecognitionRequest()
    ]);
}
