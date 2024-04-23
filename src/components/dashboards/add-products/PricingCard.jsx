"use client";
import { CustomCard } from "@/components/styles/Card";
import { AntPrimarySwitch } from "@/components/styles/Switch";
import styled from "@emotion/styled";
import {
  Stack,
  TextField,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  InputLabel,
} from "@mui/material";
import React from "react";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "13px",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    color: "#5D596C",
  }));

const PricingCard = () => {
  return (
    <CustomCard sx={{ p: "24px", mt: '25px'}}>
      <Typography variant="body1" color="#5D596C" sx={{ fontSize: "18px" }}>
        Product Information
      </Typography>
      <form>
        <Box sx={{ mt: "25px" }}>
          <CustomLabel id="demo-simple-select-label" sx={{ mb: "5px" }}>
            Base Price
          </CustomLabel>
          <TextField
            id="outlined-basic"
            placeholder="Price"
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
              width: "100%",
              borderRadius: "6px",
            }}
          />
        </Box>
        <FormGroup sx={{ mt: "27px" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Charge tax on this product"
          />
        </FormGroup>
        <Divider sx={{mt:'8px', mb:'17px'}} />
        <Stack direction='row' alignItems='center' justifyContent='space-between' gap='1rem' sx={{width: {xs:'100%',md:'50%'}}}>
            <Typography variant="body1" color="#5D596C" sx={{fontSize:'15px'}}>
            In stock
            </Typography>
            <AntPrimarySwitch checked={true} />
        </Stack>
      </form>
    </CustomCard>
  );
};

export default PricingCard;
