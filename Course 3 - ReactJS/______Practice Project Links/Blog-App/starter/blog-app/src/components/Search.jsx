import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useSearchContext } from "../context/SearchContext";

const Searchx = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
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
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),  borderBottomRightRadius: "30px",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));
export default function Search() {
  const { searchTerm, setSearchTerm } = useSearchContext();

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
        type="text"
        className="raleway"
        placeholder="Search…"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e)}
        inputProps={{ "aria-label": "search" }}
      />
    </Searchx>
  );
}
