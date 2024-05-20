import {  put, takeEvery } from "redux-saga/effects";
import {
 
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../store/actions/postsActions";
import db from "../utils/db.json"; // Import your static data

// Worker Saga - Fetching Req

function* fetchPosts() {
  try {
    const posts = db.posts.map((post) => ({
      ...post,
      datePublished: new Date(post.datePublished).toLocaleString(),
    }));
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.toString()));
  }
}

// Watcher Saga - call the above function (watcher) based on action
function* postsSaga() {
  yield takeEvery("FETCH_POSTS_REQ", fetchPosts);
}

export default postsSaga;
