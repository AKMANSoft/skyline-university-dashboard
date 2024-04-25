import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import {
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { IoIosLock } from "react-icons/io";
import styled from "@emotion/styled";
import { BlueButton } from "../styles/Buttons";
import OrderPlacedModal from "./modals/OrderPlacedModal";

const styles = {
  width: "100%",
  borderRadius: "6px",
};

const CustomTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-root": {
    borderRadius: "8px",
  },
  "& .MuiTab-root": {
    color: "#00318B",
    fontSize:{xs:'14px',sm: "16px"},
    textTransform: "capitalize",
    maxHeight: "48px",
    minHeight: "38px",
    padding: "5px 13px",
  },
  "& .Mui-selected": {
    backgroundColor: "#00318B",
    color: "white !important",
    borderRadius: "50px",
    borderBottom: "none !important",
  },
}));

const PaymentMethodCard = () => {
  const [value, setValue] = useState("1");
  const[openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <OrderPlacedModal open={openModal} handleClose={handleCloseModal} />
    <CustomCard sx={{ p: {xs:'19px',sm:"24px"} }}>
      <Typography
        component="div"
        variant="p"
        sx={{
          fontSize: "18px",
          color: "#4B465C",
          fontWeight: 600,
          lineHeight: "30px",
        }}
      >
        Payment Method
      </Typography>

      <TabContext value={value}>
        <Box
          sx={{
            width: "100%",
            width: {xs:'100%',sm:"331px"},
            height: "48px",
            mt:'17px',
            p: "4px",
            border: "1px solid #00318B",
            borderRadius: "50px",
          }}
        >
          <CustomTabs
            value={value}
            onChange={handleChange}
            indicatorColor={""}
            aria-label="lab API tabs example"
          >
            <Tab sx={{width: '50%'}} label="Cash on Delivery" value="1" />
            <Tab sx={{width: '50%'}} label="Credit / Debit Card" value="2" />
          </CustomTabs>
        </Box>
        <TabPanel value="1" sx={{ p: 0 }}>
          <TextField
            id="outlined-basic"
            placeholder="Card Number"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IoIosLock color="#4B465C" opacity=".7" />
                </InputAdornment>
              ),
              sx: {
                height: "38px !important",
              },
            }}
            sx={{ ...styles, mt: "30px" }}
          />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="27px"
          >
            <TextField
              id="outlined-basic"
              placeholder="Expiration Date (MM/YY)"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "38px !important",
                },
              }}
              sx={{ ...styles, mt: "30px" }}
            />
            <TextField
              id="outlined-basic"
              placeholder="Security Code"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                sx: {
                  height: "38px !important",
                },
              }}
              sx={{ ...styles, mt: "30px" }}
            />
          </Stack>

          <FormControlLabel
            control={<Checkbox />}
            sx={{
              fontSize: "15px",
              color: "#rgba(75, 70, 92, 0.60)",
              mt: "20px",
            }}
            label="Billing address is same as shipping."
          />
        </TabPanel>
        <TabPanel value="2">Credit / Debit Card</TabPanel>
      </TabContext>
      <BlueButton
        sx={{
          width: "100%",
          bgcolor: "#00318B",
          borderRadius: "160px",
          height: "45px !important",
          mt: "33px",
          fontSize: "16px",
          "&:hover": {
            bgcolor: "#00318B",
            color: 'white',
          }
        }}
        onClick={handleOpenModal}
      >
        Pay $6450
      </BlueButton>
    </CustomCard>
    </>
  );
};

export default PaymentMethodCard;
