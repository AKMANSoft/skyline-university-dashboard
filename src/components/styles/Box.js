'use client'
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ContentBox = styled(Box)(({ theme }) => ({
    width: 'calc(100% - 260px)',
    minHeight: '100vh',
    backgroundColor: '#F8F7FA',
    padding: "16px 24.5px",
  }));