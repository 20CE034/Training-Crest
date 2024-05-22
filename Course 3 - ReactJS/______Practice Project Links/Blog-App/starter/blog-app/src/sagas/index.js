import { all } from "redux-saga/effects";
import watchFetchPosts from "./postsSaga";
import watchFetchAuthors from "./authorsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchAuthors(),
  ]);
}
