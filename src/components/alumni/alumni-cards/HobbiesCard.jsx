"use client";
import { CustomDivider } from "@/components/styles/CustomDivider";
import styled from "@emotion/styled";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { TbEdit } from "react-icons/tb";


const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#4B465C",
  fontWeight: 600,
  lineHeight: "30px",
  textTransform: "capitalize",
}));

const ListText = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    color: "#6F6B7D",
    fontWeight: 500,
    lineHeight: "20px",
  }));

const HobbiesCard = () => {
  return (
    <Card
      sx={{
        px: "30px",
        py: "22px",
        mb: '26px',
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <CardTitle>Hobbies</CardTitle>
        <TbEdit color="#4B465C" fontSize='22px' cursor='pointer' />
      </Stack>
      <ListText>
        Video Games - Football - Cricket - Travelling.
      </ListText>
    </Card>
  );
};

export default HobbiesCard;
