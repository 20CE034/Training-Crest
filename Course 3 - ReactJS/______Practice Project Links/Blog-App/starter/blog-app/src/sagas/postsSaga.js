import { call, put, takeEvery } from 'redux-saga/effects';
import fetchAPI from "./fetchAPI"
import { fetchPostsSuccess, fetchPostsFailure, fetchPostsReq } from '../store/reducers/postsSlice';
const url = import.meta.env.VITE_API_URL;
// console.log(url);

function* fetchPosts() {
  try {
    const data = yield call(fetchAPI, url);
    const posts = data.posts.map((post) => ({
      ...post,
      datePublished: new Date(post.datePublished).toLocaleString(),
    }));

    yield put(fetchPostsSuccess(posts));
  } catch (error) {

    let errorMessage = "An unexpected error occurred.";
    if (error.message.includes("HTTP error!")) {
      errorMessage = `Error: ${error.message}`;
    } else if (error.message === "Failed to fetch") {
      errorMessage = "Error: No response received from the server.";
    } else {
      errorMessage = `Error: ${error.message}`;
    }

    yield put(fetchPostsFailure(errorMessage));
  }
}

export default function* watchFetchPosts() {
  yield takeEvery(fetchPostsReq.type, fetchPosts);
}
