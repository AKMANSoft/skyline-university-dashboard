"use client";
import styled from "@emotion/styled";
import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
}));

const SelectWraper = (props) => {
  return (
    <Box sx={{mb: '15px', width: '100%'}}>
      <CustomLabel
        id="demo-simple-select-label"
        sx={{ mb: "7px" }}
      >
        {props?.label}
      </CustomLabel>
      <Select
        id="outlined-basic"
        placeholder={props?.placeholder}
        onChange={props.handleChange}
        variant="outlined"
        value={props?.value}
        name={props?.name}
        displayEmpty
        sx={{
          width: "100%",
          height: "38px",
          borderRadius: "6px",
          color: "#4B465C",
          opacity: '.7',
          bgcolor: props?.value ? '#F6F6F6' : 'transparent',
          fontSize: { xs: "12px", sm: "16px" },
          "& .MuiSelect-root": {
            color: "#757575",
          },
        }}
      >
        <MenuItem value="" disabled>
            {props?.placeholder}
        </MenuItem>
        {props?.options?.map((option, index) => (
        <MenuItem key={index} value={option?.value}>{option?.label}</MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectWraper;
