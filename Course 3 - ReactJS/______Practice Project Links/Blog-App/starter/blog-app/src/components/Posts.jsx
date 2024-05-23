import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import { fetchPostsReq } from "../store/reducers/postsSlice";
import GradientCircularProgress from "./GradientCircularProgress";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Typography } from "@mui/material";
import { useSearchContext } from "../context/SearchContext";

const columns = [
  {
    field: "authorId",
    headerName: "ID",
    type: "number",
    width: 70,
    headerClassName: "theme-header",
  },
  {
    field: "profile",
    headerName: "Profile",
    width: 70,
    renderCell: (params) => (
      <Link to={`/profile/${params.row.authorId}`}>
        <img
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${params.row.authorId}`}
          alt="Profile"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderStyle: "solid",
            borderColor: "#78a8f5",
            borderRadius: "50%",
          }}
          loading="lazy"
        />
      </Link>
    ),
    headerClassName: "theme-header",
  },
  {
    field: "title",
    headerName: "Title",
    width: 330,
    headerClassName: "theme-header",
  },
  {
    field: "numLikes",
    headerName: "Likes",
    type: "number",
    width: 130,
    headerClassName: "theme-header",
  },
  {
    field: "numComments",
    headerName: "Comments",
    type: "number",
    width: 140,
    headerClassName: "theme-header",
  },
  {
    field: "datePublished",
    headerName: "Date",
    width: 560,
    headerClassName: "theme-header",
  },
];

export default function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const { searchTerm } = useSearchContext(); // Use the search context

  const [sortChoice, setSortChoice] = useState("");

  useEffect(() => {
    dispatch(fetchPostsReq());
  }, [dispatch]);

  if (loading) return <GradientCircularProgress />;
  if (error) return <div>Error: {error}</div>;

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setSortChoice(event.target.value);
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
          bgcolor: "#78a8f5",
          boxShadow: 29,
          borderTopRightRadius: "20px"
        }}>
          <Toolbar variant="dense" sx={{ borderColor: "white" }}>
            <Box sx={{ minWidth: 120, color: "white", borderColor: "white" }}>
              <FormControl
                sx={{
                  m: 2,
                  minWidth: 120,
                  color: "white",
                  borderColor: "white",
                }}
                size="small"
              >
                <InputLabel
                  id="demo-select-big-label"
                  sx={{
                    fontFamily: "Raleway",
                    borderColor: "white",
                  }}
                >
                  Sort By
                </InputLabel>
                <Select
                  className="raleway"
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={sortChoice}
                  label="sortChoice"
                  onChange={handleChange}
                  sx={{
                    borderWidth: 2.5,
                    borderColor: "white",
                    fontFamily: "Raleway",
                    fontWeight: "bolder",
                    "&:hover": { borderWidth: 2.5, borderColor: "#c4dbff" },
                    my: 0.2,
                  }}
                >
                  <MenuItem className="raleway" value={10}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "5px",
                      }}
                    >
                      <ThumbUpOffAltIcon style={{ verticalAlign: "middle" }} />
                      <Typography
                        style={{
                          fontFamily: "Raleway",
                          marginLeft: "0.5rem",
                          verticalAlign: "middle",
                        }}
                      >
                        Most Liked
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="raleway" value={20}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "5px",
                      }}
                    >
                      <CommentIcon style={{ verticalAlign: "middle" }} />
                      <Typography
                        style={{
                          fontFamily: "Raleway",
                          marginLeft: "0.5rem",
                          verticalAlign: "middle",
                        }}
                      >
                        Most Commented
                      </Typography>
                    </div>
                  </MenuItem>
                  <MenuItem className="raleway" value={30}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "5px",
                      }}
                    >
                      <RestartAltIcon style={{ verticalAlign: "middle" }} />
                      <Typography
                        style={{
                          fontFamily: "Raleway",
                          marginLeft: "0.5rem",
                          verticalAlign: "middle",
                        }}
                      >
                        Reset
                      </Typography>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Link to="/addpost">
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: 2.5,
                  borderColor: "white",
                  fontFamily: "Raleway",
                  fontWeight: "bolder",
                  color: "white",
                  "&:hover": { borderWidth: 2.5, borderColor: "#c4dbff" },
                  my: 0.2,
                }}
                startIcon={<AddCircleOutlineIcon />}
              >
                Create Post{" "}
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        style={{
          margin: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DataGrid
          sx={{
            "& .theme-header": {
              backgroundColor: "#d7e4f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
          sortModel={[
            {
              field:
                sortChoice === 10
                  ? "numLikes"
                  : sortChoice === 20
                    ? "numComments"
                    : "",
              sort: "desc",
            },
          ]}
          className="raleway"
          rows={filteredPosts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          disableColumnMenu
          disableColumnFilter
          disableColumnSorting
        />
      </Box>
    </div>
  );
}
