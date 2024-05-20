export const fetchPostsRequest = () => ({
  type: "FETCH_POSTS_REQ",
});

export const fetchPostsSuccess = (posts) => ({
  type: "FETCH_POSTS_SUCC",
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: "FETCH_POSTS_FAIL",
  payload: error,
});
