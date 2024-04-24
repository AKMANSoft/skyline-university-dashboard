'use client'
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BlueButton = styled(Button)(({ theme }) => ({
    color: 'white',
    bgcolor: '#00318B',
    height: '38px',
    fontSize: '15px',
    textTransform: 'capitalize',
  }));

export const ResetButton = styled(Button)(({ theme }) => ({
    color: '#AFAFAF',
    fontWeight: '500',
    padding: '10px 20px',
    fontSize: '15px',
    letterSpacing: '0.43px',
  }));

export const SuspendButton = styled(Button)(({ theme }) => ({
  bgcolor: "rgba(243, 16, 60, 0.15)",
  color: "#EA5455",
  fontSize: "15px",
  letterSpacing: "0.43px",
  textTransform: "capitalize",
}))


export const CustomButton = styled(Button)(({ theme }) => ({
  bgcolor: "rgba(0, 49, 139, 0.10)",
  borderRadius: "6px",
  color: "#00318B",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "capitalize",
  boxShadow: "none",
  "&:hover": {
    bgcolor: "rgba(0, 49, 139, 0.10)",
    boxShadow: "none",
  },
}));