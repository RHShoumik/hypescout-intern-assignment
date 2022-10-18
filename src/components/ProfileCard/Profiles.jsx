import { Box, Grid, Pagination, Stack } from '@mui/material';
import React from 'react';
import ProfileCard from './index';


const Profiles = ({ users }) => {



  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={{ xs: "10px 20px", md: "15px 130px" }}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, md: 9 }}>
          {users.map((user) => (
            <Grid item xs={1} md={3} key={user.id}>
              <ProfileCard info={user} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Stack sx={{alignItems:"center", p : "10px 0px 50px 0px"}} >
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
}

export default Profiles