"use client";
import {
  Stack,
  Box,
  Typography,
  TextField,
  InputLabel,
  Card,
  Avatar,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import { BlueButton, ResetButton } from "../styles/Buttons";
import img from "@/assets/images/avatar7.png";
import styled from "@emotion/styled";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
  opacity: ".9",
}));

const PostCard = () => {
  return (
    <Card
      sx={{
        p: "24px",
        bgcolor: "white",
        width: "100%",
        maxHeight: {lg: '601px', xl:"461px"},
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <Stack
        direction="row"
        gap={{ xs: "14px", sm: "26px" }}
        sx={{ mt: "17px" }}
      >
        <Avatar
          alt="Image"
          src={img.src}
          sx={{
            width: { xs: "53px", sm: "82px" },
            height: { xs: "53px", sm: "82px" },
          }}
        />
        <Stack direction="column" justifyContent="end">
          <Stack direction="row" sx={{ mb: "10px" }}>
            <BlueButton
              variant="contained"
              sx={{
                mr: { xs: "9px", sm: "20px" },
                bgcolor: "#00318B",
                height: { xs: "29px", sm: "38px" },
                fontSize: { xs: "12px", sm: "15px" },
                padding: {xs: "0px 4px", sm:'5px 10px'}
              }}
            >
              Upload Profile Picture
            </BlueButton>
            <ResetButton
              variant="secondary"
              sx={{
                height: { xs: "29px", sm: "38px" },
                fontSize: { xs: "14px", sm: "15px" },
              }}
            >
              Reset
            </ResetButton>
          </Stack>
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 400,
              lineHeight: "20px",
              color: "#4B465C",
              maxWidth: "332px",
            }}
          >
            Allowed JPG, GIF or PNG. Max size of 800K
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ mt: "32px" }}>
        <form>
          <Stack
            direction={{lg: 'column', xl:"row"}}
            justifyContent="space-between"
            alignItems="center"
            gap={{ xl: "100px" }}
          >
            <Box sx={{ width: "100%" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  Name*
                </CustomLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="John"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    sx: {
                      height: "38px !important",
                    },
                  }}
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    maxWidth: "622px",
                    borderRadius: "6px",
                  }}
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  Country
                </CustomLabel>
                <Select
                  id="outlined-basic"
                  placeholder="Select Status"
                  variant="outlined"
                  value="UAE"
                  displayEmpty
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    bgcolor: "#F6F6F6",
                    height: "38px",
                    borderRadius: "6px",
                    color: "#4B465C",
                    fontSize: { xs: "12px", sm: "16px" },
                    "& .MuiSelect-root": {
                      color: "#757575",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Status
                  </MenuItem>
                  <MenuItem value="UAE">UAE</MenuItem>
                </Select>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  Contact No
                </CustomLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="07-09-1995"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    sx: {
                      height: "38px !important",
                    },
                  }}
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    maxWidth: "622px",
                    borderRadius: "6px",
                  }}
                />
              </Stack>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  Date Of Birth
                </CustomLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="Social Company"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    sx: {
                      height: "38px !important",
                    },
                  }}
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    maxWidth: "622px",
                    borderRadius: "6px",
                  }}
                />
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  State
                </CustomLabel>
                <Select
                  id="outlined-basic"
                  placeholder="Select Status"
                  variant="outlined"
                  value="Sharjah"
                  displayEmpty
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    height: "38px",
                    borderRadius: "6px",
                    color: "#4B465C",
                    bgcolor: "#F6F6F6",
                    fontSize: { xs: "12px", sm: "16px" },
                    "& .MuiSelect-root": {
                      color: "#757575",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select Status
                  </MenuItem>
                  <MenuItem value="Sharjah">Sharjah</MenuItem>
                </Select>
              </Stack>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ mt: "20px" }}
              >
                <CustomLabel
                  id="demo-simple-select-label"
                  sx={{ mb: { xs: "7px", sm: "0px" } }}
                >
                  Email
                </CustomLabel>
                <TextField
                  id="outlined-basic"
                  placeholder="07-09-1995"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    sx: {
                      height: "38px !important",
                    },
                  }}
                  sx={{
                    width: { xs: "100%", md: '80%', lg: "70%", xl: "75%" },
                    maxWidth: "622px",
                    borderRadius: "6px",
                  }}
                />
              </Stack>
            </Box>
          </Stack>
        </form>
      </Box>

      <Stack
      direction='row'
      justifyContent='end'
      gap='21px'
      alignItems='center'
      sx={{
        mt: '30px'
      }}
      >
      <Button
      sx={{
          borderRadius: '6px',
          background: '#DEDEDE',
          boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
          color: '#737373',
          textTransform: 'capitalize',
          fontSize: '15px'
      }}
      >
          Edit
      </Button>
        <BlueButton sx={{bgcolor: '#00318B'}}>
            Save
        </BlueButton>
      </Stack>
    </Card>
  );
};

export default PostCard;
