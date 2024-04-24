'use client'
import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import uaeIcon from "@/assets/icons/uae.png"
import worldIcon from "@/assets/icons/worldIcon.png"
import styled from "@emotion/styled";

const CountryText = styled(Typography)(({theme}) => ({
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "22px",
    color: "#4B465C",
    opacity: '.9'
}))

const PercentageText = styled(Typography)(({theme}) => ({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#4B465C",
}))

const TotalText = styled(Typography)(({theme}) => ({
    fontSize: "13px",
    fontWeight: "700",
    lineHeight: "20px",
    color: "#4B465C",
    opacity: '.7'
}))

const ReviewCard = () => {
  return (
    <Card
      sx={{
        p: "20px",
        width: "100%",
        minHeight: "251px",
        height: "251px",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",
      }}
    >
      <Typography
        component="div"
        variant="p"
        sx={{
          fontSize: "13px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "#4B465C",
          opacity: '.7'
        }}
      >
        Total Jobs Applied
      </Typography>
      <Typography variant="body1" color="#4B465C" sx={{fontSize: '22px', fontWeight: 700, lineHeight: '30px'}}>
        210
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="10px"
        sx={{ mt: '20px' }}
      >
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            gap="6px"
            sx={{ mb: "11px" }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 207, 232, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
              }}
            >
              <Image alt="image" src={uaeIcon} />
            </Box>
            <CountryText>
              In UAE
            </CountryText>
          </Stack>
          <PercentageText sx={{mt: '11px'}}>
            60%
          </PercentageText>
          <TotalText>
            110
          </TotalText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Box
            sx={{
              width: "1px",
              height: "31px",
              bgcolor: "rgba(76, 78, 100, 0.12)",
            }}
          ></Box>
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6D788D",
              fontSize: "11px",
            }}
          >
            VS
          </Box>
          <Box
            sx={{
              width: "1px",
              height: "31px",
              bgcolor: "rgba(76, 78, 100, 0.12)",
            }}
          ></Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap="6px"
            sx={{ mb: "11px" }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 207, 232, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
              }}
            >
              <Image alt="image" src={worldIcon} />
            </Box>
            <CountryText>
            Outside UAE
            </CountryText>
          </Stack>
          <PercentageText sx={{textAlign: 'right', mt: '11px'}}>
            40%
          </PercentageText>
          <TotalText sx={{textAlign: 'right'}}>
            100
          </TotalText>
        </Box>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          height: "10px",
          width: "100%",
          mt: "17px",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "100%",
            bgcolor: "#00CFE8",
          }}
        ></Box>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            bgcolor: "#666CFF",
          }}
        ></Box>
      </Stack>
    </Card>
  );
};

export default ReviewCard;
