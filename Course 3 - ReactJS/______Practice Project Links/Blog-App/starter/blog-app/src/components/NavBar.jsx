import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function NavBar() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            className="raleway"
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontSize: "40px",
              fontWeight: 1000,
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              {" "}
              Blog App
            </Link>
          </Typography>
          <Typography
            className="raleway"
            variant="h7"
            noWrap
            component="div"
            sx={{
              fontWeight: 400,
              mx: 2,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              {" "}
              Authors
            </Link>
          </Typography>
          <Typography
            className="raleway"
            variant="h7"
            noWrap
            component="div"
            sx={{
              fontWeight: 400,
              mx: 2,
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              {" "}
              Most Liked
            </Link>
          </Typography>
          <Typography
            className="raleway"
            variant="h7"
            noWrap
            component="div"
            sx={{ fontWeight: 400, flexGrow: 6, mx: 2 }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              {" "}
              Most Commented
            </Link>
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
