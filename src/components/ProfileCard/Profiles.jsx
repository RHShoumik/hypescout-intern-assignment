import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProfileCard from './index';
import Pagination from "./Pagination";


const Profiles = ({ users }) => {
  console.log(users);
  const [page, setPage] = useState(1);
  const totalPage = parseInt(users.length / 6);
  console.log(totalPage);
  const [usersSlice, setUsersSlice] = useState(users);
  const onPrev = () => {
    setPage((prev) => prev - 1);
  };
  const onNext = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    const start = page * 6 - 6;
    const end = start + 6;

    const filtered = users.splice(start, end);
    console.log(filtered);
    setUsersSlice(filtered);

  }, [page])


  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={{ xs: "10px 20px", md: "15px 130px" }}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, md: 9 }}>
          {usersSlice.map((user) => (
            <Grid item xs={1} md={3} key={user.id}>
              <ProfileCard info={user} />
            </Grid>
          ))}
          
        </Grid>
      </Box>
      <Pagination page={page} onPrev={ onPrev} onNext={onNext} totalPage={totalPage} />
    </>
  );
}

export default Profiles