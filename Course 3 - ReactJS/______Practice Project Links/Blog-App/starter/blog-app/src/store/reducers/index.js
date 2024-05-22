import { combineReducers } from "redux";
import authorsReducer from "./authorsSlice";
import postsReducer from "./postsSlice";

const reducers = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
});
export default reducers;
