import React from "react";
import { Stack, Box, Typography, Modal, Button, Radio } from "@mui/material";
import styled from "@emotion/styled";
import { BlueButton } from "@/components/styles/Buttons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "94%",
  maxWidth: "519px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderColor: "0px solid transparent",
  borderRadius: "6px",
  p: "23px",
  maxHeight: "600px",
  overflowX: "auto",
};

const TitleText = styled(Typography)(({ theme }) => ({
  color: "rgba(29, 28, 31, 0.80)",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "24px",
}));

const TimeText = styled(Typography)(({ theme }) => ({
  color: "rgba(75, 70, 92, 0.80)",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "24px",
}));

const options = [
  {
    title: "Express Delivery",
    time: "90 min express delivery",
    price: "$23.8",
  },
  {
    title: "Morning",
    time: "8.00 AM - 11.00 AM",
    price: "$10.0",
  },
  {
    title: "Evening",
    time: "5.00 PM - 8.00 PM",
    price: "$08.00",
  },
  {
    title: "Express Delivery",
    time: "90 min express delivery",
    price: "Free Delivery",
  },
];

const SelectOneModal = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: { xs: "auto", sm: "auto", md: "100%" } }}>
          <Typography variant="body1" color="#4B465C" sx={{ mb: "11.4px" }}>
            Select One
          </Typography>

          {options?.map((option, index) => (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                mb: "30px",
                border: "1px solid #DBDADE",
                bgcolor: "#F8F7FA",
                p: "14px",
              }}
            >
              <Box>
                <TitleText>{option?.title}</TitleText>
                <TimeText>{option?.time}</TimeText>
              </Box>
              <Stack direction="row" alignItems="center" gap="30px">
                <Typography
                  variant="body1"
                  color="#289D67"
                  sx={{ fontWeight: "600" }}
                >
                  {option?.price}
                </Typography>
                <Radio />
              </Stack>
            </Stack>
          ))}
          <BlueButton sx={{width: '100%', bgcolor: '#00318B', height: '45px !important'}}>
            Done
          </BlueButton>
        </Box>
      </Modal>
    </div>
  );
};

export default SelectOneModal;
