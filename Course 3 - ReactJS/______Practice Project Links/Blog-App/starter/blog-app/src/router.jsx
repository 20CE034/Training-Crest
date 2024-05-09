import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: Body,
    exact: true,
  },
  {
    path: "/profile/:authodId",
    element: AuthorPage,
    exact: true,
  },
  {
    path: "/post/:postId",
    element: PostPage,
    exact: true,
  },
  {
    path: "/:pageNo",
    element: Body,
    exact: true,
  },
  {
    path: "/MostLikedPost",
    element: MostLikedPost,
    exact: true,
  },
  {
    path: "/MostCommentedPost",
    element: MostCommentedPost,
    exact: true,
  },
]);
