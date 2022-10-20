import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";

import React, { useEffect, useState } from 'react';
import AdvanceFilter from "./AdvanceFilter";

const Search = ({ totalUser, Users,filterProfiles, setFilterProfiles }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = (searchItem) => {
    const item = searchItem.toLowerCase();
    if (item === "") {
      setFilterProfiles(Users);
    }
    const searchFilter = Users.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.match(item);
    });

    setFilterProfiles(searchFilter);
  };

  const handleFilter = (category, country, gender, social) => {
    const values = { category, country, gender, social };
    const fieldsToCheck = [
      country && "country",
      gender && "gender",
      category && "category",
      social && "social",
    ].filter(Boolean);

    const filteredArr = Users.filter((user) => {
      const matchedUser = fieldsToCheck.every((field) => {
        if (user[field] === values[field]) {
          console.log("matched");
          return field;
        } else {
          return false;
        }
      });
      return matchedUser;
    });
    console.log({ filteredArr });
    setFilterProfiles(filteredArr);
  };
  useEffect(() => {
    handleSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      margin={{ xs: "10px 10px", md: "30px 130px" }}
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: "20px 20px", borderRadius: "8px", background: "#F7F7F8" }}
    >
      <Typography variant="h5">Porfile ({totalUser}) </Typography>

      <Paper
        component="form"
        sx={{
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
      <AdvanceFilter onHandleFilter={handleFilter} />
    </Stack>
  );
};

export default Search