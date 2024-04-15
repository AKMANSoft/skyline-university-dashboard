'use client'
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const CustomRowStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}));