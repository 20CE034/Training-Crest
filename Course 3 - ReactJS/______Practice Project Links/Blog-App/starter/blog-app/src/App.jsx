import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import AuthorPage from "./components/AuthorPage";
import PostPage from "./components/PostPage";
import MostLikedPost from "./components/MostLikedPost";
import MostCommentedPost from "./components/MostCommentedPost";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    exact: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/:authodId",
    element: <AuthorPage />,
    exact: true,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
    exact: true,
  },
  {
    path: "/:pageNo",
    element: <Body />,
    exact: true,
  },
  {
    path: "/MostLikedPost",
    element: <MostLikedPost />,
    exact: true,
  },
  {
    path: "/MostCommentedPost",
    element: <MostCommentedPost />,
    exact: true,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <BottomBar />
    </>
  );
}

export default App;
