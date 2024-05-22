import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import PostPage from "./components/PostPage";
import Posts from "./components/Posts";
import ErrorPage from "./components/ErrorPage";
import Authors from "./components/Authors";
import Root from "./components/Root";
import BasicFormControl from "./components/CreatePost";
import CreateProfile from "./components/CreateProfile";
import ViewPost from "./components/ViewPost";
import { LoadingProvider } from "./context/LoadingContext";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    exact: true,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/profile/:authorId",
        element: <Profile />,
      },
      {
        path: "/post/:postId",
        element: <PostPage />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/createprofile",
        element: <CreateProfile />,
      },
      {
        path: "/addpost",
        element: <BasicFormControl />,
      },
      {
        path: "/viewpost",
        element: <ViewPost />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <LoadingProvider>
          <RouterProvider router={router} />
        </LoadingProvider>
      </Provider>
    </>
  );
}

export default App;
