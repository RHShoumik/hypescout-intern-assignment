import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";

const pages = ["Dashboard", "Campaign", "Hypesocial", "Insights"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" sx={{ background: "#F7F7F8", boxShadow: 0 }}>
      <Container maxWidth="xl" sx={{ p: { xs: "0px 3px", md: "0px 130px" } }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Stack sx={{ flexDirection: "row", textAlign: "center", m: "10px" }}>
            <svg
              width="26"
              height="34"
              viewBox="0 0 26 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1436 0.000329379C20.7962 0.000328494 21.4424 0.128497 22.0453 0.377503C22.6481 0.626508 23.1957 0.991463 23.6568 1.45149C24.1178 1.91151 24.4833 2.45758 24.7323 3.05844C24.9813 3.6593 25.1089 4.30317 25.1079 4.95321V28.257C25.135 28.9238 25.0267 29.5892 24.7892 30.2132C24.5518 30.8373 24.1902 31.4071 23.7262 31.8884C23.2622 32.3698 22.7053 32.7528 22.0889 33.0144C21.4726 33.276 20.8095 33.4109 20.1395 33.4109C19.4696 33.4109 18.8065 33.276 18.1902 33.0144C17.5738 32.7528 17.0169 32.3698 16.5529 31.8884C16.0888 31.4071 15.7273 30.8373 15.4898 30.2132C15.2524 29.5892 15.144 28.9238 15.1712 28.257V17.6495L15.1303 17.723C14.4949 18.8646 13.7486 19.9414 12.9021 20.9379C11.5514 22.4759 9.961 23.7874 8.1918 24.8218V26.8046C8.1918 27.8866 7.76027 28.9244 6.99214 29.6895C6.22401 30.4546 5.1822 30.8844 4.0959 30.8844C3.0096 30.8844 1.96779 30.4546 1.19966 29.6895C0.431531 28.9244 0 27.8866 0 26.8046L0 12.9333C0 11.8513 0.431531 10.8136 1.19966 10.0484C1.96779 9.28333 3.0096 8.85349 4.0959 8.85349C5.1822 8.85349 6.22401 9.28333 6.99214 10.0484C7.76027 10.8136 8.1918 11.8513 8.1918 12.9333V23.9243C9.61361 22.8644 10.8745 21.6057 11.9354 20.1872C13.5713 17.9556 14.6598 15.3735 15.1139 12.6477V4.95321C15.1138 4.29795 15.2443 3.6492 15.4978 3.04454C15.7512 2.43987 16.1226 1.89132 16.5905 1.43064C17.0583 0.969972 17.6132 0.606344 18.2232 0.360824C18.8331 0.115304 19.4858 -0.00722711 20.1436 0.000329379Z"
                fill="#231F20"
              />
            </svg>

            <Typography
              level="h2"
              fontSize="24px"
              fontWeight="700"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#231F20",
                textDecoration: "none",
              }}
            >
              hypescout
            </Typography>
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`/${page.toLocaleLowerCase()}`}
                sx={{ my: 2, color: "#231F20", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack
            sx={{
              flexDirection: "row",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 1 }}>
                <NotificationsNoneIcon />
              </IconButton>
              <IconButton sx={{ p: 1 }}>
                <DarkModeIcon />
              </IconButton>

              <Tooltip title="RHShoumik">
                <IconButton sx={{ p: 0, backgroundColor: "transparent" }}>
                  <Typography
                    display={{ xs: "none", md: "flex" }}
                    sx={{ color: "black", pr: "6px" }}
                  >
                    Hi, Rakib
                  </Typography>
                  <Avatar
                    variant="rounded"
                    alt="Remy Sharp"
                    src="./Assets/Images/romina-farias-BsZ71j4i_m4-unsplash.jpg"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
