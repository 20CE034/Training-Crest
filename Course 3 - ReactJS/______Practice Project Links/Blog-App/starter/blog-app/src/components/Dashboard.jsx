import { useState } from "react";
import db from "../utils/db2.json";
import AspectRatio from "@mui/joy/AspectRatio";
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import PaginationItem from "@mui/material/PaginationItem";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useSearchContext } from "./SearchContext";

const itemsPerPage = 8; // Display fewer items on the first page

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchTerm } = useSearchContext();

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

  const filteredAuthors = Object.values(db.authors).filter(
    (author) =>
      author.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAuthors.length / itemsPerPage);

  const startIndex = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredAuthors.slice(startIndex, endIndex);

  console.log(searchTerm);
  console.log(currentData);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {currentData.map((author) => (
          <Card
            key={author.id}
            variant="outlined"
            orientation="horizontal"
            sx={{
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img
                key={author.id}
                // src={`https://xsgames.co/randomusers/avatar.php?g=pixel/30.jpg`} // Append user id as query parameter to ensure unique image for each user
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&user=${author.id}`} // Append user id as query parameter to ensure unique image for each user
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent>
              <Typography
                className="raleway"
                level="title-lg"
                id="card-description"
              >
                <a style={{ fontSize: "40px", margin: "5px" }}>
                  {" "}
                  {author.firstName} {author.lastName}
                </a>
              </Typography>

              <Chip
                variant="outlined"
                color="primary"
                size="l"
                // sx={{ bottom: 0 }}
              >
                <Link
                  to={`/profile/${author.id}`}
                  style={{
                    fontFamily: "Raleway",
                    textDecoration: "none",
                    color: "inherit",
                    margin: "10px",
                  }}
                >
                  View Profile
                </Link>
              </Chip>
            </CardContent>
          </Card>
        ))}
      </div>
      <Stack
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          renderItem={(item) => (
            <PaginationItem {...item} className="raleway-m" />
          )}
        />
      </Stack>
    </>
  );
}
