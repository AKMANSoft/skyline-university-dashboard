"use client";
import React from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import {
  Box,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(
  () => import('@/components/text-editor'),
  { ssr: false }
);
import { GoTrash } from "react-icons/go";

const AreaOfExpCard = () => {
  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>Area of Expertise</ResumeBuilderTitle>
      <Box sx={{ mt: "25px" }}>
        <form>
          <Box sx={{ mt: "24px" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: "16px 20px",
                borderRadius: "6px 6px 0px 0px",
                bgcolor: "rgba(75, 70, 92, 0.04)",
                border: "1px solid #DBDADE",
                borderBottom: "none",
              }}
            >
              <Typography
                variant="body1"
                color="#4B465C"
                sx={{ fontSize: "18px", fontWeight: 600 }}
              >
                Write Here
              </Typography>
            </Stack>
            <RichTextEditor />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: "16px 20px",
                mt: "40px",
                borderRadius: "0px 0px 6px 6px",
                bgcolor: "rgba(75, 70, 92, 0.04)",
                border: "1px solid #DBDADE",
                borderTop: "none",
              }}
            >
              <BlueButton sx={{ bgcolor: "#00318B", width: "78px" }}>
                Done
              </BlueButton>
              <GoTrash color="#4B465C" />
            </Stack>
          </Box>

          <BlueButton
            sx={{
              bgcolor: "#00318B",
              width: "75px",
              height: "38px",
              float: "right",
              mt: '23px',
            }}
          >
            Next
          </BlueButton>
        </form>
      </Box>
    </CustomCard>
  );
};

export default AreaOfExpCard;
