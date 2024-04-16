"use client";
import { Stack, Box, Typography, TextField, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import { AddCompanyCard } from "../styles/Card";
import { BlueButton, ResetButton } from "../styles/Buttons";
import Image from "next/image";
import img from "@/assets/images/company-img.png";
import styled from "@emotion/styled";

const AddCardOne = () => {
  const CardTitle = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 600,
    lineHeight: "30px",
    color: "#4B465C",
  }));

  const CustomLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "16px",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    color: "#4B465C",
  }));

  return (
    <AddCompanyCard sx={{ padding: "20px", width: { sm: "100%", md: "50%" } }}>
      <CardTitle>Basic Details</CardTitle>
      <Stack
        direction="row"
        gap={{ xs: "14px", sm: "26px" }}
        sx={{ mt: "17px" }}
      >
        <Box
          sx={{
            width: { xs: "53px", sm: "81.8px" },
            height: { xs: "53px", sm: "81.8px" },
            borderRadius: "50%",
            background: "#D9D9D9",
          }}
        >
          <Image
            src={img}
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Stack direction="column" justifyContent="end">
          <Stack direction="row" sx={{ mb: "10px" }}>
            <BlueButton
              variant="contained"
              sx={{
                mr: { xs: "9px", sm: "20px" },
                bgcolor: "#00318B",
                height: { xs: "29px", sm: "38px" },
                fontSize: { xs: "14px", sm: "15px" },
              }}
            >
              Upload Company Logo
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

      <Box sx={{ mt: "30px" }}>
        <form>
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
                width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
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
              Industry
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="It Company"
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
                width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
                maxWidth: "622px",
                borderRadius: "6px",
              }}
            />
              <Select
              id="outlined-basic"
              placeholder="Select Status"
              variant="outlined"
              value="Sharjah"
              sx={{
                  width: '155px',
                  height: '38px',
                  borderRadius: '6px',
                  color: '#4B465C',
                  '& .MuiOutlinedInput-notchedOutline': {
                      // borderColor: '#DBDADE',
                  },
                  '& .MuiSelect-root': {
                      color: '#757575',
                  },
              }}
          >
              <MenuItem value="" selected>Select Status</MenuItem>
              <MenuItem value="Active" selected>Active</MenuItem>
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
              Founding Date
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
                width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
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
              Website URL
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="7563 4592 4863 9328"
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
                width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
                maxWidth: "622px",
                borderRadius: "6px",
              }}
            />
          </Stack>
        </form>
      </Box>
    </AddCompanyCard>
  );
};

export default AddCardOne;
