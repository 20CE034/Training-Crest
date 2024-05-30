import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useSearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";

const Searchx = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  fontWeight: 400,
  width: "100%",
  backgroundColor: alpha(theme.palette.common.white, 0.3), // Adding background color
  borderRadius: theme.shape.borderRadius, // Adding border radius
  border: `0px solid ${alpha(theme.palette.primary.main, 0.5)}`, // Adding a border
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 3, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderBottomRightRadius: "30px",
  },
}));

export default function Search() {
  const { searchTerm, setSearchTerm } = useSearchContext();
  var SearchSet = "";
  const location = useLocation();
  const currPath = location.pathname;

  if (currPath == "/authors") {
    SearchSet = "Searching Authors...";
  } else if (currPath == "/posts") {
    SearchSet = "Searching Posts...";
  }

  const handleSearchChange = (e) => {
    e.preventDefault();
    console.log("Changed..");
    setSearchTerm(e.target.value);
  };

  return (
    <Searchx>
      <SearchIconWrapper className="raleway">
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        variant="filled"
        type="text"
        className="raleway"
        placeholder={SearchSet}
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        inputProps={{ "aria-label": "search" }}
      />
    </Searchx>
  );
}
