"use client";
import { CustomDivider } from "@/components/styles/CustomDivider";
import styled from "@emotion/styled";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";


const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#4B465C",
  fontWeight: 600,
  lineHeight: "30px",
  textTransform: "capitalize",
}));

const HeadText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: "#4B465C",
  fontWeight: 500,
  lineHeight: "20px",
}));

const ListText = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    color: "#6F6B7D",
    fontWeight: 500,
    lineHeight: "20px",
  }));

const ExperienceCard = ({data, isLicenseCard}) => {
  return (
    <Card
      sx={{
        px: "30px",
        py: "22px",
        mb: '26px',
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <CardTitle>{data?.cardTitle}</CardTitle>
      {data?.data?.map((val, index) => (
        <>
            <Box sx={{mt: '17px'}}>
            <HeadText>
            {val?.title1}
            </HeadText>
            <ListText sx={{marginTop: "5px"}}>
            {val?.title2}
            </ListText>
            <HeadText sx={{opacity: '.7', marginTop: "5px"}}>
            {val?.title3}
            </HeadText>
            {isLicenseCard &&
              <Button variant="outlined" sx={{
                width: '150px',
                height: '30px',
                border: '1px solid #00318B',
                color: '#00318B',
                bgcolor: 'transparent',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '20px',
                textTransform: 'capitalize',
                mt:'10px'
              }}>
                Show credentials
              </Button>
            }
        </Box>
        {!isLicenseCard && <CustomDivider sx={{my: '20px '}} /> }
        </>
      ))}
    </Card>
  );
};

export default ExperienceCard;
