import { DataGrid } from "@mui/x-data-grid";
import { fetchPostsRequest } from "../store/actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const columns = [
  { field: "authorId", headerName: "ID", type: "number", width: 70 },
  { field: "title", headerName: "Title", width: 330 },
  { field: "datePublished", headerName: "Date", width: 230 },
  { field: "numLikes", headerName: "Likes", type: "number", width: 230 },
  { field: "numComments", headerName: "Comments", type: "number", width: 230 },
];

export default function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        sx={{ mx: 12, my: 5 }}
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
