import { call, put, takeEvery } from "redux-saga/effects";
import fetchAPI from "./fetchAPI";
import {
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostsReq,
} from "../store/reducers/postsSlice";
const url = import.meta.env.VITE_API_URL;
// console.log(url);

function* fetchPosts() {
  try {
    const { authors, posts } = yield call(fetchAPI, url);
    // const posts = data.posts.map((post) => ({
    //   ...post,
    //   datePublished: new Date(post.datePublished).toLocaleString(),
    // }));
    const authorMap = new Map(
      authors.map((author) => [author.id.toString(), author])
    );
    // console.log(authorMap);
    const postsWithAuthor = posts.map((post) => {
      const author = authorMap.get(post.authorId.toString());
      return {
        ...post,
        datePublished: new Date(post.datePublished).toLocaleDateString(),
        author: author || {
          id: "Unknown",
          firstName: "Unknown",
          lastName: "Unknown",
        },
      };
    });
    console.log(postsWithAuthor);

    yield put(fetchPostsSuccess(postsWithAuthor));
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
