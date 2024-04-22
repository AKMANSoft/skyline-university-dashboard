'use client'
import React from "react";
import { CustomCard } from "../styles/Card";
import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

const Circle = styled(Box)(({ theme }) => ({
  width: "52px",
  height: "52px",
  backgroundColor: "transparent",
  border: "4px solid #FF8A00",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CardItem = ({values}) => {
  return (
    <CustomCard sx={{ p: "24px", borderBottom: `2px solid ${values.borderColor}` }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {values.status ?
        <Box>
            <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "30px",
                color: "#4B465C",
              }}
            >
              {values?.total}
            </Typography>
          <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "22px",
                color: "#4B465C",
                opacity: '.9'
              }}
            >
              {values?.status}
            </Typography>
        </Box>
        :
        <Stack direction="row" alignItems="center" gap='10px'>
          <Circle>
            <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "22px",
                color: "#FF8A00",
              }}
            >
              {values?.total}
            </Typography>
          </Circle>
          <Typography
              component="div"
              variant="p"
              sx={{
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: "22px",
                color: "#5D586C",
              }}
            >
              Total Orders
            </Typography>
        </Stack>
        }
        <Image 
            src={values.icon}
            alt="icon image"
        />
      </Stack>
    </CustomCard>
  );
};

export default CardItem;
