import { Box, Grid } from '@mui/material';
import React from 'react';
import ProfileCard from './index';

const Profiles = (props) => {
    const Users = props.allProfiles;
  return (
    <Box sx={{ flexGrow: 1 }} padding={{ xs: "10px 20px", md: "15px 130px" }}>
      <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 1, md: 9 }}>
        {Users.map((user) => (
          <Grid item xs={1} md={3} key={user.id}>
            <ProfileCard info={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Profiles