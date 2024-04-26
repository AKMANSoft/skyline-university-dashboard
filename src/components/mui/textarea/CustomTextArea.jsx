'use client'
import styled from '@emotion/styled';
import { Box, InputLabel, TextField } from '@mui/material'
import React from 'react'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "16px",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    color: "#4B465C",
  }));

const CustomTextArea = (props) => {
  return (
    <Box sx={{ mb: "15px", width: "100%" }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: "7px" }}>
              {props?.label}
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder={props?.placeholder}
              variant="outlined"
              type="textarea"
              multiline
              minRows={props?.minRows}
              maxRows={props?.maxRows}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{
                width: "100%",
                borderRadius: "6px",
              }}
            />
          </Box>
  )
}

export default CustomTextArea
