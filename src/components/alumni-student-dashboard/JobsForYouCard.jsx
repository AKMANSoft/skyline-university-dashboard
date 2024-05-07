"use client";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import germanyIcon from "@/assets/icons/germany.png";
import { CustomCard } from "../styles/Card";
import CustomAvatar from "./CustomAvatar";
import { BlueButton, CustomButton } from "../styles/Buttons";
import StackBetweenWraper from "../common/StackBetweenWraper";
import Link from "next/link";

const jobs = [{}, {}, {}];

const JobsForYouCard = () => {
  return (
    <CustomCard
      sx={{
        p: { xs: "20px 25px", sm: "23px 30px" },
        mt: { xs: "0px", xl: "-270px" },
      }}
    >
      <Box sx={{ mb: "18px" }}>
        <StackBetweenWraper
          title="Jobs For You"
          btnText="View All Jobs"
          link={`/job-portal`}
        />
      </Box>

      {jobs?.map((job, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: "#F8F7FA",
            borderRadius: "6px",
            p: { xs: "1rem", sm: "20px" },
            mb: "20px",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <CustomAvatar name="Example Company" industry="Hotel Management" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap="13px"
              sx={{
                width: { xs: "93px", sm: "123px" },
                px: 1,
                height: "30px",
                borderRadius: "6px",
                bgcolor: "rgba(217, 217, 217, 0.50)",
              }}
            >
              <Image priority
                src={germanyIcon}
                alt="germany icon"
                style={{ width: "100%" }}
              />
            </Stack>
          </Stack>
          <Divider sx={{ mt: "15px", mb: "10px" }} />
          <Typography
            variant="body1"
            color="#000"
            sx={{ fontSize: "20px", fontWeight: 600, mb: "8px" }}
          >
            Manager - Front End Developer
          </Typography>
          <Typography variant="body1" color="#000" sx={{ lineHeight: "22px" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is distribution...{" "}
            <span style={{ color: "#00318B", cursor: "pointer", fontWeight:500 }}>
              Read more
            </span>
          </Typography>

          <Divider sx={{ mt: "10px", mb: "15px" }} />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="1rem"
          >
            <Stack direction="row" alignItems="center" gap="20px">
              <CustomButton
                sx={{
                  width: { xs: "78px", sm: "89px" },
                  height: "30px",
                  bgcolor: "rgba(0, 49, 139, 0.10)",
                  fontWeight: 500,
                  fontSize: {xs:'14px',sm:'16px'}
                }}
              >
                Full Time
              </CustomButton>
              <CustomButton
                sx={{
                  width: { xs: "70px", sm: "76px" },
                  height: "30px",
                  bgcolor: "rgba(0, 49, 139, 0.10)",
                  fontWeight: 500,
                  fontSize: {xs:'14px',sm:'16px'}
                }}
              >
                On Site
              </CustomButton>
            </Stack>
            <Link href={`/job-management/Dummy-Company`}>
              <BlueButton
                sx={{
                  bgcolor: "#00318B",
                  width: { xs: "100px", sm: "132px" },
                  height: "38px",
                  fontSize: { xs: "12px", sm: "16px" },
                  "&:hover": {
                    bgcolor: "#00318B",
                  }
                }}
              >
                View Details
              </BlueButton>
            </Link>
          </Stack>
        </Box>
      ))}
    </CustomCard>
  );
};

export default JobsForYouCard;
