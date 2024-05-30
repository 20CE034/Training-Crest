import React, { useState, useEffect } from "react";
import "../../css/NavBar.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Search from "../Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  // Listen to changes in location and update showSearch state accordingly
  useEffect(() => {
    setShowSearch(location.pathname === "/authors" || location.pathname === "/posts");
  }, [location]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        margin: 0,
        backgroundColor: "#c4dbff",
      }}
    >
      <AppBar
        className="appbar-background"
        position="static"
        sx={{ borderBottomRightRadius: "60px", borderBottomLeftRadius: "0px" }}
      >
        <Toolbar className="app-container">
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
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              Blog Gobble
            </Link>
          </Typography>
          <Typography
            className="raleway"
            variant="h7"
            noWrap
            component="div"
            sx={{
              fontWeight: 400,
              mx: 4,
            }}
          >
            <Link
              to="/authors"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Authors
            </Link>
          </Typography>
          <Typography
            className="raleway"
            variant="h7"
            noWrap
            component="div"
            sx={{ fontWeight: 400, mx: 1 }}
          >
            <Link to="/posts" style={{ textDecoration: "none", color: "#FFF" }}>
              Posts
            </Link>
          </Typography>
          <Typography sx={{ mx: 6 }}>
            <div className={`search-container ${showSearch ? 'visible' : ''}`}>
              <Search />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
