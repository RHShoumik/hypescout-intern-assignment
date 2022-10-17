import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ScheduleIcon from "@mui/icons-material/Schedule";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import Avater from "../../Assets/Images/avater.jpg";

const ProfileCard = () => {
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card variant="outlined" sx={{ p: "15px", background: "#F7F7F8" }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          sx={{ background: "#F7F7F8", m: "50px 0px" }}
        >
          <Avatar
            alt="Remy Sharp"
            src={Avater}
            sx={{ width: 140, height: 140, mb: "15px" }}
          />
          <Typography
            level="h2"
            fontSize="24px"
            fontWeight="700"
            sx={{ mb: 0.5 }}
          >
            Avater Name
          </Typography>
          <Box sx={{ display: "flex", p: "5px" }}>
            <LocationOnOutlinedIcon sx={{ mr: "6px" }} />
            <Typography>Dhaka Bangladesh</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ScheduleIcon sx={{ mr: "6px" }} />
            <Typography>Joined On: july 26th, 2022</Typography>
          </Box>
          <Box sx={{ display: "flex", p: "15px 5px" }}>
            <FacebookIcon sx={{ p: "5px 8px" }} />
            <InstagramIcon sx={{ p: "5px 8px" }} />
            <LinkedInIcon sx={{ p: "5px 8px" }} />
            <TwitterIcon sx={{ p: "5px 8px" }} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Stack
              sx={{
                border: "0.5px dashed #637381",
                borderRadius: "3px",
                p: "8px 10px",
                m: "0px 10px",
              }}
            >
              <Typography level="h4" sx={{ fontWeight: "bold" }}>
                12k
              </Typography>
              <Typography level="h4" sx={{}}>
                Followers
              </Typography>
            </Stack>
            <Stack
              sx={{
                border: "0.5px dashed #637381",
                borderRadius: "3px",
                p: "8px 10px",
                m: "0px 10px",
              }}
            >
              <Typography level="h4" sx={{ fontWeight: "bold" }}>
                Fashion
              </Typography>
              <Typography level="h4" sx={{}}>
                Categories
              </Typography>
            </Stack>
            <Stack
              sx={{
                border: "0.5px dashed #637381",
                borderRadius: "3px",
                p: "8px 10px",
                m: "0px 10px",
              }}
            >
              <Typography level="h4" sx={{ fontWeight: "bold" }}>
                Male
              </Typography>
              <Typography level="h4" sx={{}}>
                Gender
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}

export default ProfileCard