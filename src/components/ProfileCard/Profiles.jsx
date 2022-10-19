import { Box, Grid, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import ProfileCard from './index';
import usePagination from "./Pagination";


const Profiles = ({ users }) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(users.length / PER_PAGE);
  const _DATA = usePagination(users, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={{ xs: "10px 20px", md: "15px 130px" }}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, md: 9 }}>
          {_DATA.currentData().map((user) => (
            <Grid item xs={1} md={3} key={user.id}>
              <ProfileCard info={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack sx={{ alignItems: "center", p: "10px 0px 50px 0px" }}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </>
  );
}

export default Profiles