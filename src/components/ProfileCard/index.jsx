import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React from "react";

const ProfileCard = (props) => {
  const {
    name,
    img,
    city,
    country,
    social,
    followers,
    category,
    gender,
    joinedDate,
  } = props.info;
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
            src={img}
            sx={{ width: 140, height: 140, mb: "15px" }}
          />
          <Typography
            level="h2"
            fontSize="24px"
            fontWeight="700"
            sx={{ mb: 0.5 }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", p: "5px" }}>
            <LocationOnOutlinedIcon sx={{ mr: "6px" }} />
            <Typography>{`${city} ${country}`}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ScheduleIcon sx={{ mr: "6px" }} />
            <Typography>Joined On: {joinedDate}</Typography>
          </Box>
          <Box sx={{ display: "flex", p: "15px 5px" }}>
            <Link href={social.facebook} target="_blank">
              <FacebookIcon sx={{ p: "5px 8px", color: "#564FB1" }} />
            </Link>
            <Link href={social.instagram} target="_blank">
              <InstagramIcon sx={{ p: "5px 8px", color: "#564FB1" }} />
            </Link>
            <Link href={social.linkedIn} target="_blank">
              <LinkedInIcon sx={{ p: "5px 8px", color: "#564FB1" }} />
            </Link>
            <Link href={social.twitter} target="_blank">
              <TwitterIcon sx={{ p: "5px 8px", color: "#564FB1" }} />
            </Link>
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
              <Typography
                level="h4"
                sx={{ fontWeight: "bold", color: "#564FB1" }}
              >
                {followers}
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
              <Typography
                level="h4"
                sx={{ fontWeight: "bold", color: "#564FB1" }}
              >
                {category}
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
              <Typography
                level="h4"
                sx={{ fontWeight: "bold", color: "#564FB1" }}
              >
                {gender}
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
};

export default ProfileCard;
