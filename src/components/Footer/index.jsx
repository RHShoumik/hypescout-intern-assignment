import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: "#F7F7F8", p: "60px 130px 30px 130px" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack sx={{width:"25%"}}>
          <Stack sx={{ flexDirection: "row", textAlign: "center", m: "10px" }}>
            <Avatar
              alt="Site Icon"
              variant="square"
              src="/Assets/Images/logo.png"
              sx={{
                width: "auto",
                height: "25px",
                backgroundSize: "cover",
                alignItems: "center",
                pt: "2px",
                mr: "6px",
              }}
            />
            <Typography level="h2" fontSize="24px" fontWeight="700">
              hypescout
            </Typography>
          </Stack>
          <Typography
            level="h5"
            fontSize="14px"
            fontWeight="400"
            sx={{ textAlign: "left" }}
          >
            A data-driven influencer marketing 
            platform.
          </Typography>
          <Box sx={{ display: "flex", p: "5px 5px" }}>
            <Link href="#" target="_blank">
              <FacebookIcon sx={{ p: "5px 8px" }} />
            </Link>
            <Link href="#" target="_blank">
              <InstagramIcon sx={{ p: "5px 8px" }} />
            </Link>
            <Link href="#" target="_blank">
              <LinkedInIcon sx={{ p: "5px 8px" }} />
            </Link>
            <Link href="#" target="_blank">
              <TwitterIcon sx={{ p: "5px 8px" }} />
            </Link>
          </Box>
        </Stack>
        <Stack xs={{width : "25%"}}>
          <Typography level="h5" fontSize="16px" fontWeight="600">
            Company
          </Typography>
          <Stack>
            <Typography>About Us</Typography>
            <Typography>Careers</Typography>
            <Typography>Case Study</Typography>
            <Typography>Blog</Typography>
            <Typography>Contact Us</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-around", width: "50%" }}>
          <Stack>
            <Typography level="h5" fontSize="16px" fontWeight="600">
              Influencer
            </Typography>
            <Stack>
              <Typography>Join as Influencer</Typography>
              <Typography>HypeSocial</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography level="h5" fontSize="16px" fontWeight="600">
              Advertiser
            </Typography>
            <Stack>
              <Typography>Join as Advertiser</Typography>
              <Typography>HypeLink</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          pt: "20px",
        }}
      >
        <Stack>
          <Typography>© Hypescout 2022. All rights reserved</Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row" }}>
          <Typography sx={{ textDecoration: "none" }}>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#637381", p: "0px 15px" }}
            >
              Terms & Conditions
            </Link>
          </Typography>
          <Typography sx={{ textDecoration: "none" }}>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#637381", p: "0px 15px" }}
            >
              Privacy
            </Link>
          </Typography>
          <Typography sx={{ textDecoration: "none" }}>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#637381", p: "0px 15px" }}
            >
              Sitemap
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Footer