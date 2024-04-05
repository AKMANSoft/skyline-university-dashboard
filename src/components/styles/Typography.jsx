'use client'
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Paragraph = styled(Typography)(({ theme }) => ({
    color: '#000', 
    fontSize: '16px', 
    fontWeight: 400, 
    lineHeight: '25px', 
}))