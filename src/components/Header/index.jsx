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
            <Typography
              level="h2"
              fontSize="24px"
              fontWeight="700"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
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
                sx={{ my: 2, color: "#231F20", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 1 }}>
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton sx={{ p: 1 }}>
              <DarkModeIcon />
            </IconButton>

            <Tooltip title="RHShoumik">
              <IconButton sx={{ p: 0 }}>
                <Typography sx={{ color: "black", pr: "6px" }}>
                  Hi Rakib
                </Typography>
                <Avatar
                  variant="rounded"
                  alt="Remy Sharp"
                  src="./Assets/Images/romina-farias-BsZ71j4i_m4-unsplash.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
