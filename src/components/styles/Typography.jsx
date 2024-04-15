'use client'
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Paragraph = styled(Typography)(({ theme }) => ({
    color: '#000', 
    fontSize: '16px', 
    fontWeight: 400, 
    lineHeight: '25px', 
}))

export const CompanyTitle = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '24px',
}))

export const CompanySubTitle = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '22px',
}))

export const CountryTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    color: '#1E1E1E'
}))

export const CardText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    lineHeight: '24px',
    color: '#4B465C'
}))

export const CompanyJobText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    lineHeight: '20px',
    color: '#4B465C'
}))