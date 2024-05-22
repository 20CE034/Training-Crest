import { call, put, takeEvery } from 'redux-saga/effects';
import fetchAPI from './fetchAPI';
import { fetchAuthorsSuccess, fetchAuthorsFailure, fetchAuthorsReq } from '../store/reducers/authorsSlice';
const url = import.meta.env.VITE_API_URL;

function* fetchAuthors() {
    try {
        const data = yield call(fetchAPI, url);
        yield put(fetchAuthorsSuccess(data.authors));
    } catch (error) {
        let errorMessage = "An unexpected error occurred.";

        if (error.message.includes("HTTP error!")) {
            errorMessage = `Error: ${error.message}`;
        } else if (error.message === "Failed to fetch") {
            errorMessage = "Error: No response received from the server.";
        } else {
            errorMessage = `Error: ${error.message}`;
        }

        yield put(fetchAuthorsFailure(errorMessage));
    }
}

export default function* watchFetchAuthors() {
    yield takeEvery(fetchAuthorsReq.type, fetchAuthors);
}
