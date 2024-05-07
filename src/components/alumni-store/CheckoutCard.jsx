import React from "react";
import { CustomCard } from "../styles/Card";
import {
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LiaFlagUsaSolid } from "react-icons/lia";
import styled from "@emotion/styled";

import usaImg from "@/assets/icons/usa.png"
import Image from "next/image";
import { CustomDivider } from "../styles/CustomDivider";
import OrderDetailListTable from "./OrderDetailListTable";
import TotalAssets from "./TotalAssets";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
}));

const styles = {
  width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
  borderRadius: "6px",
};

const CheckoutCard = () => {
  return (
    <CustomCard sx={{ p: "24px" }}>
      <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "18px", fontWeight: 600, color: "#4B465C" }}
      >
        Delivery Details
      </Typography>
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
              Contact No*
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="+1 (999) 514-1666"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image priority src={usaImg} alt="flag-img"/>
                  </InputAdornment>
                ),
                sx: {
                  height: "38px !important",
                },
              }}
              sx={styles}
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
              Billing Address
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="Here"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "38px !important",
                },
              }}
              sx={styles}
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
              Shipping Address*
            </CustomLabel>
            <TextField
              id="outlined-basic"
              placeholder="Here"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "38px !important",
                },
              }}
              sx={styles}
            />
          </Stack>
        </form>
        <CustomDivider sx={{mt: '30px'}} />

        <Typography
        component="div"
        variant="p"
        sx={{ fontSize: "18px", fontWeight: 600, color: "#5D596C", my: '24px' }}
      >
        Order details
      </Typography>

      <OrderDetailListTable />
      <TotalAssets />
    </CustomCard>
  );
};

export default CheckoutCard;
