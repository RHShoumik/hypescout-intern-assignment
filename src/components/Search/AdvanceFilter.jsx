import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, Slider, Stack, Typography } from "@mui/material";
import React, { useState } from 'react';

const style = {
  position: "absolute",
  top: { xs: "30px", md: "100px" },
  right: { xs: "15px", md: "151px" },
  bgcolor: "white",
  boxShadow: 24,
  width: "fit-content",
  borderRadius: "5px",
  p: 4,
};
const followersCounter = [
  {
    value: 1,
    label: "1K",
  },
  {
    value: 25,
    label: "25k",
  },
  {
    value: 50,
    label: "50k",
  },
  {
    value: 100,
    label: "100k",
  },
  {
    value: 250,
    label: "250k",
  },
  {
    value: 500,
    label: "500k",
  },
  {
    value: 1000,
    label: "1000k",
  },
];
const AdvanceFilter = ({ onHandleFilter, onHandleReset }) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [audience, setAudience] = useState("");
  const [social, setSocial] = useState("");
  const [gender, setGender] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleAudienceChange = (event) => {
    setAudience(event.target.value);
  };
  const handleSocialChange = (event) => {
    setSocial(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  function handleFollowers(value) {
    return `${value}k`;
  }

  const handleReset = () => {
    setCategory("");
    setCountry("");
    setAudience("");
    setSocial("");
    setGender("");
    onHandleReset();
    handleClose();
  };
  const handleApply = () => {
    // console.log(
    //   country + " " + category + " " + audience + " " + social + " " + gender
    // );
    onHandleFilter(category, country, gender, social);
    handleClose();
  };

  return (
    <Stack>
      <Button
        sx={{ p: "50px, 5px", background: "#564FB1" }}
        variant="contained"
        onClick={handleOpen}
        startIcon={
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.45645V2.5C1 1.67157 1.67157 1 2.5 1H17.5C18.3284 1 19 1.67157 19 2.5V4.45645C19 5.11829 18.7086 5.74656 18.2034 6.17407L12.677 10.8502C12.5648 10.9452 12.5 11.0848 12.5 11.2319V17.7169C12.5 17.8925 12.4079 18.0553 12.2572 18.1457L8.25725 20.5457C7.92399 20.7456 7.5 20.5056 7.5 20.1169V11.2319C7.5 11.0848 7.43525 10.9452 7.32297 10.8502L1.79663 6.17407C1.29139 5.74656 1 5.11829 1 4.45645Z"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        }
      >
        Advance Filter
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
              fontWeight="900"
            >
              Filter Options
            </Typography>
          </Box>
          <Box pt="8px">
            <Typography>Influencer’s Indusrty</Typography>
            <FormControl sx={{ mt: 1, minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Options
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Select"
                onChange={handleCategoryChange}
              >
                <MenuItem value="Fashion">Fashion</MenuItem>
                <MenuItem value="Travel">Travel</MenuItem>
                <MenuItem value="Cooking">Cooking</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Streaming">Streaming</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box pt="6px">
            <Typography>Influencer’s Country</Typography>
            <FormControl sx={{ mt: 1, minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Options
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Select"
                onChange={handleCountryChange}
              >
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Pakisthan">Pakisthan</MenuItem>
                <MenuItem value="Afganisthan">Afganisthan</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="America">America</MenuItem>
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box pt="6px">
            <Typography>Audience’s Country</Typography>
            <FormControl sx={{ mt: 1, minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Options
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={audience}
                label="Select"
                onChange={handleAudienceChange}
              >
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Pakisthan">Pakisthan</MenuItem>
                <MenuItem value="Afganisthan">Afganisthan</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="America">America</MenuItem>
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box pt="6px">
            <Typography>Influencer’s Social Media Platform</Typography>
            <FormControl sx={{ mt: 1, minWidth: 260 }}>
              <InputLabel id="demo-simple-select-label">
                Select Options
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={social}
                label="Select"
                onChange={handleSocialChange}
              >
                <MenuItem value="facebook">Facebook</MenuItem>
                <MenuItem value="instagram">Instagram</MenuItem>
                <MenuItem value="linkedIn">LinkedIn</MenuItem>
                <MenuItem value="twitter">Twitter</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box pt="6px">
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Influencer’s Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 260 }}>
            <Slider
              aria-label="Always visible"
              color="secondary"
              defaultValue={250}
              getAriaValueText={handleFollowers}
              step={1}
              marks={followersCounter}
              valueLabelDisplay="on"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", p: "15px 5px" }}
          >
            <Button
              sx={{ p: "50px, 5px", m: " 0px 5px", background: "primary" }}
              variant="contained"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              sx={{ p: "50px, 5px", m: " 0px 5px", background: "#564FB1" }}
              variant="contained"
              onClick={handleApply}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Modal>
    </Stack>
  );
};

export default AdvanceFilter