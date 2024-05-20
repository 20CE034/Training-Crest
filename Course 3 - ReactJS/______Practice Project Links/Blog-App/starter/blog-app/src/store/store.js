import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

// const store = configureStore(reducers, applyMiddleware(sagaMiddleware));
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: true,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
