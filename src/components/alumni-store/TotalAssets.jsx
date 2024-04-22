import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const OptionText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#5D596C",
  fontWeight: "400",
  lineHeight: "22px",
}));

const ValueText = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  color: "#5D596C",
  fontWeight: "500",
  lineHeight: "20px",
}));

const TotalAssets = () => {
  return (
    <Stack direction="row" justifyContent="end" sx={{ p: "24px", pr: "40px" }}>
      <Box sx={{ width: "160px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <OptionText>Subtotal</OptionText>
          <ValueText>$6398</ValueText>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <OptionText>Discount</OptionText>
          <ValueText>$22</ValueText>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <OptionText>Tax</OptionText>
          <ValueText>$30</ValueText>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <OptionText>Total</OptionText>
          <ValueText>$6450</ValueText>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TotalAssets;
