import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AuthorPage from "./components/Profile";
import PostPage from "./components/PostPage";
import MostLikedPost from "./components/MostLikedPost";
import MostCommentedPost from "./components/MostCommentedPost";
import ErrorPage from "./components/ErrorPage";

import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    exact: true,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/profile/:authodId",
        element: <AuthorPage />,
      },
      {
        path: "/post/:postId",
        element: <PostPage />,
      },
      {
        path: "/:pageNo",
        element: <Dashboard />,
      },
      {
        path: "/MostLikedPost",
        element: <MostLikedPost />,
      },
      {
        path: "/MostCommentedPost",
        element: <MostCommentedPost />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
