"use client";
import React from "react";
import { CustomCard } from "../styles/Card";
import { Box, CardContent, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import eventImg from "@/assets/images/eventsImg.png";
import styled from "@emotion/styled";
import { FaLocationDot } from "react-icons/fa6";

const TitleText = styled(Typography)(({ theme }) => ({
  color: "#4E4D4D",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "33px",
}));

const DescText = styled(Typography)(({ theme }) => ({
  color: "#797979",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "22px",
}));

const LocText = styled(Typography)(({ theme }) => ({
  color: "#AEAEAE",
  fontSize: "15px",
  fontWeight: 400,
  lineHeight: "24px",
}));

const CardItem = () => {
  return (
    <CustomCard sx={{ p: "18px 15px", maxHeight: '505px' }}>
      <Box sx={{ width: "100%", height: "227px" }}>
        <Image
          alt="img"
          src={eventImg}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <CardContent sx={{ p:0 }}>
        <TitleText sx={{mt:'10px'}}>Event name here</TitleText>
        <DescText sx={{ mt: "10px" }}>
          It is a long established fact that a reader will istracted by the
          readable content of a page looking at its layout.
        </DescText>
        <Divider sx={{ mt: "20px", mb: "10px" }} />

        <Stack direction="row" alignItems="start" gap="14px">
          <FaLocationDot fontSize="18px" color="#AEAEAE" />
          <LocText>
            Main dubai down town, burj khalifa 2nd floor, Samba lounge
          </LocText>
        </Stack>
        <Divider sx={{ mt: "8px", mb: "13px" }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="10px"
        >
          <Stack direction="row" alignItems="center" gap="6px">
            <Typography
              variant="body1"
              color="#4B465C"
              sx={{ opacity: ".9", fontSize: "15px" }}
            >
              Event Date:
            </Typography>
            <Typography
              variant="body1"
              color="#4B465C"
              sx={{ opacity: ".7", fontSize: "15px" }}
            >
              12/05/24
            </Typography>
          </Stack>
          <Typography variant="body1" color="#289D67" sx={{ fontSize: "15px" }}>
            Active
          </Typography>
        </Stack>
      </CardContent>
    </CustomCard>
  );
};

export default CardItem;
