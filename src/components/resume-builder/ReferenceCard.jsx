"use client";
import React, { useState } from "react";
import { CustomCard } from "../styles/Card";
import { ResumeBuilderText, ResumeBuilderTitle } from "../styles/Typography";
import { Box, Checkbox, FormControlLabel, InputLabel, Stack } from "@mui/material";
import { BlueButton } from "../styles/Buttons";
import TextFieldWraper from "./TextFieldWraper";
import AddMoreBtn from "../common/AddMoreBtn";
import styled from "@emotion/styled";
import TextFieldDate from "../mui/date-textfield/TextFieldDate";
import CustomTextArea from "../mui/textarea/CustomTextArea";

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: "16px",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: "#4B465C",
}));

const ReferenceCard = () => {

  return (
    <CustomCard sx={{ p: "22px 30px", minHeight: '945px' }}>
      <ResumeBuilderTitle>References</ResumeBuilderTitle>
      <ResumeBuilderText sx={{ mt: "3px" }}>
        Fill your details
      </ResumeBuilderText>
      <Box sx={{ mt: "25px" }}>
        <form>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Person Name"
              placeholder="John Michel"
            />
            <TextFieldWraper
              type="text"
              label="Title"
              placeholder="Dr"
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <TextFieldWraper
              type="text"
              label="Email Address / Phone Number"
              placeholder="John Michel"
            />
            <Box sx={{width: '100%'}}>
            </Box>
          </Stack>

          <AddMoreBtn />

          <BlueButton
            sx={{
              bgcolor: "#00318B",
              width: "75px",
              height: "38px",
              float: "right",
            }}
          >
            Next
          </BlueButton>
        </form>
      </Box>
    </CustomCard>
  );
};

export default ReferenceCard;
