'use client'
import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const CompanyCard = styled(Card)(({ theme }) => ({
    width: '10%%',
    minWidth: '400px',
    height: 'auto',
    // aspectRatio: '2.167',
    borderRadius: '6px',
    background: 'var(--Light-Solid-Color-Extra-Card-Background, #FFF)',
    boxshadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
    padding: '24px 0px'
}));


export const AddCompanyCard = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
})) 