import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";

import React, { useEffect, useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const { onSearch } = props;

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    onSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      margin={{ xs: "10px 20px", md: "30px 130px" }}
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: "20px 80px", borderRadius: "8px", background: "#F7F7F8" }}
    >
      <Typography variant="h5">Porfile (100) </Typography>

      <Paper
        component="form"
        sx={{
          p: "15px, 279px, 15px, 15px",
          display: "flex",
          alignItems: "center",
          flex: 1,
          boxShadow: "none",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ flex: 1 }}
          value={searchText}
          onChange={handleChange}
          variant="outlined"
          placeholder="Search Profile"
        />
      </Paper>

      <Button
        sx={{ p: "25px, 15px", background: "#564FB1" }}
        variant="contained"
        startIcon={
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.45645V2.5C1 1.67157 1.67157 1 2.5 1H17.5C18.3284 1 19 1.67157 19 2.5V4.45645C19 5.11829 18.7086 5.74656 18.2034 6.17407L12.677 10.8502C12.5648 10.9452 12.5 11.0848 12.5 11.2319V17.7169C12.5 17.8925 12.4079 18.0553 12.2572 18.1457L8.25725 20.5457C7.92399 20.7456 7.5 20.5056 7.5 20.1169V11.2319C7.5 11.0848 7.43525 10.9452 7.32297 10.8502L1.79663 6.17407C1.29139 5.74656 1 5.11829 1 4.45645Z"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        }
      >
        Advance Filter
      </Button>
    </Stack>
  );
}

export default Search