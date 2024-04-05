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