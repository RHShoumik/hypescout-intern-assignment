import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems={{ xs: "center", md: "flex-start" }}
      sx={{
        background: "#F7F7F8",
        p: { xs: "60px 10px 30px 10px", md: "60px 130px 0px 130px" },
      }}
    >
      <Stack
        sx={{ flexDirection: "row", mb: "20px" }}
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <svg
          width="26"
          height="34"
          viewBox="0 0 26 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          pt="2px"
          mr="6px"
        >
          <path
            d="M20.1436 0.000329379C20.7962 0.000328494 21.4424 0.128497 22.0453 0.377503C22.6481 0.626508 23.1957 0.991463 23.6568 1.45149C24.1178 1.91151 24.4833 2.45758 24.7323 3.05844C24.9813 3.6593 25.1089 4.30317 25.1079 4.95321V28.257C25.135 28.9238 25.0267 29.5892 24.7892 30.2132C24.5518 30.8373 24.1902 31.4071 23.7262 31.8884C23.2622 32.3698 22.7053 32.7528 22.0889 33.0144C21.4726 33.276 20.8095 33.4109 20.1395 33.4109C19.4696 33.4109 18.8065 33.276 18.1902 33.0144C17.5738 32.7528 17.0169 32.3698 16.5529 31.8884C16.0888 31.4071 15.7273 30.8373 15.4898 30.2132C15.2524 29.5892 15.144 28.9238 15.1712 28.257V17.6495L15.1302 17.723C14.4949 18.8646 13.7486 19.9414 12.9021 20.9379C11.5514 22.4759 9.961 23.7874 8.1918 24.8218V26.8046C8.1918 27.8866 7.76027 28.9244 6.99214 29.6895C6.22401 30.4546 5.1822 30.8844 4.0959 30.8844C3.0096 30.8844 1.96779 30.4546 1.19966 29.6895C0.431531 28.9244 0 27.8866 0 26.8046L0 12.9333C0 11.8513 0.431531 10.8136 1.19966 10.0484C1.96779 9.28333 3.0096 8.85349 4.0959 8.85349C5.1822 8.85349 6.22401 9.28333 6.99214 10.0484C7.76027 10.8136 8.1918 11.8513 8.1918 12.9333V23.9243C9.61361 22.8644 10.8745 21.6057 11.9354 20.1872C13.5713 17.9556 14.6598 15.3735 15.1139 12.6477V4.95321C15.1138 4.29795 15.2443 3.6492 15.4978 3.04454C15.7512 2.43987 16.1226 1.89132 16.5905 1.43064C17.0583 0.969972 17.6132 0.606344 18.2232 0.360824C18.8331 0.115304 19.4858 -0.00722711 20.1436 0.000329379Z"
            fill="#231F20"
          />
        </svg>
        <Typography level="h2" fontSize="26px" fontWeight="500" sx={{ ml: 1 }}>
          hypescout
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Stack
          width={{ xs: "100%", md: "25%" }}
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Typography
            level="h5"
            fontSize="16px"
            fontWeight="400"
            textAlign={{ xs: "center", md: "left" }}
            color="#637381"
          >
            A data-driven influencer marketing <br /> platform.
          </Typography>
          <Box sx={{ display: "flex", p: "50px 0px 25px 0px" }}>
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

        <Stack
          width={{ xs: "100%", md: "75%" }}
          flexDirection="row"
          textAlign="left"
        >
          <Stack
            width={{ xs: "50%", md: "40%" }}
            pl={{ xs: "50px", md: "80px" }}
          >
            <Typography level="h5" fontSize="18px" fontWeight="600" mb="8px">
              Company
            </Typography>
            <Stack>
              <Typography color="#637381">About Us</Typography>
              <Typography color="#637381">Careers</Typography>
              <Typography color="#637381">Case Study</Typography>
              <Typography color="#637381">Blog</Typography>
              <Typography color="#637381">Contact Us</Typography>
            </Stack>
          </Stack>
          <Stack
            width={{ xs: "50%", md: "60%" }}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
            }}
          >
            <Stack>
              <Typography level="h5" fontSize="18px" fontWeight="600" mb="8px">
                Influencer
              </Typography>
              <Stack>
                <Typography color="#637381">Join as Influencer</Typography>
                <Typography color="#637381">HypeSocial</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography level="h5" fontSize="18px" fontWeight="600" mb="8px">
                Advertiser
              </Typography>
              <Stack>
                <Typography color="#637381">Join as Advertiser</Typography>
                <Typography color="#637381">HypeLink</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ pt: "20px", alignItems: "center" }}
      >
        <Stack pb="20px">
          <Typography color="#637381">
            <Box component="span" fontWeight="900" color="#231F20">
              © Hypescout 2022.
            </Box>
            {` All rights reserved`}
          </Typography>
        </Stack>
        <Stack pb="20px" sx={{ flexDirection: "row" }}>
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