"use client";
import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import bgImg from "@/assets/bg-dashboard.png";
import img from "@/assets/images/img6.png";
import Image from "next/image";

const BackgroundImageGrid = styled(Box)({
  width: "100%",
  height: "100%",
  background: `linear-gradient(72deg, #00318B 8.19%, #2C549E 95.26%), url(${bgImg.src}) lightgray 50% / cover no-repeat`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "30px",
  borderRadius: "10px",
  height: "251px",
  aspectRatio: "3.15",
  mixBlendMode: "multiply",
});

const Text = styled(Typography)({
  color: "#fff",
  fontWeight: 700,
  lineHeight: "22px",
});

const OverviewCard = () => {
  return (
    <BackgroundImageGrid>
      <Stack direction="row" gap="20px">
        <Box sx={{ width: "100%" }}>
          <Text sx={{ fontSize: "18px" }}>Overview</Text>
          <Text sx={{ fontSize: "14px" }}>
            Complete overview of job management
          </Text>
          <Stack
            direction="row"
            gap="15px"
            alignItems="center"
            sx={{ mt: "18px" }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                border: "4px solid #F7CA18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1A265C",
              }}
            >
              <Text sx={{ fontSize: "20px" }}>65</Text>
            </Box>
            <Text sx={{ fontSize: "15px" }}>Total Job Posted</Text>
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#244E9B",
              mt: "26px",
              mb: "24px",
            }}
          ></Box>
          <Stack direction="row" gap="59px" alignItems="center">
            <Stack direction="row" gap="8px" alignItems="center">
              <Box
                sx={{
                  width: "48px",
                  height: "30px",
                  bgcolor:
                    "linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1A265C",
                }}
              >
                <Text sx={{ fontSize: "15px" }}>65</Text>
              </Box>
              <Text
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "12px",
                    lg: "14px",
                    xl: "15px",
                  },
                }}
              >
                Total Applicants
              </Text>
            </Stack>
            <Stack direction="row" gap="8px" alignItems="center">
              <Box
                sx={{
                  width: "48px",
                  height: "30px",
                  bgcolor:
                    "linear-gradient(0deg, #234D9A 0%, #234D9A 100%), #7367F0",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1A265C",
                }}
              >
                <Text
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "12px",
                      lg: "14px",
                      xl: "15px",
                    },
                  }}
                >
                  40
                </Text>
              </Box>
              <Text sx={{ fontSize: "15px" }}>Total Shortlisted</Text>
            </Stack>
          </Stack>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
          }}
        >
          <Image priority
            src={img}
            alt="image"
            style={{
              width: "100%",
              minWidth: '200px',
              minHeight: '150px',
              objectFit: "contain",
            }}
          />
        </Box>
      </Stack>
    </BackgroundImageGrid>
  );
};

export default OverviewCard;
