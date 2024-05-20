const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_REQ":
      return { ...state, loading: true, error: null };
    case "FETCH_POSTS_SUCC":
      return { ...state, loading: false, posts: action.payload };
    case "FETCH_POSTS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
// export default postsReducer;
